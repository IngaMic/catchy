const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });
const compression = require("compression");
const db = require("./db.js");
const bc = require("./bc.js");
// const { sendEmail } = require("./ses");
const path = require("path");
// const { hash } = require("bcryptjs");
const cookieSession = require("cookie-session");
const cryptoRandomString = require("crypto-random-string");
const csurf = require("csurf");
const { s3Url } = require("./config.json");
const uidSafe = require("uid-safe");
const s3 = require("./s3.js");
const multer = require("multer");
const { brotliDecompress } = require("zlib");

app.use(compression());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//////////////////////////////////////////////////////////////////////////////////////
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

////////////////////////////////////////////////////////////////
// app.use(
//     cookieSession({
//         secret: `I'm always angry.`,
//         maxAge: 1000 * 60 * 60 * 24 * 14,
//     })
// );

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

app.use(csurf());

app.use(function (req, res, next) {
    //console.log("token : ", req.csrfToken());
    res.cookie("mytoken", req.csrfToken());
    next();
});
//////////////No changes here ////////////////////////////////////
const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152,
    },
});
////////////////////////////////////////////////////////////////////

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.post("/welcome", (req, res) => {
    //console.log("req.body :", req.body);
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    //console.log("first, last ...", first, last, email);
    let password = req.body.password;
    //console.log("password", password);
    let cd = req.body.cd;
    var pos = "receiver";
    if (cd == "") {
        cd = Math.floor(Math.random() * 90000) + 10000;
        pos = "sender";
    }
    bc.hash(password)
        .then((result) => {
            req.body.password = result;
            password = req.body.password;
            //console.log("password", password);
            db.getLogin(email)
                .then((result) => {
                    //console.log("result", result);
                    if (result.rows[0] && result.rows[0].id) {
                        //console.log("result", result);/////////////if somebody already registered with this email
                        console.log(
                            "Somebody already registered with this email"
                        );
                        res.json({
                            error: "Please try again",
                        });
                    } else {
                        if (
                            first === "" ||
                            last === "" ||
                            email === "" ||
                            password === ""
                        ) {
                            console.log(
                                "Not logging the registration data / empty"
                            );
                            res.json({
                                error: "Please try again",
                            });
                        } else {
                            db.registerUser(
                                first,
                                last,
                                email,
                                password,
                                cd,
                                pos
                            )
                                .then((result) => {
                                    var userId = result.rows[0].id;
                                    //console.log("userid", userid);
                                    req.session.userId = userId; //registeredId
                                    res.json({
                                        success: "success",
                                        userId,
                                    });
                                })
                                .catch((err) => {
                                    console.log(
                                        "trouble with inserting registerUser data",
                                        err
                                    ); //getting error: relation "usersdata" does not exist
                                    res.json({
                                        error: "Please try again",
                                    });
                                });
                        }
                    }
                })
                .catch((err) => {
                    console.log(
                        "err in checking if email already registered in Registration",
                        err
                    );
                    res.json({
                        error: "Please try again",
                    });
                });
        })
        .catch((err) => {
            console.log("hash() didn't work", err);
            res.json({
                error: "Please try again",
            });
        });
});
app.post("/login", (req, res) => {
    console.log("req.body :", req.body);
    var email = req.body.email;
    var password = req.body.password;
    console.log(" email and password", email, password);
    db.getLogin(email)
        .then((result) => {
            if (result) {
                console.log("result", result);
                var userId = result.rows[0].id;
                let pass = result.rows[0].password;
                // console.log("pass   ", pass);
                // console.log("password   ", password);
                bc.compare(password, pass)
                    .then((info) => {
                        console.log("info from compare", info);
                        if (info) {
                            //console.log("userId from here and now: ", userId);
                            req.session.userId = userId;
                            return res.json({
                                success: info,
                                userId: req.session.userId,
                            });
                        } else {
                            return res.json({
                                error: "Please try again",
                            });
                        }
                    })
                    .catch((err) => {
                        console.log("err in compare login", err);
                        return res.json({
                            error: "Please try again",
                        });
                    });
            }
            return;
        })
        .catch((err) => {
            console.log("err in getLogin", err);
            return res.json({
                error: "Please try again",
            });
        });
});
app.get("/user", (req, res) => {
    // console.log("req.session.userId", req.session.userId);
    if (req.session.userId) {
        let userId = req.session.userId;
        // console.log("userId from /user ", userId);
        db.getUser(userId)
            .then((info) => {
                var list = info.rows;
                // console.log("my list here   :", list);
                return res.json({
                    userId: list[0].id,
                    first: list[0].first,
                    last: list[0].last,
                    imageUrl: list[0].imageurl,
                    email: list[0].email,
                    cd: list[0].code,
                    pos: list[0].position,
                });
            })
            .catch((err) => {
                console.log("err in getUser index.js", err);
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.get("/usertwo", (req, res) => {
    // console.log("req.session.userId", req.session.userId);
    if (req.session.userId) {
        let userId = req.session.userId;
        //console.log("userId from /user ", userId);
        db.getUser(userId)
            .then((info) => {
                var list = info.rows;
                // console.log("my list here   :", list);
                var groupCd = list[0].code;
                db.getSecondUser(groupCd)
                    .then((data) => {
                        var list = data.rows;
                        for (var i = 0; i < list.length; i++) {
                            if (list[i].id != userId) {
                                return res.json({
                                    otherId: list[i].id,
                                    otherFirst: list[i].first,
                                    otherLast: list[i].last,
                                    otherImageUrl: list[i].imageurl,
                                    // email: list[i].email,
                                });
                            }
                        }
                    })
                    .catch((err) => {
                        console.log("err in getSecondUser index.js", err);
                    });
            })
            .catch((err) => {
                console.log("err in getUser index.js", err);
            });
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.post("/uploadimg", uploader.single("file"), s3.upload, (req, res) => {
    let userId = req.session.userId;
    let filename = req.file.filename;
    const url = `${s3Url}${filename}`;
    db.updateImage(url, userId)
        .then((info) => {
            // console.log("info after updateImage : ", info.rows[0].imageurl);
            return res.json({
                imageUrl: info.rows[0].imageurl,
                success: "success",
            });
        })
        .catch((err) => {
            console.log("trouble with updating /uploadimg", err);
        });
});
app.post("/uploaditem", uploader.single("file"), s3.upload, (req, res) => {
    //console.log("I am getting an /uploaditem req");
    //console.log("req.body :", req.body);
    const p = "pending";
    let filen = req.file.filename;
    const imageurl = `${s3Url}${filen}`;
    db.addItem(
        req.body.name,
        req.body.price,
        imageurl,
        req.body.cd,
        p,
        req.body.url
    )
        .then(({ rows }) => {
            console.log(" rows from addItem.then in index.js: ", rows);
            res.json({
                item: rows[0],
            });
        })
        .catch((err) => {
            console.log("err n addInfo index.js", err);
        });
});

app.get("/api/gallery", async (req, res) => {
    try {
        const { cd } = req.query;
        var userId = req.session.userId;
        var p = "pending";
        const { rows } = await db.getUser(userId);
        if (rows[0].position == "sender") {
            const { rows } = await db.getSenderPendingItems(cd, p);
            //console.log("rows after getting pending items for sender", rows);
            res.json({
                items: rows,
            });
        } else {
            const { rows } = await db.getReceiverPendingItems(cd, p);
            //console.log("rows after getting pending items for receiver", rows);
            res.json({
                items: rows,
            });
        }
    } catch (err) {
        console.log("err in getPendingItems get /gallery", err);
    }
});
app.get("/api/products", async (req, res) => {
    try {
        const { userInput } = req.query;
        var products = [];
        // if (!userInput) {
        //     const { rows } = await db.getSuggestedItems();
        //     products = rows;
        // }
        const { rows } = await db.getProducts(userInput);
        products = rows;
        res.json({
            products: products,
        });
    } catch (err) {
        console.log("err in getProducts get /products"), err;
    }
});
app.post("/addproduct", (req, res) => {
    const p = "pending";
    console.log("req.body : ", req.body);
    const { id, name, price, imageurl, cd, url } = req.body;
    console.log(" id name price imageurl cd", id, name, price, imageurl, cd);
    db.addItem(name, price, imageurl, cd, p, url)
        .then(({ rows }) => {
            console.log(" rows from addItem /addproduct: ", rows);
            res.json({
                item: rows[0],
            });
            // db.removeProduct(id)
            //     .then((info) => {
            //         console.log("info", info);
            //     })
            //     .catch((err) => {
            //         console.log("err in db.removeProduct index.js", err);
            //     });
        })
        .catch((err) => {
            console.log("err n addItem /addproduct", err);
        });
});
app.post("/api/accept/:id", async (req, res) => {
    try {
        var itemId = req.params.id;
        var logUserId = req.session.userId;
        const { rows } = await db.getUser(logUserId);
        var pos = rows[0].position;
        if (rows[0].position == "sender") {
            const { rows } = await db.addSenderReviewYes(itemId);
            res.json({
                item: rows[0],
                pos,
            });
        } else {
            const { rows } = await db.addReceiverReviewYes(itemId);
            // console.log("rows from accept/:id  :", rows);
            res.json({
                item: rows[0],
                pos,
            });
        }
    } catch (err) {
        console.log("err in post /say Yes"), err;
    }
});
app.post("/api/delete/:id", async (req, res) => {
    // console.log("I am getting a req delete");
    try {
        var itemId = req.params.id;
        var logUserId = req.session.userId;
        const { rows } = await db.getUser(logUserId);
        var pos = rows[0].position;
        if (rows[0].position == "sender") {
            const { rows } = await db.addSenderReviewNo(itemId);
            console.log("rows from delete/:id  :", rows);
            res.json({
                item: rows[0],
                pos,
            });
        } else {
            const { rows } = await db.addReceiverReviewNo(itemId);
            //console.log("rows from delete/:id  :", rows);
            res.json({
                item: rows[0],
                pos,
            });
        }
    } catch (err) {
        console.log("err in post /say No"), err;
    }
});

app.get("/api/matches/:cd", async (req, res) => {
    try {
        const { cd } = req.params;
        // console.log("req.params", req.params);
        // console.log("cd from the server", cd);
        // var userId = req.session.userId;
        var y = "yes";
        const { rows } = await db.getMatches(cd, y);
        // console.log("rows after getting matches", rows);
        res.json({
            items: rows,
        });
    } catch (err) {
        console.log("err in getMatches get /matches", err);
    }
});
app.get("/api/comments/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;
        // console.log("req.params", req.params);
        // console.log("itemId from the server", itemId);
        const { rows } = await db.getComments(itemId);
        //console.log("rows after getting comments", rows);
        res.json({
            comments: rows,
        });
    } catch (err) {
        console.log("err in getComments get /comments", err);
    }
});
app.post("/addcomment", (req, res) => {
    //console.log("I am getting a req to /addcomment");
    var logUserId = req.session.userId;
    db.addComment(logUserId, req.body.itemId, req.body.text)
        .then(({ rows }) => {
            console.log(" rows from addComment.then in index.js: ", rows);
            res.json({
                comment: rows[0],
            });
        })
        .catch((err) => {
            console.log("err n addComment index.js", err);
        });
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.get("*", function (req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
/////////////////////////////////////////////////////////////////////

app.listen(8080, function () {
    console.log("server is listening...");
});
//////////////////////////////////////////////////////////////////////

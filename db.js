const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL || "postgres:postgres:postgres@localhost:5432/log"
);

module.exports.registerUser = (first, last, email, password, cd, pos) => {
    return db.query(
        `
    INSERT INTO users (first, last, email, password, code, position)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id `,
        [first, last, email, password, cd, pos]
    );
};
module.exports.getUser = (userId) => {
    return db.query(
        `SELECT * FROM users 
    WHERE id = ($1)
    `,
        [userId]
    );
};
module.exports.getSecondUser = (cd) => {
    return db.query(
        `SELECT * FROM users 
    WHERE code = ($1)
    `,
        [cd]
    );
};
module.exports.getLogin = (email) => {
    return db.query(
        `
        SELECT * FROM users 
        WHERE email = ($1)`,
        [email]
    );
};
module.exports.updateImage = (imageUrl, userId) => {
    return db.query(
        `UPDATE users
    SET imageUrl = ($1)
    WHERE id = ($2) RETURNING *
    `,
        [imageUrl, userId]
    );
};

module.exports.addItem = (name, price, imageurl, code, p, url) => {
    return db.query(
        `
    INSERT INTO items (name, price, imageUrl, code, reviewone, reviewtwo, url)
    VALUES ($1, $2, $3, $4, $5, $5, $6) RETURNING id `,
        [name, price, imageurl, code, p, url]
    );
};

module.exports.getSenderPendingItems = (cd, p) => {
    return db.query(
        `SELECT * FROM items 
    WHERE code = ($1)
     AND reviewone = ($2)
    `,
        [cd, p]
    );
};
module.exports.getReceiverPendingItems = (cd, p) => {
    return db.query(
        `SELECT * FROM items 
    WHERE code = ($1)
     AND reviewtwo = ($2)
    `,
        [cd, p]
    );
};
module.exports.getMatches = (cd, y) => {
    return db.query(
        `SELECT * FROM items 
    WHERE code = ($1)
     AND reviewone = ($2)
     AND reviewtwo = ($2)
    `,
        [cd, y]
    );
};
module.exports.getProducts = (val) => {
    return db.query(
        `SELECT id, name, price, imageurl, url FROM products
         WHERE name ILIKE $1
        `,
        [val + "%"]
    );
};
module.exports.addSenderReviewYes = (itemId) => {
    return db.query(
        `UPDATE items
    SET reviewone = 'yes'
    WHERE id = ($1)
    RETURNING *
    `,
        [itemId]
    );
};
module.exports.addReceiverReviewYes = (itemId) => {
    return db.query(
        `UPDATE items
    SET reviewtwo = 'yes'
    WHERE id = ($1)
    RETURNING *
    `,
        [itemId]
    );
};
module.exports.addSenderReviewNo = (itemId) => {
    return db.query(
        `UPDATE items
    SET reviewone = 'no'
    WHERE id = ($1)
    RETURNING *
    `,
        [itemId]
    );
};
module.exports.addReceiverReviewNo = (itemId) => {
    return db.query(
        `UPDATE items
    SET reviewtwo = 'no'
    WHERE id = ($1)
    RETURNING *
    `,
        [itemId]
    );
};
module.exports.addComment = (userid, itemid, text) => {
    return db.query(
        `
    INSERT INTO comments (userid, itemid, message )
    VALUES ( $1, $2, $3) RETURNING * `,
        [userid, itemid, text]
    );
};
module.exports.getComments = (itemId) => {
    return db.query(
        `SELECT comments.id, first, last, imageurl, message FROM users
    JOIN comments
    ON users.id = comments.userid
    WHERE itemid = $1 
    ORDER BY comments.created_at DESC LIMIT 4`,
        [itemId]
    );
};
module.exports.removeProduct = (id) => {
    return db.query(
        `
        DELETE FROM products
        WHERE id = ($1)`,
        [id]
    );
};

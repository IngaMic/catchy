//////////////////////Pattern Matching in psql = ILIKE for db.js
import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
// import { socket } from "./socket";
import { useDispatch, useSelector } from "react-redux";
import { sayYes, sayNo } from "./actions";

const Gallery = () => {
    // const cInput = useRef();
    const dispatch = useDispatch();
    // const cd = useSelector((state) => state && state.cd); // for now it's hardcoded
    // const items = useSelector((state) => state.items);
    const [items, setItems] = useState([]);
    const [comment, setComment] = useState("");
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get("/api/gallery", {
                    params: { cd: "60784" }, //fix this here
                });
                // console.log("resp.data :", resp.data.items);
                setItems(resp.data.items);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
    }, [items]);

    const handleSubmit = (e, itemId) => {
        e.preventDefault();
        // console.log("comment : ", comment);
        // console.log("itemId :   ", itemId);
        axios
            .post("/addcomment", {
                text: comment,
                itemId,
            })
            .then(function (resp) {
                console.log("response from /addcomment in Gallery.js :", resp);
            })
            .catch(function (err) {
                console.log("error in axios post", err);
            });
        clearInput(e);
    };
    const handleChange = (e) => {
        console.log("HandleChange is reacting, e.target.value", e.target.value);
        setComment(e.target.value);
    };
    const clearInput = (e) => {
        console.log("e.target", e.target.children[1]);
        e.target.children[1].value = "";
    };
    //console.log("items : ", items);
    if (items.length == 0) {
        return <h2>The review list is empty</h2>;
    } else {
        return (
            <div className="pending-items">
                {items.map((item, i) => {
                    return (
                        <div className="pending-item" key={i}>
                            <img
                                id="pending-img"
                                src={item.imageurl}
                                alt="{item.name}"
                                width="300"
                                height="350"
                            ></img>
                            <p id="pending-text">
                                {item.name}_{item.price} euro
                            </p>

                            <button
                                id="no"
                                onClick={() => {
                                    dispatch(sayNo(item.id));
                                }}
                            >
                                No!
                            </button>

                            <button
                                id="yes"
                                onClick={() => {
                                    dispatch(sayYes(item.id));
                                }}
                            >
                                Yes!
                            </button>
                            <div className="add-comment">
                                <form
                                    onSubmit={(e) => handleSubmit(e, item.id)}
                                >
                                    <input
                                        type="hidden"
                                        value={item.id}
                                        name="itemId"
                                    />
                                    <input
                                        // ref={cInput}
                                        onChange={handleChange}
                                        type="text"
                                        name="text"
                                        placeholder="Comment"
                                    />
                                    <button>Add</button>
                                </form>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default Gallery;

//////////////////////Pattern Matching in psql = ILIKE for db.js
import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
// import { socket } from "./socket";
import { useDispatch, useSelector } from "react-redux";
import { sayYes, sayNo } from "./actions";

const Gallery = () => {
    const dispatch = useDispatch();
    // const cd = useSelector((state) => state && state.cd); // for now it's hardcoded
    // const items = useSelector((state) => state.items);
    const [items, setItems] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        //console.log("useEffect is running!");//runs when the component mounts
        (async () => {
            try {
                const resp = await axios.get("/api/gallery", {
                    params: { cd: "60784" }, //fix this here
                });
                console.log("resp.data :", resp.data.items);
                setItems(resp.data.items);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
    }, []);
    // const keyCheck = (e) => {
    //     // console.log(" value : ", e.target.value);
    //     // console.log("key pressed  :", e.key);
    //     if (e.key === "Enter") {
    //         e.preventDefault();
    //         //console.log("our msg after key is pressed:", e.target.value);
    //         socket.emit("message", e.target.value);
    //         e.target.value = "";
    //     }
    // };
    console.log("items : ", items);
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
                                {item.name}_{item.price}
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
                        </div>
                    );
                })}
                {/* <div className="add-comment">
                    <textarea
                        placeholder="Add Your Comment Here!"
                        onKeyDown={keyCheck}
                    ></textarea>
                </div> */}
            </div>
        );
    }
};

export default Gallery;

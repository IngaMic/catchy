import React, { useState, useEffect } from "react";
import axios from "./axios";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import CommentLog from "./CommentLog";
export default function Matches({ cd }) {
    //console.log("cd from Matches.js element", cd);
    // let finalPrice = useSelector((state) => state.finalPrice);
    const [items, setItems] = useState([]);
    let [final, setFinal] = useState(0);
    // const [comments, setComments] = useState([]);
    useEffect(() => {
        //console.log("cd from Matches.js element 2", cd);
        //console.log("useEffect is running!");//runs when the component mounts
        (async () => {
            try {
                const resp = await axios.get(`/api/matches/${cd}`);
                //console.log("resp.data :", resp.data.items);
                setItems(resp.data.items);
                let final = 0;
                for (var index = 0; index < resp.data.items.length; index++) {
                    final += resp.data.items[index].price;
                    setFinal(final);
                }
                // console.log("final price  :", final);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
    }, []);
    if (!items) {
        return null;
    }
    const matches = (
        <div className="matches">
            {items.map((item) => (
                <div className="match" key={item.id}>
                    <img
                        id="match-img"
                        src={item.imageurl}
                        alt="{item.name}"
                        width="300"
                        height="350"
                    ></img>
                    <p id="match-text">
                        {item.name}_{item.price} eur
                    </p>
                    <CommentLog itemId={item.id} />
                </div>
            ))}
        </div>
    );
    return (
        <div id="hot">
            {!items.length && <div>No Matches Yet!</div>}
            {!!items.length && matches}
            {final > 0 && (
                <div className="final-price">
                    <p>Price of all items together : {final} euro</p>
                </div>
            )}
        </div>
    );
}

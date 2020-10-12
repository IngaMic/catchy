import React, { useState, useEffect } from "react";
import axios from "./axios";
export default function CommentLog({ itemId }) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        //console.log("useEffect is running in CommentsLog!"); //runs when the component mounts
        (async () => {
            try {
                //console.log("itemId from Comments Log :", itemId);
                const resp = await axios.get(`/api/comments/${itemId}`);
                //console.log("resp.data :", resp.data.comments);
                setComments(resp.data.comments);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
    }, []);
    if (!comments) {
        return null;
    }
    let cmnts = (
        <div className="item-comments">
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img
                        id="comment-img"
                        src={comment.imageurl}
                        alt="{comment.first}"
                        width="60"
                        height="60"
                    ></img>
                    <p id="commenter">
                        {comment.first} _ {comment.message}
                    </p>
                </div>
            ))}
        </div>
    );
    return (
        <div id="comments-container">
            {!comments.length && <div>No Comments</div>}
            {!!comments.length && cmnts}
        </div>
    );
}

import React, { useState, useEffect } from "react";
import axios from "./axios";
import AddItem from "./AddItem";
// import { Link } from "react-router-dom";
// import { ProgressPlugin } from "webpack";

const Search = ({ cd }) => {
    const [chosen, setChosen] = useState("");
    const [userInput, setUserInput] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (userInput) {
            (async () => {
                try {
                    //  console.log("userInput", userInput);
                    const resp = await axios.get("/api/products", {
                        params: { userInput: userInput },
                    });
                    console.log("resp.data :", resp.data.products);
                    setProducts(resp.data.products);
                } catch (err) {
                    console.log("err : ", err);
                }
            })();
        }
    }, [userInput, chosen]); //if we pass an empty [] as a 2ns arg - use effect will run only when the component mounts and never again

    // console.log("products : ", products);
    function handleChange(e) {
        //console.log("e.target.value : ", e.target.value);
        setUserInput(e.target.value);
    }
    function addToPending(e, id, name, price, imageurl, url) {
        console.log("e.target.value : ", e.target);
        console.log(
            "name price and imageurl, cd, url",
            name,
            price,
            imageurl,
            cd,
            url
        );
        e.preventDefault();
        axios
            .post("/addproduct", {
                id,
                name,
                price,
                imageurl,
                cd,
                url,
            })
            .then(function (resp) {
                console.log("resp.data.item.id", resp.data.item.id);
                setChosen(resp.data.item.id);
            })
            .catch(function (err) {
                console.log("error in axios post", err);
            });
    }
    if (products.length == 0) {
        return (
            <div>
                <div className="add-item-in-search">
                    <AddItem cd={cd} />
                </div>
                <div className="search-div">
                    <h4>Look for new items online:</h4>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="userInput"
                        autoComplete="off"
                        placeholder="type here"
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="add-item-in-search">
                    <AddItem />
                </div>
                <div className="search-div">
                    <h4>Look for new items online:</h4>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="userInput"
                        placeholder="type here"
                    />
                </div>
                <div className="all-products">
                    {products.map((product, i) => {
                        return (
                            <div className="product" key={i}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={product.url}
                                >
                                    <img
                                        id="product-img"
                                        src={product.imageurl}
                                        alt="{product.name}"
                                        width="200"
                                        height="250"
                                    ></img>
                                </a>
                                <p>{product.name}</p>
                                <p>{product.price} euro</p>
                                <button
                                    className="add-to-pending"
                                    onClick={(e) =>
                                        addToPending(
                                            e,
                                            product.id,
                                            product.name,
                                            product.price,
                                            product.imageurl,
                                            product.url
                                        )
                                    }
                                >
                                    Add to Wishlist
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Search;

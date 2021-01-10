import React from "react";
import axios from "./axios";

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("props :", props);
        this.state = {
            name: "",
            price: "",
            cd: "",
            file: "",
            userId: props.userId,
            error: false,
            // itemUploaderIsVisible: false,
        };
    }
    handleSbmt(e) {
        e.preventDefault();
        var formData = new FormData();
        //console.log("this.state before forming FormData :", this.state);
        formData.append("file", this.state.file);
        //console.log("this.file ", this.file);
        formData.append("name", this.state.name);
        formData.append("price", this.state.price);
        formData.append("url", this.state.url);
        formData.append("cd", this.props.cd);
        var that = this;
        console.log("formData before sending it", formData);
        axios
            .post("/uploaditem", formData)
            .then(function (resp) {
                console.log(resp);
                that.clearInput();
                // console.log("e.target", e.target);
                // console.log("e.target.children", e.target.children);
                // e.target.children.value = "";
            })
            .catch(function (err) {
                console.log("error in axios post", err);
            });
    }
    clearInput() {
        var inputs = document.querySelectorAll("input");
        // console.log("inputs[0]  : ", inputs[0]);
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    handleChange(e) {
        //console.log("HandleChange is reacting, e.target.value", e.target);
        const target = e.target;
        if (!e.target.files) {
            const { name, value } = target;
            this.setState(
                {
                    [name]: value,
                },
                () => {
                    console.log("this.state", this.state);
                }
            );
        } else {
            this.setState({ file: e.target.files[0] });
        }
    }
    render() {
        return (
            <div id="item-uploader">
                <h4>Add item to your review list:</h4>
                <form
                    id="item-upload-form"
                    autoComplete="off"
                    onSubmit={(e) => this.handleSbmt(e)}
                >
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                        name="name"
                        placeholder="*title"
                    />
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="number"
                        name="price"
                        placeholder="*price"
                    />
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                        name="url"
                        placeholder="url"
                    />
                    <label htmlFor="file">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                        >
                            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                        </svg>
                        <span>Upload Picture</span>
                    </label>
                    <input
                        // id="uploader-input"
                        className="inputfile"
                        onChange={(e) => this.handleChange(e)}
                        type="file"
                        name="file"
                        accept="image/*"
                    />

                    <button className="submit">Submit</button>
                </form>
            </div>
        );
    }
}

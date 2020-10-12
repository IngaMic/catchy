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
        console.log("this.state before forming FormData :", this.state);
        formData.append("file", this.state.file);
        console.log("this.file ", this.file);
        formData.append("name", this.state.name);
        formData.append("price", this.state.price);
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
                {/* <h1 className="x" onClick={this.props.closeItemUploader}>
                    x
                </h1> */}
                <form
                    id="item-upload-form"
                    onSubmit={(e) => this.handleSbmt(e)}
                >
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                        name="name"
                        placeholder="title"
                    />
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="number"
                        name="price"
                        placeholder="price"
                    />
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="file"
                        name="file"
                        accept="image/*"
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

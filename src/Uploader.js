import React from "react";
import axios from "./axios";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        console.log("props :", props);
        this.state = {
            file: "",
            userId: props.userId,
            error: false,
            uploaderIsVisible: false,
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("file", this.state.file);
        axios
            .post("/uploadimg", formData)
            .then((resp) => {
                console.log(
                    "response from formData after imageUrl uploaded",
                    resp.data.imageUrl
                );
                console.log("props", this.props);
                this.props.setImage(resp.data.imageUrl);
                this.props.closeUploader(e);
            })
            .catch(function (err) {
                console.log(
                    "error in axios post /uploadimg in Uploader.js",
                    err
                );
            });
    }
    handleChange(e) {
        this.setState({ file: e.target.files[0] }, () => {
            console.log("this.state", this.state);
        });
    }
    render() {
        return (
            <div id="uploader">
                <form id="uploader-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <svg
                        className="photoUploader"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                    >
                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="uploadText">Upload Picture</span>
                    <input
                        className="inputfile"
                        onChange={(e) => this.handleChange(e)}
                        type="file"
                        name="file"
                        accept="image/*"
                    />
                    <button className="submit">Submit</button>
                </form>
                <button className="upX" onClick={this.props.closeUploader}>
                    x
                </button>
            </div>
        );
    }
}

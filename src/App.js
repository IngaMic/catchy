import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Profile from "./Profile";
import Matches from "./Matches";
import Uploader from "./Uploader";
import AddItem from "./AddItem";
import Search from "./Search";
/////////////////////////////////////////////////////////////

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            cd: "",
            pos: "",
            file: "",
            logUserId: null,
            otherId: "",
            otherFirst: "",
            otherLast: "",
            otherImageUrl: "",
            uploaderIsVisible: false,
            // itemUploaderIsVisible: false,
            error: false,
        };
    }
    componentDidMount() {
        axios.get("/user").then((resp) => {
            this.setState({
                logUserId: resp.data.userId,
                first: resp.data.first,
                last: resp.data.last,
                imageUrl: resp.data.imageUrl,
                cd: resp.data.cd,
                pos: resp.data.pos,
            });
        });
        axios.get("/usertwo").then((resp) => {
            this.setState({
                otherId: resp.data.otherId,
                otherFirst: resp.data.otherFirst,
                otherLast: resp.data.otherLast,
                otherImageUrl: resp.data.otherImageUrl,
            });
        });
    }
    showUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: true });
    }
    closeUploader(e) {
        e.preventDefault();
        this.setState({ uploaderIsVisible: false });
    }
    setImage(imageUrl) {
        this.setState({ imageUrl: imageUrl });
    }
    render() {
        if (!this.state.logUserId) {
            return null;
        }
        return (
            <div>
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>

                <BrowserRouter>
                    <div className="flex">
                        <div className="logo">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-bookmark-heart"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                                />
                            </svg>
                        </div>
                        <div className="links">
                            <div className="profile-link">
                                <Link className="active" to="/">
                                    Profile
                                </Link>
                            </div>
                            <div className="search-link active">
                                <Link className="active" to="/products">
                                    Add
                                </Link>
                            </div>
                            {/* <div className="upload-item-link">
                                <Link className="active" to="/uploaditem">
                                    Upload
                                </Link>
                            </div> */}
                            <div className="gallery-link">
                                <Link to="/gallery">Review</Link>
                            </div>
                            <div className="matches-link">
                                <Link to="/matches">Matches</Link>
                            </div>
                            <div className="logout-link">
                                <a href="/logout">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Profile
                                    logUserId={this.state.logUserId}
                                    first={this.state.first}
                                    last={this.state.last}
                                    imageUrl={this.state.imageUrl}
                                    cd={this.state.cd}
                                    pos={this.state.pos}
                                    otherId={this.state.otherId}
                                    otherFirst={this.state.otherFirst}
                                    otherLast={this.state.otherLast}
                                    otherImageUrl={this.state.otherImageUrl}
                                    clickHandler={() =>
                                        this.setState({
                                            uploaderIsVisible: true,
                                        })
                                    }
                                    // setImage={(imageUrl) => {
                                    //     this.setImage(imageUrl);
                                    // }}
                                    // closeUploader={() => {
                                    //     this.setState({
                                    //         uploaderIsVisible: false,
                                    //     });
                                    // }}
                                />
                            )}
                        />

                        <Route
                            exact
                            path="/products"
                            render={() => <Search cd={this.state.cd} />}
                        />

                        <Route
                            exact
                            path="/gallery"
                            render={() => <Gallery cd={this.state.cd} />}
                        />

                        <Route
                            exact
                            path="/matches"
                            render={() => <Matches cd={this.state.cd} />}
                        />

                        <Route
                            exact
                            path="/uploaditem"
                            render={() => <AddItem cd={this.state.cd} />}
                        />
                    </div>
                </BrowserRouter>
                <div>
                    {this.state.uploaderIsVisible && (
                        <Uploader
                            imageUrl={this.state.imageUrl}
                            setImage={(imageUrl) => {
                                this.setImage(imageUrl);
                            }}
                            userId={this.state.logUserId}
                            closeUploader={() => {
                                this.setState({ uploaderIsVisible: false });
                            }}
                        />
                    )}
                </div>
                <div>
                    {this.state.itemUploaderIsVisible && (
                        <AddItem
                            userId={this.state.userId}
                            closeItemUploader={() => {
                                this.setState({ itemUploaderIsVisible: false });
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
}

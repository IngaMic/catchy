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
    // showItemUploader(e) {
    //     e.preventDefault();
    //     this.setState({ itemUploaderIsVisible: true });
    // }
    render() {
        if (!this.state.logUserId) {
            return null;
        }
        return (
            <div>
                <h3>Logo</h3>
                {/* {this.state.userId && (
                    <Profile
                        userId={this.state.userId}
                        first={this.state.first}
                        last={this.state.last}
                        imageUrl={this.state.imageUrl}
                    />
                )} */}
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>

                <BrowserRouter>
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
                                />
                            )}
                        />
                        <div className="profile-link">
                            <Link to="/">Profile</Link>
                        </div>
                        <Route
                            exact
                            path="/products"
                            render={() => <Search cd={this.state.cd} />}
                        />
                        <div className="search-link">
                            <Link to="/products">Search for New Items</Link>
                        </div>
                        <Route exact path="/gallery" component={Gallery} />
                        <div className="gallery-link">
                            <Link to="/gallery">List of Pending Items</Link>
                        </div>
                        <Route
                            exact
                            path="/matches"
                            render={() => <Matches cd={this.state.cd} />}
                        />
                        <div className="matches-link">
                            <Link to="/matches">Matches</Link>
                        </div>
                        <Route
                            exact
                            path="/uploaditem"
                            render={() => <AddItem cd={this.state.cd} />}
                        />
                        <div className="upload-item-link">
                            <Link to="/uploaditem">Upload Item</Link>
                        </div>
                    </div>
                </BrowserRouter>
                <div>
                    {this.state.uploaderIsVisible && (
                        <Uploader
                            imageUrl={this.state.imageUrl}
                            setImage={(imageUrl) => {
                                this.setImage(imageUrl);
                            }}
                            userId={this.state.userId}
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
                    <div className="logout-link">
                        <a href="/logout">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

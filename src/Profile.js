import React from "react";
//import axios from "./axios";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            imageUrl: "",
            file: "",
            cd: "",
            userId: null,
            error: false,
        };
        // this.closeEditor = this.closeEditor.bind(this);
    }
    componentDidMount() {
        this.setState({
            userId: this.props.userId,
        });
    }
    render() {
        return (
            <div className="profiles">
                {this.props.logUserId && (
                    <div id="users-profile">
                        <img
                            onClick={this.props.clickHandler}
                            id="big-profile-img"
                            src={
                                this.props.imageUrl ||
                                "https://thumbs.dreamstime.com/b/thin-line-black-camera-logo-like-upload-your-photo-thin-line-black-camera-logo-like-upload-your-photo-graphic-art-design-element-106033006.jpg"
                            }
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <h4 id="name-surname">{this.props.first}</h4>
                        {/* <h3>This user is : {this.props.pos} </h3>
                        <h4 id="invitation-code">
                            Your invitation code is : {this.props.cd}
                        </h4> */}
                    </div>
                )}
                <div className="profile-middle">
                    {this.props.otherId && (
                        <h4>
                            Are you ready for some action?
                            <br />
                            <br />
                            You can upload items for your partner to view or
                            search for items online using the Add link at the
                            top right of the page.
                        </h4>
                    )}
                    {!this.props.otherId && (
                        <div id="no-other-users-profile">
                            <h4>Invite a partner to join you!</h4>
                            <h4 id="invitation-code">
                                Simply share your invitation code:
                                <br />
                                <br />
                                {this.props.cd}
                            </h4>
                        </div>
                    )}
                </div>
                {this.props.otherId && (
                    <div id="other-users-profile">
                        <img
                            id="big-profile-img"
                            src={
                                this.props.otherImageUrl ||
                                "data:image/png;base64,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"
                            }
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <h4 id="name-surname">{this.props.otherFirst}</h4>
                    </div>
                )}
                <div>
                    {this.state.error && (
                        <h4 className="err">Something Went Wrong!</h4>
                    )}
                </div>
            </div>
        );
    }
}

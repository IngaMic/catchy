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
            <div>
                {this.props.logUserId && (
                    <div id="users-profile">
                        <img
                            onClick={this.props.clickHandler}
                            id="big-profile-img"
                            src={
                                this.props.imageUrl ||
                                "https://image.flaticon.com/icons/svg/1338/1338020.svg"
                            }
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <h4 id="name-surname">
                            {this.props.first} _ {this.props.last}
                        </h4>
                        <h3>This user is : {this.props.pos} </h3>
                        <h4 id="invitation-code">
                            Your invitation code is : {this.props.cd}
                        </h4>
                    </div>
                )}
                {this.props.otherId && (
                    <div id="other-users-profile">
                        <img
                            id="big-profile-img"
                            src={
                                this.props.otherImageUrl ||
                                "https://image.flaticon.com/icons/svg/1338/1338020.svg"
                            }
                            alt=""
                            width="200"
                            height="250"
                        ></img>
                        <h4 id="name-surname">
                            {this.props.otherFirst} _ {this.props.otherLast}
                        </h4>
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

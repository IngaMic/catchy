import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export default function Welcome() {
    return (
        <div className="welcome">
            <div>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-bookmark-heart welcome-logo"
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
                <p className="welcome-logo-name">KOTI</p>
            </div>
            <div>
                <p className="desc">
                    New home? You two need KOTI.
                    <br />
                    <br />
                    Moving into a new home with someone can be exciting.
                    Agreeing on how that home should look though can often
                    be...challenging. Luckily we’re here to do the hard part for
                    you. KOTI is designed to help you find consensus with
                    whoever you might share a home with. Let’s get started...
                </p>
            </div>

            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}

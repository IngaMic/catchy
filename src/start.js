import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Welcome from "./Welcome";
import App from "./App";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let component;
// pathname actually has to be "/welcome":
if (location.pathname === "/welcome") {
    component = <Welcome />;
    // } else {
    //     component = <App />;
} else {
    component = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(component, document.querySelector("main"));

// ReactDOM.render(
//     <HelloWorld />,
//     document.querySelector('main')
// );

// function HelloWorld() {
//     return (
//         <div>Hello, World!</div>
//     );
// }

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {getPosts} from "./action/post.action";
import {getUser} from "./action/user.action";


const store = createStore(
    rootReducer,
    //Uniquement pour le development : affiche le store
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getPosts());
store.dispatch(getUser())

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root")
);

import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateNewMessageText={updateNewMessageText}
        />
    </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(state);
subscribe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
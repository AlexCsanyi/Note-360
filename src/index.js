import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAIU1KqCypli-XXVPgElaGtXM6yxTVzT0M",
  authDomain: "note-360.firebaseapp.com",
  databaseURL: "https://note-360.firebaseio.com",
  projectId: "note-360",
  storageBucket: "note-360.appspot.com",
  messagingSenderId: "948233902939",
  appId: "1:948233902939:web:e3e91cc39d8b336c"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("note-360"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

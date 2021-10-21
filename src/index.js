//var ReactDOM = require('react-dom');
import ReactDOM from "react-dom";

//import Switch from "./Components/Switch";
import Switch from "react-switch";
import "./index.css";
import React from "react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

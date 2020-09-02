
import React, { Component } from "react";
import ReactDOM from "react-dom";
const {List, handleAddCart} = require("./component/List")
import App from "./component/App";
const listProduts = new List()


ReactDOM.render(<App />, document.getElementById('churrosApp'));



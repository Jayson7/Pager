import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./components/HomePage/home";
import Navbar from "./components/Navbar/navbar";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);

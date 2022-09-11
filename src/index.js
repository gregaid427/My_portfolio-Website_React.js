import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

// import AllHome from "./pages/AllHome";

import Error from "./pages/error";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>

      <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
  
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebSkills(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-Skills


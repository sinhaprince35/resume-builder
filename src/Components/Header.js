import React from "react";
import img from "../Assets/logo2.svg";
import "./Style/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      <div className="title">
        <h1>Free <span>Resume</span> Builder</h1>
      </div>
    </div>
  );
};

export default Header;

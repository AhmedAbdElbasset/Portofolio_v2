import React, { useState } from "react";
import "./Header.css";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
const Header = () => {
  return (
    <div className="Head">
      <a  href ={'\#landing'} />
        <a  href={"\#about"}/>
        <a  href={"\#Skills"}/>
        <a  href={"\#Portfolio"}/>
        <a  href={"\#Contact"}/>
    </div>
  );
};

export default Header;

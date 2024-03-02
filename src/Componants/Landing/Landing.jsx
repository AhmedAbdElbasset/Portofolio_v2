import { useState } from "react";
import Header from "../Header/Header.jsx";
import Share from '../../assets/icons8-send-48.png'
import Logo from '../../assets/Logo.png'
import { motion } from "framer-motion";
import "./Landing.css";
function Landing() {
  return (
    <div className="landing" id="landing">
      <Header />
      <img src={Logo} alt=""  className="logo"/>
      <div className="Content" >
        <span> Hi! </span>
        <span>I'm Ahmed Abdelbaset</span>
        <a href="#Portfolio"> <img src={Share} alt="" /><p>work</p></a>
      </div>
    </div>
  );
}

export default Landing;

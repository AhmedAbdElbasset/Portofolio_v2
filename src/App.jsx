import { useState } from "react";
import Landing from "./Componants/Landing/Landing.jsx";
import About from "./Componants/about/About.jsx";
import Skills from "./Componants/Skills/Skills.jsx";
import Portofollio from "./Componants/Portofolio/Portofolio";
import "./index.css";
import {motion, AnimatePresence } from "framer-motion";
import Contact from "./Componants/Contact/Contact";
function App() {
  const [load, setLoad] = useState(true);
  window.onload = function () {
    setTimeout(()=>{
      setLoad(prevState=>!prevState)
    },2000)
  };
  return (
    <>
      {load ? (
        <AnimatePresence>
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </AnimatePresence>
      ) : (
        <>
          <Landing />
          <About  />
          <Skills />
          <Portofollio />
          <div className="Hire">
            <div className="text">
              <p>want to with me</p>
              <span>always feel free to contact & hire me</span>
            </div>
            <a href="">hire me</a>
          </div>
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

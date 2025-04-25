import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Achievement from "./Achievement";
import Skills from "./Skills";
import Footer from "./Footer";
import Main from "./Main";
import Ticker from "./Ticker";

import Education from "./Education";




const Home = () => {

 
    useEffect(() => {
      const targetId = localStorage.getItem("scrollTo");
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: "smooth" });
            localStorage.removeItem("scrollTo");
          }, 300);
        }
      }
    }, []);

  return (
   <div>
    <Main/>
    <Ticker />
    <About />
    <Education/>
    <Portfolio/>
    <Achievement/>
    <Skills/>
    <Footer/>
   </div>
    

    
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./About";
import Portfolio from "./Portfolio";
import Achievement from "./Achievement";
import Projects from "../pages/Projects";
import Handles from "../pages/Handles";
import Skills from "./Skills";
import Footer from "./Footer";
import Main from "./Main";
import Ticker from "./Ticker";



const Home = () => {
  return (
   <div>
    <Main/>
    <Ticker />
    <About />
   
    <Portfolio/>
    <Achievement/>
    {/* <Projects/>
    <Handles/> */}
    <Skills/>
    <Footer/>
   </div>
    

    
  );
};

export default Home;

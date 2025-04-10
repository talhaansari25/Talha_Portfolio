import React from 'react'
import { Link } from "react-router-dom";
import "../style.css";


const Main = () => {
    return (
        <section id="home" data-aos="fade-up">
          <div className="overlay"></div>
    
          {/* Navbar */}
          <nav className="nav">
            <Link to="/">
              <img src="/favicon/TA.png" alt="logo" className="logo" />
            </Link>
    
            <ul className="menu desktop-menu">
              <li>
                <Link to="/" className="menu-item hvr-underline-from-left active-page">HOME</Link>
              </li>
              <li>
                <a href="#about" className="menu-item hvr-underline-from-left">ABOUT</a>
              </li>
              <li>
                <a href="#portfolio" className="menu-item hvr-underline-from-left">PORTFOLIO</a>
              </li>
              <li>
                <Link to="/projects" className="menu-item hvr-underline-from-left">PROJECTS</Link>
              </li>
              <li>
                <a href="#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</a>
              </li>
              <li>
                <a href="#skills" className="menu-item hvr-underline-from-left">SKILLS</a>
              </li>
            </ul>
    
            {/* Toggle icon */}
            <i className="bi bi-list" id="toggle-menu"></i>
    
            {/* Mobile menu */}
            <div className="mobile-menu">
              <i className="bi bi-x" id="close-btn"></i>
              <ul className="menu menu-items">
                <li>
                  <Link to="/" className="hvr-underline-from-left item">HOME</Link>
                </li>
                <li>
                  <a href="#about" className="hvr-underline-from-left item">ABOUT</a>
                </li>
                <li>
                  <a href="#portfolio" className="hvr-underline-from-left item">PORTFOLIO</a>
                </li>
                <li>
                  <Link to="/projects" className="hvr-underline-from-left item">PROJECTS</Link>
                </li>
                <li>
                  <a href="#blogs" className="hvr-underline-from-left item">ACHIEVEMENTS</a>
                </li>
                <li>
                  <a href="#skills" className="hvr-underline-from-left item">SKILLS</a>
                </li>
              </ul>
            </div>
          </nav>
    
          {/* Hero Section */}
          <div className="hero">
            <div className="hero-items">
              <h3 className="hero-hello">Hello, I Am</h3>
              <h1 className="hero-name">MOHD TALHA ANSARI</h1>
              <a href="#about" className="hero-cta">
                KNOW MORE
                <i className="fa-solid fa-circle-chevron-right"></i>
              </a>
            </div>
          </div>
        </section>
        
        
      );
}

export default Main

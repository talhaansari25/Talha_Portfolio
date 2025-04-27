import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../style.css";

// ✅ Import images
import logo from "/favicon/TA.png";
import heroImg from "/images/talha.jpg";

const Main = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <section id="home" data-aos="fade-up">
            <div className="overlay"></div>

            {/* Navbar */}
            <nav className="nav">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>

                <ul className="menu desktop-menu">
                    <li>
                        <Link to="/" className="menu-item hvr-underline-from-left active-page">HOME</Link>
                    </li>
                    <li><a href="#about" className="menu-item hvr-underline-from-left">ABOUT</a></li>
                    <li><a href="#portfolio" className="menu-item hvr-underline-from-left">PORTFOLIO</a></li>
                    <li><Link to="/projects" className="menu-item hvr-underline-from-left">PROJECTS</Link></li>
                    <li><a href="#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</a></li>
                    <li><a href="#skills" className="menu-item hvr-underline-from-left">SKILLS</a></li>
                </ul>

                {/* Toggle icon */}
                <i
                    className="bi bi-list"
                    id="toggle-menu"
                    onClick={toggleMobileMenu}
                ></i>

                {/* Mobile menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <i
                        className="bi bi-x"
                        id="close-btn"
                        onClick={closeMobileMenu}
                    ></i>
                    <ul className="menu menu-items">
                        <li><Link to="/" className="hvr-underline-from-left item" onClick={closeMobileMenu}>HOME</Link></li>
                        <li><a href="#about" className="hvr-underline-from-left item" onClick={closeMobileMenu}>ABOUT</a></li>
                        <li><a href="#portfolio" className="hvr-underline-from-left item" onClick={closeMobileMenu}>PORTFOLIO</a></li>
                        <li><Link to="/projects" className="hvr-underline-from-left item" onClick={closeMobileMenu}>PROJECTS</Link></li>
                        <li><a href="#blogs" className="hvr-underline-from-left item" onClick={closeMobileMenu}>ACHIEVEMENTS</a></li>
                        <li><a href="#skills" className="hvr-underline-from-left item" onClick={closeMobileMenu}>SKILLS</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="hero">
                <div className="hero-items">
                    <h3 className="hero-hello">
                        <span className="wave-emoji">👋</span> Hello, I Am
                    </h3>
                    <h1 className="hero-name">
                        <span className="name-gradient">MOHD TALHA ANSARI</span>
                        <span className="cursor-animation"></span>
                    </h1>
                    <p className="hero-tagline">Full Stack Developer | ML Engineer </p>

                    <div className="hero-cta-container">
                        <a href="#about" className="hero-cta">
                            KNOW MORE
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </a>
                        <a href="mailto:talhaansari2026@gmail.com" className="hero-cta secondary">
                            HIRE ME
                            <i className="fa-solid fa-paper-plane"></i>
                        </a>

                    </div>

                    <div className="social-icons">

                        <a href="https://www.linkedin.com/in/talha-ansari-22189b1bb/" className="social-icon"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/talhaansari25" className="social-icon"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/_talhaansari__25/?hl=en" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="tel:+918625957764" className="social-icon"><i className="fa-solid fa-phone"></i></a>

                    </div>
                </div>

                <div className="hero-image-container" data-aos="fade-up">
                    <div className="image-wrapper">
                        <img
                            src={heroImg}
                            alt="talhaansari"
                            className="profile-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/150";
                            }}
                        />
                        <div className="image-border-animation"></div>
                        <div className="floating-dots">
                            {[...Array(12)].map((_, i) => (
                                <span key={i} className="dot" style={{
                                    '--delay': `${i * 0.2}s`,
                                    '--size': `${Math.random() * 6 + 4}px`,
                                    '--distance': `${Math.random() * 40 + 60}px`
                                }}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TALogo from '/favicon/TA.png';

// Project images
import ocrImg from '/images/ocr.png';
import addCompImg from '/images/add comp.jpeg';
import categoryDetectionImg from '/images/category , subcategory detection.jpeg';
import mainImg from '/images/main.png';
import sumImg from '/images/sum.png';
import listImg from '/images/list.png';
import spImg from '/images/sp.png';
import sdImg from '/images/sd.png';
import suImg from '/images/su.png';
import muImg from '/images/mu.png';
import bpImg from '/images/bp.png';
import userDashboardImg from '/images/User Dashboard.jpeg';
import adminDashboardImg from '/images/Admin Dashboard.jpeg';
import welcomePageImg from '/images/Welcome Page.jpeg';
import singleShipmentImg from '/images/Single Shipment Upload.jpeg';
import multipleShipmentsImg from '/images/Multiple Shipments Upload (CSV).jpeg';
import homePageImg from '/images/Home Page.jpeg';
import coursePageImg from '/images/Course Page.jpeg';
import aiCounsellorImg from '/images/AI Based Counsellor.jpeg';
import assessmentGenImg from '/images/Assesment Generation.jpeg';
import summaryImg from '/images/summary.jpeg';
import one from '/images/comp.jpg';
import two from '/images/allcomp.jpg';
import three from '/images/admin.jpg';
import four from '/images/status.jpg';
import five from '/images/email.jpg';


const Projects = () => {
  useEffect(() => {


    
      // Force a re-render after component mounts to fix mobile rendering issues
      const timer = setTimeout(() => {
        setIsLoading(false);
        initializeCarousels();
      }, 100);
  
     
   
  
    // Initialize carousels with proper timing
    const initializeCarousels = () => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach(carousel => {
        // Destroy existing carousel if any
        const existingCarousel = window.bootstrap.Carousel.getInstance(carousel);
        if (existingCarousel) {
          existingCarousel.dispose();
        }
        
        // Initialize new carousel
        new window.bootstrap.Carousel(carousel, {
          interval: 2000,
          ride: 'carousel',
          pause: false,
        });
      });
    };
  

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      new window.bootstrap.Carousel(carousel, {
        interval: 2000,
        ride: 'carousel',
        pause: false,
      });
    });

    //  Mobile menu toggle
    const toggleMenuBtn = document.querySelector("#toggle-menu");
    const closeMenuBtn = document.querySelector("#close-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    const openMenu = () => {
      mobileMenu?.classList.add("active");
      overlay?.classList.add("active");
    };

    const closeMenu = () => {
      mobileMenu?.classList.remove("active");
      overlay?.classList.remove("active");
    };

    toggleMenuBtn?.addEventListener("click", openMenu);
    closeMenuBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);


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

    return () => {
      toggleMenuBtn?.removeEventListener("click", openMenu);
      closeMenuBtn?.removeEventListener("click", closeMenu);
      overlay?.removeEventListener("click", closeMenu);
    };
  }, []);




  return (
    <>


      <div className="overlay"></div>



      <nav className="nav">
      <Link to="/">
            <img src={TALogo} alt="Logo" className="logo" />
          </Link>

        <ul className="menu desktop-menu">
          <li><Link to="/" className="menu-item hvr-underline-from-left">HOME</Link></li>
          <li>
            <Link
              to="/"
              className="menu-item hvr-underline-from-left"
              onClick={() => localStorage.setItem("scrollTo", "about")}
            >
              ABOUT
            </Link>
          </li>
          <li><Link to="/handles" className="menu-item hvr-underline-from-left">PROFILES</Link></li>
          <li><Link to="/projects" className="menu-item hvr-underline-from-left active-page">PROJECTS</Link></li>
          <li>
            <Link
              to="/"
              className="menu-item hvr-underline-from-left"
              onClick={() => localStorage.setItem("scrollTo", "blogs")}
            >
              ACHIEVEMENTS
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="menu-item hvr-underline-from-left"
              onClick={() => localStorage.setItem("scrollTo", "skills")}
            >
              SKILLS
            </Link>
          </li>
        </ul>

        <i className="bi bi-list" id="toggle-menu"></i>

        <div className="mobile-menu">
          <i className="bi bi-x" id="close-btn"></i>
          <ul className="menu menu-items">
            <li><Link to="/" className="hvr-underline-from-left item">HOME</Link></li>
            <li>
              <Link
                to="/"
                className="hvr-underline-from-left item"
                onClick={() => localStorage.setItem("scrollTo", "about")}
              >
                ABOUT
              </Link>
            </li>
            <li><Link to="/handles" className="hvr-underline-from-left item">HANDLES</Link></li>
            <li><Link to="/projects" className="hvr-underline-from-left item active-page">PROJECTS</Link></li>
            <li>
              <Link
                to="/"
                className="hvr-underline-from-left item"
                onClick={() => localStorage.setItem("scrollTo", "blogs")}
              >
                ACHIEVEMENTS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hvr-underline-from-left item"
                onClick={() => localStorage.setItem("scrollTo", "skills")}
              >
                SKILLS
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="wrapper">
          {[
           {
            title: "Rail Sahayta",
            images: [ocrImg, addCompImg, categoryDetectionImg],
            description: `Rail Sahayta is an AI-Powered Grievance Management System for Indian Railways which is an enhanced version of Rail Madad using AI for smarter complaint handling.
It categorizes complains from text, images, audio & video using models like VGG16, YOLOv5, Mask RCNN, U-Net & PaddleOCR. Severity is auto-detected and routed for faster resolution.
Features include Hindi voice support, SOS alerts, predictive ARIMA-based issue tracking, and a chatbot powered by Gemma 2B and lot many more..
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/RailSahayta_SIH24"
          }, 
          {
            title: "NewsSnips",
            images: [mainImg, sumImg, listImg],
            description: `NewsSnips is a Global News Categorization & Summarization platform , A smart news application that categorizes and summarizes global news using NLP. Built with React.js for smooth UI, it uses TF-IDF & Cosine Similarity for summarization.
Features include real-time updates, custom keyword search, and interactive filtering for personalized news delivery.
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/NewsSnips"
          }, 
          {
            title: "Global Catalog Registry - GCR",
            images: [spImg, sdImg, suImg, muImg, bpImg],
            description: `A Centrailzed DataBase that Efficiently manages and organizes product catalogs from multiple sellers for seamless access and retrieval.
Global Catalog Registry (GCR) aims to streamline catalog management within the ONDC ecosystem.
It supports pre-built and custom templates, real-time dynamic data handling, and unique product identification, ensuring smooth seller onboarding and optimized e-commerce operations.
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/GCR-Global_Catalog_Registry"
          }, 
          {
            title: "UP Samadhan",
            images: [one, two, three, four, five],
            description: `UP Samadhan (IGRS) is an AI-powered complaint management platform built as advancement of IGRS, integrating Vision Transformers and classifiers to automate image-based and text based grievance categorization and prioritization. Built with React.js (frontend), Node.js/Express.js (backend), MongoDB, and Flask for ML integration—ensuring secure, regulation-compliants.
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/Logi-Comply"
          }, 
          {
            title: "LogiComply",
            images: [userDashboardImg, adminDashboardImg, welcomePageImg, singleShipmentImg, multipleShipmentsImg],
            description: `LogiComply is an AI-Powered Compliance Checker for Cross-Border Shipments , An intelligent system that validates international shipments using rule-based logic and ML models like XGBoost to detect anomalies and flag high-risk consignments.
Features include real-time dashboards, compliance analytics, and separate admin/user portals. Built with React.js (frontend), Node.js/Express.js (backend), MongoDB, and Flask for ML integration—ensuring secure, regulation-compliant logistics.
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/Logi-Comply"
          }, 
          {
            title: "IRIS",
            images: [homePageImg, coursePageImg, aiCounsellorImg, assessmentGenImg, summaryImg],
            description: `This AI-driven learning platform enhances student education by integrating automated assessments, AI-generated summaries, gamified coding challenges, and intelligent course recommendations.
Using Transformer T5 for lecture summarization and LLaVA for Q&A and assessments, the platform provides a personalized learning experience with instant feedback and interactive challenges.
Check out my work on GitHub!`,
            github: "https://www.github.com/talhaansari25/IRIS-AI_Powered_Educational_Platform-"
          }
        ].map((project, idx) => (
          <div className={idx % 2 === 0 ? "one" : "two"} key={idx}>
            <div className={idx % 2 === 0 ? "one-img" : "two-img"}>
              <div
                id={`carouselExample${idx}`}
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  {project.images.map((img, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <img
                        src={img}
                        className="d-block w-100"
                        alt={`Slide ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExample${idx}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExample${idx}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className={idx % 2 === 0 ? "one-text" : "two-text"}>
              <h3 className="title">{project.title}</h3>
              <p className="detail" style={{ whiteSpace: "pre-line" }}>
                {project.description}
              </p>
          <a 
  href={project.github} 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#2b3137', // GitHub's dark color
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    border: '2px solid #2b3137',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#2b3137';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#2b3137';
    e.currentTarget.style.color = 'white';
  }}
>
  View on GitHub &gt;
</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
};

export default Projects;
import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Projects = () => {
  return (
    <>
      <div className="custom__cursor__outer"></div>
      <div className="custom__cursor__inner"></div>

      <div className="overlay"></div>
      <nav className="nav">
        <a href="/index.html">
          <img src="/favicon/TA.png" alt="" className="logo" />
        </a>

        <ul className="menu desktop-menu">
          <li>
            <Link to="/" className="menu-item hvr-underline-from-left">HOME</Link>
          </li>
          <li>
            <Link to="/#about" className="menu-item hvr-underline-from-left">ABOUT</Link>
          </li>
          <li>
            <Link to="/handles" className="menu-item hvr-underline-from-left">PROFILES</Link>
          </li>
          <li>
            <Link to="/projects" className="menu-item hvr-underline-from-left active-page">PROJECTS</Link>
          </li>
          <li>
            <Link to="/#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</Link>
          </li>
          <li>
            <Link to="/#skills" className="menu-item hvr-underline-from-left">SKILLS</Link>
          </li>
        </ul>

        <i className="bi bi-list" id="toggle-menu"></i>
        <div className="mobile-menu">
          <i className="bi bi-x" id="close-btn"></i>
          <ul className="menu menu-items">
            <li className="menu-item">
              <a href="/index.html" className="hvr-underline-from-left item">HOME</a>
            </li>
            <li>
              <Link to="/#about" className="menu-item hvr-underline-from-left">ABOUT</Link>
            </li>
            <li className="menu-item">
              <a href="/projects" className="hvr-underline-from-left item">PROJECTS</a>
            </li>
            <li className="menu-item">
              <a href="/S_handle.html" className="hvr-underline-from-left item">HANDLES</a>
            </li>
            <li className="menu-item">
              <a href="/index.html#blogs" className="hvr-underline-from-left item">ACHIEVEMENTS</a>
            </li>
            <li className="menu-item">
              <a href="/index.html#skills" className="hvr-underline-from-left item">SKILLS</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="wrapper">
          {/* Repeatable Project Blocks */}
          {/* Copy the JSX from each project block below and update the content if needed */}

          {/* Example Project Block */}
          {[
            {
              title: "Rail Sahayta",
              images: ["ocr.png", "add comp.jpeg", "category , subcategory detection.jpeg"],
              description: `Rail Sahayta is an AI-Powered Grievance Management System for Indian Railways which is an enhanced version of Rail Madad using AI for smarter complaint handling.
It categorizes complains from text, images, audio & video using models like VGG16, YOLOv5, Mask RCNN, U-Net & PaddleOCR. Severity is auto-detected and routed for faster resolution.
Features include Hindi voice support, SOS alerts, predictive ARIMA-based issue tracking, and a chatbot powered by Gemma 2B and lot many more..
Check out my work on GitHub!`,
              github: "https://www.github.com/talhaansari25/RailSahayta_SIH24"
            },
            {
              title: "NewsSnips",
              images: ["main.png", "sum.png", "list.png"],
              description: `NewsSnips is a Global News Categorization & Summarization platform , A smart news application that categorizes and summarizes global news using NLP. Built with React.js for smooth UI, it uses TF-IDF & Cosine Similarity for summarization.
Features include real-time updates, custom keyword search, and interactive filtering for personalized news delivery.
Check out my work on GitHub!`,
              github: "https://www.github.com/talhaansari25/NewsSnips"
            },
            {
              title: "Global Catalog Registry - GCR",
              images: ["sp.png", "sd.png", "su.png", "mu.png", "bp.png"],
              description: `A Centrailzed DataBase that Efficiently manages and organizes product catalogs from multiple sellers for seamless access and retrieval.
Global Catalog Registry (GCR) aims to streamline catalog management within the ONDC ecosystem.
It supports pre-built and custom templates, real-time dynamic data handling, and unique product identification, ensuring smooth seller onboarding and optimized e-commerce operations.
Check out my work on GitHub!`,
              github: "https://www.github.com/talhaansari25/GCR-Global_Catalog_Registry"
            },
            {
              title: "LogiComply",
              images: [
                "User Dashboard.jpeg",
                "Admin Dashboard.jpeg",
                "Welcome Page.jpeg",
                "Single Shipment Upload.jpeg",
                "Multiple Shipments Upload (CSV).jpeg"
              ],
              description: `LogiComply is an AI-Powered Compliance Checker for Cross-Border Shipments , An intelligent system that validates international shipments using rule-based logic and ML models like XGBoost to detect anomalies and flag high-risk consignments.
Features include real-time dashboards, compliance analytics, and separate admin/user portals. Built with React.js (frontend), Node.js/Express.js (backend), MongoDB, and Flask for ML integration—ensuring secure, regulation-compliant logistics.
Check out my work on GitHub!`,
              github: "https://www.github.com/talhaansari25/Logi-Comply"
            },
            {
              title: "IRIS",
              images: [
                "Home Page.jpeg",
                "Course Page.jpeg",
                "AI Based Counsellor.jpeg",
                "Assesment Generation.jpeg",
                "summary.jpeg"
              ],
              description: `This AI-driven learning platform enhances student education by integrating automated assessments, AI-generated summaries, gamified coding challenges, and intelligent course recommendations.
Using Transformer T5 for lecture summarization and LLaVA for Q&A and assessments, the platform provides a personalized learning experience with instant feedback and interactive challenges.
Check out my work on GitHub!`,
              github: "https://www.github.com/talhaansari25/IRIS-AI_Powered_Educational_Platform-"
            }
          ].map((project, idx) => (
            <div className={idx % 2 === 0 ? "one" : "two"} key={idx}>
              <div className={idx % 2 === 0 ? "one-img" : "two-img"}>
                <div className="ccarousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {project.images.map((img, i) => (
                      <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                        <img src={`/images/${img}`} className="d-block" alt={`Slide ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={idx % 2 === 0 ? "one-text" : "two-text"}>
                <h3 className="title">{project.title}</h3>
                <p className="detail" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>

                <a href={project.github}>LINK &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: You can use useEffect to load any JS behavior like the cursor if required */}
    </>
  );
};

export default Projects;

import React from "react";
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
            <a href="/index.html" className="menu-item hvr-underline-from-left">HOME</a>
          </li>
          <li>
            <a href="/index.html#about" className="menu-item hvr-underline-from-left">ABOUT</a>
          </li>
          <li>
            <a href="/S_handle.html" className="menu-item hvr-underline-from-left">PROFILES</a>
          </li>
          <li>
            <a href="/projects" className="menu-item hvr-underline-from-left active-page">PROJECTS</a>
          </li>
          <li>
            <a href="/index.html#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</a>
          </li>
          <li>
            <a href="/index.html#skills" className="menu-item hvr-underline-from-left">SKILLS</a>
          </li>
        </ul>

        <i className="bi bi-list" id="toggle-menu"></i>
        <div className="mobile-menu">
          <i className="bi bi-x" id="close-btn"></i>
          <ul className="menu menu-items">
            <li className="menu-item">
              <a href="/index.html" className="hvr-underline-from-left item">HOME</a>
            </li>
            <li className="menu-item">
              <a href="/index.html#about" className="hvr-underline-from-left item">ABOUT</a>
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
              description: `Rail Sahayta is an AI-Powered Grievance Management System for Indian Railways...`,
              github: "https://www.github.com/talhaansari25/RailSahayta_SIH24"
            },
            {
              title: "NewsSnips",
              images: ["main.png", "sum.png", "list.png"],
              description: `NewsSnips is a Global News Categorization & Summarization platform...`,
              github: "https://www.github.com/talhaansari25/NewsSnips"
            },
            {
              title: "Global Catalog Registry - GCR",
              images: ["sp.png", "sd.png", "su.png", "mu.png", "bp.png"],
              description: `A Centralized Database that efficiently manages and organizes product catalogs...`,
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
              description: `LogiComply is an AI-Powered Compliance Checker for Cross-Border Shipments...`,
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
              description: `This AI-driven learning platform enhances student education by integrating automated assessments...`,
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
                <p className="detail">{project.description}</p>
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

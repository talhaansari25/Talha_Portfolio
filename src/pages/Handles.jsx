import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../handles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const socialHandles = [
  {
    title: "LINKEDIN",
    img: "LL.png",
    description: `LinkedIn is my go-to platform for career growth, networking, job searching and sharing professional updates.
    I use LinkedIn to showcase my skills, projects, activities and achievements to enhance my visibility & build credibility and connect with industry experts.
    Connect with me on LinkedIn!`,
    link: "https://www.linkedin.com/in/talha-ansari-22189b1bb/",
  },
  {
    title: "GITHUB",
    img: "gth.png",
    description: `GitHub is a platform where I actively share my projects, make repositories, and contribute through commits.
    I use it to collaborate, contribute to open source, improve my coding skills, and engage with the developer community.
    Check out my work on GitHub!`,
    link: "https://github.com/talhaansari25",
  },
  {
    title: "LEETCODE",
    img: "LC.png",
    description: `LeetCode is a platform where I enhance my problem-solving skills majorly in C++ by solving Data Structures & Algorithms problems.
    I've solved over 100+ problems across arrays, linked lists, backtracking, strings, and recursion etc.
    Explore my DSA journey on LeetCode!`,
    link: "https://www.leetcode.com/u/ImHcgBT7h2/",
  },
  {
    title: "UNSTOP",
    img: "us.webp",
    description: `Unstop is a platform where I participate in competitions and hackathons. These experiences allow me to tackle real-world challenges and sharpen my problem-solving abilities.
    Through team collaborations and industry interactions, I develop leadership, strategy, and networking skills.
    Follow my journey on Unstop!`,
    link: "https://www.unstop.com/u/talha2508",
  },
  {
    title: "INSTAGRAM",
    img: "Ist.png",
    description: `Instagram is my space for personal interests and casual content beyond my professional life.
    It’s where I share moments, hobbies, and experiences in a more relaxed way.
    Connect with me on Instagram!`,
    link: "https://www.instagram.com/_talhaansari__25/?hl=en",
  },
];

const Handles = () => {
  useEffect(() => {
    // ✅ Mobile menu toggle
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
          <img src="/favicon/TA.png" alt="Logo" className="logo" />
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
          <li><Link to="/handles" className="menu-item hvr-underline-from-left active-page">PROFILES</Link></li>
          <li><Link to="/projects" className="menu-item hvr-underline-from-left ">PROJECTS</Link></li>
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
            <li><Link to="/handles" className="hvr-underline-from-left item active-page">HANDLES</Link></li>
            <li><Link to="/projects" className="hvr-underline-from-left item">PROJECTS</Link></li>
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
          {socialHandles.map((handle, idx) => (
            <div className={idx % 2 === 0 ? "one" : "two"} key={idx}>
              <div className={idx % 2 === 0 ? "one-img" : "two-img"}>
                <img src={`/images/${handle.img}`} alt="project-thumbnail" />
              </div>
              <div className={idx % 2 === 0 ? "one-text" : "two-text"}>
                <h3 className="title">{handle.title}</h3>
                <p className="detail">{handle.description}</p>
                <a href={handle.link}>LINK &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Handles;

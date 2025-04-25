import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Handles from "./pages/Handles";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievement from "./components/Achievement";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
 
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from "./components/Main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    AOS.init({ once: true });
  
    let mouseX = 0, mouseY = 0, xp = 0, yp = 0;

    const handleMouseMove = (e) => {
      const inner = document.querySelector(".custom__cursor__inner");
      const outer = document.querySelector(".custom__cursor__outer");

      if (inner) {
        inner.style.transform = `translate(${e.clientX - 3.25}px, ${e.clientY - 3.25}px)`;
      }

      mouseX = e.clientX - 10;
      mouseY = e.clientY - 10;
    };

    const interval = setInterval(() => {
      const outer = document.querySelector(".custom__cursor__outer");
      xp += (mouseX - xp) / 6;
      yp += (mouseY - yp) / 6;

      if (outer) {
        outer.style.transform = `translateX(${xp - 15}px) translateY(${yp - 15}px)`;
      }
    }, 10);

    document.addEventListener("mousemove", handleMouseMove);

    // Preloader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const targetId = localStorage.getItem("scrollTo");
  if (targetId) {
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollTo");
      }, 300);
    }
  };

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <div id="preloader">
          <div className="loader">
            <img src="/TA.png" alt="logo" className="loader-logo" />
            <div className="loader_bar" id="loader_bar"></div>
          </div>
        </div>
      ) : (
        <>

          <ScrollToTop />
          {/* Custom Cursor */}
          <div className="custom__cursor__outer"></div>
          <div className="custom__cursor__inner"></div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/handles" element={<Handles />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

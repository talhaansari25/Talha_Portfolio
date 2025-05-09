import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { FaGraduationCap, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

 
  const educationData = [
    {
      id: 1,
      title: "Btech Computer Science (AIML)",
      institute: "G H Raisoni College Of Engineering and Management, Pune",
      date: "NOV 2022 - JUNE 2026",
      scoreLabel: "CGPA",
      scoreValue: "8.13"
    },
    {
      id: 2,
      title: "Class 12",
      institute: "Nutan Vidyamandir Jr. & Sr. College, Nashik",
      date: "JUNE 2020 - APRIL 2021",
      scoreLabel: "Percentage",
      scoreValue: "83.50%"
    }
  ];

  return (
    <section className="education-section" id="education" data-aos="fade-up">
      <div className="education-container">
        {/* Left Side */}
        <div className="education-left" data-aos="fade-right">
          <h2 className="education-heading">
            <FaGraduationCap className="education-icon" />
            Education
          </h2>
          <hr className="education-line" data-aos="fade-right" data-aos-delay="100" />
          <p className="education-subtext" data-aos="fade-right" data-aos-delay="200">
          The progression of my academic studies in Technology and AIML.
          </p>
        </div>

        {/* Right Side - Cards */}
        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div 
            key={edu.id}
            className="education-card"
            data-aos="fade-left"
            data-aos-delay={300 + (index * 100)}
          >
            <div className="card-left">
              <h3 className="card-title">{edu.title}</h3>
              <p className="card-institute">{edu.institute}</p>
              <p className="card-institute">{edu.school}</p>
              <p className="card-date">
                <FaCalendarAlt className="card-icon" />
                {edu.date}
              </p>
            </div>
            <div className="card-right">
              <p className="card-label">
                <FaUserGraduate /> {edu.scoreLabel}
              </p>
              <p className="card-value">{edu.scoreValue}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import React, { useEffect, useState } from "react";
import "../style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  // Skills data in JSON format
  const skillsData = [
    { name: "HTML", icon: "./icons/html-5.webp" },
    { name: "CSS", icon: "./icons/css-3.webp" },
    { name: "JavaScript", icon: "./icons/js.webp" },
    { name: "NodeJS", icon: "./icons/nodejs.webp" },
    { name: "ExpressJS", icon: "./icons/express.webp" },
    { name: "React.JS", icon: "./icons/react.webp" },
    { name: "MongoDB", icon: "./icons/mongo.webp" },
    { name: "C", icon: "./icons/c.webp" },
    { name: "C++", icon: "./icons/cpp.webp" },
    { name: "Python", icon: "./icons/python.webp" },
    { name: "Java", icon: "./icons/java.webp" },
    { name: "Git", icon: "./icons/git.webp" },
    { name: "GitHub", icon: "./icons/github.webp" },
    { name: "MySQL", icon: "./icons/mysql.webp" },
    { name: "Bootstrap", icon: "./icons/bootstrap.webp" },
    { name: "Tailwind", icon: "./icons/tailwind.webp" },
    { name: "Figma", icon: "./icons/figma.webp" },
    { name: "Canva", icon: "./icons/can.webp" },
    // { name: "Premier Pro", icon: "./icons/premiere.webp" }
  ];

  // Initialize animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <section id="skills" data-aos="fade-up">
      <div className="skills-container">
        <h3 className="skills-header">MY SKILLS</h3>
        <div className="skills-wrapper" data-aos="fade-up">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="skills-logo">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  loading="lazy"
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
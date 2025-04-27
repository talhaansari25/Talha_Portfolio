import React, { useEffect } from "react";
import "../style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all skill icons
import htmlIcon from "/icons/html-5.webp";
import cssIcon from "/icons/css-3.webp";
import jsIcon from "/icons/js.webp";
import nodeIcon from "/icons/nodejs.webp";
import expressIcon from "/icons/express.webp";
import reactIcon from "/icons/react.webp";
import mongoIcon from "/icons/mongo.webp";
import cIcon from "/icons/c.webp";
import cppIcon from "/icons/cpp.webp";
import pythonIcon from "/icons/python.webp";
import javaIcon from "/icons/java.webp";
import gitIcon from "/icons/git.webp";
import githubIcon from "/icons/github.webp";
import mysqlIcon from "/icons/mysql.webp";
import bootstrapIcon from "/icons/bootstrap.webp";
import tailwindIcon from "/icons/tailwind.webp";
import figmaIcon from "/icons/figma.webp";
import canvaIcon from "/icons/can.webp";

const Skills = () => {
  const skillsData = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "NodeJS", icon: nodeIcon },
    { name: "ExpressJS", icon: expressIcon },
    { name: "React.JS", icon: reactIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Java", icon: javaIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Canva", icon: canvaIcon },
  ];

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
        <h3 className="proficiency-heading">MY Technical SKILLS</h3>
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

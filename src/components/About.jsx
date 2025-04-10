import React from 'react';
import "../style.css";


const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-photo" data-aos="fade-up">
            <img src="images/pp.jpg" alt="talhaansari" />
          </div>
          <div className="about-text" data-aos="fade-up">
            <p className="my-story">My Breif Intro</p>
            <h2 className="who-am-i">Who am I?</h2>
            <div className="about-para">
              <p className="first-para">
                I’m Mohd Talha Ansari, a dedicated CSE (AI & ML) student passionate about MERN stack development, machine learning integration, and solving DSA problems in C++. I have experience building software using React, Node.js, MongoDB, Flask and Python, and I'm skilled in developing and integrating Database and robust APIs working within the MVC framework.
                <br />
                I have participated in 10+ national-level hackathons, including securing a Top 3 position at SIH 2024,
                Runner-Up at CodeChef's Blue Bit 2.0 Hackathon, and a Top 12 finish at IIT Bombay’s LogiThon Hackathon.
                <br />
                I'm currently serving as the Webmaster Officer at IEEE GHRCEM Pune, where I manage and update the website, promote events, and maintain technical content. I also lead technical initiatives, support knowledge sharing, and enhance industry-academia engagement within the community.
                <br />
                All in all, I'm a tech enthusiast pursuing a B.Tech in Computer Engineering with a focus on AI & ML at GH Raisoni College of Engineering & Management, Pune. I'm passionate about continuous learning and skill development.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1vV5XsFe0XPv6mmUCtTIDUaaxi0crPLXE/view?usp=sharing"
              className="resume-download-btn"
              download="MOHD-Talha-RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> DOWNLOAD MY RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

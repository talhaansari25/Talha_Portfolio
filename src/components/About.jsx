import React, { useState } from 'react';
import "../style.css";
import profilePhoto from "/images/pp.jpg";
const About = () => {
  const aboutData = {
    intro: {
      title: "My Brief Intro",
      heading: "Who am I?",
      paragraphs: [
        "I’m Mohd Talha Ansari, a dedicated CSE (AI & ML) student passionate about MERN stack development, machine learning integration, and solving DSA problems in C++. I have experience building software using React, Node.js, MongoDB, Flask and Python, and I'm skilled in developing and integrating Database and robust APIs working within the MVC framework.",
        "I have participated in 10+ national-level hackathons, including securing a Top 3 position at SIH 2024, Runner-Up at CodeChef's Blue Bit 2.0 Hackathon, and a Top 12 finish at IIT Bombay's LogiThon Hackathon.",
        "I'm currently serving as the Webmaster Officer at IEEE GHRCEM Pune, where I manage and update the website, promote events, and maintain technical content. I also lead technical initiatives, support knowledge sharing, and enhance industry-academia engagement within the community. All in all, I'm passionate about continuous learning and skill development."
      ]
    },
    resume: {
      url: "https://drive.google.com/file/d/1vV5XsFe0XPv6mmUCtTIDUaaxi0crPLXE/view?usp=sharing",
      fileName: "MOHD-Talha-RESUME.pdf",
      buttonText: "DOWNLOAD MY RESUME"
    }
  };

  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

  const handleReadMoreClick = () => {
    setIsReadMoreVisible(true);
  };

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-photo" data-aos="fade-up">
            <img src={profilePhoto} alt="talhaansari" />
          </div>
          <div className="about-text" data-aos="fade-up">
            <p className="my-story">{aboutData.intro.title}</p>
            <h2 className="who-am-i">{aboutData.intro.heading}</h2>
            <div className="about-para">
              {aboutData.intro.paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={`para-${index}`} className={index === 0 ? "first-para" : ""}>
                  {paragraph}
                  {index < 1 && <br />}
                </p>
              ))}
              {!isReadMoreVisible && (
                <button
                  onClick={handleReadMoreClick}
                  className="read-more-btn"
                >
                  Read More
                </button>
              )}
              {isReadMoreVisible && aboutData.intro.paragraphs.slice(2).map((paragraph, index) => (
                <p key={`para-${index + 2}`}>
                  {paragraph}
                  {index < aboutData.intro.paragraphs.length - 3 && <br />}
                </p>
              ))}
            </div>
            <a
              href={aboutData.resume.url}
              className="resume-download-btn"
              download={aboutData.resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> {aboutData.resume.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

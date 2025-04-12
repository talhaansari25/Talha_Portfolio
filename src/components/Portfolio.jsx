import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animation styles

const Portfolio = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'step-start',
      once: true
    });
  }, []);

  // Portfolio items data with individual animation configurations
  const portfolioItems = [
    {
      id: 1,
      className: "webdev",
      link: "/projects",
      iconClass: "fa-solid fa-code",
      title: "Projects",
      description: "My Development Portfolio",
      animation: "fade-up",
      delay: 100
    },
    {
      id: 2,
      className: "uiux",
      link: "/handles",
      iconClass: "github-logo fa-brands fa-github",
      title: "Social handles",
      description: "My Social Portfolio",
      animation: "fade-up",
      delay: 300
    }
  ];

  return (
    <section id="portfolio" data-aos="fade-up">
      <div className="portfolio-container">
        <div className="portfolio-wrapper">
          {portfolioItems.map(item => (
            <div 
              key={item.id} 
              className={item.className}
              data-aos={item.animation}
              data-aos-delay={item.delay}
            >
              <Link to={item.link} className="card-view">
                <i className={item.iconClass}></i>
                <div className="card-text">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-detail">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
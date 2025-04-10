import React from 'react';
import "../style.css";


const Portfolio = () => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <div className="portfolio-container">
        <div className="portfolio-wrapper">

          <div className="webdev">
            <a href="projects.html" target="_blank" className="card-view" rel="noopener noreferrer">
              <i className="fa-solid fa-code"></i>
              <div className="card-text">
                <h3 className="card-title">Projects</h3>
                <p className="card-detail">My Development Portfolio</p>
              </div>
            </a>
          </div>

          <div className="uiux">
            <a href="S_handle.html" target="_blank" className="card-view" rel="noopener noreferrer">
              <i className="github-logo fa-brands fa-github"></i>
              <div className="card-text">
                <h3 className="card-title">Social handles</h3>
                <p className="card-detail">My Social Portfolio</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;

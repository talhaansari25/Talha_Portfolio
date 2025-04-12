import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <section id="portfolio" data-aos="fade-up">
      <div className="portfolio-container">
        <div className="portfolio-wrapper">

          <div className="webdev">
            <Link to="/projects" className="card-view">
              <i className="fa-solid fa-code"></i>
              <div className="card-text">
                <h3 className="card-title">Projects</h3>
                <p className="card-detail">My Development Portfolio</p>
              </div>
            </Link>
          </div>

          <div className="uiux">
            <Link to="/handles" className="card-view">
              <i className="github-logo fa-brands fa-github"></i>
              <div className="card-text">
                <h3 className="card-title">Social handles</h3>
                <p className="card-detail">My Social Portfolio</p>
              </div>
            </Link>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;

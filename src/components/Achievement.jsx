import React, { useEffect } from "react";
import "../style.css";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Achievement = () => {
  useEffect(() => {
    new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <section id="blogs" data-aos="fade-up">
      <div className="blog-container swiper">
        <div className="blog-wrapper">
          <div className="blog-title">
            <h3 id="ac">MY ACHIEVEMENTS</h3>
          </div>

          <div className="slide-container swiper">
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                {/* Cards start */}
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img src="images/SIH.jpg" alt="" className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">SIH 2024 Grand Finale</h2>
                    <p className="description">
                      Top 3 teams at SIH 2024 under Ministry of Railways, facilitated by AICTE Vice Chairman
                    </p>
                    <a href="https://www.linkedin.com/posts/talha-ansari-22189b1bb_sih2024-smartindiahackathon-innovation-activity-7275529423381024768-VbLR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM19HkB2MGyj4JSCzp0eQM9bjQCf7j6ny4"
                      target="_blank"
                      className="viewmore-button"
                      rel="noopener noreferrer">
                      View More
                    </a>
                  </div>
                </div>

                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img src="images/prax.jpg" alt="" className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">CodeChef Bluebit 2.0 Hackathon</h2>
                    <p className="description">
                      Runner-Up at Bluebit 2.0 Hackathon at PCCOE Pune , facilitated by IEEE Pune section Chair.
                    </p>
                    <a href="https://www.linkedin.com/posts/talha-ansari-22189b1bb_cybertitans-hackathon-machinelearning-activity-7260309804747735040-40jK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM19HkB2MGyj4JSCzp0eQM9bjQCf7j6ny4"
                      target="_blank"
                      className="viewmore-button"
                      rel="noopener noreferrer">
                      View More
                    </a>
                  </div>
                </div>

                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img src="images/lg.jpg" alt="" className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Logithon x IIT Bombay</h2>
                    <p className="description">
                      Top 12 finish at Logithon 2.0 Hackathon held at IIT Bombay orgainized by Softlink pvt.ltd
                    </p>
                    <a href="https://www.linkedin.com/posts/talha-ansari-22189b1bb_hackathon-innovation-logithon-activity-7305288162472304641-uUxZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM19HkB2MGyj4JSCzp0eQM9bjQCf7j6ny4"
                      target="_blank"
                      className="viewmore-button"
                      rel="noopener noreferrer">
                      View More
                    </a>
                  </div>
                </div>

                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img src="images/Qs.jpg" alt="" className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Quasar 2.0 Hackathon</h2>
                    <p className="description">
                      Top 5 Teams at Quasar 2.0 Hackathon at VPPCOEVA, Mumbai
                    </p>
                    <a href="https://www.linkedin.com/posts/sumeet-gupta-ba2216209_quasar-smarteducation-innovation-ugcPost-7176274567353548800-N7Eb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM19HkB2MGyj4JSCzp0eQM9bjQCf7j6ny4"
                      target="_blank"
                      className="viewmore-button"
                      rel="noopener noreferrer">
                      View More
                    </a>
                  </div>
                </div>

                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img src="images/nt.jpg" alt="" className="card-img" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">DebugOn X IIT Delhi</h2>
                    <p className="description">
                      Finalist DebugOn X Edc IIT Delhi with ONDC under Ministry of Industry and Internal Trade.
                    </p>
                    <a href="https://www.linkedin.com/posts/talha-ansari-22189b1bb_ondc-ecommerce-innovation-activity-7294771086150283268-3Ku9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM19HkB2MGyj4JSCzp0eQM9bjQCf7j6ny4"
                      target="_blank"
                      className="viewmore-button"
                      rel="noopener noreferrer">
                      View More
                    </a>
                  </div>
                </div>
                {/* Cards end */}
              </div>
            </div>

            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;

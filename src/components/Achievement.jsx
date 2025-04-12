import React, { useEffect, useState } from "react";
import "../style.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievement = () => {
  // Achievement data in JSON format
  const achievementsData = {
    title: "MY ACHIEVEMENTS",
    cards: [
      {
        id: 1,
        image: "images/SIH.jpg",
        alt: "SIH 2024",
        title: "SIH 2024 Grand Finale",
        description: "Top 3 teams at SIH 2024 under Ministry of Railways, facilitated by AICTE Vice Chairman",
        link: "https://www.linkedin.com/posts/talha-ansari-22189b1bb_sih2024-smartindiahackathon-innovation-activity-7275529423381024768-VbLR",
        aosDelay: 100
      },
      {
        id: 2,
        image: "images/prax.jpg",
        alt: "CodeChef Bluebit",
        title: "CodeChef Bluebit 2.0 Hackathon",
        description: "Runner-Up at Bluebit 2.0 Hackathon at PCCOE Pune, facilitated by IEEE Pune section Chair.",
        link: "https://www.linkedin.com/posts/talha-ansari-22189b1bb_cybertitans-hackathon-machinelearning-activity-7260309804747735040-40jK",
        aosDelay: 200
      },
      {
        id: 3,
        image: "images/lg.jpg",
        alt: "Logithon IIT Bombay",
        title: "Logithon x IIT Bombay",
        description: "Top 12 finish at Logithon 2.0 Hackathon held at IIT Bombay organized by Softlink pvt.ltd",
        link: "https://www.linkedin.com/posts/talha-ansari-22189b1bb_hackathon-innovation-logithon-activity-7305288162472304641-uUxZ",
        aosDelay: 300
      },
      {
        id: 4,
        image: "images/Qs.jpg",
        alt: "Quasar Hackathon",
        title: "Quasar 2.0 Hackathon",
        description: "Top 5 Teams at Quasar 2.0 Hackathon at VPPCOEVA, Mumbai",
        link: "https://www.linkedin.com/posts/sumeet-gupta-ba2216209_quasar-smarteducation-innovation-ugcPost-7176274567353548800-N7Eb",
        aosDelay: 400
      },
      {
        id: 5,
        image: "images/nu.jpg",
        alt: "DebugOn IIT Delhi",
        title: "DebugOn X IIT Delhi",
        description: "Finalist at DebugOn X Edc IIT Delhi with ONDC under Ministry of Industry and Internal Trade.",
        link: "https://www.linkedin.com/posts/talha-ansari-22189b1bb_ondc-ecommerce-innovation-activity-7294771086150283268-3Ku9",
        aosDelay: 500
      }
    ]
  };

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Initialize AOS and Swiper
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quart',
      once: true
    });

    const swiper = new Swiper(".slide-content", {
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

    return () => swiper.destroy();
  }, []);

  return (
    <section id="blogs" data-aos="fade-up">
      <div className="blog-container swiper">
        <div className="blog-wrapper">
          <div className="blog-title">
            <h3 id="ac">{achievementsData.title}</h3>
            
            {/* Optional Filter Buttons */}
            {/* <div className="achievement-filters">
              <button 
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>
              <button 
                className={activeFilter === "hackathon" ? "active" : ""}
                onClick={() => setActiveFilter("hackathon")}
              >
                Hackathons
              </button>
              <button 
                className={activeFilter === "award" ? "active" : ""}
                onClick={() => setActiveFilter("award")}
              >
                Awards
              </button>
            </div> */}
          </div>

          <div className="slide-container swiper">
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                {achievementsData.cards.map((card) => (
                  <div 
                    key={card.id}
                    className="card swiper-slide"
                    data-aos="fade-up"
                    data-aos-delay={card.aosDelay}
                  >
                    <div className="image-content">
                      <div className="card-image">
                        <img 
                          src={card.image} 
                          alt={card.alt} 
                          className="card-img"
                          loading="lazy" // Lazy loading for better performance
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">{card.title}</h2>
                      <p className="description">{card.description}</p>
                      <div className="button-wrapper">
                        <a 
                          href={card.link}
                          target="_blank"
                          className="viewmore-button"
                          rel="noopener noreferrer"
                          aria-label={`View more about ${card.title}`}
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
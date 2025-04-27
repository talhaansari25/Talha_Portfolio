import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Proficiency.css';

const Proficiency = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const proficiencies = [
    { name: 'Communication', stars: 5, label: 'Excellent' },
    { name: 'Management', stars: 4.5, label: 'Very Good' },
    { name: 'Team Leadership', stars: 4.5, label: 'Very Good' },
    { name: 'Problem Solving', stars: 5, label: 'Excellent' },
    { name: 'Decision Making', stars: 4, label: 'Very Good' },
    { name: 'Multitasking', stars: 4, label: 'Very Good' }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star-icon full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star-icon half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star-icon empty">★</span>);
    }
    
    return stars;
  };

  return (
    <section className="proficiency-section" id="proficiency">
      <div className="proficiency-container" data-aos="fade-up">
        <h2 className="proficiency-heading">Professional Skills</h2>
        <p className="proficiency-subheading">My proficiency in key professional areas</p>

        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mobile-swiper"
          >
            {proficiencies.map((proficiency, index) => (
              <SwiperSlide key={index}>
                <div className="proficiency-card">
                  <div className="proficiency-info">
                    <span className="proficiency-name">{proficiency.name}</span>
                    <span className="proficiency-label">{proficiency.label}</span>
                  </div>
                  <div className="stars-container">
                    {renderStars(proficiency.stars)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="proficiency-grid">
            {proficiencies.map((proficiency, index) => (
              <div 
                className="proficiency-card" 
                key={index} 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="proficiency-info">
                  <span className="proficiency-name">{proficiency.name}</span>
                  <span className="proficiency-label">{proficiency.label}</span>
                </div>
                <div className="stars-container">
                  {renderStars(proficiency.stars)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Proficiency;
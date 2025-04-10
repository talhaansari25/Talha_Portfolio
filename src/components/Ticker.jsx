import React from 'react';
import "../style.css";


const Ticker = () => {
  return (
    <section>
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="item-collection-1">
            <span className="item">Full Stack Web Development</span>
            <span className="item">Machine Learning</span>
            <span className="item">Data Structure & Algorithms</span>
            <span className="item">Hackathons</span>
            <span className="item">C/C++ </span>
            <span className="item">Python </span>
            <span className="item">Java </span>
          </span>
          <span className="item-collection-2">
            <span className="item">Full Stack Web Development</span>
            <span className="item">Machine Learning</span>
            <span className="item">Data Structure and Algorithm</span>
            <span className="item">Hackathons</span>
            <span className="item">C/C++ </span>
            <span className="item">Python </span>
            <span className="item">Java </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Ticker;

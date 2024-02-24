import React from "react";
import "./Hero.css";

import hero from "../../assets/hero.jpg";


const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div>
        <div className="hero-content">
          <div className="hero-title">
            <h1>100% ORGANIC</h1>
          </div>
          <div className="hero-button">
            <button>Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

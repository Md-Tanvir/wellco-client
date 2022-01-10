import React from "react";
import "./HeroArea.css";
import banner from "../../../image/hero-img.png";

const HeroArea = () => {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6 hero-text ">
            <h1 data-aos="fade-right">People Expect to be Bored eLearning.</h1>
            <p data-aos="fade-right">
              Every act of conscious learning requires the willingness to suffer
              an injury to one’s self-esteem.
            </p>
            <button data-aos="fade-up" className="hero-btn me-3 mb-4">
              GET STARTED
            </button>
            <button data-aos="fade-up" className="hero-btn2">
              DISCOVER MORE
            </button>
          </div>
          <div className="col-12 col-md-12 col-lg-6" data-aos="fade-left">
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;

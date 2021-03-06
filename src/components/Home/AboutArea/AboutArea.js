import React from "react";
import { Link } from "react-router-dom";
import why from "../../../image/whyme.png";
import "./AboutArea.css";
const AboutArea = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center aboutArea gy-5">
        <div className="col-12 col-md-6">
          <h5 data-aos="fade-right" className="mb-2">
            WHY CHOSES ME
          </h5>
          <h2 data-aos="fade-right" className="mb-4">
            Tools For Teachers And Learners
          </h2>
          <p data-aos="fade-right" className="mb-4">
            Oxford chimney pot Eaton faff about blower blatant brilliant, bubble
            and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </p>
          <Link to="/courses">
            <button data-aos="fade-up" className="hero-btn me-3 mb-3">
              JOIN NOW
            </button>
          </Link>
          <Link to="/about">
            <button data-aos="fade-up" className="hero-btn">
              LEARN MORE
            </button>
          </Link>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img data-aos="fade-left" src={why} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

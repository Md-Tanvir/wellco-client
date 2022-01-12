import React from "react";
import about from "../../image/about.png";
import "./About.css";
import img1 from "../../image/scholarship.png";
import img2 from "../../image/cap.png";
import Sliders from "../Sliders/Sliders";
import Map from "../Map/Map";

const About = () => {
  return (
    <div className="about-area">
      <div className="container py-5">
        <div className="row gy-5">
          {/* About img */}
          <div
            className="col-12 col-md-12 col-lg-6 text-center"
            data-aos="fade-right"
          >
            <img src={about} className="img-fluid about-img" alt="" />
          </div>
          {/* About text */}
          <div className="col-12 col-md-12 col-lg-6 about-text">
            <h5 data-aos="fade-left"> WHAT WE PROVIDE</h5>
            <h2 data-aos="fade-left">We Care About Your Life For Better</h2>
            <p data-aos="fade-left">
              Forging relationships between multi to national corporations,
              governments and global NGOs begins.
            </p>
            <div className="row p-4 ps-0" data-aos="fade-up">
              <div className="col-2 col-md-1">
                <img src={img1} className="about-icon" alt="" />
              </div>
              <div className="col-10 col-md-7">
                <h5>Master Certified Coach</h5>
                <p>
                  Our purpose is to build solutions that remove barriers
                  preventing people.
                </p>
              </div>
            </div>
            <div className="row p-4 ps-0" data-aos="fade-up">
              <div className="col-2 col-md-1">
                <img className="about-icon" src={img2} alt="" />
              </div>
              <div className="col-10 col-md-7">
                <h5>Coach Certification Program</h5>
                <p>
                  Learning and Growth. We’re building a learning organization,
                  so you not only develop.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* About area slider */}
        <Sliders></Sliders>
        {/* About area map */}
        <Map></Map>
      </div>
    </div>
  );
};

export default About;

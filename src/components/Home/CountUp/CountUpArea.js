import React from "react";
import img1 from "../../../image/1.png";
import img2 from "../../../image/2.png";
import img3 from "../../../image/3.png";
import "./CountUpArea.css";
const CountUpArea = () => {
  return (
    <div className="container py-5">
      <div className="row gy-5 justify-content-between">
        <div className="col-12 col-lg-4">
          <h5 data-aos="fade-right">About Us</h5>
          <h2 data-aos="fade-right" className="main-title">
            The End Result of All True Learning
          </h2>
          <p data-aos="fade-up">
            The key to success is to appreciate how people learn, understand the
            thought process that goes into instructional design, what works
            well, and a range of different
          </p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row gy-5 justify-content-evenly ">
            <div className="col-12 col-md-5 col-lg-3 text-center">
              <div className=" count-body1 p-5" data-aos="fade-up">
                <img src={img1} className="img-fluid" alt="" />

                <h4 className="mb-0 text-center">2K+ Students</h4>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3  text-center">
              <div className=" count-body2 p-5" data-aos="fade-up">
                <img src={img2} className="img-fluid" alt="" />
                <h4 className="mb-0 text-center">3.5 Average CGPA</h4>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-3 text-center">
              <div className=" count-body3 p-5" data-aos="fade-up">
                <img src={img3} className="img-fluid" alt="" />
                <h4 className="mb-0 text-center">95% Graduates</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUpArea;

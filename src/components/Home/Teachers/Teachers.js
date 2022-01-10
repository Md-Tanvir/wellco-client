import React from "react";
import img1 from "../../../image/team1.jpg";
import img2 from "../../../image/team2.jpg";
import img3 from "../../../image/team3.jpg";
import img4 from "../../../image/team4.jpg";
import img5 from "../../../image/team5.jpg";
import "./Teacher.css";
const Teachers = () => {
  return (
    <div className="py-5 teacher-area">
      <div className="container">
        <h5 className="text-center" data-aos="fade-up">OUR PROFESSIONALS</h5>
        <h2 className="mb-5 text-center main-title" data-aos="fade-up">
          Meet Our Professinoal Teachers
        </h2>
        <div className="teach-row ">
          <div className="teach" data-aos="fade-up">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <h4>Wallace D. Grace</h4>
            </div>
          </div>

          <div className="teach" data-aos="fade-up">
            <div>
              <img src={img2} alt="" />

              <div>
                <h4>Evan A. Ethridge</h4>
              </div>
            </div>
          </div>

          <div className="teach" data-aos="fade-up">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <h4>Marcus L. Duncan</h4>
            </div>
          </div>

          <div className="teach" data-aos="fade-up">
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <h4> Paul B. Gilliland</h4>
            </div>
          </div>

          <div className="teach" data-aos="fade-up">
            <div>
              <img src={img5} alt="" />
            </div>
            <div>
              <h4>Donald T. Lewis</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;

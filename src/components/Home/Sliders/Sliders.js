import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../../image/brand-1.png";
import s2 from "../../../image/brand-2.png";
import s3 from "../../../image/brand-3.png";
import s4 from "../../../image/brand-4.png";
import s5 from "../../../image/brand-5.png";
import s6 from "../../../image/brand-6.png";
import Slider from "react-slick";
import './Sliders.css'

const Sliders = () => {
  const settings = {
    
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-5' data-aos="fade-up">
        <h5 className='text-center'>Partners</h5>
        <h2 className="text-center mb-5 main-title">Trusted by 100 world's best companies</h2>
      <Slider {...settings} >
        <div className="d-flex justify-content-center">
          <img src={s1} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={s2} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={s3} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={s4} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={s5} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={s6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;

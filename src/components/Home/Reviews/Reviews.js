import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Slider from "react-slick";
import { fetchReviews } from "../../../Redux/slices/reviewSlice";
import "./Reviews.css";
import { useDispatch, useSelector } from "react-redux";

const Reviews = () => {
   // used redux to fetch data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);
  const reviews = useSelector((state) => state.reviews.allReviews);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
    <div className="container py-5">
      <div>
        <h5 data-aos="fade-up" className="text-center">
          STUDENT REVIEWS
        </h5>
        <h2 data-aos="fade-up" className="text-center main-title mb-5">
          What Our Students Says
        </h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review?._id} data-aos="fade-up" className="p-4 ">
              <div className="review-body p-4">
                <h5 className="text-center">
                  <Rating
                    className="rating text-warning"
                    emptySymbol="far fa-star  text-warning"
                    fullSymbol="fas fa-star  text-warning"
                    readonly
                    initialRating={review?.rating}
                  ></Rating>
                </h5>

                <p>{review?.text}</p>
                <h4 className="text-center">- {review?.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;

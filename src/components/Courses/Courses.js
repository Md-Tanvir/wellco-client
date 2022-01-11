import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className='course-area'>
      <div className="container py-5 ">
      <h1 className="text-center mb-5 main-title"  data-aos="fade-up">Explore Popular Courses</h1>
        <div
         
          className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5"
        >
          {courses.map((course) => (
            <div key={course?.id} className="col">
              <div className="card h-100  course-card"  data-aos="fade-up">
                <img
                  src={course?.img}
                  className="card-img-top course-img"
                  alt=""
                />
                <div className="card-body">
                  <div className="course-price mt-2 mb-3">
                    <span>${course?.price}.00</span>
                  </div>
                  <h4 className="card-title course-title">{course?.title}</h4>

                  <div className="my-3 instructor d-flex align-itmes-center">
                    <div>
                      <img
                        src={course?.instructorImg}
                        className="img-fluid ins-img me-3"
                        alt=""
                      />
                    </div>
                    <div>
    
                      <h5 className="mb-0 ins-name">
                        {course?.instructorName}
                      </h5>
                    </div>
                  </div>

                  <hr />
                  <div className="row d-flex justify-content-between  align-items-center">
                    <div className="col-6">
                      <h6 className="mb-0">
                        <i className="fas fa-book me-1"></i> {course?.lessons} Lessons
                      </h6>
                    </div>
                    <div className="col-6 text-end">
                      <Link to={`/booking/${course?._id}`}>
                        <button className="btn course-btn">Know Details <i className="fas fa-arrow-right"></i></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

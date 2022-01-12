import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState({});

  // FOR GETTING SPECIFIC COURSE
  useEffect(() => {
    const url = `http://localhost:5000/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id == courseId);

        setCourse(p);
      });
  }, [courseId]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "Pending";
    data.name = course.title;
    data.price = course.price;
    data.img = course.img;

    // Sending Order data to Database
    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order has been placed");
          reset();
        }
      });

  };

  return (
    <div className="py-5 cousrse-area">
      {/* spinner */}
      {!course ? (
        <div className="d-flex justify-content-center my-5 pb-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 col-lg-6">
              <div key={course?._id} className="col">
                <div className="card h-100 course-card">
                  <img
                    src={course?.img}
                    style={{ height: "400px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title mb-3">{course?.title}</h2>
                    <div className="row gy-4 d-flex align-items-center">
                      <div className="col-lg-6 col-12 justify-content-start d-flex align-items-center">
                        <img
                          src={course?.instructorImg}
                          className="img-fluid ins-img me-3"
                          alt=""
                        />
                        <h5 className="mb-0">{course?.instructorName}</h5>
                      </div>
                      <div className="col-lg-6 col-12">
                        <h5 className="booking-price text-center">Price: ${course?.price}</h5>
                        <p className="text-center mb-0 booking-price">
                          <i className="fas fa-book me-2 "></i>
                          {course?.lessons} Lessons
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="card-text ">{course?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h2 className="text-center mb-3">Confirm Your Order</h2>
              <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  {...register("displayName")}
                  className="service-input"
                  required
                />

                <input
                  type="email"
                  defaultValue={user.email}
                  {...register("email")}
                  required
                  className="service-input"
                />

                <input
                  placeholder="Mobile no."
                  type="tel"
                  {...register("mobile")}
                  className="service-input"
                  required
                />
                <input
                  placeholder="Address"
                  type="text"
                  {...register("address")}
                  required
                  className="service-input"
                />
                <input
                  type="submit"
                  value="Order Now"
                  className="btn btn-submit"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;

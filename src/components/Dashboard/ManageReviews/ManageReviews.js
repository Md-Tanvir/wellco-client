import React, { useEffect, useState } from "react";

const ManageReviews = () => {
  const [reviews, setBlogs] = useState([]);

  // Getting all reviews
  useEffect(() => {
    fetch("https://still-bastion-84671.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Deleting reviews with id
  const handleDelete = (id) => {
    const action = window.confirm("Do you want to delete the review?");
    if (action) {
      fetch(`https://still-bastion-84671.herokuapp.com/deleteReview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setBlogs(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2 data-aos="fade-up" className="text-center mb-5">
        Manage Reviews
      </h2>

      <table data-aos="fade-up" className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Text</th>

            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review?._id}>
              <th>{review?.name}</th>
              <td>{review?.rating}</td>
              <td>{review?.text.slice(0, 60)}...</td>

              <td>
                <button
                  onClick={() => handleDelete(review?._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReviews;

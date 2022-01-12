import React, { useEffect, useState } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  // Getting all Courses
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Deleting course with id
  const handleDelete = (id) => {
    const action = window.confirm("Do you want to delete the course?");
    if (action) {
      fetch(`http://localhost:5000/deleteCourse/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = courses.filter((course) => course._id !== id);
            setCourses(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 data-aos="fade-up" className="text-center mb-5">All The Courses</h2>

      <table data-aos="fade-up" className="table">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Instructor Name</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <th>{course.title}</th>
              <td>{course?.instructorName}</td>
              <td>$ {course?.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(course?._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-regular fa-trash-can"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;



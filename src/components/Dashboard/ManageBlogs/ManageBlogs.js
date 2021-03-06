import React, { useEffect, useState } from "react";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Getting all blogs
  useEffect(() => {
    fetch("https://still-bastion-84671.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Deleting blogs with id
  const handleDelete = (id) => {
    const action = window.confirm("Do you want to delete the blog?");
    if (action) {
      fetch(`https://still-bastion-84671.herokuapp.com/deleteBlog/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = blogs.filter((blog) => blog._id !== id);
            setBlogs(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 data-aos="fade-up" className="text-center mb-5">All The Blogs</h2>

      <table data-aos="fade-up" className="table">
        <thead>
          <tr>
            <th scope="col">Blog Name</th>
            <th scope="col">Writer</th>

            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog?._id}>
              <th>{blog?.title}</th>
              <td>{blog?.userName}</td>

              <td>
                <button
                  onClick={() => handleDelete(blog?._id)}
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

export default ManageBlogs;

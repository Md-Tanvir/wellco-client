import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Blogs.css";
import { fetchBlogs } from "../../Redux/slices/blogSlice";

const Blogs = () => {
  // using redux to fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const blogs = useSelector((state) => state.blogs.allBlogs);
  const status = useSelector((state) => state.blogs.status);

  
  return (
    <div className="blog-area py-5">
      {/* spinner */}
      {status === "pending" ? (
        <div className="d-flex justify-content-center my-5 pb-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container ">
            <h1 className="text-center main-title mb-5">
              Check Our Latest Blogs
            </h1>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3  gx-4 gy-5">
              {blogs.map((blog) => (
                <div key={blog?._id} className="col">
                  <div className="card h-100  blog-card" data-aos="fade-up">
                    <img
                      src={blog?.img}
                      className="card-img-top course-img"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="main-title">
                        <i className="fas fa-user"></i> {blog?.userName}
                      </h5>
                      <h4 className="card-title blog-title">{blog?.title}</h4>

                      <div className="my-4">
                        <span className="blog-tag me-3">{blog?.tag1}</span>
                        <span className="blog-tag">{blog?.tag2}</span>
                      </div>
                      <hr />

                      <div className="text-end">
                        <Link to={`/blog/${blog?._id}`}>
                          <button className="btn course-btn">
                            Read More <i className="fas fa-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blogs;

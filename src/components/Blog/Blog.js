import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  // FOR GETTING SPECIFIC BLOG
  useEffect(() => {
    const url = `http://localhost:5000/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id == blogId);

        setBlog(p);
      });
  }, [blogId]);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={blog?.img} className="w-100" alt="" />
          </div>
          <div className="col-12 col-md-6">
           <div className='course-card px-5 pb-5'>
           <h2>{blog?.title}</h2>
            <div className="my-4">
              <span className="blog-tag me-3">{blog?.tag1}</span>
              <span className="blog-tag">{blog?.tag2}</span>
            </div>
            <h5 className='main-title'><i className="fas fa-user"></i> {blog?.userName}</h5>
            <p>{blog?.text}</p>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

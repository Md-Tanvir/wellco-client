import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  // FOR GETTING SPECIFIC BLOG
  useEffect(() => {
    const url = `https://still-bastion-84671.herokuapp.com/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id == blogId);

        setBlog(p);
      });
  }, [blogId]);
  return (
    <div className='course-area'>
      <div className="container py-5">
        <div className="row">
          {/* BLog img */}
          <div className="col-12 col-lg-6">
            <img data-aos="fade-left" src={blog?.img} style={{maxHeight:'400px',objectFit:'cover'}} className="w-100 mt-5" alt="" />
          </div>
          {/* Blog text */}
          <div className="col-12 col-lg-6">
           <div className='course-card p-4 p-lg-5'>
           <h2 data-aos="fade-right" >{blog?.title}</h2>
            <div className="my-4">
              <span data-aos="fade-up" className="blog-tag me-3">{blog?.tag1}</span>
              <span data-aos="fade-up" className="blog-tag">{blog?.tag2}</span>
            </div>
            <h5 data-aos="fade-up" className='main-title'><i className="fas fa-user"></i> {blog?.userName}</h5>
            <p data-aos="fade-up">{blog?.text}</p>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

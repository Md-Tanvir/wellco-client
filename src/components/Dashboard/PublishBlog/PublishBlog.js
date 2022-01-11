import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const PublishBlog = () => {
   const {user} = useAuth()
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();

// For adding new Blog
const onSubmit = (data) => {
    fetch("http://localhost:5000/addBlog", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Blog published Successfully");
          reset();
        }
      });
  };

    return (
        <div className='pb-5 pt-3'>
             <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("userName")}
            placeholder="Name"
            required
            className="service-input"
            defaultValue={user.displayName}
          />
          <input
            {...register("title", { required: true })}
            placeholder="Blog Title"
            className="service-input"
            required
          />
          <br />

          <input
            {...register("img", { required: true })}
            placeholder="Blog Image Link"
            className="service-input"
            required
          />
          <br />
          <input
            {...register("tag1", { required: true })}
            placeholder="First Tag"
            className="service-input"
            required
          />
          <br />
          <input
            {...register("tag2", { required: true })}
            placeholder="Second Tag"
            className="service-input"
            required
          />
          <br />
    
           <textarea   className="service-input service-text" placeholder="Blog Text" {...register("text", {required: true})} />
     
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Publish Blog" className=" btn-submit" />
        </form>
        </div>
    );
};

export default PublishBlog;
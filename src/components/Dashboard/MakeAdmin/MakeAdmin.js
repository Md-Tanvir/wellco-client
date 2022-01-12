import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  //  For getting admin role
  const handleAdmin = (e) => {
    const user = { email };
    fetch("https://still-bastion-84671.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin Maded Successfully");
          setEmail("");
        }
        console.log(data);
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2 data-aos="fade-up" className="text-center mb-5">Add New Admin</h2>
      {/* Form to create admin */}
      <form data-aos="fade-up"
        className="justify-content-center mx-auto text-center"
        onSubmit={handleAdmin}
      >
        <input
          style={{ width: "65%" }}
          onBlur={handleOnBlur}
          type="email"
          label="email"
          placeholder="Enter The Email"
          className="form-control mx-auto my-3"
        />
        <button type="submit" className="btn-submit ">
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

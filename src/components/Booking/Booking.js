import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState({});

  // FOR GETTING SPECIFIC COURSE
  useEffect(() => {
    const url = `./course.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id == courseId);

        setCourse(p);
      });
  }, [courseId]);

  return <div></div>;
};

export default Booking;

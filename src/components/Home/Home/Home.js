import React from "react";
import AboutArea from "../AboutArea/AboutArea";
import BlogArea from "../BlogArea/BlogArea";
import CountUpArea from "../CountUp/CountUpArea";
import CourseArea from "../CourseArea/CourseArea";
import HeroArea from "../HeroArea/HeroArea";
import Reviews from "../Reviews/Reviews";
import Teachers from "../Teachers/Teachers";


const Home = () => {
  
  return (
    <div>
      <HeroArea></HeroArea>
      <CountUpArea></CountUpArea>
      <CourseArea></CourseArea>
      <AboutArea></AboutArea>
      <BlogArea></BlogArea>
      <Teachers></Teachers>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

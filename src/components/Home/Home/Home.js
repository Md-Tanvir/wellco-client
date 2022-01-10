import React from "react";
import AboutArea from "../AboutArea/AboutArea";
import CountUpArea from "../CountUp/CountUpArea";
import HeroArea from "../HeroArea/HeroArea";
import Teachers from "../Teachers/Teachers";


const Home = () => {
  return (
    <div>
      <HeroArea></HeroArea>
      <CountUpArea></CountUpArea>
      <AboutArea></AboutArea>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;

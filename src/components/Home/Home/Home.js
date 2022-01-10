import React from "react";

import AboutArea from "../AboutArea/AboutArea";
import CountUpArea from "../CountUp/CountUpArea";

import HeroArea from "../HeroArea/HeroArea";
import Sliders from "../Sliders/Sliders";

const Home = () => {
  return (
    <div>
      <HeroArea></HeroArea>
      <CountUpArea></CountUpArea>
      <AboutArea></AboutArea>
      <div className="container">
        <Sliders></Sliders>
      </div>
    </div>
  );
};

export default Home;

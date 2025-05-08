import React from "react";
import Girl from "../assets/Intersect.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="left">
        <h1>
          Dive into Delights Of Delectable <span>Food</span>
        </h1>
        <p>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <button className="btnOne">Order Now</button>
      </div>
      <div className="right">
        <img className="imgOne" src={Girl} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "../Styles/hero1.css";
import image1 from "../Images/IMAGE1.jpg"; // Make sure the path is correct

const Hero1 = () => {
  return (
    <div className="banner1" style={{ backgroundImage: `url(${image1})` }}>
      <h1>Your Home Transformation Starts Here</h1>
      <div className="banner1-buttons">
        <a href="#" className="buttons123">
          SHOP FURNITURE
        </a>
        <a href="#" className="buttons123">
          SHOP WALL ART
        </a>
      </div>
    </div>
  );
};

export default Hero1;

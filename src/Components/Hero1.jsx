import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/hero1.css";

import image1 from "../Images/IMAGE1.jpg"; // Make sure the path is correct

const Hero1 = () => {
  const navigate = useNavigate();

  const handleclickhero1artworks = () => {
    navigate("/artworks");
  };

  const handleclickhero2collections = () => {
    navigate("/collection");
  };
  return (
    <div className="banner1" style={{ backgroundImage: `url(${image1})` }}>
      <h1>Your Home Transformation Starts Here</h1>
      <div className="banner1-buttons">
        <a href="#" className="buttons123" onClick={handleclickhero1artworks}>
          SHOP ARTWORKS
        </a>
        <a
          href="#"
          className="buttons123"
          onClick={handleclickhero2collections}
        >
          View Collections
        </a>
      </div>
    </div>
  );
};

export default Hero1;

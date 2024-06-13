import React from "react";
import welding from "../Images/ABOUTIMAGEWELDING.jpg";
import "../Styles/about.css";
const About = () => {
  return (
    <div>
      <div className="about-homepage">
        <div className="image-left">
          <img src={welding} alt="" />
        </div>
        <div className="homepage-right">
          <h2>Customize your own project</h2>
          <p>
            Outbox is set up to take in your most complex steelwork projetcs.
            Whether you'd like to execute a simple dining room table or you're
            opening a industrial bar pub downtown, we're all in!
          </p>
          <button>Explore Ideas</button>
        </div>
      </div>
    </div>
  );
};

export default About;

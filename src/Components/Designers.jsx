import React from "react";
import "../Styles/designer.css";
import drawingimage from "../Images/drawingsketch.jpg";

const Designers = () => {
  return (
    <div>
      <div
        className="designer-banner"
        style={{
          backgroundImage: `url(${drawingimage})`,
        }}
      >
        <div className="white-designer">
          <div className="title-designer">
            <h1>Contact our interior designer</h1>
          </div>
          <div className="p-designer">
            Looking to revamp your living space and give it a fresh new look?
            Look no further than our team of dedicated interior designers who
            can offer you expert guidance and advice on how to bring your decor
            dreams to life!
          </div>
          <div className="designer-button">
            <button>Whatsapp Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;

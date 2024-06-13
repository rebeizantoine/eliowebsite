import React from "react";
import "../Styles/section1.css";
import image1 from "../Images/imagelittle1.jpg";
import image2 from "../Images/imagelittle2.jpg";
import image3 from "../Images/imagelittle3.jpg";
import image4 from "../Images/imagelittle4.jpg";
import image5 from "../Images/imagelittle5.jpg";
import image6 from "../Images/imagelittle6.jpg";
import image7 from "../Images/imagelittle7.jpg";
import image8 from "../Images/imagelittle8.jpg";

const Section1 = () => {
  return (
    <div>
      <div>
        <h2 className="priceand-h2">Customizable Home Bars</h2>
        <div className="item-grid-container">
          <div className="item-grid-1">
            <img src={image1} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image2} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image3} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image4} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image5} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image6} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image7} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img src={image8} alt="" className="image-priceand" />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
        </div>
        <div className="priceand-viewall">
          <button>View all</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;

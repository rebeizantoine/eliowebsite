import React from "react";
import "../Styles/section2.css";
import image1 from "../Images/imagelittle1.jpg";
import image2 from "../Images/imagelittle2.jpg";
import image3 from "../Images/imagelittle3.jpg";
import image4 from "../Images/imagelittle4.jpg";
import image5 from "../Images/imagelittle5.jpg";
import image6 from "../Images/imagelittle6.jpg";
import image7 from "../Images/imagelittle7.jpg";
import image8 from "../Images/imagelittle8.jpg";
import whatsnew1 from "../Images/whatsnew1.jpg";
import whatsnew2 from "../Images/whatsnew2.jpg";
import whatsnew3 from "../Images/whatsnew3.jpg";
import whatsnew4 from "../Images/whatsnew4.jpg";
import whatsnew5 from "../Images/whatsnew5.jpg";
import whatsnew6 from "../Images/whatsnew6.jpg";
import whatsnew7 from "../Images/whatsnew7.jpg";
import whatsnew8 from "../Images/whatsnew8.jpg";

const Section2 = () => {
  // Function to handle image hover
  const handleImageHover = (event, newImageSrc) => {
    event.currentTarget.src = newImageSrc;
  };

  return (
    <div>
      <div>
        <h2 className="priceand-h2">Customizable Home Bars</h2>
        <div className="item-grid-container">
          <div className="item-grid-1">
            <img
              src={image1}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew1)}
              onMouseOut={(e) => handleImageHover(e, image1)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image2}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew2)}
              onMouseOut={(e) => handleImageHover(e, image2)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image3}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew3)}
              onMouseOut={(e) => handleImageHover(e, image3)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image4}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew4)}
              onMouseOut={(e) => handleImageHover(e, image4)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image1}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew5)}
              onMouseOut={(e) => handleImageHover(e, image1)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image6}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew6)}
              onMouseOut={(e) => handleImageHover(e, image6)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image7}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew7)}
              onMouseOut={(e) => handleImageHover(e, image7)}
            />
            <div className="priceand">
              <h1>LEO Wall Mounted Bar</h1>
              <p>From $270 USD</p>
            </div>
          </div>
          <div className="item-grid-1">
            <img
              src={image8}
              alt=""
              className="image-priceand2"
              onMouseOver={(e) => handleImageHover(e, whatsnew8)}
              onMouseOut={(e) => handleImageHover(e, image8)}
            />
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

export default Section2;

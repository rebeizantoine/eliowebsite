import React, { useState } from "react";
import "../Styles/single.css";
import image1 from "../Images/imagelittle1.jpg";
import image2 from "../Images/imagelittle2.jpg";
import ruler from "../Images/ruler-svgrepo-com.svg";
import question from "../Images/question-circle-svgrepo-com.svg";
import location from "../Images/location-pin-alt-1-svgrepo-com.svg";

import image3 from "../Images/imagelittle3.jpg";

import whatsapp from "../Images/whatsapp.svg";
import ticksvg from "../Images/ticksvg.svg";

const Single = () => {
  const [selected, setSelected] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Dimensions & Specifications",
      svg: ruler,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nulla at dui bibendum, a interdum justo efficitur.",
    },
    {
      title: "Will the ordered item look like?",
      svg: question,
      content:
        "Curabitur accumsan lorem at neque dignissim, sed cursus nunc aliquam. Integer aliquet sapien ut purus ultrices, id luctus nisl bibendum.",
    },
    {
      title: "Where is your location?",
      svg: location,
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod dui sit amet arcu sagittis, in fermentum ligula efficitur.",
    },
    {
      title: "Can i customize this piece?",
      svg: question,
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod dui sit amet arcu sagittis, in fermentum ligula efficitur.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSelect = (type) => {
    setSelected(type);
  };
  return (
    <div>
      <div className="single-container-123">
        <div className="image-left-1">
          <img src={image1} alt="" />
          <div className="extra-images">
            <img src={image2} alt="" />
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="right-everything">
          <div className="first">
            <h4>DESIGNED & PRODUCED BY OUTBOX SARL</h4>
            <h1>LEO Wall Mounted Bar</h1>
          </div>
          <div className="second">
            <h3>$270 USD</h3>
            <p>
              Paid cash on delivery after 2-3 weeks of production.
              Transportation and additional services calculated at checkout.
            </p>
          </div>
          <div className="third">
            <div className="flex-third">
              <p>Metallic Finish</p>
              <p> Matte Black</p>
            </div>
            <div className="flex-third-2">
              <div
                className={`circle metallic ${
                  selected === "metallic" ? "selected" : ""
                }`}
                onClick={() => handleSelect("metallic")}
              ></div>
              <div
                className={`circle matte ${
                  selected === "matte" ? "selected" : ""
                }`}
                onClick={() => handleSelect("matte")}
              ></div>
            </div>
          </div>
          <div className="quantity">
            <h4>quanity availabe: 20</h4>
          </div>
          <div className="fourth">
            <a href="" className="whatsapp-fourth">
              <span>
                <img className="fourth-image" src={whatsapp} alt="" />
                Order on Whatsapp
              </span>
            </a>
            <a href="" className="customise-fourth">
              Customise
            </a>
            <a href="" className="buyit-fourth">
              Buy it now
            </a>
          </div>
          <div className="fifth">
            <span>
              <img src={ticksvg} alt="" />
              <p>Pickup available at Adonis, Zouk Mosbeh, Lebanon</p>
            </span>
            <p className="second-p-here">Usually ready in up to 2 weeks</p>
          </div>
          <div className="sixth">
            <div className="accordion">
              {data.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-title"
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex-option">
                      <img src={item.svg} alt={`${item.title} icon`} />
                      <h3>{item.title}</h3>
                    </div>

                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <idv className="seventh">
            <p>
              This wine rack is adorned with delicate details for a look that
              spells out contemporary. With space for up to six bottles, it
              features a round design founded on wall mount hanging. Keep it
              atop your dining room wall filled with a few of your favorite
              vintages wine, that way you're ready to pour out drinks at your
              next dinner party or just as a decoration in a dining room. This
              piece is a charming finishing touch. Keep it centered on a blank
              wall along with a variety of worthy bottles so you can craft an
              even more relaxing atmosphere.
            </p>
          </idv>
        </div>
      </div>
    </div>
  );
};

export default Single;

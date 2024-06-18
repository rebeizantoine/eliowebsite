import React, { useEffect, useRef } from "react";
import "../Styles/categories.css";
import image1 from "../Images/category1.jpg";
import image2 from "../Images/category2.jpg";
import image3 from "../Images/category3.jpg";
import image4 from "../Images/category4.jpg";
import Arrowleft from "../Images/arrowright.svg";

const Categories = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="categories-main-all" ref={sliderRef}>
        <div className="item-1-main">
          <img src={image1} alt="Living Room" />
          <div className="under-main1">
            <span>
              <h3>Living Room</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="item-1-main">
          <img src={image2} alt="Bedroom" />
          <div className="under-main1">
            <span>
              <h3>Bedroom</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="item-1-main">
          <img src={image3} alt="Kitchen" />
          <div className="under-main1">
            <span>
              <h3>Kitchen</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="item-1-main">
          <img src={image4} alt="Bathroom" />
          <div className="under-main1">
            <span>
              <h3>Bathroom</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

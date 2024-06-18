import React, { useEffect, useRef } from "react";
import "../Styles/collections.css";
import image1 from "../Images/collection1.jpg";
import image2 from "../Images/collection2.jpg";
import image3 from "../Images/collection3.jpg";
import image4 from "../Images/collection4.jpg";
import image5 from "../Images/collection5.jpg";
import image6 from "../Images/collection5.jpg";
import Arrowleft from "../Images/arrowright.svg";

const Collections = () => {
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
      <div className="collections-main-all12" ref={sliderRef}>
        <div className="all-main12">
          <img src={image1} alt="Collection 1" />
          <div className="under-main112">
            <span>
              <h3>Collection 1</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="all-main12">
          <img src={image2} alt="Collection 2" />
          <div className="under-main112">
            <span>
              <h3>Collection 2</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="all-main12">
          <img src={image3} alt="Collection 3" />
          <div className="under-main112">
            <span>
              <h3>Collection 3</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="all-main12">
          <img src={image4} alt="Collection 4" />
          <div className="under-main112">
            <span>
              <h3>Collection 4</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="all-main12">
          <img src={image5} alt="Collection 5" />
          <div className="under-main112">
            <span>
              <h3>Collection 5</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
        <div className="all-main12">
          <img src={image6} alt="Collection 6" />
          <div className="under-main112">
            <span>
              <h3>Collection 6</h3>
              <img src={Arrowleft} alt="Arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;

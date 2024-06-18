import React, { useState } from "react";
import "../Styles/whychoose.css";

const Whychoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      title: "Locally-made furniture",
      description:
        "Choose locally-made furniture for superior quality and craftsmanship. High-quality materials sourced from the local area ensure unparalleled quality that exceeds global manufacturing standards. Imported furniture often involves lower quality materials and questionable durability to cut costs. Choose local, choose quality.",
    },
    {
      title: "Locally-made furniture123",
      description:
        "Choose locally-made furniture for superior quality and craftsmanship. High-quality materials sourced from the local area ensure unparalleled quality that exceeds global manufacturing standards. Imported furniture often involves lower quality materials and questionable durability to cut costs. Choose local, choose quality.",
    },
    {
      title: "Locally-made furniture",
      description:
        "Choose locally-made furniture for superior quality and craftsmanship. High-quality materials sourced from the local area ensure unparalleled quality that exceeds global manufacturing standards. Imported furniture often involves lower quality materials and questionable durability to cut costs. Choose local, choose quality.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="topwhychoose">
        <h1>Why choose Outbox?</h1>
      </div>
      <div className="slider-container">
        <div className="topwhychooseflex">
          {items.map((item, index) => (
            <div
              className={`grid-item-whychoose ${
                index === currentSlide ? "active" : ""
              }`}
              key={index}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;

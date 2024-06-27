import React, { useState } from "react";
import "../Styles/whychoose.css";

const Whychoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      title: "Locally-made furniture",
      description:
        "Our locally-made furniture showcases unparalleled craftsmanship and design expertise rooted in our community. Each piece reflects our commitment to quality and innovation, offering a unique blend of style and functionality.",
    },
    {
      title: "Crafted with Local Expertise",
      description:
        "Our locally-made furniture showcases unparalleled craftsmanship and design expertise rooted in our community. Each piece reflects our commitment to quality and innovation, offering a unique blend of style and functionality.",
    },
    {
      title: "Embrace Local Heritage",
      description:
        "Opting for our locally-made furniture celebrates our region's rich heritage and artisanal traditions. Each piece not only enhances your home with superior quality but also carries a story of local craftsmanship and cultural pride.",
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
              style={{ display: index === currentSlide ? "block" : "none" }} // Hide non-active slides
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button onClick={prevSlide} aria-label="Previous Slide">
            Previous
          </button>
          <button onClick={nextSlide} aria-label="Next Slide">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;

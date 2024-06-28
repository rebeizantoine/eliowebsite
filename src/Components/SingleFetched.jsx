import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/single.css";
import image2 from "../Images/imagelittle2.jpg";
import ruler from "../Images/ruler-svgrepo-com.svg";
import question from "../Images/question-circle-svgrepo-com.svg";
import location from "../Images/location-pin-alt-1-svgrepo-com.svg";
import whatsapp from "../Images/whatsapp.svg";
import ticksvg from "../Images/ticksvg.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../Components/CartContext";
import Modal from "../Components/Modal"; // Import the modal component

const SingleFetched = () => {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [selected, setSelected] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAdditionalDiv3, setShowAdditionalDiv3] = useState(false);
  const [showAdditionalDiv1, setShowAdditionalDiv1] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const itemId = localStorage.getItem("currentItemId");
    if (itemId) {
      axios
        .get(`https://eliowebsite.onrender.com/singleitem/${itemId}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.error("No item ID found in localStorage");
    }
  }, [name]);

  const data = [
    {
      title: "Dimensions & Specifications",
      svg: ruler,
      content: item ? item.item_dimensions : "Loading dimensions...",
    },
    {
      title: "Will the ordered item look like?",
      svg: question,
      content: "Curabitur accumsan lorem at neque dignissim.",
    },
    {
      title: "Where is your location?",
      svg: location,
      content: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    },
    {
      title: "Can I customize this piece?",
      svg: question,
      content: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSelect = (type) => {
    setSelected(type);
  };

  const handleBuyNow = () => {
    addToCart(item);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowAdditionalDiv3(window.innerWidth <= 350);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setShowAdditionalDiv1(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderContent = [
    { id: 1, src: item.item_image1, alt: item.item_name },
    { id: 2, src: image2, alt: item.item_name },
    { id: 3, src: image2, alt: item.item_name },
  ];

  const handleCustomizeClick = (e) => {
    e.preventDefault();
    setShowCustomizeModal(true);
  };

  const handleCloseModal = () => {
    setShowCustomizeModal(false);
  };

  const handleContactUs = () => {
    navigate("/contactus");
  };

  return (
    <div>
      <div className="single-container-123">
        <div className="image-left-1">
          <img src={item.item_image1} alt={item.item_name} />
          <div className="extra-images">
            <img src={image2} alt={item.item_name} />
            <img src={image2} alt={item.item_name} />
          </div>
        </div>
        <div className="right-everything">
          <div className="first">
            <h4>DESIGNED & PRODUCED BY OUTBOX SARL</h4>
            <h1>{item.item_name}</h1>
          </div>
          <div className="second">
            <h3>${item.item_price} USD</h3>
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
            <h4>Quantity available: {item.quantity ? item.quantity : 20}</h4>
          </div>
          <div className="fourth">
            <a href="" className="whatsapp-fourth">
              <span>
                <img className="fourth-image" src={whatsapp} alt="" />
                Order on Whatsapp
              </span>
            </a>
            <a
              href="#customize-modal"
              className="customise-fourth"
              onClick={handleCustomizeClick}
            >
              Customise
            </a>
            <button className="buyit-fourth" onClick={handleBuyNow}>
              Add To Cart
            </button>
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
              {data.map((accordionItem, index) => (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-title"
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex-option">
                      <img
                        src={accordionItem.svg}
                        alt={`${accordionItem.title} icon`}
                      />
                      <h3>{accordionItem.title}</h3>
                    </div>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="accordion-content">
                      <p>{accordionItem.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="seventh">
            <p>{item.item_description}</p>
            {showAdditionalDiv1 && (
              <div className="additional-div1">
                <Slider {...sliderSettings}>
                  {sliderContent.map((slide) => (
                    <div key={slide.id}>
                      <img src={slide.src} alt={slide.alt} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <div
              className="mkkmk
            "
            >
              {showAdditionalDiv3 && (
                <div className="additional-div3">
                  <Slider {...sliderSettings}>
                    {sliderContent.map((slide) => (
                      <div key={slide.id}>
                        <img src={slide.src} alt={slide.alt} />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="modalreal">
        <Modal isOpen={showCustomizeModal} onClose={handleCloseModal}>
          <h2>How would you like to customize {item.item_name}?</h2>
          <p>I'd like to make it white instead of black. Is it possible?</p>
          <p>If so, contact us now!</p>
          <a href="/contactus" className="contact-us-button">
            Contact Us
          </a>
        </Modal>
      </div>
    </div>
  );
};

export default SingleFetched;

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/LOGO.png";
import Logo2 from "../Images/Artboard 3.png";
import smartphone from "../Images/smartphone.png";
import Location from "../Images/location.png";
import { CartContext } from "../Components/CartContext";
import axios from "axios";
import closeIcon from "../Images/close-circle-svgrepo-com.svg";
import smartphone2 from "../Images/smartphone-free-svgrepo-com.svg";
import location2 from "../Images/location2.svg";
import logo2 from "../Images/logoblack.png";
import "../Styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems, emptyCart } = useContext(CartContext);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [contact, setContact] = useState({}); // Assuming you expect a single contact object
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility

  const handleNavigation = (path) => {
    navigate(path);
    setShowSidebar(false); // Close sidebar on navigation
  };

  const toggleCartPopup = () => {
    setShowCartPopup(!showCartPopup);
  };

  useEffect(() => {
    axios
      .get("https://eliowebsite.onrender.com/contactsjdd/")
      .then((response) => {
        // Assuming response.data is an array with a single contact object
        if (response.data.length > 0) {
          setContact(response.data[0]); // Set the first contact object
        }
      })
      .catch((error) => {
        console.error("Error fetching contact:", error);
      });
  }, []);

  return (
    <div>
      <div className="header-top">
        <div className="logo-container">
          <img
            src={Logo2}
            className="header-logo"
            alt="Logo"
            onClick={() => handleNavigation("/")}
          />
        </div>
        <div className="big-box-left">
          <div className="cart-icon-container" onClick={toggleCartPopup}>
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#ede4d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            {cartItems.length > 0 && (
              <div className="cart-icon-number">{cartItems.length}</div>
            )}
          </div>
          <div className="phone-box">
            <div className="icon-box">
              <img className="header-phone" src={smartphone2} alt="Phone" />
            </div>
            <div className="heading">
              <h4>Phone</h4>
              <p>{contact.contact_phonenumber}</p>
            </div>
          </div>
          <div className="phone-box">
            <div className="icon-box">
              <img className="header-location" src={location2} alt="Location" />
            </div>
            <div className="heading">
              <h4>Showroom</h4>
              <p>{contact.contact_location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-container">
        <nav className="nav-menu">
          <span
            className="hideOnMobile nav-item"
            onClick={() => handleNavigation("/")}
          >
            Home
          </span>
          <span
            className="hideOnMobile nav-item"
            onClick={() => handleNavigation("/artworks")}
          >
            Artworks
          </span>
          <span
            className="hideOnMobile nav-item"
            onClick={() => handleNavigation("/collection")}
          >
            Collections
          </span>
          <span
            className="hideOnMobile nav-item"
            onClick={() => handleNavigation("/abouttrial")}
          >
            About Us
          </span>

          <span
            className="hideOnMobile nav-item"
            onClick={() => handleNavigation("/contactus")}
          >
            Contact Us
          </span>
          <li className="menu-button" onClick={() => setShowSidebar(true)}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 96 960 960"
                width="26"
                fill="#fff"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </nav>
        {showSidebar && (
          <nav className="bigger-1">
            <ul className="sidebar123">
              <li onClick={() => setShowSidebar(false)}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26"
                    viewBox="0 96 960 960"
                    width="26"
                  >
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231-231 231Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/" onClick={() => handleNavigation("/")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/artworks"
                  onClick={() => handleNavigation("/artworks")}
                >
                  Artworks
                </a>
              </li>
              <li>
                <a
                  href="/collection"
                  onClick={() => handleNavigation("/collection")}
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/abouttrial"
                  onClick={() => handleNavigation("/abouttrial")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  onClick={() => handleNavigation("/contactus")}
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="#">Login</a>
              </li> */}
            </ul>
          </nav>
        )}
      </div>

      <div className="info-bar">
        <span>Fast delivery</span>
        <span>Cash on delivery</span>
        <span>We can discuss prices</span>
      </div>

      {showCartPopup && (
        <div className="cart-popup">
          <h3>Cart Items</h3>
          <button
            className="close-popup"
            onClick={() => setShowCartPopup(false)}
          >
            <img src={closeIcon} alt="Close" />
          </button>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.item_image1}
                    alt={item.item_name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p>{item.item_name}</p>
                    <p>Color: {item.item_color1}</p>
                    <p>${item.item_price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="cart-popup-actions">
            <button
              onClick={() => {
                emptyCart();
                setShowCartPopup(false);
              }}
            >
              Empty Cart
            </button>
            <button onClick={() => handleNavigation("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

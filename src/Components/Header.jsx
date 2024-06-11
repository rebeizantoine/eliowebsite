import React, { useState, useEffect, useRef } from "react";
import Logo from "../Images/LOGO.png";
import smartphone from "../Images/smartphone.png";
import Location from "../Images/location.png";
import searchIcon from "../Images/search.png"; // Import the search icon image
import "../Styles/header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="header-top">
        <div className="logo-container">
          <img src={Logo} className="header-logo" alt="Logo" />
        </div>
        <div className="big-box-left">
          <div className="phone-box">
            <div className="icon-box">
              <img className="header-phone" src={smartphone} alt="Phone" />
            </div>
            <div className="heading">
              <h4>Showroom</h4>
              <p>Adonis, Zouk Mosbeh</p>
            </div>
          </div>
          <div className="phone-box">
            <div className="icon-box">
              <img className="header-location" src={Location} alt="Location" />
            </div>
            <div className="heading">
              <h4>Showroom</h4>
              <p>Adonis, Zouk Mosbeh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-bar">
        <span>Fast delivery</span>
        <span>Cash on delivery</span>
        <span>We can discuss prices</span>
      </div>
      <div className="nav-container">
        <div className="search-container" ref={searchRef}>
          <img
            src={searchIcon}
            className="search-icon"
            alt="Search"
            onClick={toggleSearch}
          />
          {showSearch && (
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              autoFocus
            />
          )}
        </div>
        <nav className="nav-menu">
          <span className="nav-item">Home</span>
          <span className="nav-item">Steelwork</span>
          <span className="nav-item">Projects</span>
          <span className="nav-item">Metal Wall Art</span>
          <span className="nav-item">What We Do</span>
          <span className="nav-item">Contact Us</span>
        </nav>
      </div>
    </div>
  );
};

export default Header;

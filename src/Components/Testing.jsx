import React, { useState } from 'react';
import horizontal from "../Images/vertical.png";
import Logo from "../Images/LOGO.png";
import '../Styles/testing.css'; // Import the CSS file

const Testing = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State variable to track if menu is open or closed
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen); // Toggle menuOpen state
  };
  return (
    <div className={`mobile-container ${menuOpen ? 'menu-open' : ''}`}>
      <div className="topnav">
        <a href="#home" className="active">
          <img src={Logo} alt="Logo" />
        </a>
        <div id="myLinks" className={menuOpen ? "show" : ""}>
          <a href="#news" className="link">Home</a>
          <a href="#contact" className="link">Steelwork</a>
          <a href="#about" className="link">Projects</a>
          <a href="#MWA" className="link">Metal Wall Art</a>
          <a href="#about" className="link">What we do</a>
          <a href="#Contact" className="link">Contact us</a>
        </div>
        <a className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Testing;
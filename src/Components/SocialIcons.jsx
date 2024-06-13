import React, { useState } from "react";
import "../Styles/socialicons.css"; // Import your CSS file
import { ReactComponent as InstagramIcon } from "../Images/instagram.svg"; // Import SVG as React component
import { ReactComponent as FacebookIcon } from "../Images/facebook.svg"; // Import SVG as React component
import { ReactComponent as WhatsappIcon } from "../Images/whatsapp.svg"; // Import SVG as React component
import { ReactComponent as GmailIcon } from "../Images/gmail.svg"; // Import SVG as React component

const SocialIcons = () => {
  // State to handle hover effect
  const [hovered, setHovered] = useState(null);

  // Function to handle hover
  const handleHover = (icon) => {
    setHovered(icon);
  };

  // Function to handle hover out
  const handleHoverOut = () => {
    setHovered(null);
  };

  return (
    <div className="social-icons-container">
      <div className="social-icons-group social-icons-up">
        <button
          className="social-icon-card social-icon-card1"
          onMouseEnter={() => handleHover("instagram")}
          onMouseLeave={handleHoverOut}
        >
          <InstagramIcon
            className={`social-icon instagram ${
              hovered === "instagram" ? "icon-hovered" : ""
            }`}
          />
        </button>
        <button
          className="social-icon-card social-icon-card2"
          onMouseEnter={() => handleHover("facebook")}
          onMouseLeave={handleHoverOut}
        >
          <FacebookIcon
            className={`social-icon facebook ${
              hovered === "facebook" ? "icon-hovered" : ""
            }`}
          />
        </button>
      </div>
      <div className="social-icons-group social-icons-down">
        <button
          className="social-icon-card social-icon-card3"
          onMouseEnter={() => handleHover("whatsapp")}
          onMouseLeave={handleHoverOut}
        >
          <WhatsappIcon
            className={`social-icon whatsapp ${
              hovered === "whatsapp" ? "icon-hovered" : ""
            }`}
          />
        </button>
        <button
          className="social-icon-card social-icon-card4"
          onMouseEnter={() => handleHover("gmail")}
          onMouseLeave={handleHoverOut}
        >
          <GmailIcon
            className={`social-icon gmail ${
              hovered === "gmail" ? "icon-hovered" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;

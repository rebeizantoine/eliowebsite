import React, { useState } from "react";
import "../Styles/footer.css";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Regular expression to check if the email format is valid
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    setIsValid(isValidEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      alert("Please enter a valid email address");
      return;
    }
    // Here you can handle the submission of the email (e.g., send to backend or API)
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h1 className="footer-title">Want to pay less?</h1>
        <p className="footer-description">
          Subscribe to our emails to receive occasional exclusive promotions.
        </p>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`footer-input ${!isValid ? "input-error" : ""}`}
          />
          <button type="submit" className="footer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right footer-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;

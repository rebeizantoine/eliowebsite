import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const backtohome = () => {
    navigate("/");
  };
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="not-found-text">It might have been moved or deleted.</p>
      <a href="/" className="not-found-link" onClick={backtohome}>
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;

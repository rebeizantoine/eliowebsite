import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/paymentStatus.css";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="status-container cancel">
      <div className="status-card">
        <h1 className="status-title">❌ Payment Cancelled</h1>
        <p className="status-text">Your payment was not completed.</p>

        <p className="status-subtext">
          You can try again or return to the homepage.
        </p>

        <div className="status-actions">
          <button
            className="status-button retry"
            onClick={() => navigate("/purchase")}
          >
            Try Again
          </button>

          <button className="status-button" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cancel;

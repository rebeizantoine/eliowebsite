import React from "react";
import { useNavigate } from "react-router-dom";
import BrushLogopng from "../Images/LOGO.png";

function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page
    navigate("/");
  };
  const handleheaderclick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <a href="#header">
          <img
            className="logo-maya"
            src={BrushLogopng}
            alt="Logo"
            onClick={handleheaderclick}
          />
        </a>
        <p>Welcome to Your Dashboard</p>
        <button className="log-out" onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
      <hr className="hr-header" />
    </div>
  );
}

export default DashboardHeader;

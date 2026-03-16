import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSkills from "./DashboardSkills";
import "./Styles/dashboard.css";
import Featureditems from "./Featureditems";
import ArtistDashboard from "./ArtistDashboard";
import Categories123 from "./Categories123";
import Collections123 from "./collections123";
import PurchasedDashboard from "./PurchaseDashboard";

function Dashboard() {
  return (
    <div className="all-dashboard">
      <DashboardHeader />
      <DashboardSidebar />
      <div className="main" style={{ marginLeft: "220px", padding: "20px" }}>
        <section id="featureditems">
          <Featureditems />
        </section>
        <section id="artists">
          <ArtistDashboard />
        </section>
        <section id="contactus">
          <DashboardSkills />
        </section>
        <section id="categories">
          <Categories123 />
        </section>
        <section id="collections">
          <Collections123 />
        </section>
        <section id="Orders">
          <PurchasedDashboard />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

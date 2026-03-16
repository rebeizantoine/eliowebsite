import React from "react";
import Header from "../Header";
import Hero1 from "../Hero1";
import Section1 from "../Section1";
import Collections from "../Collections";
import About from "../About";
import Whychoose from "../Whychoose";
import Designers from "../Designers";
import Footer from "../Footer";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Hero1 />
      <Section1 />
      <Collections />
      <About />
      <Whychoose />
      <Designers />
      <Footer />
    </>
  );
};

export default HomeLayout;

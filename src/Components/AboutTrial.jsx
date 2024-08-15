import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/aboutustrial.css";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";
// import image3 from "../Images/exhibition3.jpg"; // Ensure this is the correct image path

const AboutUsTrial = () => {
  const [aboutData, setAboutData] = useState(null);
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/about/"
        );
        console.log("About Data:", response.data);
        setAboutData(response.data[0]); // Assuming the response contains an array with a single object
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    const fetchContactData = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/contact123/"
        );
        console.log("Contact Data:", response.data);
        setContactData(response.data); // Assuming the response contains an object
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchAboutData();
    fetchContactData();
  }, []);

  // useEffect(() => {
  //   if (aboutData && contactData) {
  //     const sr = ScrollReveal({
  //       distance: "60px",
  //       duration: 1000,
  //       delay: 200,
  //       reset: true,
  //     });

  //     sr.reveal(".Trial-main-title, .aboutus-section-title", {
  //       delay: 700,
  //       origin: "left",
  //     });
  //     sr.reveal(".aboutus-sec-01 .aboutus-image, .aboutus-info", {
  //       delay: 800,
  //       origin: "bottom",
  //     });
  //     sr.reveal(".aboutus-text-box", {
  //       delay: 900,
  //       origin: "right",
  //     });
  //     sr.reveal(".aboutus-media-icons i", {
  //       delay: 700,
  //       origin: "bottom",
  //       interval: 200,
  //     });
  //     sr.reveal(".aboutus-sec-02 .aboutus-image, .aboutus-sec-03 img", {
  //       delay: 800,
  //       origin: "top",
  //     });
  //     sr.reveal(".aboutus-media-info li", {
  //       delay: 700,
  //       origin: "left",
  //       interval: 200,
  //     });
  //   }
  // }, [aboutData, contactData]);

  if (!aboutData || !contactData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="aboutus-container">
      <section className="aboutus-sec-01">
        <div className="aboutus-inner-container">
          <h2 className="aboutus-main-title">About Us</h2>
          <div className="aboutus-content">
            <div className="aboutus-image">
              <img
                src={aboutData.aboutimg1 || image1}
                alt="Exhibition"
                loading="lazy"
              />
            </div>
            <div className="aboutus-text-box">
              <h3>Welcome to Bridging Bridges</h3>
              <p>{aboutData.abouttext1}</p>
            </div>
          </div>
          <div className="aboutus-media-icons">
            <a
              href={contactData.contact_facebook_link}
              className="aboutus-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href={contactData.contact_instagram_link}
              className="aboutus-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href={contactData.contact_youtube_link} className="aboutus-icon">
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href={contactData.contact_pinterest_link}
              className="aboutus-icon"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="aboutus-sec-02">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-section-title">Our Mission</h3>
          <div className="aboutus-content">
            <div className="aboutus-image">
              <img
                src={aboutData.aboutimg2 || image2}
                alt="Mission"
                loading="lazy"
              />
            </div>
            <div className="aboutus-info">
              <h4 className="aboutus-info-title">
                Connecting Artists and Audience
              </h4>
              <p>{aboutData.abouttext2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-sec-03">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-section-title">Follow Us</h3>
          <div className="aboutus-content">
            <div className="aboutus-media-info">
              <ul>
                <li>
                  <a
                    href={contactData.contact_facebook_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_instagram_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_youtube_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_pinterest_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-pinterest"></i> Pinterest
                  </a>
                </li>
              </ul>
            </div>
            <div className="aboutus-image">
              <img src={aboutData.aboutimg3} alt="Community" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsTrial;

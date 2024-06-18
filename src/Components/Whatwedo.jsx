import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/whatwedo.css";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // Dummy data
    const dummyAboutData = {
      aboutimg1: image1,
      aboutimg2: image2,
      aboutimg3: null,
      abouttext1:
        "Welcome to Bridging Bridges. We are committed to connecting artists with their audience.",
      abouttext2:
        "Our mission is to create a platform where artists can showcase their work and connect with art enthusiasts.",
    };

    const dummyContactData = {
      contact_facebook_link: "https://facebook.com",
      contact_instagram_link: "https://instagram.com",
      contact_youtube_link: "https://youtube.com",
      contact_pinterest_link: "https://pinterest.com",
    };

    setAboutData(dummyAboutData);
    setContactData(dummyContactData);

    // ScrollReveal animations (faster settings)
    const sr = ScrollReveal({
      distance: "40px", // Decreased distance for a more subtle effect
      duration: 500, // Faster animation duration
      delay: 100, // Reduced delay
      reset: true,
    });

    sr.reveal(".aboutus-main-title, .aboutus-section-title", {
      delay: 200, // Faster start
      origin: "left",
    });
    sr.reveal(".aboutus-sec-01 .aboutus-image, .aboutus-info", {
      delay: 300, // Faster start
      origin: "bottom",
    });
    sr.reveal(".aboutus-text-box", {
      delay: 400, // Faster start
      origin: "right",
    });
    sr.reveal(".aboutus-media-icons i", {
      delay: 200, // Faster start
      origin: "bottom",
      interval: 100, // Faster interval between elements
    });
    sr.reveal(".aboutus-sec-02 .aboutus-image, .aboutus-sec-03 img", {
      delay: 300, // Faster start
      origin: "top",
    });
    sr.reveal(".aboutus-media-info li", {
      delay: 200, // Faster start
      origin: "left",
      interval: 100, // Faster interval between elements
    });
  }, []);

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
              <img src={aboutData.aboutimg1} alt="Exhibition" loading="lazy" />
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
              <img src={aboutData.aboutimg2} alt="Mission" loading="lazy" />
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
        {/* <div className="aboutus-inner-container">
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
            {aboutData.aboutimg3 && (
              <div className="aboutus-image">
                <img src={aboutData.aboutimg3} alt="Community" loading="lazy" />
              </div>
            )}
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default AboutUs;

import React, { useEffect } from "react";
import "../Styles/footer.css";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  // Load Tally embeds when component mounts
  useEffect(() => {
    const loadTallyEmbeds = () => {
      // Check if Tally is defined
      if (
        typeof window !== "undefined" &&
        typeof window.Tally !== "undefined"
      ) {
        window.Tally.loadEmbeds();
      } else {
        // Tally script not loaded, load it dynamically
        const scriptUrl = "https://tally.so/widgets/embed.js";
        const scriptElement = document.createElement("script");
        scriptElement.src = scriptUrl;
        scriptElement.async = true;
        scriptElement.onload = () => {
          if (
            typeof window !== "undefined" &&
            typeof window.Tally !== "undefined"
          ) {
            window.Tally.loadEmbeds();
          } else {
            console.error("Failed to load Tally script.");
          }
        };
        scriptElement.onerror = () => {
          console.error("Failed to load Tally script.");
        };
        document.body.appendChild(scriptElement);
      }
    };

    loadTallyEmbeds();
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <h2>Quick Links</h2>
        <nav className="footer-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/artworks">Artworks</a>
            </li>
            <li>
              <a href="/collection">Our Collections</a>
            </li>
            {/* <li>
              <a href="#">Privacy Policy</a>
            </li> */}
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-content">
        <h1 className="footer-title">Want to pay less?</h1>
        {/* Tally Newsletter Signup iframe */}
        <iframe
          data-tally-src="https://tally.so/embed/mZVgQA?alignLeft=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="209"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Newsletter sign-up"
        ></iframe>
        {/* End of Tally iframe */}
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;

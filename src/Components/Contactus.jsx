import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    // Create and append the Tally widget script to the document head
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    script.onerror = () => {
      console.error("Failed to load the Tally script.");
    };

    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        data-tally-src="https://tally.so/r/3qBpj2?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Us form"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
        }}
      ></iframe>
    </div>
  );
};

export default ContactUs;

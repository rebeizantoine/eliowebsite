import React, { useEffect } from "react";

const Contactus = () => {
  useEffect(() => {
    // Create and append the Tally widget script to the document head
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // Load Tally embeds after the script is loaded
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/3qBpj2?transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="1015"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Contact Us form"
    ></iframe>
  );
};
export default Contactus;

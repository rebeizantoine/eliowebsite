import React, { useEffect } from "react";

const TallyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/n0MloZ?alignLeft=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="1500"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Community Manager-Full-time contract-Codewithguillaume.com"
    ></iframe>
  );
};

export default TallyEmbed;

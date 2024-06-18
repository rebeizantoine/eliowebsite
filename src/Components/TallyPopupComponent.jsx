import React, { useEffect } from "react";

const TallyPopupComponent = ({ formId }) => {
  useEffect(() => {
    if (formId) {
      const options = {
        layout: "modal",
        width: 700,
        autoClose: 5000,
        // Add more options as needed
      };

      // eslint-disable-next-line no-undef
      Tally.openPopup(formId, options);

      return () => {
        // eslint-disable-next-line no-undef
        Tally.closePopup(formId);
      };
    }
  }, [formId]);

  return null;
};

export default TallyPopupComponent;

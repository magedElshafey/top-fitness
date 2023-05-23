import React from "react";
import PrivacyDetails from "../component/Privacy/PrivacyDetails";

const Privacy = ({ lang }) => {
  return (
    <div className="mt pt-4">
      <PrivacyDetails lang={lang} />
    </div>
  );
};

export default Privacy;

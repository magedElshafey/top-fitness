import React from "react";
import AboutDetails from "../component/aboutPage/AboutDetails";

const AboutUs = ({ lang }) => {
  return (
    <div className="mt py-4">
      <AboutDetails lang={lang} />
    </div>
  );
};

export default AboutUs;

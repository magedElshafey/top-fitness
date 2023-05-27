import React from "react";
import AboutDetails from "../component/aboutPage/AboutDetails";

const AboutUs = ({ lang, about }) => {
  return (
    <div className="mt py-4">
      <AboutDetails about={about} lang={lang} />
    </div>
  );
};

export default AboutUs;

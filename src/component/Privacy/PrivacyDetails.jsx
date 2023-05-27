import React from "react";
import style from "./privacy.module.css";
const PrivacyDetails = ({ lang, desc }) => {
  return (
    <div className="container main">
      <h2
        className={`text-center mb-5 fw-bolder fs-1 ${style.title}`}
        data-aos="fade-up"
        data-aos-delau="400"
      >
        {lang === "ar" ? "سياسة الخصوصية" : "Policy"}
      </h2>
      <p className="lh">{desc}</p>
    </div>
  );
};

export default PrivacyDetails;

import React from "react";
import style from "./footer.module.css";
import logo from "../../../assets/logo.jpg";
import { social } from "../../../fakers/data";
const Footer = ({ lang }) => {
  return (
    <div className={`pt-4 pb-1 ${style.mainContainer}`}>
      <div className="container">
        <div className="d-none d-md-flex justify-content-between">
          {/*logo container*/}
          <div className={style.logoContainer}>
            <img
              alt="logo/img"
              loading="lazy"
              src={logo}
              className={style.mainImg}
            />
          </div>
          <div>
            <p className="fs-5 mt-0 mx-0 mb-4 text-white fw-bolder">
              {lang === "ar" ? "روابط مهمة" : "Important links"}
            </p>
            <ul>
              <li className="mb-2 text-white">
                {lang === "ar" ? "من نحن " : "About Us"}
              </li>
              <li className="mb-2 text-white">
                {lang === "ar" ? "سياسة الخصوصية" : "Policy"}
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex   align-items-center flex-column gap-4 d-md-none">
          <div className={style.logoContainer}>
            <img
              alt="logo/img"
              loading="lazy"
              src={logo}
              className={style.mainImg}
            />
          </div>
          <div>
            <p
              className={`text-center mb-4 text-white fw-bolder ${
                lang === "ar" ? "text-md-end" : "text-md-start"
              }`}
            >
              {lang === "ar" ? "روابط مهمة" : "Important links"}
            </p>
            <ul className="d-flex flex-column align-items-center justify-content-center">
              <li className="mb-2 text-white ">
                {lang === "ar" ? "من نحن " : "About Us"}
              </li>
              <li className="mb-2 text-white">
                {lang === "ar" ? "سياسة الخصوصية" : "Policy"}
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-5 mb-2 d-flex flex-wrap justify-content-md-center align-items-center gap-3 ${
            lang === "ar" ? "justify-content-end" : "justify-content-start"
          }`}
        >
          {social.map((item, index) => (
            <a target="_blank" key={index} href={item.path}>
              <img
                src={item.img}
                alt="socialmedia/img"
                className={style.social}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

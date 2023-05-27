import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import face from "../../../assets/socialmedia/icons8-facebook-48.png";
import twitter from "../../../assets/socialmedia/icons8-twitter-48.png";
import youtube from "../../../assets/socialmedia/icons8-youtube-48.png";
import insta from "../../../assets/socialmedia/icons8-instagram-48.png";
import tiktok from "../../../assets/socialmedia/icons8-tiktok-48.png";
import snap from "../../../assets/socialmedia/icons8-snapchat-circled-logo-48.png";
const Footer = ({ lang, follow, logo }) => {
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
              <li className="mb-3">
                <Link className="text-white" to="/about">
                  {lang === "ar" ? "من نحن " : "About Us"}
                </Link>
              </li>
              <li className="mb-3">
                <Link className="text-white" to="/privacy">
                  {lang === "ar" ? "سياسة الخصوصية" : "Policy"}
                </Link>
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
                <Link className="text-white" to="/about">
                  {lang === "ar" ? "من نحن " : "About Us"}
                </Link>
              </li>
              <li className="mb-2 text-white">
                <Link className="text-white" to="/privacy">
                  {lang === "ar" ? "سياسة الخصوصية" : "Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mt-5 mb-2 d-flex flex-wrap justify-content-md-center align-items-center gap-3 ${
            lang === "ar" ? "justify-content-end" : "justify-content-start"
          }`}
        >
          {/*facebook*/}
          <a target="_blank" href={follow.facebook}>
            <img src={face} alt="face/img" className={style.social} />
          </a>
          {/*insta*/}
          <a target="_blank" href={follow.instagram}>
            <img src={insta} alt="face/img" className={style.social} />
          </a>
          {/*twitter*/}
          <a target="_blank" href={follow.twitter}>
            <img src={twitter} alt="face/img" className={style.social} />
          </a>
          {/*youtube*/}
          <a target="_blank" href={follow.youtube}>
            <img src={youtube} alt="face/img" className={style.social} />
          </a>
          {/*tiktok*/}
          <a target="_blank" href={follow.tiktok}>
            <img src={tiktok} alt="face/img" className={style.social} />
          </a>
          {/*snap*/}
          <a target="_blank" href={follow.snapchat}>
            <img src={snap} alt="face/img" className={style.social} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/*
   {social.map((item, index) => (
            <a target="_blank" key={index} href={item.path}>
              <img
                src={item.img}
                alt="socialmedia/img"
             
              />
            </a>
          ))}
*/

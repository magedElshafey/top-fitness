import React from "react";
import style from "./heroImg.module.css";
import { Link } from "react-router-dom";
const HeroImg = ({ img, isLink, path }) => {
  return (
    <div className="overflow-x-hidden">
      {isLink && (
        <a
          href={path}
          target="_blank"
          className={` p-0 row position-relative ${style.imgContainer}`}
        >
          <img
            alt="hero/img"
            src={img}
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`p-0 col-12 ${style.mainImg}`}
          />
          <div className={style.overlay}></div>
        </a>
      )}
      {!isLink && (
        <div className={` p-0 row position-relative ${style.imgContainer}`}>
          <img
            alt="hero/img"
            src={img}
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`p-0 col-12 ${style.mainImg}`}
          />
          <div className={style.overlay}></div>
        </div>
      )}
    </div>
  );
};

export default HeroImg;
/*
   <div className="container">
      
      
    </div>
*/

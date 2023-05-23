import React from "react";
import style from "./Rev.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { rev } from "../../../fakers/data";
const Rev = ({ lang }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 8,
    navigation: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="container py-3">
      <h2
        className={`${style.title} fw-bolder fs-1 mb-3 `}
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        {lang === "ar" ? "أراء العملاء" : "Reveiws"}
      </h2>
      <Swiper modules={[Autoplay, Navigation, Pagination]} {...swiperOptions}>
        {rev.map((item, index) => (
          <SwiperSlide key={index} className={`pt-5 ${style.slider}`}>
            <img src={item} alt="reveiw/img" className={style.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rev;

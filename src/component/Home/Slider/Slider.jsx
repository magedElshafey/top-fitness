import React from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
// import { slider } from "../../../fakers/data";
const Slider = ({ slider }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 1500,
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
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          {...swiperOptions}
          className="mySwiper"
        >
          {slider.map((item, index) => (
            <SwiperSlide key={index} className="slider position-relative">
              <img className="slideImg" alt="slider/img" src={item.image} />
              <div className="overlay"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

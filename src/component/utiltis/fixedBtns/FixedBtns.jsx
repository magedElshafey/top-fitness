import React, { useState, useEffect } from "react";
import style from "./btn.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import whatsIcon from "../../../assets/socialmedia/icons8-whatsapp-48.png";
const FixedBtns = ({ whats }) => {
  const [showBtn, setShowBtn] = useState(false);
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <button
        onClick={handleBackToTop}
        className={`${style.backBtn} ${showBtn ? style.show : style.hide}`}
      >
        <AiOutlineArrowUp size={30} />
      </button>
      <button
        className={`${style.whatsBtn} ${showBtn ? style.show : style.hide}`}
      >
        <a href={`https://wa.me/${whats}`} target="_blank">
          <img src={whatsIcon} alt="img" />
        </a>
      </button>
    </div>
  );
};

export default FixedBtns;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLang } from "../../../Redux/lang.js";
import style from "./nav.module.css";
import logo from "../../../assets/logo.jpg";
import { navLinks } from "../../../fakers/data";
import { NavHashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Nav = ({ lang }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {/*larg screen view*/}
      <div className="d-none d-md-block p-0 m-0">
        <div
          className={`d-flex justify-content-between align-items-center py-4  ${style.navContainer}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            {/*logo container*/}
            <div className={style.logoContainer}>
              <img
                alt="logo/img"
                src={logo}
                className={style.logo}
                loading="lazy"
              />
            </div>
            {/*links container*/}
            <ul className="d-flex align-items-center gap-4 p-0 m-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavHashLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="navLinks"
                  >
                    {lang === "ar" ? link.arabicTitle : link.title}
                  </NavHashLink>
                </li>
              ))}
              <li className="dropdown">
                <button
                  className="btn langBtn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang === "en" ? "en" : "العربية"}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li
                    onClick={() => {
                      dispatch(changeLang("en"));
                      window.location.reload();
                    }}
                    className="dropdown-item active"
                  >
                    {lang === "en" ? "En" : "الانجليزية"}
                  </li>
                  <li
                    onClick={() => {
                      dispatch(changeLang("ar"));
                      window.location.reload();
                    }}
                    className="dropdown-item"
                  >
                    {lang === "en" ? "ar" : "العربية"}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*mobile view*/}
      <div className="d-md-none">
        <div
          className={`d-flex justify-content-between align-items-center py-4  ${style.navContainer}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div className={style.logoContainer}>
              <img
                alt="logo/img"
                src={logo}
                className={style.logo}
                loading="lazy"
              />
            </div>
            {!showSideBar && (
              <GiHamburgerMenu
                size={30}
                className={`pointer ${style.menu}`}
                onClick={() => setShowSideBar(true)}
              />
            )}
          </div>

          <div
            className={`${style.overlay} ${
              showSideBar ? style.showOverLay : style.hideOverLay
            }`}
          ></div>
          <div
            className={`p-3 ${style.sidebar} ${style.overlay} ${
              showSideBar ? style.show : style.hide
            }`}
          >
            <AiOutlineClose
              size={20}
              className={`pointer ${style.closeIcon}`}
              onClick={() => setShowSideBar(false)}
            />
            <ul className="pt-5 px-0 m-0 w-100">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="mb-4 w-100"
                  onClick={() => setShowSideBar(false)}
                >
                  <NavHashLink
                    to={link.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="navLinks w-100"
                  >
                    {lang === "ar" ? link.arabicTitle : link.title}
                  </NavHashLink>
                </li>
              ))}
              <li className="dropdown">
                <button
                  className="btn langBtn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang === "en" ? "en" : "العربية"}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li
                    onClick={() => {
                      dispatch(changeLang("en"));
                      window.location.reload();
                    }}
                    className="dropdown-item active"
                  >
                    {lang === "en" ? "En" : "الانجليزية"}
                  </li>
                  <li
                    onClick={() => {
                      dispatch(changeLang("ar"));
                      window.location.reload();
                    }}
                    className="dropdown-item"
                  >
                    {lang === "en" ? "ar" : "العربية"}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

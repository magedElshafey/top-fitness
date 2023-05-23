import React, { useState, useEffect } from "react";
import Aos from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./component/layout/navbar/Nav";
import Footer from "./component/layout/footer/Footer.jsx";
import Home from "./pages/Home";
const App = () => {
  const lang = useSelector((state) => state.langSlice.lang);
  // handle lang
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [lang]);
  // handle animation effect
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);

  // handle scroll to top
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <div>
      <Router>
        <ScrollToTopAfterChangePage />
        <Nav lang={lang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
        </Routes>
        <Footer lang={lang} />
      </Router>
    </div>
  );
};

export default App;

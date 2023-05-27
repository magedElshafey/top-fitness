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
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
import BMI from "./pages/BMI";
import BmiResult from "./pages/BmiResult";
import Check from "./pages/Check";
import Spinner from "./component/spinner/Spinner";
import Meta from "./component/utiltis/Meta";
import HeaderContact from "./component/Home/headerContact/HeaderContact";
import FixedBtns from "./component/utiltis/fixedBtns/FixedBtns";
const App = () => {
  const api = "https://fitnes.technomasrsystems.com/api";
  const lang = useSelector((state) => state.langSlice.lang);
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState("");
  const [webTitle, setWebTitle] = useState("");
  const [webDesc, setWebDesc] = useState("");
  const [contact, setContact] = useState({});
  const [whats, setWhats] = useState("");
  const [firstBanner, setFirstBanner] = useState("");
  const [secondBanner, setSecondBanner] = useState({});
  const [slider, setSlider] = useState([]);
  const [productsTitle, setProductsTitle] = useState("");
  const [productsDesc, setProductsDesc] = useState("");
  const [firstProducts, setFirstProducts] = useState([]);
  const [secondProducts, setSecondProducts] = useState([]);
  const [rev, setRev] = useState([]);
  const [about, setAbout] = useState({});
  const [cities, setCities] = useState([]);
  const [follow, setFollow] = useState([]);
  console.log("hello from cities in app", cities);
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
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api}/home`, {
        method: "GET",
        headers: {
          lang,
        },
      });
      const data = await res.json();
      if (data.status) {
        setLogo(data.data.general.logo);
        setWebTitle(data.data.general.title);
        setWebDesc(data.data.general.description);
        setContact(data.data.contactus);
        setFirstBanner(data.data.banners.mainSlider);
        setSecondBanner(data.data.banners.MiddleBanner);
        setSlider(data.data.banners.secondSlider);
        setAbout(data.data.aboutus);
        setFirstProducts(data.data.products.first);
        setProductsTitle(data.data.products.title);
        setProductsDesc(data.data.products.description);
        setSecondProducts(data.data.products.second);
        setRev(data.data.reviews);
        setFollow(data.data.followUs);
        setCities(data.data.cities);
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Router>
          <Meta title={webTitle} desc={webDesc} logo={logo} />
          <ScrollToTopAfterChangePage />
          <FixedBtns whats={contact.whatsapp} />
          <HeaderContact contact={contact} />
          <Nav logo={logo} lang={lang} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  firstBanner={firstBanner}
                  slider={slider}
                  secondBanner={secondBanner}
                  about={about}
                  firstProducts={firstProducts}
                  secondProducts={secondProducts}
                  rev={rev}
                  lang={lang}
                  title={productsTitle}
                  desc={productsDesc}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/about"
              element={<AboutUs about={about} lang={lang} />}
            />
          </Routes>
          <Routes>
            <Route path="/privacy" element={<Privacy lang={lang} />} />
          </Routes>
          <Routes>
            <Route path="/calc" element={<BMI lang={lang} />} />
          </Routes>
          <Routes>
            <Route path="/calc/details" element={<BmiResult lang={lang} />} />
          </Routes>
          <Routes>
            <Route path="/check" element={<Check api={api} lang={lang} />} />
          </Routes>
          <Footer follow={follow} lang={lang} logo={logo} />
        </Router>
      )}
    </div>
  );
};

export default App;

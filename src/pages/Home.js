import React from "react";
import hero from "../assets/hero.jpg";
import HeroImg from "../component/utiltis/heroImg/HeroImg";
import Slider from "../component/Home/Slider/Slider";
import About from "../component/Home/about/About";
import Store from "../component/Home/store/Store";
import { data1, data2 } from "../fakers/data";
import Rev from "../component/Home/Reveiws/Rev";
const Home = ({
  lang,
  firstBanner,
  secondBanner,
  rev,
  about,
  firstProducts,
  secondProducts,
  title,
  desc,
  slider,
}) => {
  return (
    <div className=" pb-3 mt">
      <HeroImg img={firstBanner} isLink={false} />
      <Slider slider={slider} />
      <About about={about} lang={lang} />
      <Store
        isTitle={true}
        data={firstProducts}
        lang={lang}
        title={title}
        desc={desc}
      />
      <HeroImg
        img={secondBanner.image}
        isLink={true}
        path={secondBanner.link}
      />
      <Store isTitle={false} data={secondProducts} />
      <Rev lang={lang} rev={rev} />
    </div>
  );
};

export default Home;

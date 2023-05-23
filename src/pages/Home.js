import React from "react";
import hero from "../assets/hero.jpg";
import HeroImg from "../component/utiltis/heroImg/HeroImg";
import Slider from "../component/Home/Slider/Slider";
import About from "../component/Home/about/About";
import Store from "../component/Home/store/Store";
import { data1, data2 } from "../fakers/data";
const Home = ({ lang }) => {
  return (
    <div className=" py-4 mt">
      <HeroImg img={hero} isLink={false} />
      <Slider />
      <About lang={lang} />
      <Store isTitle={true} data={data1} lang={lang} />
      <HeroImg img={hero} isLink={true} path="https://www.google.com" />
      <Store isTitle={false} data={data2} />
    </div>
  );
};

export default Home;

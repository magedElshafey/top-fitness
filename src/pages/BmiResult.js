import React from "react";
import Intro from "../component/bmiResult/intro/Intro";
import Calories from "../component/bmiResult/Calories/Calories";

const BmiResult = ({ lang }) => {
  const data = JSON.parse(window.localStorage.getItem("userData"));
  return (
    <div className="mt main pt-4">
      <Intro data={data} lang={lang} />
      <Calories data={data} lang={lang} />
    </div>
  );
};

export default BmiResult;

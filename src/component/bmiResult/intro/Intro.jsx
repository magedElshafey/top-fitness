import React from "react";
import style from "./intro.module.css";
import { useNavigate } from "react-router-dom";
const Intro = ({ data, lang }) => {
  const navigate = useNavigate();
  let textActivity;
  if (data.activity === "1.1") {
    textActivity = "sedentary (office job)";
  }
  if (data.activity === "1.2") {
    textActivity = "light exercise (1 - 2 days / week )";
  }
  if (data.activity === "1.5") {
    textActivity = " moderate exercise (3 - 5 days / week )";
  }
  if (data.activity === "1.7") {
    textActivity = "heavy exercise (6 - 7 days / week )";
  }
  if (data.activity === "2") {
    textActivity = "athelete (2x per day )";
  }
  const handleReCalculate = () => {
    window.localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="container pt-1">
      <p className="d-inline-block">
        {lang === "ar" ? "اهلا" : " hello"}{" "}
        <p className="fw-bolder d-inline-block">
          {data.fn} {data.ln}
        </p>{" "}
        {lang === "ar" ? "أنت" : " you are"}{" "}
        <p className="fw-bolder d-inline-block">{data.age}</p>{" "}
        {lang === "ar" ? "سنة" : "years old"}{" "}
        <p className="fw-bolder d-inline-block">{data.gender}</p> who is{" "}
        <p className="fw-bolder d-inline-block">{data.height}</p> CM and your
        weight is <p className="fw-bolder d-inline-block">{data.weight}</p> KG
        with <p className="fw-bolder d-inline-block">{textActivity}</p>
        <button onClick={handleReCalculate} className={`${style.btn}`}>
          Re-Calculate
        </button>
      </p>
    </div>
  );
};

export default Intro;

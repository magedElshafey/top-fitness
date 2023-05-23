import React, { useState, useEffect } from "react";
import style from "./bmi.module.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";
import img from "../../assets/pngwing.com_-1.webp";
const BmiDetails = ({ lang }) => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [bmr, setBmr] = useState(0);
  const [calroies, setCalories] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!gender && !age && !height && !weight) {
      setBmr(0);
      setCalories(0);
    }
    if (age && height && weight && gender === "male") {
      setBmr(10 * +weight + 6.25 * +height - 5 * +age + 5);
      setCalories(+bmr * +activity);
    }
    if (age && height && weight && gender === "female") {
      setBmr(10 * +weight + 6.25 * +height - 5 * +age - 161);
      setCalories(+bmr * +activity);
    }
  }, [gender, age, height, weight, activity, bmr]);
  const handleResults = () => {
    window.localStorage.setItem(
      "userData",
      JSON.stringify({
        fn,
        ln,
        gender,
        age,
        weight,
        height,
        bmr,
        activity,
        calroies,
      })
    );
    navigate("/calc/details");
  };
  return (
    <div className="main container pt-3">
      <h3
        data-aos="zoom-in"
        data-aos-delay="400"
        className={` mb-4 fs-3 fw-bolder text-uppercase text-center ${style.title}`}
      >
        {lang === "ar" ? "حاسبة الوزن المثالي" : "   BMR Calculation"}
      </h3>
      <div className="row align-items-center my-4">
        <form
          className={`p-4 ${style.mainContainer} rounded col-12 col-md-6 mb-3 mb-md-0`}
        >
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label className="d-block mb-1 fw-bold label" htmlFor="fs">
                {lang === "ar" ? "الأسم الأول" : " first name"}
              </label>
              <input
                onChange={(e) => setFn(e.target.value)}
                type="text"
                id="fn"
                className={style.inp}
              />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="ln" className="d-block mb-1 fw-bold label">
                {lang === "ar" ? "الأسم الأخير" : "last name"}
              </label>
              <input
                onChange={(e) => setLn(e.target.value)}
                type="text"
                id="ln"
                className={style.inp}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="d-block mb-1 fw-bold label" htmlFor="gender">
              {lang === "ar" ? "الجنس" : "Gender"}
            </label>
            <select
              onChange={(e) => setGender(e.target.value)}
              id="gender"
              className={style.inp}
            >
              <option>
                {lang === "ar" ? "أختر نوعك" : "choose your gender"}
              </option>
              <option value="male">{lang === "ar" ? "ذكر" : "Male"}</option>
              <option value="female">{lang === "ar" ? "أنثي" : "Femal"}</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="d-block mb-1 fw-bold label" htmlFor="age">
              {lang === "ar" ? "السن" : "Age"}
            </label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="number"
              id="age"
              className={style.inp}
            />
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <label htmlFor="height" className="d-block mb-1 fw-bold label">
                {lang === "ar" ? "الطول" : "height"}
              </label>
              <input
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                id="height"
                className={style.inp}
              />
            </div>
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <label htmlFor="weight" className="d-block mb-1 fw-bold label">
                {lang === "ar" ? "الوزن" : "weight"}
              </label>
              <input
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                id="weight"
                className={style.inp}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="activity" className="d-block mb-1 fw-bold label">
              {lang === "ar" ? "معدل النشاط" : "activity"}
            </label>
            <select
              onChange={(e) => setActivity(e.target.value)}
              className={style.inp}
              id="activity"
            >
              <option value="">Choose your activity</option>
              <option value="1.1">sedentary (office job)</option>
              <option value="1.2">light exercise (1 - 2 days / week )</option>
              <option value="1.5">
                moderate exercise (3 - 5 days / week )
              </option>
              <option value="1.7">heavy exercise (6 - 7 days / week )</option>
              <option value="2">athelete (2x per day )</option>
            </select>
          </div>
          <button
            onClick={handleResults}
            className="mainbtn  mx-auto d-flex justify-content-center"
          >
            {lang === "ar" ? "شاهد النتيجة" : "Show Results"}
          </button>
        </form>
        <div
          className={`col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column gap-3 align-items-center`}
        >
          <div className="d-flex justify-content-center gap-3 ">
            <div
              className={`p-5 d-flex flex-column align-items-center gap-2 ${style.mainBox}`}
            >
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "كتلة الجسم" : "body mass"}
              </p>
              <AiOutlineUser size={50} className={`${style.icon}`} />
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "قم بملئ البيانات" : "fill the form "}
              </p>
            </div>
            <div
              className={`p-5 d-flex flex-column align-items-center gap-2 ${style.mainBox}`}
            >
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "الوزن المثالي" : "Normal Weight"}
              </p>
              <FaBalanceScale size={50} className={`${style.icon}`} />
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "قم بملئ البيانات" : "fill the form "}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3 ">
            <div
              className={`p-5 d-flex flex-column align-items-center gap-2 ${style.mainBox}`}
            >
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "السعرات الحرارية" : "Calories"}
              </p>
              <AiOutlineMenu size={50} className={`${style.icon}`} />
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "قم بملئ البيانات" : "fill the form "}
              </p>
            </div>
            <div
              className={`p-5 d-flex flex-column align-items-center gap-2 ${style.mainBox}`}
            >
              <p className="fw-bold m-0 p-0">
                {lang === "ar"
                  ? "احتياجك من البروتين"
                  : "Your need for protein"}
              </p>
              <CiForkAndKnife size={50} className={`${style.icon}`} />
              <p className="fw-bold m-0 p-0">
                {lang === "ar" ? "قم بملئ البيانات" : "fill the form "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiDetails;
/*
  
*/

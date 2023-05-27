import React, { useState } from "react";
import style from "./checkform.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckForm = ({ lang, cities, api }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gov, setGov] = useState("");
  const [question, setQuestion] = useState("");
  const [goal, setGoal] = useState("");
  console.log("hello from city in check form", cities);
  const sendData = async (e) => {
    e.preventDefault();
    await fetch(`${api}/orders/store`, {
      method: "POST",
      headers: {
        lang,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        city_id: city,
        status: question,
        goal,
        address: gov,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.status) {
          setName("");
          setPhone("");
          setGov("");
          setGoal("");
          setCity("");
          setQuestion("");
          Swal.fire({
            title: res.message,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: res.message,
          });
        }
      });
  };
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className={`row align-items-center  py-5  ${style.content}`}>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <form
              onSubmit={(e) => sendData(e)}
              className={`p-4 ${style.mainContainer} rounded `}
            >
              <h3
                className={`fw-bolder m-0 mb-5 p-0 text-center fs-3  ${style.title}`}
              >
                {lang === "ar"
                  ? " سجل الآن مجانا وابدأ خطواتك الأولي نحو الرشاقة "
                  : "Register now for free and take your first step towards fitness"}
              </h3>

              <div className=" mb-3">
                <label className="d-block mb-1 fw-bold label" htmlFor="name">
                  {lang === "ar" ? "الأسم " : "name"}
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  className={style.inp}
                />
              </div>

              <div className=" mb-3 ">
                <label className="d-block mb-1 fw-bold label" htmlFor="num">
                  {lang === "ar" ? "رقم الجوال" : " phone number"}
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="num"
                  className={style.inp}
                />
              </div>
              <div className=" mb-3">
                <label htmlFor="city" className="d-block mb-1 fw-bold label">
                  {lang === "ar" ? "المدينة" : "city"}
                </label>
                <select
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                  className={style.inp}
                >
                  <option value="">
                    {lang === "ar" ? "اختر مدينتك" : "choose your city"}
                  </option>
                  {cities.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3 ">
                <label className="d-block mb-1 fw-bold label" htmlFor="gov">
                  {lang === "ar" ? "الحي" : "government"}
                </label>
                <input
                  onChange={(e) => setGov(e.target.value)}
                  type="text"
                  id="gov"
                  className={style.inp}
                />
              </div>
              <div className=" mb-3">
                <label htmlFor="goal" className="d-block mb-1 fw-bold label">
                  {lang === "ar" ? "هدفك" : "goal"}
                </label>
                <select
                  onChange={(e) => setGoal(e.target.value)}
                  id="goal"
                  className={style.inp}
                >
                  <option value="">
                    {lang === "ar" ? "اختر هدفك" : "choose your goal"}
                  </option>

                  <option value="lose">
                    {lang === "ar" ? "إنقاص الوزن" : "cutting"}
                  </option>
                  <option value="bulk">
                    {lang === "ar" ? "زيادة الكتلة العضلية" : "bulking"}
                  </option>
                  <option value="maintain">
                    {lang === "ar" ? "المحافظة علي الوزن" : "maintaince"}
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="question"
                  className="d-block mb-1 fw-bold label"
                >
                  {lang === "ar" ? "هل قمت بمحاولة سابقة لتخفيف وزنك" : "city"}
                </label>
                <select
                  onChange={(e) => setQuestion(e.target.value)}
                  id="question"
                  className={style.inp}
                >
                  <option value="">
                    {lang === "ar" ? "اختر الاجابة" : "choose answer"}
                  </option>
                  <option value="1">نعم</option>
                  <option value="0">لا</option>
                </select>
              </div>

              <button className="mainbtn  mx-auto d-flex justify-content-center">
                {lang === "ar" ? "إرسال البيانات" : "Send Data"}
              </button>
            </form>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-3 align-items-center">
            <p className="text-white fw-bold fs-3 m-0">
              {lang === "ar"
                ? "احصل علي فحص و أستشارة مجانية"
                : "Get a free examination and consultation"}
            </p>
            <p className={style.title}>
              {lang === "ar"
                ? "واتعرف على تفاصيل جسمك وايش تحتاج لتوصل للوزن المثالي"
                : "And know the details of your body and what you need to reach the ideal weight"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckForm;
/*
   <div >
      <div className={style.overlay}>
        <div className={`container  p-4 ${style.content}`}>
          <div className="row">
            <div
              className={`col-12 col-md-6 mb-4 mb-md-0 ${style.mainContainer}`}
            >
             
            </div>
          </div>
        </div>
      </div>
    </div>
*/

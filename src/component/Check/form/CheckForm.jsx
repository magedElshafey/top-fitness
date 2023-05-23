import React from "react";
import style from "./checkform.module.css";
const CheckForm = ({ lang }) => {
  return (
    <div className={style.mainDiv}>
      <div className={style.overlay}>
        <div className={`container  p-4 ${style.content}`}>
          <div className="row">
            <div
              className={`col-12 col-md-6 mb-4 mb-md-0 ${style.mainContainer}`}
            >
              <h3
                className={`fw-bolder m-0 p-0 text-center fs-3  ${style.title}`}
              >
                {lang === "ar"
                  ? " سجل الآن مجانا وابدأ خطوتك الأولي نحو الرشاقة "
                  : "Register now for free and take your first step towards fitness"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckForm;
/*
   <div className="container  pb-4">
      <div className={`row justify-content-center `}>
        <div className={`p-3 col-11 col-md-8 `}>
          
        </div>
      </div>
    </div>
*/

import React from "react";
import style from "./about.module.css";
import { Link } from "react-router-dom";
const About = ({ lang, about }) => {
  const str =
    'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.';
  return (
    <div className="container py-5">
      <div className="row ">
        <div
          className="col-12 col-md-6 mb-3 mb-md-0"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-offset="50"
        >
          <h2
            data-aos="zoom-in"
            data-aos-delay="400"
            className={`mb-5 ${style.title} fw-bolder fs-1`}
          >
            {about.title}
          </h2>
          <p data-aos="fade-up" data-aos-delay="500" className="m-0 p-0 lh">
            {about.description.substring(0, 150)}...
          </p>
          <button className="mainbtn mt-4">
            <Link to="/about" className="text-white more">
              {lang === "ar" ? "قراءة المزيد" : "Read More"}
            </Link>
          </button>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img
            alt="about/img"
            className={style.mainImg}
            loading="lazy"
            src={about.image}
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

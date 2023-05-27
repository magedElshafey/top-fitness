import React from "react";
import style from "./store.module.css";
const Store = ({ data, isTitle, lang, title, desc }) => {
  return (
    <div className="container py-4">
      {isTitle && (
        <div className="text-center mb-4">
          <h2
            className={`fs-1 fw-bolder mb-3 ${style.title}`}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="m-0 w-75 mx-auto p-0 lh"
          >
            {desc}
          </p>
        </div>
      )}
      <div className="row gap-4 justify-content-center">
        {data?.slice(0, 12).map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            className="col-12  col-md-5 col-lg-3"
          >
            <img alt="product/img" src={item.image} className={style.mainImg} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Store;

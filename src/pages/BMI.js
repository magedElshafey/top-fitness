import React from "react";
import BmiDetails from "../component/BMI/BmiDetails";

const BMI = ({ lang }) => {
  return (
    <div className="mt pt-4">
      <BmiDetails lang={lang} />
    </div>
  );
};

export default BMI;

import React from "react";

import CheckForm from "../component/Check/form/CheckForm";

const Check = (lang) => {
  return (
    <div className="main mt">
      <CheckForm lang={lang.lang} />
    </div>
  );
};

export default Check;
/*
  <Hero
        title="Get a free examination and consultation"
        arabicTitle="أحصل علي فحص و أستشارة مجانية"
        arabicDesc="اتعرف على تفاصيل جسمك ماذا تحتاج لتوصل للوزن المثالي"
        desc="And know the details of your body, what you need to reach the ideal weight"
        lang={lang.lang}
      />
*/

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

import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, desc, logo }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href={logo} />
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default Meta;

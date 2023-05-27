import React, { useState, useEffect } from "react";

import CheckForm from "../component/Check/form/CheckForm";
import Spinner from "../component/spinner/Spinner";
const Check = (lang) => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  const api = "https://fitnes.technomasrsystems.com/api";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api}/home`, {
        method: "GET",
        headers: {
          lang,
        },
      });
      const data = await res.json();
      if (data.status) {
        setCities(data.data.cities);
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="main mt">
          <CheckForm lang={lang.lang} api={api} cities={cities} />
        </div>
      )}
    </div>
  );
};

export default Check;

import React, { useEffect, useState } from "react";
import PrivacyDetails from "../component/Privacy/PrivacyDetails";
import Spinner from "../component/spinner/Spinner";
const Privacy = ({ lang }) => {
  const api = "http://netflix07.solarsystems.org.in/api";

  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api}/policy`, {
        method: "GET",
        headers: {
          lang,
        },
      });
      const data = await res.json();
      console.log("this is privacy data", data.data);
      if (data.status) {
        setDesc(data.data.policy.description);
        setLoading(false);
        return false;
      }
    };
    fetchData();
  }, [lang]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt pt-4">
          <PrivacyDetails desc={desc} lang={lang} />
        </div>
      )}
    </div>
  );
};

export default Privacy;

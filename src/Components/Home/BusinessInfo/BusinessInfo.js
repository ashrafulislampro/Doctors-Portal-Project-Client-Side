import React, { useEffect, useState } from "react";
import fakeData from "./BusinessData";
import InfoDetails from "./InfoDetails";
const BusinessInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  }, []);
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {data.map((data) => (
          <InfoDetails data={data} key={data.title}></InfoDetails>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;

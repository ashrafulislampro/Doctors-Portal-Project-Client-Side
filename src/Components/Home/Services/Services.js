import React, { useEffect, useState } from "react";
import servicesData from "./ServicesData";
import ServicesDetails from "./ServicesDetails";
const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    setServiceData(servicesData);
  }, []);
  return (
    <section style={{height: '500px', marginBottom: "100px"}}>
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1", fontWeight: "700" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3A4256", fontWeight: "700", paddingTop: "10px" }}>
          Services We Provide
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row ">
          {serviceData.map((data) => (
            <ServicesDetails service={data} key={data.name}></ServicesDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

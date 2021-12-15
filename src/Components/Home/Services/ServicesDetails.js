import React from "react";

const ServicesDetails = (props) => {
  const { name, img } = props.service;
  return (
    <div className="col-md-4">
      <div className="text-center mt-5 pt-5">
        <div>
          <img src={img} alt="" />
          <h5 style={{  color: "#3A4256", fontWeight: "700"}} className="mt-4 mb-4">{name}</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam voluptatum quos officia necessitatibus voluptas commodi
            reiciendis harum perspiciatis, nam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;

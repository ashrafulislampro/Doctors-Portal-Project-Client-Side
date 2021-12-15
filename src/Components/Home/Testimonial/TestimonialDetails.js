import React from "react";

const TestimonialDetails = (props) => {
  const { description, name, address, img } = props.data;
  return (
    <div className="col-md-4">
      <div class="card shadow" style={{ width: "18em", height: "22em" }}>
        <div class="card-body">
          <p class="card-text">{description}</p>
        </div>
        <div className="d-flex justify-content-center py-4">
          <img src={img} style={{ height: "60px", width: "60px", marginRight: "10px" }} alt="..." />
          <div>
                    <h5 style={{color: "#1CC7C1", fontWeight: "700"}}>{name}</h5> 
                    <h6 style={{color: "#3A4256", fontWeight: "700"}}>{address}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const LoadDoctorsData = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
     {
       doctor.image ?  <img style={{ height: "250px" }} src={`data:image/png;base64,${doctor.image.img}`}/>
       : <img
        style={{ height: "250px" }}
        src={` https://salty-peak-15581.herokuapp.com/${doctor.img}`}
        alt=""
      />
      }
      <h4 className="pt-4" style={{ color: "#3A4256", fontWeight: "700" }}>
        {doctor.name}
      </h4>
      <div className="d-flex justify-content-center">
        <FontAwesomeIcon
          style={{ color: "#1CC7C1", height: "25px", marginRight: "5px" }}
          icon={faPhoneVolume}
        />
        <p style={{ color: "#3A4256", fontWeight: "700" }}>+13 243 456 478</p>
      </div>
    </div>
  );
};

export default LoadDoctorsData;

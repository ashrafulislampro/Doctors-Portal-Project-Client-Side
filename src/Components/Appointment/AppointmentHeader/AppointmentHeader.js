import React from "react";
import chair from "../../../images/chair.png";
import DatePicker from "sassy-datepicker";
import "./AppointmentHeader.css";
const AppointmentHeader = ({handleDateChange}) => {
  
  return (
    <main style={{ height: "800px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-1">
      <h1 className="py-5 my-5" style={{color : "#1CC7C1", fontWeight: "700"}}>APPOINTMENT</h1>
        <DatePicker
          className="py-5  calendar-content"
          onChange={handleDateChange}
          value={new Date()}
        />
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;

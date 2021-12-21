import React from "react";
import "./Appointment.css";
import doctors from "../../../images/doctor.png";

const Appointment = () => {
 
  return (
    <section className="make-appointment">
     
        <div className="row">
          <div className="col-md-4 offset-1 d-none d-md-block">
            <img src={doctors} alt="" />
          </div>
            <div className="col-md-7 text-white py-5 text">
              <h5 style={{ color: "#1CC7C1", fontWeight: "700"}}> APPOINTMENT</h5>
              <h1 className="my-5" style={{ fontWeight: "700"}}> Make an appointment <br /> Today</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its.
              </p>
              <button className="btn">Learn more</button>
            </div>
          </div>
     
    </section>
  );
};

export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import AppointmentsByDate from "./AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import DatePicker from "sassy-datepicker";
import { UserContext } from "../../../App";
const Appointments = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  useEffect(() => {
    fetch("https://salty-peak-15581.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate , email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);

  const containerStyle = {
    backgroundColor: "#F4FDFB",
  };
console.log(loggedInUser.email)
  return (
    <div style={containerStyle} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 py-5 my-4 d-flex">
        <h2 style={{ fontWeight: "700", marginLeft: "30px" }}>Appointments</h2>
        <div className="col-md-3 mt-5 pt-3 ">
          <DatePicker
            className="py-5 calendar-content"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-7 mt-5 pt-3 box-content">
          
            <AppointmentsByDate
              appointments={appointments}
              selectedDate={selectedDate}
              
            ></AppointmentsByDate>
         
        </div>
      </div>
    </div>
  );
};

export default Appointments;

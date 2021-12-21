import React, { useEffect, useState } from "react";
import AppointmentFakeDate from "./AppointmentFakeData";
import BookingCard from "./BookingCard";

const AppointmentBooking = ({ date }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(AppointmentFakeDate);
  }, []);
  return (
    <section>
      <h2
        className="py-5 text-center"
        style={{ color: "#1CC7C1", fontWeight: "700" }}
      >
        Available Appointments on {(date || new Date()).toDateString()}
      </h2>
      <div className="container">
        <div className="row">
          {data.map((bookingData) => (
            <BookingCard bookingData={bookingData} key={bookingData.id} date={date}></BookingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

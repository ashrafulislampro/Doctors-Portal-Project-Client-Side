import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import './Appointment.css';
import Navbar2 from './Navbar2';
const Appointment = () => {
          const [selectedDate, setSelectedDate] = useState(new Date());
          const handleDateChange = (date) => {
                    setSelectedDate(date);
                  };
          return (
                    <div className="Appointment">
                              <Navbar2></Navbar2>
                              <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
                              <AppointmentBooking date={selectedDate}></AppointmentBooking>
                              <Footer></Footer>
                    </div>
          );
};

export default Appointment;
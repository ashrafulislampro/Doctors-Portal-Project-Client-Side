import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';
const BookingCard = (props) => {
          const {subject, visitingHours, totalSpace} = props.bookingData;
          const date = props.date;
          const [modalIsOpen, setIsOpen] = React.useState(false);

          function openModal() {
            setIsOpen(true);
          }
        
          function closeModal() {
            setIsOpen(false);
          }
          return (
                    <div className="col-md-4 mb-5">
                         <div className="card p-3 shadow">
                                   <div className="card-body text-center">
                                        <h5 className="card-title text-brand">{subject}</h5>
                                        <h6>{visitingHours}</h6>
                                        <p>{totalSpace} SPACES AVAILABLE</p>
                                        <button onClick={openModal} className="btn-brand">Book Appointment</button>
                                        <AppointmentForm modalIsOpen={modalIsOpen} subject={subject} date={date} closeModal={closeModal}></AppointmentForm>
                                   </div>
                         </div>     
                    </div>
          );
};

export default BookingCard;
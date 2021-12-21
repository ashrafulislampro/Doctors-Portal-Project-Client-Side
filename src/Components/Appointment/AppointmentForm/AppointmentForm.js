import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const AppointmentForm = ({ modalIsOpen, closeModal, subject , date}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.service = subject;
    data.appointment = date;
    fetch('https://salty-peak-15581.herokuapp.com/addAppointment',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success =>{
      if(success){
        alert("Appointment Created Successfully")
        closeModal();
      }
    })
    
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          className="py-4 text-center"
          style={{ color: "#1cc7c1", fontWeight: "700" }}
        >
          {subject}
        </h2>
        <p className="text-secondary text-center pb-4">{(date || new Date()).toDateString()}</p>
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            {...register("name", { required: true })}
          />

          <br />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            {...register("email", { required: true })}
          />

          <br />
          <input
            className="form-control"
            type="phone"
            name="phone"
            placeholder="Your Phone"
            required
            {...register("phone", { required: true })}
          />

          <br />
          <input
            className="form-control"
            type="date"
            name="date"
            placeholder="Your date"
            required
            {...register("date", { required: true })}
          />
          <br />
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                aria-label="Default select example"
                required
                {...register("gender", { required: true })}
              >
                <option disabled value="Not selected">
                 select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="col-4">
              <input
                className="form-control"
                type="age"
                name="age"
                placeholder="Your age"
                required
                {...register("age", { required: true })}
              />
            </div>
            <div className="col-4">
              <input
                className="form-control"
                type="weight"
                name="weight"
                placeholder="Weight"
                required
                {...register("weight", { required: true })}
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <button className="form_close" onClick={closeModal}>
              close
            </button>
            <input id="form-submit" type="submit" value="Send" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;

import React from "react";
import { useForm } from "react-hook-form";
import "./Contacts.css";
const Contacts = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container text-center">
        <h5
          className="py-5"
          style={{ color: "#1CC7C1", fontWeight: "700" }}
        >
          CONTACT US
        </h5>
        <h1 className="pb-4" style={{ color: "white", fontWeight: "700" }}>
          Always Connect With Us
        </h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
            className="form_input"
              name="name"
              type="text"
              required
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
            />
            <br />
            <input
             className="form_input"
              name="email"
              type="email"
              required
             {...register("email", {required: true})}
              placeholder="Enter Email"
            />
            <br />
            <textarea type="message" cols="86" rows="8" placeholder="Type Your Message"
            {...register("message", {required: true})}
            ></textarea>
            <br />
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

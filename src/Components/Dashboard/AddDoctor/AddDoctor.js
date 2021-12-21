import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctor = () => {
          const [info, setInfo] = useState({});
          const [file, setFile] = useState(null);
          const handleInputField = (e) => {
                    const newInfo = {...info};
                    newInfo[e.target.name] = e.target.value;
                    setInfo(newInfo);
          }
         const handleFileUpload = (e) => {
           const newFile = e.target.files[0];
           setFile(newFile);
         }
         const handleFormSubmit = (e) => {
          const formData = new FormData()
          formData.append('file', file);
          formData.append('name', info.name);
          formData.append('email', info.email);

          fetch('https://salty-peak-15581.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
         }
  return (
    <section
      style={{ backgroundColor: "#F4FDFB" }}
      className="container-fluid row"
    >
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 ">
        <h3 className="pt-3">Add Doctor</h3>
        <div className="col-md-6 mt-4">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onBlur={handleInputField}
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mt-3">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                onBlur={handleInputField}
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label for="uploadPhoto">Upload a Photo</label>
              <input
                type="file"
                name="file"
                onChange={handleFileUpload}
                className="form-control"
                id="uploadPhoto"
                placeholder="File"
              />
            </div>

            <button className="btn mt-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;

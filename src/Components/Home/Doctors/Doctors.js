import React from 'react';
import './Doctors.css';
import { useState, useEffect} from 'react';
import LoadDoctorsData from './LoadDoctorsData';
const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
        useEffect(() => {
                fetch(" https://salty-peak-15581.herokuapp.com/doctors")
                .then(res => res.json())
                .then(data => setDoctor(data))
        },[])
          return (
                    <section className="container-fluid doctors-section">
                        <div className="row">
                            <h3 className="py-5 text-center" style={{color : "#1cc7c1", fontWeight: "700"}}>OUR DOCTOR</h3>
                             {doctor.map(doctor => <LoadDoctorsData  doctor={doctor} key={doctor._id}></LoadDoctorsData>)} 
                        </div>
                             
                    </section>
          );
};

export default Doctors;
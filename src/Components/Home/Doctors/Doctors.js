import React from 'react';
import './Doctors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import doctors from '../../../images/doctor-small.png';
const Doctors = () => {
          return (
                    <section className="doctors-section">
                         <h5 className="py-3 text-center" style={{ color: "#1CC7C1", fontWeight: "700"}}>Our Doctors</h5>
                          <div className="container">
                              <div className="row">
                                        <div className="col-md-4 text-center">
                                                  <img style={{height: '350px'}} src={doctors} alt="" />
                                                  <h4 className="pt-4" style={{ color: "#3A4256", fontWeight: "700"}}>Dr.Caudi</h4>
                                                  <div className="d-flex justify-content-center">
                                                  <FontAwesomeIcon style={{color : '#1CC7C1', height: '25px', marginRight : '5px'}} icon={faPhoneVolume} />
                                                  <p style={{ color: "#3A4256", fontWeight: "700"}}>+13 243 456 478</p>
                                                  </div>
                                        </div>
                                        <div className="col-md-4 text-center">
                                                  <img style={{height: '350px'}} src={doctors} alt="" />
                                                  <h4 className="pt-4" style={{ color: "#3A4256", fontWeight: "700"}}>Dr.Caudi</h4>
                                                  <div className="d-flex justify-content-center">
                                                  <FontAwesomeIcon style={{color : '#1CC7C1', height: '25px', marginRight : '5px'}} icon={faPhoneVolume} />
                                                  <p style={{ color: "#3A4256", fontWeight: "700"}}>+13 243 456 478</p>
                                                  </div>
                                        </div>
                                        <div className="col-md-4 text-center">
                                                  <img style={{height: '350px'}} src={doctors} alt="" />
                                                  <h4 className="pt-4" style={{ color: "#3A4256", fontWeight: "700"}}>Dr.Caudi</h4>
                                                  <div className="d-flex justify-content-center">
                                                  <FontAwesomeIcon style={{color : '#1CC7C1', height: '25px', marginRight : '5px'}} icon={faPhoneVolume} />
                                                  <p style={{ color: "#3A4256", fontWeight: "700"}}>+13 243 456 478</p>
                                                  </div>
                                        </div>
                              </div>
                          </div>
                    </section>
          );
};

export default Doctors;
import React, { useEffect, useState } from 'react';
import TestimonialData from './TestimonialData';
import TestimonialDetails from './TestimonialDetails';
import icon from '../../../images/comma.png';
const Testimonial = () => {
          const [data, setData] = useState([]);
          useEffect(() => {
                    setData(TestimonialData)
          },[])
          return (
                    <section style={{height: '600px', marginBottom : "100px"}}>
                              
                              <div className="d-flex justify-content-between offset-1 mb-5">
                                   <div>
                                             <h5 className="my-3" style={{ color: "#1CC7C1", fontWeight: "700"}}>TESTIMONIAL</h5>
                                             <h2 style={{ color: "#3A4256", fontWeight: "700"}}>What's Our Patients <br /> Says</h2>
                                   </div> 
                                   <img className="img-fluid" style={{ height: '140px', marginRight: '250px', opacity: '0.5'}} src={icon} alt="" />    
                              </div>
                              <div className="container">
                              <div className="row">
                                        {
                                                  data.map(data => <TestimonialDetails data={data} key={data.img}></TestimonialDetails>)
                                        }
                              </div>
                              </div>
                    </section>
          );
};

export default Testimonial;
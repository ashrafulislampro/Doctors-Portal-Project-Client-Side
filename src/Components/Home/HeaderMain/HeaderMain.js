import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css'
const HeaderMain = () => {
          return (
                    <main style={{height: '800px'}} className="row d-flex align-items-center">
                                        <div className="col-md-4 offset-1">
                                           <h1 className="header_text">Your New Smile <br />Starts Here</h1>   
                                           <p className="text-secondary"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam fugiat sequi facere sint aspernatur nostrum harum ea accusantium blanditiis enim cupiditate eos autem, optio molestiae modi temporibus sunt inventore rerum?</span></p>  
                                           <button className="btn">GET APPOINTMENT</button>
                                        </div>
                                        <div className="col-md-6">
                                                  <img src={chair} alt="" className="img-fluid" />
                                        </div>
                    </main>
          );
};

export default HeaderMain;
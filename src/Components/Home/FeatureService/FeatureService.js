import React from 'react';
import feature from '../../../images/treatment.png';
import './FeatureService.css';
const FeatureService = () => {
          return (
                    <section className="feature-service pb-0 pb-mb-5 my-5">
                            <div className="row pb-5">
                                        <div className="col-md-4 offset-1">
                                                  <img style={{ height: '560px'}} src={feature} alt="" />
                                        </div>
                                        <div className="col-md-5 align-self-center">
                                                  <h1 style={{  color: "#3A4256", fontWeight: "700"}}>Exceptional Dental <br /> Care, on Your Terms</h1> 
                                                  <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia sint error excepturi beatae necessitatibus in ipsa? Harum deserunt aperiam, voluptates minus quos assumenda perspiciatis? Ea atque explicabo quae recusandae laborum!
                                                  Placeat ea saepe maiores aperiam. Maxime odit error nisi libero aut praesentium laborum, sequi labore, rem doloribus esse, molestias unde eius ratione cupiditate architecto neque. Autem beatae porro praesentium provident!
                                                  Quidem ratione sequi accusamus quod voluptas velit dicta quam nobis, mollitia soluta pariatur! Natus tenetur dolores quis quia deleniti assumenda voluptatibus velit sint tempora necessitatibus nemo rerum rem, nostrum a!
                                                  Vitae magnam debitis ut impedit culpa. Dignissimos hic aliquam saepe reiciendis tempore, tenetur fugiat, quos sunt soluta vel iste perspiciatis corporis doloremque cumque nostrum velit laborum necessitatibus quibusdam itaque consequatur.
                                                  Ut a inventore esse molestiae dolores beatae voluptatum totam accusamus porro! Officiis pariatur natus, ipsam aperiam, nihil culpa, accusamus consequatur maxime minima sint consectetur. Earum consectetur ut possimus laborum ratione.</p>
                                                  <button className="btn">Learn more</button>
                                        </div>
                            </div>  
                    </section>
          );
};

export default FeatureService;
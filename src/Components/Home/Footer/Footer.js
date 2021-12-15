import React from "react";
import "./Footer.css";
import google from '../../../images/googl.png';
import instagram from '../../../images/instagram.jpg';
import fb from '../../../images/fb.jpg';
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-3 py-5 my-4">
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractions</p>
            <p>Check Up</p>
          </div>
          <div className="col-md-3">
            <h5
              className="mb-5"
              style={{ color: "#1CC7C1", fontWeight: "700" }}
            >
              Services
            </h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractions</p>
            <p>Check Up</p>
            <p>Check Up</p>
            <p>Check Up</p>
          </div>
          <div className="col-md-3">
            <h5
              className="mb-5"
              style={{ color: "#1CC7C1", fontWeight: "700" }}
            >
              Oral Health
            </h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extractions</p>
            <p>Check Up</p>
            <p>Check Up</p>
            <p>Check Up</p>
          </div>
          <div className="col-md-3">
            <h5
              className="mb-5"
              style={{ color: "#1CC7C1", fontWeight: "700" }}
            >
              Our Address
            </h5>
            <p className="mb-5">
              New York ~ 101022 Hudson <br />
              Yards
            </p>
              <div className="d-flex">
                <img style={{ height: "50px"}} src={fb} alt="" />
                <img style={{ height: "50px"}} src={google} alt="" />
                <img style={{ height: "50px"}} src={instagram} alt="" />
              </div>
            <p className="pt-5">Call Now</p>
            <button className="btn">+1363673257</button>
          </div>
        </div>
       
      </div>
      <footer style={{ marginTop: '200px'}} className="text-center">Copyright {(new Date()).getFullYear()} All Rights Reserved</footer>
    </section>
  );
};

export default Footer;

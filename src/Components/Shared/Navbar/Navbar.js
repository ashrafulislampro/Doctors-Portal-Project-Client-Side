import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link me-5 active" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link me-5 active" to='/patients'>Patients</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link me-5 active" to='/dashboard'>Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link me-5 active text-white" to='/home'> Admin</Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link me-5 active text-white" to='/home'>Blogs</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link me-5 active  text-white" to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

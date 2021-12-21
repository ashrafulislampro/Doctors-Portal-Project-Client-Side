import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import WebIcon from "@mui/icons-material/Web";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { UserContext } from "../../../App";
import { useState } from "react";
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch("https://salty-peak-15581.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);
  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <ul className="list-unstyled py-5 mt-4">
        <li className="py-3">
          <Link className="text-white ms-5" to="/dashboard">
            <AppsIcon />
            <span className="ms-2">Dashboard</span>
          </Link>
        </li>
        { isDoctor &&
          <div>
            <li className="py-3">
              <Link className=" text-white ms-5" to="/appointments">
                <WebIcon />
                <span className="ms-2">Appointment</span>
              </Link>
            </li>
            <li className="py-3">
              <Link className=" text-white ms-5" to="/patients">
                <PeopleAltIcon />
                <span className="ms-2">Patients</span>{" "}
              </Link>
            </li>
            <li className="py-3">
              <Link className=" text-white ms-5" to="/prescriptions">
                <TextSnippetIcon />
                <span className="ms-2">Prescriptions</span>
              </Link>
            </li>
            <li className="py-3">
              <Link className=" text-white ms-5" to="/addDoctor">
                <PersonAddAlt1Icon />
                <span className="ms-2">Add Doctor</span>
              </Link>
            </li>
            <li className="py-3">
              <Link className=" text-white ms-5" to="/setting">
                <SettingsIcon />
                <span className="ms-2">Setting</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <div className="list-unstyled mb-5">
        <li>
          <Link className="text-white ms-5" to="/">
            <LogoutIcon />
            <span className="ms-2">Log Out</span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;

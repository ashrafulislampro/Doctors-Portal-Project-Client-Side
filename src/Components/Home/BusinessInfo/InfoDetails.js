import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoDetails.css';
const InfoDetails = (props) => {
  const { title, description, icon, background } = props.data;
  
  return (
    <div className="col-md-4 text-white">
      <div className={`d-flex justify-content-center info_container info-${background}`}>
        <div>
          <FontAwesomeIcon className='font-icon me-5' icon={icon} />
        </div>
        <div>
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;

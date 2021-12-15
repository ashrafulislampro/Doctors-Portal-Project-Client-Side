import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Blogs.css';

const BlogsDataDetails = (props) => {
  const { name, title, description, img, background, icon, date } = props.data;
  console.log(name, title, description, img, background, icon, date);
  return (
    <div className="col-md-4">
      <div class={`card shadow card-${background}`} style={{ width: "19em", height: "23em" }}>
        <div className="d-flex justify-content-center py-4">
          <img
            src={img}
            style={{ height: "60px", width: "60px", marginRight: "10px" }}
            alt="..."
          />
          <div>
            <h5 style={{ color: "#1CC7C1", fontWeight: "700" }}>{name}</h5>
            <h6 style={{ color: "#3A4256", fontWeight: "700" }}>{(new Date(date).toDateString("dd/mm/yyyy"))}</h6>
            
          </div>
        </div>
        <div class="card-body">
          <h4 className="my-4">{title}</h4>
          <p class="card-text">{description}</p>
        </div>
        <h2 style={{ color: "white", fontSize: "60px", margin: "20px" }}><FontAwesomeIcon icon={icon} /></h2>
      </div>
    </div>
  );
};

export default BlogsDataDetails;

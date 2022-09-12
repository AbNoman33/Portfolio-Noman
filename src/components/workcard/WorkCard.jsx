import './WorkCard.css';
//import pro1 from "../../assets/images/project-1.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="img" />
        <h2 className='project-title'>{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <Link to={props.view} className='btn'>View</Link>
              <Link to="url.com" className='btn'>Source</Link>
            </div>
          </div>
       </div>
  )
}

export default WorkCard
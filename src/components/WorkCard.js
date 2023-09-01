import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="product-card">
    <img src={props.imgsrc} alt="ProductImage"/>
    <h2 className="product-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">VIEW</NavLink>
            <NavLink to="/url.com" className="btn">SOURCE</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
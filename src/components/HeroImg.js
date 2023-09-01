import "./HeroImgStyles.css";
import IntroImg from "../assets/c.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroImg}
            alt="IntroImg"
        />
        </div>
        <div className="content">
        <p>Welcome To </p>
        <h1>Solar Eduverse</h1>
        <Link to="/product" className="btn">Products</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        
    </div>
  )
}

export default HeroImg
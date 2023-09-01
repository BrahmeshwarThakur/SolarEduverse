import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import R1 from "../assets/i.jpeg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who Are We?</h1>
        <p>This paragraph will contain what we do and who we are
        This paragraph will contain what we do and who we are
        This paragraph will contain what we do and who we are </p>
        <Link to="/contact" >
            <button className="btn">CONTACT</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={R1} className="img"
                    alt="true"
                />
            </div>
            <div className="img-stack bottom">
                <img src={R1} className="img"
                    alt="true"
                />
            </div>
        </div>
    </div>
     </div>
  )
}

export default AboutContent
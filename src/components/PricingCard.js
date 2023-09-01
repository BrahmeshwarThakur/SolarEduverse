import { Link } from "react-router-dom";
import "./PricingCardStyles.css";


import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
    <div className="card-container" >

    <div className="card">
    <h3>-BASIC-</h3>
    <span className="bar"></span>
    <p className="btc"> $100 </p>
    <p> -3Days-</p>
    <p>abc</p>
    <p>def</p>
    <p>ghi</p>
    <p>-feature-</p>
    <Link to={"/contact"} className="btn">
        Purchase Now
    </Link>

    </div>
    <div className="card">
    <h3>-PRENIUM-</h3>
    <span className="bar"></span>
    <p className="btc"> $200 </p>
    <p> -5Days-</p>
    <p>abc</p>
    <p>def</p>
    <p>ghi</p>
    <p>-feature-</p>
    <Link to={"/contact"} className="btn">
        Purchase Now
    </Link>

    </div>
    <div className="card">
    <h3>-BUISNESS-</h3>
    <span className="bar"></span>
    <p className="btc"> $300 </p>
    <p> -8Days-</p>
    <p>abc</p>
    <p>def</p>
    <p>ghi</p>
    <p>-feature-</p>
    <Link to={"/contact"} className="btn">
        Purchase Now
    </Link>

    </div>

    </div>

    </div>
  )
}

export default PricingCard
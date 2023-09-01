import "./FooterStyles.css"
import {FaBuilding,  FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    
                    <FaBuilding size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>USA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                     1-2323-343-23</h4>
                </div>
                <div className="mail">
                    <h4> <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                     abc@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About The Organisation</h4>
                <p>
                No one shall be subjected to arbitrary arrest, detention or exile.
                 Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal,
                  in the determination of his rights and obligations and of any criminal charge against him.
                </p>
                <div className="social">
                <FaInstagram size={30} style={{color:"#fff" , marginRight:"3rem"}}/>
                <FaTwitter size={30} style={{color:"#fff" , marginRight:"3rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff" , marginRight:"3rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
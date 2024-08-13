import React from 'react'
import Logo from "../assets/endurancelogo.svg";
import { BsTwitter } from 'react-icons/bs';
import {SiLinkedin} from "react-icons/si";
import { BsYoutube } from 'react-icons/bs';
import {FaFacebookF} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=''/>
            </div>
            <div className="footer-icons">
            <a href="https://www.facebook.com">
                <FaFacebookF/>
            </a>
            <a href="https://www.x.com">
                <BsTwitter/>
            </a>
            <a href="https://www.linkedin.com">
                <SiLinkedin/>
            </a>
            <a href="https://www.youtube.com">
                <BsYoutube/>
            </a>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>Contact Number Here</span>
                <span>Hello@gym.com</span>
                <span>Press@gym.com</span>
                <span>Contact@gym.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
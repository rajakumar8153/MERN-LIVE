import React from 'react'
import AboutBackground from '../assets/about-background.png';
import AboutBackgroundImage from '../assets/about-back-img.svg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src ={AboutBackground} alt=''/>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Why choose Us ?  
            </h1>
            <p className='primary-text'>
                <b>உறுதி </b> is the ideal fitness companion with advanced features and a user-friendly design. Its comprehensive tracking and customizable goals provide all the tools you need to stay motivated and achieve your health and wellness objectives.
            </p>
            <div className="about-buttons-container">
                <Link to='/testimonials' style={{textDecorationLine:"none"}}>
                <button className='secondary-button'>Learn More</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About
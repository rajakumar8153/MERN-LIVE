import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../assets/bannerbg.png"
import BannerImage from "../assets/dumbbell.png"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className='primary-heading'>
                        Unleash <br /> Your <br /> Potential
                    </h1>

                    <p className='primary-text'>
                        <b>உறுதி</b> is your ultimate fitness companion, designed to help you achieve your health and wellness goals with precision and ease.
                    </p>

                    <Link to='/book' style={{textDecorationLine:"none"}}>
                    <button className='secondary-button'>
                        Join Now <FiArrowRight />
                    </button>
                    </Link>
                </div>

                <div className="home-image-container">
                    <img src={BannerImage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home
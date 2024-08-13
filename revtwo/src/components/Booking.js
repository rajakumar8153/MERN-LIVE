import React from 'react';
import "./Booking.css";
import BgVideo from "../assets/bgvid3.mp4";
import { Link } from 'react-router-dom';

const Booking = () => {
  return (

    <section>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>




      <div className="container">
        <div className="pricing_top">
          <h1 className="section_title">Gym <span
            classname="high">Pricing </span>Plan</h1>
          <p className="para">Our Prices for training :- </p>
        </div>


        <div className="pricing_wrapper">
          <div className="pricing_item">
            <div className="pricing_card-top">
              <h2 className="section_title">Silver </h2>
              <h2 className="pricing_section_title">$50<span>/month</span></h2>
            </div>

            <div className="services">
              <ul>
                <li>Weight Training</li>
                <li>Customer Support</li>
                <li>Standard Options</li>
                <li>3 Classes per week</li>
              </ul>
              <button className="register_btn">
                <Link to='/payment' style={{textDecorationLine:"none"}}>
                  Join Now
                </Link>
              </button>
            </div>






          </div>

          <div className="pricing_item pricing_item-02">
            <div className="pricing_card-top">
              <h2 className="section_title">Gold </h2>
              <h2 className="pricing_section_title">$100<span>/month</span></h2>
            </div>

            <div className="services">
              <ul>
                <li>Cardio & weight Training</li>
                <li>Customer Support</li>
                <li>Standard Options</li>
                <li>5 Classes per week</li>
              </ul>
              <button className="register_btn">
                <Link to='/payment' style={{textDecorationLine:"none"}}>
                  Join Now
                </Link>
              </button>
            </div>






          </div>

          <div className="pricing_item pricing_item-03">
            <div className="pricing_card-top">
              <h2 className="section_title">Platinum </h2>
              <h2 className="pricing_section_title">$200<span>/month</span></h2>
            </div>

            <div className="services">
              <ul>
                <li>Personal Trainer</li>
                <li>Cardio & Weight Training</li>
                <li>Customer Support</li>
                <li>6 Classes per week</li>
              </ul>
              <button className="register_btn">
                <Link to='/payment' style={{textDecorationLine:"none"}}>
                  Join Now
                </Link>
              </button>
            </div>



          </div>





        </div>
      </div>

    </section>
  );
}
export default Booking

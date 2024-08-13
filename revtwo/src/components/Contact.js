import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import locationImg from '../assets1/location.png';
import mailImg from '../assets1/mail.png';
import callImg from '../assets1/call.png';
import fbImg from '../assets1/oneu.png';
import instaImg from '../assets1/threeu.png';
import twitterImg from '../assets1/twou.png';
import linkedinImg from '../assets1/fiveu.png';
import BannerBackground from "../assets/bannerbg.png"


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2wpa2vl', 'template_qvq1y9j', form.current, {
                publicKey: 'XqIra5jE0erce6KTv',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
            <form ref={form} onSubmit={sendEmail}>

                <section>
                    <div className="container">
                        <div className="contactInfo">
                            <div>
                                <h2>Contact Info</h2>
                                <ul className="info">
                                    <li>
                                        <span><img src={locationImg} alt="Location icon" /></span>
                                        <span>
                                            184 Oppanakkara Street<br />
                                            Coimbatore, TN<br />
                                            641001
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src={mailImg} alt="Mail icon" /></span>
                                        <span><a href="mailto:kishovarmamani@gmail.com">kishovarmamani@gmail.com</a></span>
                                    </li>
                                    <li>
                                        <span><img src={callImg} alt="Call icon" /></span>
                                        <span>702-279-3488</span>
                                    </li>
                                </ul>
                            </div>
                            <ul className="sci">
                                <li><a href="https://www.facebook.com"><img src={fbImg} alt="Facebook" /></a></li>
                                <li><a href="https://www.instagram.com"><img src={instaImg} alt="Instagram" /></a></li>
                                <li><a href="https://x.com/VarmaKisho"><img src={twitterImg} alt="Twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/rajakumar-s-ba3398255"><img src={linkedinImg} alt="LinkedIn" /></a></li>
                            </ul>
                        </div>
                        <div className="contactForm">
                            <h2>Send a Message</h2>
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" name="first_name" required />
                                    <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="last_name" required />
                                    <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" name='user_email' required />
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name='mobile_number' required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea name='message' required></textarea>
                                    <span>Write your message here...</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default Contact;

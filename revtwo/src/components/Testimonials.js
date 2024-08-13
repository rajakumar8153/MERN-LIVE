import React, { useState } from 'react';
import './Testimonial.css';
import { TestimonialsData } from './TestimonialsData';
import leftArrow from '../assets1/leftArrow.png';
import rightArrow from '../assets1/rightArrow.png';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = TestimonialsData.length;

    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <span>"{TestimonialsData[selected].review}"</span>
                <span className="spanw">
                    <span style={{ color: 'var(--orange)' }}>
                        {TestimonialsData[selected].name}
                    </span>
                    {' '} - {TestimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div className="img-wrapper">
                    <img src={TestimonialsData[selected].image} alt="" />
                </div>
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow}
                        alt=""
                    />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={rightArrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

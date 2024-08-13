import React from 'react'
import WeightLoss from "../assets/weightloss.png"
import WeightGain from "../assets/weightgain.png"
import StrengthTraining from "../assets/strength.png"

const Work = () => {
    const workInfoData = [
        {
            image: WeightLoss,
            title: "Weight Loss",
            text: "Our Weight Loss Program is not just about losing weight; it's about transforming your lifestyle. We focus on sustainable habits that will help you maintain your results long-term. With our holistic approach, you'll not only see physical changes but also feel more energetic, confident, and healthy.",
        },
        {
            image: WeightGain,
            title: "Weight Gain",
            text: "Our Weight Gain Program is not just about adding pounds; it's about building a stronger, healthier body. We focus on sustainable habits that will help you maintain your results long-term. With our holistic approach, you'll not only see physical changes but also feel more energetic, confident, and healthy.",
        },
        {
            image: StrengthTraining,
            title: "Strength Training",
            text: "Our Strength Training Program is not just about lifting weights; it's about transforming your body and mind. We focus on sustainable habits that will help you maintain your results long-term. With our holistic approach, you'll not only see physical changes but also feel more energetic.",
        },
    ];
     
  return (
    <div className="work-section-wrapper" style={{backgroundColor:"#fe9e0d", borderRadius:"60px", paddingBottom:"60px"}}>
        <div className="work-section-top">
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text' style={{width:"80%"}}>
            Are you ready to build muscle, increase your power, and enhance your overall fitness? Our Strength Training Program is designed to help you achieve your goals through a structured and effective approach. Whether you’re a beginner or an experienced lifter, our program offers the perfect combination of exercises, guidance, and support to help you get stronger.            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data)=>(
                    <div className="work-section-info">
                        <div className="img-boxes-img-container">
                            <img src={data.image} alt=''/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work
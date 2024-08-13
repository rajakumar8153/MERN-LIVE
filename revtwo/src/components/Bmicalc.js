import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Bmicalc.css'


const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const clearbmi = (e) =>{
    setHeight("");
    setWeight("");
    setBmi("");
  }

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight) {
      toast.error("Please enter valid height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have a normal weight. Keep maintaining a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section className="bmi">
      <ToastContainer />
      <h1>BMI CALCULATOR</h1>
      <div className="container" style={{alignItems:"end", justifyContent:"center"}}>
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label className="lab">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="0"
                required
              />
            </div>
            <div>
              <label className="lab">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="0"
                required
              />
            </div>
            <button type="submit">Calculate BMI</button>
            <button onClick={clearbmi}>Clear</button>
          </form>
        </div>
        <div className="wrapper" id="bmi">
          {bmi && (
            <div>
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
      </div>
      
    </section>
  );
};

export default BMICalculator;

// BMICalculator.jsx
import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BMICalculator.css';
import { FormDataContext } from './FormDataContext';



const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const BMICalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const { setFormData } = useContext(FormDataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // Recalculate BMI dynamically
  const calculatedBMI = (weight / ((height / 100) ** 2)).toFixed(2);

  const handleContinue = () => {
    const bmiValue = Number((weight / ((height / 100) ** 2)).toFixed(2));

  setFormData(prev => ({
  ...prev,
  bmi: {
    weight: Number(weight),
    height: Number(height),
    value: bmiValue,
    category: getBMICategory(bmiValue)
  }
}));

    navigate('/booking');
  };

  return (
    <div className="bmi-wrapper">
      <div className="bmi-inputs">
        <label>Weight</label>
        <input
          type="range"
          min="30"
          max="200"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <div className="slider-output">{weight} kg</div>
        <p>Your weight in kilograms</p>

        <label>Height</label>
        <input
          type="range"
          min="100"
          max="250"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <div className="slider-output">{height} cm</div>
        <p>Your height in centimeters</p>

        <button className="continue-btn" onClick={handleContinue}>
          Continue to Booking
        </button>
      </div>

      <div className="bmi-box">
        <h3>Your BMI result</h3>
        <p><strong>BMI</strong></p>
        <h1>{calculatedBMI} kg/m<sup>2</sup></h1>
        <p>Body Mass Index</p>
      </div>
    </div>
  );
};

export default BMICalculator;

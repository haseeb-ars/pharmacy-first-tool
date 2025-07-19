import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ConditionStart.css'; // 👈 Import the CSS file

const ConditionStart = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 const handleStart = () => {
  navigate(`/condition/${id}/details`);
};


  return (
    <div className="condition-start">
      <img src="/mat.png" alt="Welcome" className="condition-image" />
      <h2>Welcome to Pharmacist First Consultant</h2>
      <p><strong>To get started, please provide a few details</strong></p>
      <ol>
        <li><strong>Receive Advice And Treatment</strong><br />
          We’ll take a few details and our Pharmacist will send you a link to have your consultation, 
          where they'll assess you and provide the best treatment and/or advice for your condition. 
          Any prescription medication will be sent to arrive the next day.</li>
        <li><strong>Checking Your Symptoms</strong><br />
          We’ll ask a few questions to help ensure our Pharmacists can help you and you don’t need urgent care.</li>
        <li><strong>Book Your Appointment</strong><br />
          If appropriate, you can choose a date/time for a video consultation with our Pharmacist.</li>
      </ol>
      <button onClick={handleStart} className="start-button">
        Get Started
      </button>
      <p className="note">⏳ Consultation takes a few minutes.</p>
    </div>
  );
};

export default ConditionStart;

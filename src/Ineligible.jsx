import React from 'react';
import { useLocation } from 'react-router-dom';
import './Ineligible.css'; // Import the CSS file

const Ineligible = () => {
  const { state } = useLocation();
  

  const note =
    state?.note ||
    "Based on the symptoms described, it's important that you seek urgent medical attention. Your symptoms indicate a potentially serious condition that needs immediate evaluation and treatment.\n\nPlease go to the nearest Accident and Emergency (A&E) department as soon as possible for further assessment and care. Don't delay in seeking help.";

  return (
    <div className="ineligible-page">
      <div className="ineligible-card">
        <div className="ineligible-header">
          <h2>You’ve reached Emergency Action Needed Now</h2>
          <p>Here’s what we recommend based on your symptoms.</p>
        </div>
        <div className="ineligible-content">
          <h3>Emergency Action Needed Now</h3>
          <p className="note">{note}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Ineligible;

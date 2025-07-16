import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    phone: ''
  });

  const isValid = form.email && form.phone;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = () => {
    // Save to state/context later if needed
    navigate(`/condition/${id}/questions`);
  };

  return (
    <div className="form-wrapper">
      <div className="form-progress">
        <div className="form-progress-bar" style={{ width: '33%' }} />
        <p><strong>Step 1 of 3</strong> <span>Your Details</span></p>
      </div>

      <h2>Thanks!<br />Please add your email and phone number</h2>

      <label>Email Address</label>
      <input
        name="email"
        placeholder="Enter your email address"
        value={form.email}
        onChange={handleChange}
        type="email"
      />

      <label>Telephone Number</label>
      <div className="phone-group">
        <span className="flag">🇬🇧</span>
        <input
          name="phone"
          placeholder="Enter your Phone number"
          value={form.phone}
          onChange={handleChange}
          type="tel"
        />
      </div>

      <button
        className={`continue-btn ${!isValid ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!isValid}
      >
        Agree & Continue
      </button>

      <p className="legal-text">
        Service provided by healthya<br />
        By using the platform you are accepting our<br />
        <a href="Termsofservice.com">Terms of Service</a> and our <a href="privacypolicy.com">Privacy Policy</a>.
      </p>

      <p className="back-link" onClick={() => navigate(-1)}>Back</p>
    </div>
  );
};

export default ContactDetails;


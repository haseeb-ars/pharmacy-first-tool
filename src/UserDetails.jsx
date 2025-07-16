import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetails.css';
import eligibilityRules from './eligibilityRules';


const UserDetails = () => {
  const { id } = useParams(); // condition ID
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    sex: '',
    postcode: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleContinue = () => {
  const rules = eligibilityRules[id]; // condition rules (e.g., for UTI)

  // Calculate age from DOB
  const birthDate = new Date(`${formData.dobYear}-${formData.dobMonth}-${formData.dobDay}`);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Gender check
  if (rules?.gender && formData.sex !== rules.gender) {
    return navigate('/ineligible');
  }

  // Min age check
  if (rules?.minAge && age < rules.minAge) {
    return navigate('/ineligible');
  }

  // Max age check
  if (rules?.maxAge && age > rules.maxAge) {
    return navigate('/ineligible');
  }

  // All checks passed
 navigate(`/condition/${id}/contact`);
};


  return (
    <div className="form-wrapper">
      <div className="form-progress">
        <div className="form-progress-bar" />
        <p><strong>Step 1 of 3</strong> <span>Your Details</span></p>
      </div>

      <h2>To get started, please provide a few details</h2>

      <label>First name</label>
      <input name="firstName" placeholder="First name" onChange={handleChange} />

      <label>Surname</label>
      <input name="lastName" placeholder="Last name" onChange={handleChange} />
      <p className="help-text">This should exactly match how it appears on your GP surgery’s records.</p>

      <label>Date of Birth</label>
      <div className="dob-group">
        <input name="dobDay" placeholder="DD" maxLength={2} onChange={handleChange} />
        <input name="dobMonth" placeholder="MM" maxLength={2} onChange={handleChange} />
        <input name="dobYear" placeholder="YYYY" maxLength={4} onChange={handleChange} />
      </div>

      <label>Sex assigned at birth</label>
      <div className="gender-group">
        <button
          className={formData.sex === 'female' ? 'selected' : ''}
          onClick={() => setFormData({ ...formData, sex: 'female' })}
        >
          Female
        </button>
        <button
          className={formData.sex === 'male' ? 'selected' : ''}
          onClick={() => setFormData({ ...formData, sex: 'male' })}
        >
          Male
        </button>
      </div>

      <label>Postcode</label>
      <input name="postcode" placeholder="Postcode" onChange={handleChange} />

      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
      <p className="back-link" onClick={() => navigate(-1)}>Back</p>
    </div>
  );
};

export default UserDetails;

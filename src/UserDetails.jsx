import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetails.css';
import eligibilityRules from './eligibilityRules';
import { FormDataContext } from './FormDataContext';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);

  const [localData, setLocalData] = useState({
    firstName: '',
    lastName: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    sex: '',
    postcode: ''
  });

  const [postcodeError, setPostcodeError] = useState('');
  const [dobError, setDobError] = useState('');

  const validateUKPostcode = (postcode) => {
    const regex = /^([A-Z]{1,2}\d{1,2}[A-Z]?) ?\d[A-Z]{2}$/i;
    return regex.test(postcode.trim());
  };

  const validateDOB = ({ dobDay, dobMonth, dobYear }) => {
    if (!/^\d+$/.test(dobDay) || !/^\d+$/.test(dobMonth) || !/^\d{4}$/.test(dobYear)) {
      return false;
    }
    const date = new Date(`${dobYear}-${dobMonth}-${dobDay}`);
    return (
      date instanceof Date &&
      !isNaN(date) &&
      date.getDate() === parseInt(dobDay) &&
      date.getMonth() + 1 === parseInt(dobMonth) &&
      date.getFullYear() === parseInt(dobYear)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...localData, [name]: value };
    setLocalData(updatedData);

    if (name === 'postcode') {
      if (!validateUKPostcode(value)) {
        setPostcodeError('Please enter a valid UK postcode.');
      } else {
        setPostcodeError('');
      }
    }

    if (['dobDay', 'dobMonth', 'dobYear'].includes(name)) {
      if (!validateDOB(updatedData)) {
        setDobError('Please enter a valid Date of Birth.');
      } else {
        setDobError('');
      }
    }
  };

  const isComplete =
    Object.values(localData).every((val) => val.trim() !== '') &&
    postcodeError === '' &&
    dobError === '';

  const handleContinue = () => {
    const rules = eligibilityRules[id];
    const birthDate = new Date(`${localData.dobYear}-${localData.dobMonth}-${localData.dobDay}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (rules?.gender && localData.sex !== rules.gender) return navigate('/ineligible');
    if (rules?.minAge && age < rules.minAge) return navigate('/ineligible');
    if (rules?.maxAge && age > rules.maxAge) return navigate('/ineligible');

    setFormData((prev) => ({
      ...prev,
      condition: id,
      userDetails: {
        ...localData,
        age
      }
    }));

    navigate(`/condition/${id}/contact`);
  };

  return (
    <div className="form-wrapper">
      <div className="form-progress">
        <div className="form-progress-bar1"  />
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
      {dobError && <p className="error-text">{dobError}</p>}

      <label>Sex assigned at birth</label>
      <div className="gender-group">
        <button
          className={localData.sex === 'female' ? 'selected' : ''}
          onClick={() => setLocalData({ ...localData, sex: 'female' })}
        >
          Female
        </button>
        <button
          className={localData.sex === 'male' ? 'selected' : ''}
          onClick={() => setLocalData({ ...localData, sex: 'male' })}
        >
          Male
        </button>
      </div>

      <label>Postcode</label>
      <input
        name="postcode"
        placeholder="Postcode"
        onChange={handleChange}
        value={localData.postcode}
      />
      {postcodeError && <p className="error-text">{postcodeError}</p>}

      <button
        className={`continue-btn ${!isComplete ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!isComplete}
      >
        Continue
      </button>

      <p className="back-link" onClick={() => navigate(-1)}>Back</p>
    </div>
  );
};

export default UserDetails;

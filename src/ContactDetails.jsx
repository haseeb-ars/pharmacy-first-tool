import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ContactDetails.css';
import { FormDataContext } from './FormDataContext';
import ExemptionForm from './ExemptionForm';

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);

  const [form, setForm] = useState({ email: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });

  // NEW: track consent + exemption
  const [consent, setConsent] = useState(true);
  const [exemption, setExemption] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUKPhone = (phone) => /^07\d{9}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value) ? '' : 'Please enter a valid email address.'
      }));
    }
    if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: validateUKPhone(value) ? '' : 'Please enter a valid UK phone number.'
      }));
    }
  };

  const isValid = validateEmail(form.email) && validateUKPhone(form.phone);
  const canContinue = isValid && !!exemption; // unchanged: must pick an exemption

  const handleContinue = () => {
    // Save into shared form context so the final submit/email step can use it
    setFormData(prev => ({
      ...prev,
      contactDetails: {
        email: form.email,
        phone: form.phone,
      },
      consentGiven: consent,             // <— boolean
      prescriptionExemption: exemption,  // <— string
    }));

    navigate(`/condition/${id}/questions`);
  };

  return (
    <div className="form-wrapper">
      <div className="form-progress">
        <div className="form-progress-bar2" />
        <p><strong>Step 2 of 3</strong> <span>Contact Details</span></p>
      </div>

      <h2>Thanks!<br />Please add your email and phone number</h2>

      <label>Email Address</label>
      <div className="phone-group">
        <span className="flag">✉️</span>
        <input
          name="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      {errors.email && <p className="error-text">{errors.email}</p>}

      <label>Telephone Number</label>
      <div className="phone-group">
        <span className="flag">🇬🇧</span>
        <input
          name="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          type="tel"
        />
      </div>
      {errors.phone && <p className="error-text">{errors.phone}</p>}


            {/* Controlled exemption dropdown */}
      <ExemptionForm value={exemption} onChange={setExemption} />


      {/* Controlled consent checkbox */}
      <label className="consent-text">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to nominate CarePlus as my nominated pharmacy to deliver my medication
        </span>
      </label>


      <button
        className={`continue-btn ${!canContinue ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!canContinue}
        aria-disabled={!canContinue}
      >
        Agree & Continue
      </button>

      <p className="legal-text">
        Service provided by CarePlus Health<br />
        By using the platform you are accepting our<br />
        <a href="Termsofservice.com">Terms of Service</a> and our <a href="privacypolicy.com">Privacy Policy</a>.
      </p>

      <p className="back-link" onClick={() => navigate(-1)}>Back</p>
    </div>
  );
};

export default ContactDetails;

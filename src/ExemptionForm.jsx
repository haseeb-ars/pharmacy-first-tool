import React, { useState, useEffect } from "react";
import "./ExemptionForm.css";

/**
 * ExemptionForm
 * - If you pass `value` and `onChange`, it behaves as a controlled component.
 * - Otherwise it manages its own internal state.
 */
const ExemptionForm = ({ value, onChange }) => {
  const [selected, setSelected] = useState(value || "");
  

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  const handleSelect = (e) => {
    const v = e.target.value;
    setSelected(v);
    if (onChange) onChange(v);
  };

  return (
    <div className="exemption-card">
      {/* Header row */}
    

     

      {/* Dropdown (replaces all radios) */}
      <div className="select-group">
        <label htmlFor="exemption" className="form-label">
          Prescription Charge Exemption
        </label>
        <select
          id="exemption"
          name="exemption"
          className="form-select"
          value={selected}
          onChange={handleSelect}
        >
          <option value="">-- Please select --</option>

          <optgroup label="Exemption Category">
            <option value="Not exempt">Not exempt</option>
            
            <option value="A - 60 or under 16">
              (A) 60 years of age or is under 16 years of age
            </option>
            <option value="B - 16/17/18 full-time education">
              (B) 16, 17 or 18 in full-time education
            </option>
            <option value="D - Maternity exemption certificate">
              (D) Maternity exemption certificate
            </option>
            <option value="E - Medical exemption certificate">
              (E) Medical exemption certificate
            </option>
            <option value="F - Prescription prepayment certificate">
              (F) Prescription prepayment certificate
            </option>
            <option value="G - MoD certificate">
              (G) Prescription Exemption Certificate issued by the Ministry of Defence
            </option>
            <option value="HMP - Prison/secure accommodation">
              Was prescribed free-of-charge HMP/prisoners/persons detained in other secure accommodation
            </option>
            <option value="W - HRT certificate">
              (W) HRT certificate
            </option>
          </optgroup>

          <optgroup label="Receives or has partner who receives">
            <option value="S - Pension credit guarantee credit">
              (S) Pension credit guarantee credit
            </option>
            <option value="L - Current HC2 charges certificate">
              (L) Current HC2 charges certificate
            </option>
            <option value="H - Income-related ESA">
              (H) Income or related Emp. Support Allowance
            </option>
            <option value="K - Jobseeker's allowance">
              (K) Jobseeker’s allowance
            </option>
            <option value="M - NHS tax credit exemption certificate">
              (M) NHS tax credit exemption certificate
            </option>
            <option value="U - Universal Credit">
              (U) Universal Credit and meets the criteria
            </option>
          </optgroup>

          <optgroup label="Free of charge">
            <option value="X - Free-of-charge contraceptive">
              (X) Free-of-charge contraceptive
            </option>
            <option value="Y - Free-of-charge sexual health medication">
              (Y) Free-of-charge sexual health medication
            </option>
          </optgroup>
        </select>
      </div>

    
    </div>
  );
};

export default ExemptionForm;

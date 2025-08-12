import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userDetails: {},
    contactDetails: {},
    consentGiven: true,              // ✅ default checked
    prescriptionExemption: '',       // ✅ default empty
    questionnaire: [],
    bmi: {
      weight: '',
      height: '',
      value: '',
      category: ''
    }
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

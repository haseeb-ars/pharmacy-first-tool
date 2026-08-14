// BookingCalendar.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { FormDataContext } from './FormDataContext';
import { sendFormData } from './sendFormData';

const BookingCalendar = () => {
  const { formData } = useContext(FormDataContext);
  const hasSent = useRef(false); // ✅ prevent multiple sends

  useEffect(() => {
    if (!hasSent.current && formData?.userDetails?.firstName && formData?.contactDetails?.email) {
      sendFormData(formData);
      hasSent.current = true; // ✅ block further calls
    }
  }, [formData]);

  const isWeightLoss = formData?.condition === 'weightloss';

  if (isWeightLoss) {
    return (
      <iframe
        src="https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a7b2017281645557d51e5c3"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
        title="Weight Loss Booking Calendar"
      />
    );
  }

  return (
    <iframe
      src="https://cal.com/pharmacistfirst/pharmacy-first"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
      title="Booking Calendar"
    />
  );
};

export default BookingCalendar;


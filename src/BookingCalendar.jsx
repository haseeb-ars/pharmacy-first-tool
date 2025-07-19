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

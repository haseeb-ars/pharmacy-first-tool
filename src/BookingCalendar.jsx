// BookingCalendar.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { FormDataContext } from './FormDataContext';
import { sendFormData } from './sendFormData';
import CalBooking from './components/CalBooking';
import { getCalLinkForService } from './calConfig';

const BookingCalendar = () => {
  const { formData } = useContext(FormDataContext);
  const hasSent = useRef(false); // ✅ prevent multiple sends

  useEffect(() => {
    if (!hasSent.current && formData?.userDetails?.firstName && formData?.contactDetails?.email) {
      sendFormData(formData);
      hasSent.current = true; // ✅ block further calls
    }
  }, [formData]);

  const conditionKey = formData?.condition;
  const calLink = getCalLinkForService(conditionKey);

  const fullName = [formData?.userDetails?.firstName, formData?.userDetails?.lastName]
    .filter(Boolean)
    .join(' ');
  const email = formData?.contactDetails?.email || '';

  return (
    <CalBooking
      calLink={calLink}
      name={fullName}
      email={email}
      service={conditionKey || ''}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
    />
  );
};

export default BookingCalendar;

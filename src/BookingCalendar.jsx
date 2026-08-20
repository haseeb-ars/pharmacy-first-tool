// BookingCalendar.jsx
import React, { useContext, useEffect, useRef } from 'react';
import { FormDataContext } from './FormDataContext';
import { sendFormData } from './sendFormData';

const bookingLinks = {
  impetigo: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a85e12bb1259802871d7c64',
  shingles: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86fef47916410ca31bbefd',
  UTI: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86eff67916410ca31bb5fb',
  uti: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86eff67916410ca31bb5fb',
  soreThroat: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a85e07cb1259802871d7c29',
  sorethroat: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a85e07cb1259802871d7c29',
  sinusitis: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a85dfa4b1259802871d7bdd',
  insectBite: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86ee037916410ca31bb486',
  infectedInsectBites: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86ee037916410ca31bb486',
  insectbite: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86ee037916410ca31bb486',
  contraception: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a86fe427916410ca31bbe9c',
  weightloss: 'https://booking.tvrx.uk/07804ce4-ed4d-49ee-90c5-c67b692d264d/6a7b2017281645557d51e5c3',
};

const defaultBookingLink = 'https://cal.com/pharmacistfirst/pharmacy-first';

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
  const bookingUrl = (conditionKey && bookingLinks[conditionKey]) || defaultBookingLink;

  return (
    <iframe
      src={bookingUrl}
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



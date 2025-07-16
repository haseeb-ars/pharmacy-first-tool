import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    alert(`Booked on ${date.toDateString()} at ${time}`);
  };

  return (
    <div>
      <h2>Select Appointment</h2>
      <Calendar onChange={setDate} value={date} />
      <select onChange={(e) => setTime(e.target.value)} value={time}>
        <option value="">Select a time</option>
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        {/* Add more times as needed */}
      </select>
      <button onClick={handleSubmit} disabled={!time}>
        Book Appointment
      </button>
    </div>
  );
};

export default BookingCalendar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import Ineligible from './Ineligible';
import BookingCalendar from './BookingCalendar';
import ConditionStart from './ConditionStart';
import Header from './Header';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import { FormDataProvider } from './FormDataContext';

function App() {
  return (

    <FormDataProvider>
    <Router>
      <div className="App">

        <Header/>
        
<Routes>
  {/* Step 1: Welcome */}
  <Route path="/condition/:id" element={<ConditionStart />} />

  {/* Step 2: USer details */}
  <Route path="/condition/:id/details" element={<UserDetails />} />

  <Route path="/condition/:id/contact" element={<ContactDetails />} />
  
  {/* Step 3: Questions */}
  <Route path="/condition/:id/questions" element={<Questionnaire />} />

  {/* Other routes */}
  <Route path="/ineligible" element={<Ineligible />} />
  <Route path="/booking" element={<BookingCalendar />} />
</Routes>
      </div>
    </Router>

    </FormDataProvider>
  );
}

export default App;

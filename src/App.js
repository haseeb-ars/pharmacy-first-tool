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
import BMICalculator from './BMICalculator';
import Footer from './Footer';


function App() {



  return (
    <FormDataProvider>
      <Router basename="/">
        <div className="App">
          <Header />

          <Routes>
            {/* Step 1: Welcome */}
            <Route path="/condition/:id" element={<ConditionStart />} />

            {/* Step 2: User details */}
            <Route path="/condition/:id/details" element={<UserDetails />} />

            {/* Step 2.5: Contact details */}
            <Route path="/condition/:id/contact" element={<ContactDetails />} />

            {/* Step 3: Questions */}
            <Route path="/condition/:id/questions" element={<Questionnaire />} />
            
            <Route path="/bmi" element={<BMICalculator />} />
            {/* Outcomes */}
            <Route path="/ineligible" element={<Ineligible />} />
            <Route path="/booking" element={<BookingCalendar />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FormDataProvider>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Museums from './Museums';
import BookingForm from './BookingForm';
import MuseumInfoBox from './MuseumInfoBox'; // Component for displaying museum info

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleMuseumInfoClick = (museum) => {
    setSelectedMuseum(museum);
    setShowInfoBox(true);
    setShowBookingForm(false);
  };

  const handleMuseumBookClick = (museum) => {
    setSelectedMuseum(museum);
    setShowBookingForm(true);
    setShowInfoBox(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Museums onMuseumInfoClick={handleMuseumInfoClick} onMuseumBookClick={handleMuseumBookClick} />
        {selectedMuseum && showInfoBox && (
          <MuseumInfoBox
            museum={selectedMuseum}
            onClose={() => setShowInfoBox(false)}
          />
        )}
        {selectedMuseum && showBookingForm && (
          <BookingForm
            museum={selectedMuseum}
            setShowBookingForm={setShowBookingForm}
          />
        )}
        <About />
        {showContactForm && <ContactUs setShowContactForm={setShowContactForm} />}
      </main>
    </div>
  );
}

export default App;

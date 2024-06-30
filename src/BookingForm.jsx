import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ museum, setShowBookingForm }) => {
  const [familyHead, setFamilyHead] = useState({ name: '', age: '' });
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const prices = {
    male: 20,
    female: 15,
    child: 10
  };

  const calculateTotalPrice = () => {
    const price = (maleCount * prices.male) + (femaleCount * prices.female) + (childCount * prices.child);
    setTotalPrice(price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowBookingForm(false);
  };

  return (
    <div className="booking-form">
      <h2>Booking for {museum.name}</h2>
      <p>Prices: Male - ${prices.male}, Female - ${prices.female}, Child - ${prices.child}</p>
      <form onSubmit={handleSubmit}>
        <div className="family-head-form">
          <label>
            Family Head Name:
            <input
              type="text"
              value={familyHead.name}
              onChange={(e) => setFamilyHead({ ...familyHead, name: e.target.value })}
              required
            />
          </label>
          <label>
            Family Head Age:
            <input
              type="number"
              value={familyHead.age}
              onChange={(e) => setFamilyHead({ ...familyHead, age: e.target.value })}
              required
            />
          </label>
        </div>
        <label>
          Number of Males (excluding children above age 15):
          <input
            type="number"
            value={maleCount}
            onChange={(e) => {
              setMaleCount(Number(e.target.value));
              calculateTotalPrice();
            }}
          />
        </label>
        <label>
          Number of Females (excluding children above age 15):
          <input
            type="number"
            value={femaleCount}
            onChange={(e) => {
              setFemaleCount(Number(e.target.value));
              calculateTotalPrice();
            }}
          />
        </label>
        <label>
          Number of Children (age less than or equal to 15):
          <input
            type="number"
            value={childCount}
            onChange={(e) => {
              setChildCount(Number(e.target.value));
              calculateTotalPrice();
            }}
          />
        </label>
        <p>Total Males: {maleCount}</p>
        <p>Total Females: {femaleCount}</p>
        <p>Total Children: {childCount}</p>
        <p>Total Price: ${totalPrice}</p>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setShowBookingForm(false)}>Close</button>
      </form>
    </div>
  );
};

export default BookingForm;

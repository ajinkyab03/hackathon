import React from 'react';
import './MuseumInfoBox.css';

const MuseumInfoBox = ({ museum, onClose }) => {
  return (
    <div className="museum-info-box">
      <h2>{museum.name}</h2>
      <p><strong>Info:</strong> {museum.info}</p>
      <p><strong>Description:</strong> {museum.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MuseumInfoBox;

import React from 'react';
import './MuseumInfoModal.css';

const MuseumInfoModal = ({ museum, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{museum.name}</h2>
        <p>Here is some information about the museum. You can update this text with actual details.</p>
        <img src={museum.image} alt={museum.name} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MuseumInfoModal;

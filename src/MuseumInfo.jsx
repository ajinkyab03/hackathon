// MuseumInfo.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './MuseumInfo.css'; // Add MuseumInfo.css as needed

const MuseumInfo = () => {
  const { id } = useParams(); // Fetch museum ID from URL params

  // Replace with actual museum data retrieval logic
  const museum = {
    id: id,
    name: 'Sample Museum', // Replace with actual museum name
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at bibendum odio. Integer et leo ac elit maximus scelerisque nec ac magna.', // Replace with actual description
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
    location: 'Sample Location', // Replace with actual location
    timings: 'Sample Timings', // Replace with actual timings
  };

  return (
    <div className="museum-info">
      <h2>{museum.name}</h2>
      <img src={museum.image} alt={museum.name} />
      <p><strong>Description:</strong> {museum.description}</p>
      <p><strong>Location:</strong> {museum.location}</p>
      <p><strong>Timings:</strong> {museum.timings}</p>
    </div>
  );
};

export default MuseumInfo;

import React from 'react';
import './Museums.css';

const museums = [
  {
    name: 'Chhatrapati Shivaji Maharaj Museum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya.jpg',
    info: 'Located in Mumbai, this museum is a prominent historical place.',
    description: 'The Chhatrapati Shivaji Maharaj Museum offers a rich collection of artifacts and exhibits related to India’s history and culture.'
  },
  {
    name: 'Indian Museum',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-UQ7nXPV9r-EGww-MXfVbxC1u1SZ5Wwm-g&s',
    info: 'The Indian Museum is situated in Kolkata and is the largest and oldest museum in India.',
    description: 'Established in 1814, the Indian Museum has rare collections of antiques, armor, ornaments, fossils, skeletons, mummies, and Mughal paintings.'
  },
  {
    name: 'National Museum, New Delhi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Eb2cUQU8uMSi3an-ItB9yDHYQ4wBvZg9ig&s',
    info: 'This museum is located in New Delhi and holds vast collections of Indian and international art.',
    description: 'The National Museum in New Delhi showcases over 200,000 works of art, both Indian and foreign, covering over 5,000 years of heritage.'
  },
  {
    name: 'City Palace, Udaipur',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlaXDxj3ui_4AaNmbZ7Sn106IPrMYaIiAjg&s',
    info: 'The City Palace is a historic landmark located in Udaipur, Rajasthan.',
    description: 'Built over a period of nearly 400 years, the City Palace in Udaipur is a stunning example of Rajput architecture.'
  },
  {
    name: 'Government Museum, Chennai',
    image: 'https://static.toiimg.com/thumb/msid-87707275,width-400,height-225,resizemode-72/87707275.jpg',
    info: 'This museum is located in Chennai and is also known as the Madras Museum.',
    description: 'The Government Museum in Chennai houses an impressive collection of Roman antiquities, among other significant artifacts.'
  },
  {
    name: 'National Rail Museum, New Delhi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LiYKg-obKZwAhb65OC-x947yy0ftQwK5sA&s',
    info: 'Located in New Delhi, this museum focuses on the rail heritage of India.',
    description: 'The National Rail Museum in New Delhi offers an engaging look at the history of Indian Railways with exhibits of antique locomotives and carriages.'
  },
];

const Museums = ({ onMuseumInfoClick, onMuseumBookClick }) => {
  return (
    <div className="museums-container">
      {museums.map((museum, index) => (
        <div key={index} className="museum-box">
          <img src={museum.image} alt={museum.name} />
          <h3>{museum.name}</h3>
          <button onClick={() => onMuseumInfoClick(museum)}>Info</button>
          <button onClick={() => onMuseumBookClick(museum)}>Book</button>
        </div>
      ))}
    </div>
  );
};

export default Museums;

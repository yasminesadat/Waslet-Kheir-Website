import React from 'react';


const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';

const Card2 = ({ image, title, description, donateUrl, detailsUrl }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <div className="card-buttons">
        <a href={donateUrl} className="card-button" >Donate</a>
        <a href={detailsUrl} className="card-link">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
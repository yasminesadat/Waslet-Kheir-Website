import React from 'react';
import './donor.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
const ClothesCard = ({ title, text,age, gender, season, material,quantity, progress }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';

  return (
    <div className="cardMariam">
      <img className="card-imgMariam" src={"https://cdn.iconscout.com/icon-pack/preview-mockup/free-free-clothing-fill-color-icons-8806.png?f=webp&h=240&modified_at=1506069958"} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{text}</p>
        <br></br>
        <div className="button-container">

          <button className="donate-button">Donate</button>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button>
        </div>
        <div className="progress-container">
          <progress className={`progress-bar ${progressBarClass}`} style={{marginBottom:'10%'}} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3 style={{marginTop:'-8%' , fontSize:'13px'}}>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default ClothesCard;
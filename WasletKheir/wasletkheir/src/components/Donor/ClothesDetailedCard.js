import React from 'react';
import './donor.css'
import { useNavigate  } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const ClothesDetailedCard = ({ title, text, age, gender, season, material, quantity, progress,orgName,image  }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';

  return (
    <div className="cardMariam2">
      <img className="card-imgMariam" src={image} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{orgName}{text}</p>
        <p className="card-descriptionMariam">Age: {age}</p>
        <p className="card-descriptionMariam">Gender: {gender}</p>
        <p className="card-descriptionMariam">Season: {season}</p>
        <p className="card-descriptionMariam">Material: {material}</p>
        <p className="card-descriptionMariam">Quantity: {quantity}</p>


        <br></br>
        
        <div className="progress-container">
          <progress className={`progress-bar ${progressBarClass}`} style={{marginBottom:'10%'}} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3 style={{marginTop:'-8%' , fontSize:'13px'}}>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default ClothesDetailedCard;
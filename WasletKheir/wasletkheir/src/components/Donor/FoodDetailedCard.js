import React from 'react';
import './donor.css'



const FoodDetailedCard = ({   title, text, quantity, progress, type }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';



  return (
    <div className="cardMariam2">
      <img className="card-imgMariam" src={"https://cdn.iconscout.com/icon-pack/preview-mockup/food-1-1-3695.png?f=webp&h=240&modified_at=1507627043"} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{orgName}{text}</p>
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

export default FoodDetailedCard;
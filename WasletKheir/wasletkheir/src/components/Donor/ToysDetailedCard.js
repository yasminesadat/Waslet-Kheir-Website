import React from 'react';
import './donor.css'

const ToysDetailedCard = ({title, text ,age, gender, type, quantity, progress }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
  


  return (
    <div className="cardMariam2">
      <img className="card-imgMariam" src={"https://t3.ftcdn.net/jpg/03/65/19/54/360_F_365195462_y5gKpvyI19DN2n8seBOjjX2uO1gQimnW.jpg"} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{orgName}{text}</p>
        {age && <p className="card-descriptionMariam">Age: {age}</p>}
        {gender && <p className="card-descriptionMariam">Gender: {gender}</p>}
        { quantity&&<p className="card-descriptionMariam">Quantity: {quantity}</p>}
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

export default ToysDetailedCard;
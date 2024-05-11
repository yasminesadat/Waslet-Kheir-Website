import React from 'react';
import { useLocation } from 'react-router-dom';
import DonorNavbar from './DonorNavbar';
import Footer from '../Footer';
import { DonationCategories } from '../helpers/types'; // Import DonationCategories
import { Modal } from 'antd';

export default function InfoPage() {
  
  const location = useLocation();
  const { title, text, age, gender, season, material, quantity, type, progress, image, category } = location.state || {};
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';

  const renderDetailsByCategory = () => {
    switch (category) {
      case DonationCategories.Clothes:
        return (
          <>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Season: {season}</p>
            <p>Material: {material}</p>
            <p>Quantity: {quantity}</p>
          </>
        );
        case DonationCategories.BloodDonations:
          return(
            <>
            
            
            </>
          )
     
    }
  };

  return (
    <div>
      <DonorNavbar />
      <section className='info-container'>
        <div className='info-image'>
          <img src={image} alt={title} />
        </div>
        <div className='info-details'>
          <h1 style={{ marginLeft: '24%' }}>{title}</h1>
          <p>{text}</p>
          {renderDetailsByCategory()}
          <div className="progress-container">
            <progress className={`progress-barMariam ${progressBarClass}`} style={{ marginBottom: '10%' }} value={progress} max="100"></progress>
            <div className={`status ${statusClass}`}>Status: {status}</div>
            <h3 style={{ marginTop: '-8%', fontSize: '13px' }}>{progress}% Donated </h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

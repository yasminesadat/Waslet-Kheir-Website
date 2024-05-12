import React, { useState } from 'react';
import DonorNavbar from './DonorNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import QuantityInput from './NumberInput';
import ClothesDetailedCard from './ClothesDetailedCard';
import FoodDetailedCard from './FoodDetailedCard';
import ToysDetailedCard from './ToysDetailedCard';
import MedicalSuppliesDetailedCard from './MedicalSuppliesDetailedCard';
import SchoolSuppliesDetailedCard from './SchoolSuppliesDetailedCard';
import Footer from '../Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DonationCategories } from '../helpers/types'; 
import { message } from 'antd';


export default function DonateAction() {
  const location = useLocation();
  const [isDonationConfirmed, setIsDonationConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('');
  const { title, text, age, gender, season, medicationValue, material, quantity, type, progress, image ,category, 
    patientName,blood,hospitalAddress, hospitalName,government,area,use,
    bookName, author, language,edition,summary,stationaryType,orgName } = location.state || {};

  const renderCard = () => {
    switch (category) {
      case DonationCategories.Clothes:
         return <ClothesDetailedCard  category={category} title={title} orgName={orgName} image={image} text={text} type={type} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
      case DonationCategories.Food:
        return <FoodDetailedCard category={category} title={title} type={type} orgName={orgName} image={image} quantity={quantity} text={text} progress={progress} />;
      case DonationCategories.Toys:
        return <ToysDetailedCard  category={category} title={title} age={age} orgName={orgName} gender={gender} type={type} image={image} quantity={quantity} text={text} progress={progress}  />;
      case DonationCategories.MedicalSupplies:
        return <MedicalSuppliesDetailedCard category={category} title={title} image={image}orgName={orgName} text={text} use={use} type={type} quantity={quantity} medicationValue={medicationValue} progress={progress}/>;
      case DonationCategories.SchoolSupplies:
        return <SchoolSuppliesDetailedCard  category={category} title={title} text={text} orgName={orgName} image={image} bookName={bookName} author={author} language={language} edition={edition} summary={summary} type={type} quantity={quantity} stationaryType={stationaryType} progress={progress}  />;
      default:
        return null;
    }
  };
  const handleVehicleTypeChange = value => {
    console.log('Selected vehicle type:', value);
    setVehicleType(value);
    setErrorMessage('');
  };
  const handleConfirmDonation = () => {
    if (!isFormValid()) {
      setErrorMessage('Please select a valid vehicle type.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDonationConfirmed(true);
      setSuccessMessage('Thank you for your donation!');
      message.success('Thank you for your donation!')
      setTimeout(() => {
        navigate('/DonorDonatePage');
      }, 3000);
    }, 2000);
  };

  const isFormValid = () => {
    return !!vehicleType;
  };

  console.log("vehicleType:", vehicleType);
console.log("isFormValid:", isFormValid());

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: 'auto' ,marginTop:'10vh'}}>
        <DonorNavbar />
       
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 2rem',borderTop:'2px solid #ddd' }}>
          <div style={{ flex: 1, marginRight: '2rem', padding: '20px', borderRight: '2px solid #ddd' }}>
            <h2 style={{ marginBottom: '1rem' }}>Donation Details</h2>
      
            <div style={{ marginBottom: '1rem' }}>
              <label>Select the transportation</label>
              
            
              <Select style={{ width: '75%' }} placeholder="Vehicle type" onChange={handleVehicleTypeChange}>
                <option value="Truck">Truck</option>
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
              </Select>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div style={{ marginBottom: '1rem', borderRadius: '5px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth:'65%'}}>
              <label>Select the suitable timing</label>
              <br></br>
              <br></br>
              <Calendar onChange={setDate} value={date} className="calendar" />
            </div>
            {quantity !== 1 && (<div style={{ marginBottom: '1rem', display:'grid', justifyContent:'left'}}>
           <label>Select your donation quantity </label>
           <br></br>
              <br></br>
              <QuantityInput required />
            </div>)}
            <div style={{ marginBottom: '1rem' }}>
            <input type="checkbox" id="anon"/>
        <label>Donate Anonymously</label></div> 
        
            <button onClick={handleConfirmDonation} style={{ alignSelf: 'flex-start', marginTop: '1rem', padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Confirm Donation
            </button>
            {isLoading && <p>Loading... <span id="loaderAd"></span></p>}
            {isDonationConfirmed && <p>{successMessage}</p>}
          </div>
          <div style={{ flex: 1, marginLeft: '2rem',alignContent:'center'}}>
            <h2 style={{ marginBottom: '1rem' }}>Thank you for your contribution to this request</h2>
            {renderCard()}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
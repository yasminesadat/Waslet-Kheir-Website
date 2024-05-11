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

export default function DonateAction() {
  const location = useLocation();
  const [isDonationConfirmed, setIsDonationConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const { title, text, age, gender, season, medicationValue, material, quantity, type, progress, image ,category, 
    patientName,blood,hospitalAddress, hospitalName,government,area,use,
    bookName, author, language,edition,summary,stationaryType } = location.state || {};

  const renderCard = () => {
    switch (category) {
      case DonationCategories.Clothes:
         return <ClothesDetailedCard category={category} title={title} image={image} text={text} type={type} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
      case DonationCategories.Food:
        return <FoodDetailedCard category={category} title={title} type={type} image={image} quantity={quantity} text={text} progress={progress} />;
      case DonationCategories.Toys:
        return <ToysDetailedCard  category={category} title={title} age={age} gender={gender} type={type} image={image} quantity={quantity} text={text} progress={progress}  />;
      case DonationCategories.MedicalSupplies:
        return <MedicalSuppliesDetailedCard category={category} title={title} image={image} text={text} use={use} type={type} quantity={quantity} medicationValue={medicationValue} progress={progress}/>;
      case DonationCategories.SchoolSupplies:
        return <SchoolSuppliesDetailedCard  category={category} title={title} text={text} image={image} bookName={bookName} author={author} language={language} edition={edition} summary={summary} type={type} quantity={quantity} stationaryType={stationaryType} progress={progress}  />;
      default:
        return null;
    }
  };

  const handleConfirmDonation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDonationConfirmed(true);
      setSuccessMessage('Thank you for your donation!');
      setTimeout(() => {
        navigate('/DonorDonatePage');
      }, 3000);
    }, 2000);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: 'auto' }}>
        <DonorNavbar />
        <br></br>
        <br></br>
        <br></br>
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>
          <div style={{ flex: 1, marginRight: '2rem', padding: '20px', borderRight: '2px solid #ddd' }}>
            <h2 style={{ marginBottom: '1rem' }}>Donation Details</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label>Select the transportation</label>
              <Select style={{ width: '100%' }} placeholder="Select a vehicle type">
                <option value="Truck">Truck</option>
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
              </Select>
            </div>
            <div style={{ marginBottom: '1rem', borderRadius: '5px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <label>Select the suitable timing</label>
              <br></br>
              <br></br>
              <Calendar onChange={setDate} value={date} className="calendar" />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Please select a quantity</label>
              <QuantityInput required />
            </div>
            <button onClick={handleConfirmDonation} style={{ alignSelf: 'flex-start', marginTop: '1rem', padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Confirm Donation
            </button>
            {isLoading && <p>Loading... <span id="loaderAd"></span></p>}
            {isDonationConfirmed && <p>{successMessage}</p>}
          </div>
          <div style={{ flex: 2, marginLeft: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Thank you for your contribution to this request</h2>
            {renderCard()}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

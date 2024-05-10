import React , { useState }from 'react';
import DonorNavbar from './DonorNavbar';
import {useLocation, useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import QuantityInput from './NumberInput';
import ClothesDetailedCard from './ClothesDetailedCard';
import FoodDetailedCard from './FoodDetailedCard';
import ToysDetailedCard from './ToysDetailedCard';
import MedicalSuppliesDetailedCard from './MedicalSuppliesDetailedCard';
import SchoolSuppliesDetailedCard from './SchoolSuppliesDetailedCard';
import Footer from '../Footer';

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: 200, // Adjust the width as needed
      marginTop: '5%',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : 'white',
      color: state.isSelected ? 'white' : '#000',
      '&:hover': {
        backgroundColor: '#007bff',
        color: 'white',
      },
    }),
  };

export default function DonateAction() {
    const location = useLocation();
    const [isDonationConfirmed, setIsDonationConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
    const { title, text, age, gender, season,medicationValue, material, quantity, type,progress ,image} = location.state || {};
    const renderCard = () => {
        switch (title) {
            case 'Jackets':
            case 'Shirts':
                return <ClothesDetailedCard title={title} text={text} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
            case 'Fresh Meals':
            case 'Fruits': 
              return <FoodDetailedCard title={title} text={text} quantity={quantity} progress={progress} />;
            case 'Toys': 
              return <ToysDetailedCard title={title} text={text}  age={age} gender={gender} type={type} quantity={quantity} progress={progress}  />;
            case 'Medical Supplies':  
              return < MedicalSuppliesDetailedCard  title={title} type={type} medicationValue={medicationValue} text={text} progress={progress} />;
            case 'School Stationary':
            case 'School books':
              return<SchoolSuppliesDetailedCard   title={title} text={text} progress={progress}/>;
            
            default:
                return null; }

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
            <DonorNavbar />
            <br/>
            <br/>
            <br/>

            <div style={{marginTop:'5%' ,display:'flex'}}>
                <div style={{flex:'1', marginLeft:'20vh', marginRight:'20vh'}}>


            <div>
              <label>Select the transportation</label>
              <Select required styles={customStyles} >      
              <option value="Option0">Vehicle Type</option>
              <option value="Option1">Truck</option>
              <option value="Option2">Car</option>
              <option value="Option3">Motorcycle</option>
              </Select>
              </div>


              <div>
              <label>Select the suitable timing</label>
                hena yowgad calendar
                <input type="datetime-local"  />
              </div>


             <div  >
              <label> Please select a quantity</label>
              <QuantityInput required />
             </div>


             <div>
      {isDonationConfirmed ? (
        <p>{successMessage}</p>
      ) : (
        <div>
          <button className="donate-button" onClick={handleConfirmDonation}>
            Confirm Donation
          </button>
          {isLoading && (
            <p>
              Loading... <span id="loaderAd"></span>
            </p>
          )}
        </div>
      )}
    </div>



              </div>


               <div style={{flex:'1',marginLeft:'20vh', marginRight:'20vh'}}> 
                <h1>Thank you for your contribution to this request</h1> {renderCard()}</div>  
            </div>

            <br></br>
            <Footer/>
        </div>
    );
}
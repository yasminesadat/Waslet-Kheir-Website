import React from 'react';
import DonorNavbar from './DonorNavbar';
import {useLocation } from 'react-router-dom';
import ClothesCard from './ClothesCard';
import { Select } from 'antd';
import { Calendar } from "antd";

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
    const { title, text, age, gender, season, material, quantity, progress } = location.state || {};
    const renderCard = () => {
        switch (title) {
            case 'Jackets':
            case 'Shirts':
                return <ClothesCard title={title} text={text} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
            default:
                return null; // If the title doesn't match, render nothing or a default component
        }
    };
    return (
        <div>
            <DonorNavbar />
            <br/>
            <br/>
            <br/>

            <div style={{marginTop:'5%'}}>
                <span><form >
                    <label>Select the transportation</label>
                    <Select styles={customStyles}>      
                    <option value="Option0">Vehicle Type</option>
                    <option value="Option1">Truck</option>
                    <option value="Option2">Car</option>
                    <option value="Option3">Motorcycle</option>
                    </Select>
                    <label>Select the suitable timing</label>
             hena yowgad calendar
                    </form></span>
                    <span>
            {renderCard()}</span>
            </div>
        </div>
    );
}
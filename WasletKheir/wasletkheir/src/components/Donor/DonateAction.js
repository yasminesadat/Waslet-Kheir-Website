import React from 'react';
import DonorNavbar from './DonorNavbar';
import { route,useLocation } from 'react-router-dom';
import ClothesCard from './ClothesCard';


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
            <div>
            {renderCard()}
            </div>
        </div>
    );
}
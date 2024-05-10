import React from 'react';
import { Col, Row } from 'antd';
import RequestCard from './RequestCard'; // Assuming this is the path to your RequestCard component
import { DonationCategories } from '../helpers/types';
import ClothesCard from './ClothesCard';
import ToysCard from './ToysCard';
import MedicalSuppliesCard from './MedicalSuppliesCard';
import SchoolSuppliesCard from './SchoolSuppliesCard';
import BloodCard from './BloodCard';
import FoodCard from './FoodCard';

import './donor.css'

const selectCorrespondingCard = (data) => {
    const { title, text, type, age, gender, season, material, quantity, progress, category, image, hospitalName,government,area } = data;

    switch (category) {
        case DonationCategories.Clothes:
            return <ClothesCard title={title} image={image} text={text} type={type} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
        case DonationCategories.Toys:
            return <ToysCard title={title} age={age} gender={gender} type={type} image={image} quantity={quantity} text={text} progress={progress} />;
        case DonationCategories.Food:
            return <FoodCard title={title} type={type} image={image} quantity={quantity} text={text} progress={progress} />;
        case DonationCategories.MedicalSupplies:
            return <MedicalSuppliesCard title={title} text={text} progress={progress} />;
        case DonationCategories.SchoolSupplies:
            return <SchoolSuppliesCard title={title} text={text} progress={progress} />;
        case DonationCategories.BloodDonations:
            return <BloodCard title={title} text={text} hospitalName={hospitalName} government={government} area={area} progress={progress} />;
        default:
            return <RequestCard title={title} text={text} progress={progress} />;
    }
};

function CardGrid({ filteredData }) {

    return (
        <div className='card-grid' style={{ marginTop: '0%' }}>
            {(filteredData || []).map((_, index) => (
                <Row gutter={[4, 4]} key={index}>
                    {filteredData.slice(index * 3, index * 3 + 3).map((card, j) => (
                        <Col span={Math.floor(24 / Math.min(filteredData.length - index * 3, 3))} key={j}>
                            {selectCorrespondingCard(card)}
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default CardGrid;

import React from 'react'
import { useState, useEffect } from 'react';
import OrgDonCard from './OrgDonCard';
import OrgNavBar2 from './NavbarOrg';
import './Org.css';
import Footer from '../Footer';
export default function OrgViewDon() {
    const [selectedOption, setSelectedOption] = useState('ongoing');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [donations, setDonations] = useState([
        { image: 'https://i.ibb.co/PwnmDGv/school-jackets.jpg', title: 'Jackets', description: 'We would appreciate receiving winter jackets for our students to wear.', progress: 15 },
        { image: 'https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa49d338d/29231221227229x20237010.jpg?sw=800&sh=800&sm=fit', title: 'Plushies', description: 'We would like to have plushies for our younger students.', progress: 25 },
        { image: 'https://yoobi.com/cdn/shop/products/3pkSpiralNotebook-Multicolor5copy.jpg?v=1622562624', title: 'Notebooks', description: 'We are in need of notebooks for our students.', progress: 50 },
    ]);

    const [donations2, setDonations2] = useState([
        { image: 'https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2020-08/Fruits%20and%20veggies%20-%20shutterstock_640972939.jpg?h=0b91468c&itok=PrllPUGx', title: 'Fruits & Vegetables', description: 'We would like to receive healthy food for our students.', progress: 100 },
        { image: 'https://www.agawa-shop.com/opisy/zdjecia/3316.jpg', title: 'Board Markers', description: 'We would like to have board markers for our teachers to use.', progress: 100 },
        { image: 'https://www.chessbazaar.com/blog/wp-content/uploads/2016/11/feature-image-scaled.jpg', title: 'Chess Boards', description: 'We would appreciate receiving chess boards for our older students to play.', progress: 100 },
    ]);

    const handleDelete = (title) => {
        if (selectedOption === 'ongoing') {
            setDonations(donations.filter(donation => donation.title !== title));
        } else {
            setDonations2(donations2.filter(donation => donation.title !== title));
        }
    };

    return (
        <>
        <div className="ziad-main-content">
            <OrgNavBar2 />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h1>My Donations</h1>
            </center>
            <div className="select-container">
                <select onChange={handleSelectChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="fulfilled">Fulfilled</option>
                </select>
            </div>

            {/* Display for ongoing requests */}
            {selectedOption === 'ongoing' && (
                <div className="donations-container">
                    {donations.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} onDelete={handleDelete} />
                    ))}
                </div>
            )}

            {/* Display for fulfilled requests */}
            {selectedOption === 'fulfilled' && (
                <div className="donations-container">
                    {donations2.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} onDelete={handleDelete} />
                    ))}
                </div>
            )}
            </div>
         <Footer></Footer>
        </>
    )
}
import React from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import './Org.css';
import DonationUser from './DonationUser';
import Footer from '../Footer';

export default function OrgView5() {




    

    const donations = [
        {
            donorName: 'Michael Smith',
            quantity: 5,
            image: 'https://cdn-icons-png.freepik.com/512/219/219986.png'
        },
        {
            donorName: 'Alexa James',
            quantity: 4,
            image: 'https://cdn-icons-png.flaticon.com/512/219/219969.png'
        },
    ];

    

    const itemDetails = {
        name: "Winter Jackets For School",
        category: "Clothes",
        age: "8-12 years",
        gender: "Unisex",
        season: "Winter",
        material: "Cotton",
        quantity: 60,
        description: "We would appreciate receiving winter jackets for our students to wear.",
        donationstatus: "9 out of 60 donated"
    };

    return (
        <>
            <OrgNavBar2 />
            <br></br>
            <br></br>
            <br></br>
            <div className="org-view-container">
                <h1 className="org-view-title">View Request Details</h1>
                <hr></hr>
                <div className="org-item-details">
                    <h2 className="org-item-name">{itemDetails.name}</h2>
                    <p className="org-item-info"><strong>Category:</strong> {itemDetails.category}</p>
                    <p className="org-item-info"><strong>Age:</strong> {itemDetails.age}</p>
                    <p className="org-item-info"><strong>Gender:</strong> {itemDetails.gender}</p>
                    <p className="org-item-info"><strong>Season:</strong> {itemDetails.season}</p>
                    <p className="org-item-info"><strong>Material:</strong> {itemDetails.material}</p>
                    <p className="org-item-info"><strong>Quantity:</strong> {itemDetails.quantity}</p>
                    <p className="org-item-info"><strong>Description:</strong> {itemDetails.description}</p>
                    <p className="org-item-info"><strong>Donation Progress:</strong> {itemDetails.donationstatus}</p>
                    <hr></hr>
                    <center><h2 className="org-item-name">Donated By: </h2></center>
                    <div className="donations-container">
                    {donations.map((donation, index) => (
                    <DonationUser key={index} {...donation} />
                    ))}
                    </div>




                    <center>
                        <Link to="/OrgUpd1" className="blue-button" style={{ marginRight: '10%' }}>Edit Details</Link>
                        <Link to="/OrgUpd11" className="blue-button">Return</Link>
                       
                    </center>

                </div>
            </div>
            <Footer />
        </>
    );
}
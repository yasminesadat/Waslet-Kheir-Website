import React from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import './Org.css';
import DonationUser from './DonationUser';
import Footer from '../Footer';


export default function OrgView3() {



    const donations = [
        {
            donorName: 'Jana Mohamed',
            quantity: 2,
            image: 'https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png',
            gender:'Female',
            email:'jana123@gmail.com',
            phoneNumber:'01233357896',
            address: '12 El Maadi Street, Maadi, Cairo, Egypt'

        },
        {
            donorName: 'Anonymous User',
            quantity: 3,
            image: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        },
    ];

    const itemDetails = {
        name: "Fruits & Vegetables",
        category: "Food",
        type: "Fruits & Vegetables",
        quantity: 5,
        description: "We would like to receive healthy food for our students.",
        donationstatus: "5 kg out of 5 kg donated",

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
                    <p className="org-item-info"><strong>Type: </strong> {itemDetails.type}</p>
                    <p className="org-item-info"><strong>Quantity:</strong> {itemDetails.quantity} kg</p>
                    <p className="org-item-info"><strong>Description:</strong> {itemDetails.description}</p>
                    <p className="org-item-info"><strong>Donation Progress:</strong> {itemDetails.donationstatus}</p>

                    <hr></hr>
                    <center><h2 className="org-item-name">Donated By: </h2></center>
                    <div className="donations-container">
                    {donations.map((donation, index) => (
                    <DonationUser key={index} {...donation} />
                    ))}
                    </div>

                    <center><Link to="/OrgViewDon" className="blue-button">Return</Link></center>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
import React from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import './Org.css';
import DonationUser from './DonationUser';
import Footer from '../Footer';

export default function OrgView2() {



    const donations = [
        {
            donorName: 'Anonymous User',
            quantity: 4,
            image: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        },
        {
            donorName: 'Mohamed Ayman',
            quantity: 1,
            image: 'https://cdn-icons-png.flaticon.com/512/219/219970.png',
            gender:'Male',
            email:'moayman@gmail.com',
            phoneNumber:'01243244949',
            address: '15 Nile Corniche, Zamalek, Cairo, Egypt'
        },
    ];

    const itemDetails = {
        name: "Plushies",
        category: "Toys",
        age: "4-6 years",
        gender: "Unisex",
        type: "Stuffed Toys",
        quantity: 20,
        description: "We would like to have plushies for our younger students.",
        donationstatus: "5 out of 20 donated",
        imageUrl: "teddy.jpeg"

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
                    <p className="org-item-info"><strong>Quantity:</strong> {itemDetails.quantity}</p>
                    <p className="org-item-info"><strong>Description:</strong> {itemDetails.description}</p>
                    <p className="org-item-info"><strong>Picture: </strong></p><br></br>
                    <img src={itemDetails.imageUrl} alt="Plushies" style={{ width: '30%', height: 'auto' }} className="org-item-image" />
                    <p className="org-item-info"><strong>Donation Progress:</strong> {itemDetails.donationstatus}</p>
                    <hr></hr>
                    <center><h2 className="org-item-name">Donated By: </h2></center>
                    <div className="donations-container">
                    {donations.map((donation, index) => (
                    <DonationUser key={index} {...donation} />
                    ))}
                    </div>

                    <center>
                        <Link to="/OrgUpd2" className="blue-button" style={{ marginRight: '10%' }}>Edit Details</Link>
                        <Link to="/OrgViewDon" className="blue-button">Return</Link>
                       
                    </center>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
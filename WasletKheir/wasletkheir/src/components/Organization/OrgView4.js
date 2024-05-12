import React from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import DonationUser from './DonationUser';
import Footer from '../Footer';


export default function OrgView4() {

    const donations = [
        {
            donorName: 'Jana Mohamed',
            quantity: 12,
            image: 'https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png'
        },
        {
            donorName: 'Anonymous User',
            quantity: 8,
            image: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        },
        {
            donorName: 'Anonymous User',
            quantity: 10,
            image: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        },
        {
            donorName: 'Omar Abdullah',
            quantity: 5,
            image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png'
        },
    ];

    const itemDetails = {
        name: "Board Markers",
        category: "School Supplies",
        type: "Stationary",
        quantity: 35,
        description: "We would like to have board markers for our teachers to use.",
        donationstatus: "35 out of 35 donated",

    };

    return (
        <>
            <OrgNavBar2 />
            <br />  <br />  <br />
            <div className="org-view-container">
                <h1 className="org-view-title">View Request Details</h1>
                <hr></hr>
                <div className="org-item-details">
                    <h2 className="org-item-name">{itemDetails.name}</h2>
                    <p className="org-item-info"><strong>Category:</strong> {itemDetails.category}</p>
                    <p className="org-item-info"><strong>Type: </strong> {itemDetails.type}</p>
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

                    <center><Link to="/OrgViewDon" className="blue-button">Return</Link></center>

                </div>
            </div>
            <Footer />
        </>
    );
}
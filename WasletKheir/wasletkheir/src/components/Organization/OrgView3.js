import React from 'react';
import OrgNavBar2 from './OrgNavBar2';
import { Link } from 'react-router-dom';

export default function OrgView3() {

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
                    <center><Link to="/OrgViewDon" className="blue-button">Return</Link></center>

                </div>
            </div>
        </>
    );
}
import React from 'react';
import OrgNavBar2 from './OrgNavBar2';
import { Link } from 'react-router-dom';

export default function OrgView2() {

    const itemDetails = {
        name: "Plushies",
        category: "Toys",
        age: "4-6 years",
        gender: "Unisex",
        type: "Stuffed Toys",
        quantity: 20,
        description: "We would like to have plushies for our younger students.",
        donationstatus: "5 out of 20 donated",
        imageUrl: "https://kidscompany.com.ph/pub/media/catalog/product/cache/0ef27d54d91a8f8479161d0f80b1b510/7/s/7smi-6048626.jpg"

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
                    <p className="org-item-info"><strong>Age:</strong> {itemDetails.age}</p>
                    <p className="org-item-info"><strong>Gender:</strong> {itemDetails.gender}</p>
                    <p className="org-item-info"><strong>Quantity:</strong> {itemDetails.quantity}</p>
                    <p className="org-item-info"><strong>Description:</strong> {itemDetails.description}</p>
                    <p className="org-item-info"><strong>Picture: </strong></p><br></br>
                    <img src={itemDetails.imageUrl} alt="Plushies" style={{ width: '30%', height: 'auto' }} className="org-item-image" />
                    <p className="org-item-info"><strong>Donation Progress:</strong> {itemDetails.donationstatus}</p>
                    <center><Link to="/OrgViewDon" className="blue-button">Return</Link></center>

                </div>
            </div>
        </>
    );
}
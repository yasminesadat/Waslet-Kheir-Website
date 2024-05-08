import React from 'react';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';

export default function OrgView4() {

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
                    <center><Link to="/OrgViewDon" className="blue-button">Return</Link></center>

                </div>
            </div>
        </>
    );
}
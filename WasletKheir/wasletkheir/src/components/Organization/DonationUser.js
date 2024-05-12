import React from 'react'

export default function DonationUser({ donorName, image, quantity, gender, email, phoneNumber, address }) {
  return (
    <div className="donation-box">
      <div className="donor-icon">
        <img src={image} alt="User Icon" />
      </div>
      <div className="donor-info">
        <p className="donor-name">{donorName}</p>
        {donorName !== 'Anonymous User' && (
          <>
            <p className="donor-detail"><span>Gender:</span> {gender}</p>
            <p className="donor-detail"><span>Email:</span> {email}</p>
            <p className="donor-detail"><span>Phone Number:</span> {phoneNumber}</p>
            <p className="donor-detail"><span>Address:</span> {address}</p>
          </>
        )}
        <p className="donor-detail"><span>Quantity Donated:</span> {quantity}</p>
      </div>
    </div>
  )
}
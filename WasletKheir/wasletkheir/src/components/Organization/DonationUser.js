import React from 'react'

export default function DonationUser({ donorName, image, quantity }) {
  return (
    <div className="donation-box">
            <div className="donor-icon">
                <img src={image} alt="User Icon" />
            </div>
            <div className="donor-info">
                <p className="donor-name">{donorName}</p>
                <p className="donor-quantity">Quantity Donated: {quantity}</p>
            </div>
        </div>
  )
}
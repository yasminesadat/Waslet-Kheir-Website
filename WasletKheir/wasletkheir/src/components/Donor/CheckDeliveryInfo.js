import React, { useState, useEffect } from 'react';
import './donor.css';  // Ensure this points to the correct CSS file path

const DeliveryInfo = () => {
    const [minutesUntilArrival, setMinutesUntilArrival] = useState(0);
    const deliveryData = {
        estimatedArrival: '2024-05-09T15:00:00', // Set to a specific date and time
        courierName: 'John Doe',
        courierPhone: '+1 234 567 8900'
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const arrivalTime = new Date(deliveryData.estimatedArrival);
            const differenceInMilliseconds = arrivalTime - now;
            const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);
            setMinutesUntilArrival(differenceInMinutes);
        }, 60000); // Update every minute

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="delivery-info">
            <h2>Delivery Details</h2>
            <div>
                <strong>Time Until Arrival:</strong>
                <span>{minutesUntilArrival > 0 ? `${minutesUntilArrival} minutes` : 'Arriving soon'}</span>
            </div>
            <div>
                <strong>Courier Name:</strong>
                <span>{deliveryData.courierName}</span>
            </div>
            <div>
                <strong>Courier Phone:</strong>
                <span>{deliveryData.courierPhone}</span>
            </div>
        </div>
    );
};

export default DeliveryInfo;

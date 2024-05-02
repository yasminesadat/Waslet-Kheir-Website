import React from 'react'
import { useState, useEffect } from 'react';
import OrgDonCard from './OrgDonCard';
import OrgNavBar2 from './NavbarOrg';

export default function OrgViewDon() {
    const [selectedOption, setSelectedOption] = useState('ongoing');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const donations = [
        { image: 'https://i.ibb.co/DQVh3ZS/Winter-Colour-14-512.webp', title: 'Jackets', description: 'We would appreciate receiving winter jackets for our students to wear.', progress: 15 },
        { image: 'https://i.ibb.co/0fZyMX1/toys2.png', title: 'Plushies', description: 'We would like to have plushies for our younger students.', progress: 25 },
        { image: 'https://t3.ftcdn.net/jpg/03/65/19/54/360_F_365195462_y5gKpvyI19DN2n8seBOjjX2uO1gQimnW.jpg', title: 'Notebooks', description: 'We are in need of notebooks for our students.', progress: 50 },
    ];

    const donations2 = [
        { image: 'https://i.ibb.co/r5hQc0h/fruitsveg2.png', title: 'Fruits & Vegetables', description: 'We would like to receive healthy food for our students.', progress: 100 },
        { image: 'https://t3.ftcdn.net/jpg/03/65/19/54/360_F_365195462_y5gKpvyI19DN2n8seBOjjX2uO1gQimnW.jpg', title: 'Board Markers', description: 'We would like to have board markers for our teachers to use.', progress: 100 },
        { image: 'https://i.ibb.co/0fZyMX1/toys2.png', title: 'Chess Boards', description: 'We would appreciate receiving chess boards for our older students to play.', progress: 100 },

    ];
    return (
        <>
            <OrgNavBar2 />
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h1>View My Donations</h1>
            </center>
            <div className="select-container">
                <select onChange={handleSelectChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="fulfilled">Fulfilled</option>
                </select>
            </div>

            {/* Display for ongoing requests */}
            {selectedOption === 'ongoing' && (
                <div className="donations-container">
                    {donations.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} />
                    ))}
                </div>
            )}

            {/* Display for fulfilled requests */}
            {selectedOption === 'fulfilled' && (
                <div className="donations-container">
                    {donations2.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} />
                    ))}
                </div>
            )}

        </>
    )
}
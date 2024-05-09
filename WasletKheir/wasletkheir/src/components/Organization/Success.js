import React from 'react';
import './Org.css';

const data = [
    {
        title: "Education",
        icon: "bookicon.png",
        description: "Donations can assist in giving children access to education, which could change their lives. Children can benefit from education by gaining knowledge and skills that will improve their employment prospects and their future."
    },
    {
        title: "Medical Care",
        icon: "medical.png",
        description: "Contributions can assist in granting people access to healthcare, which is necessary for their health and well-being. They can lower their risk of illness and disease by receiving the appropriate treatments and immunizations thanks to pro-bono medical appointments as well."
    },
    {
        title: "Clothing",
        icon: "clothes.png",
        description: "Donations can assist in providing different clothing items to those who are in need including clothes and blankets to keep them warm in winter"
    },
    {
        title: "Toys",
        icon: "toys.png",
        description: "Donations can assist in giving children toys,games and stuffed animals.This can give kids a sense of enjoyment as well as a constructive outlet for their energy and creativity."
    }
];

function DonationImpact() {
    return (
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Poppins', color: '#4D869C' }}>The Impact of Donations</h1>
            <p style={{ textAlign: 'center', fontFamily: 'Poppins' }}>
                Donations have a great impact on both people in need and the donors. It provides different kinds of help and resources to those in need and allows the donors to give back to their communities and support causes that are dear to their hearts.
            </p>
            <div style={{ marginRight: '8%', display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                {data.map((item) => (
                    <div key={item.title} style={{
                        flex: '1 0 22%', // Each card flexes to fill the space
                        margin: '10px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        fontFamily: 'Poppins',
                        minHeight: '300px' // Ensure uniform card height
                    }}>
                        <img src={item.icon} alt={item.title} style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DonationImpact;

import React from 'react';

const data = [
    {
        title: "Basic Needs",
        icon: "basic.png",
        description: "Donations can give orphans access to food, housing, clothing, and other basic needs of life because many don't have any. This can guarantee that they live in a cozy and secure atmosphere."
    },
    {
        title: "Education",
        icon: "bookicon.png",
        description: "Donations can assist in giving orphans access to education, which could change their lives. Orphans can benefit from education by gaining knowledge and skills that will improve their employment prospects and their future."
    },
    {
        title: "Medical Care",
        icon: "medical.png",
        description: "Contributions can assist in granting orphans access to healthcare, which is necessary for their health and well-being. They can lower their risk of illness and disease by receiving the appropriate treatments and immunizations thanks to medical care."
    },
    {
        title: "Clothing",
        icon: "clothes.png",
        description: "Donations can assist in giving orphans who may have suffered trauma or loss emotional assistance. This can involve giving them access to counseling, support groups, or other tools to help them manage their emotions and forge healthy connections."
    },
    {
        title: "Toys",
        icon: "toys.png",
        description: "Donations can assist in giving orphans access to leisure programs like sports or art classes. This can give kids a sense of belonging and social skills development, as well as a constructive outlet for their energy and creativity."
    }
];

function DonationImpact() {
    return (
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Poppins' }}>The Impact of Donations</h1>
            <p style={{ textAlign: 'center', fontFamily: 'Poppins' }}>
                Donations have a great impact on both the orphans and the donors. It provides different kinds of help and resources to orphans and allows the donors to give back to their communities and support causes that are dear to their hearts.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {data.map((item) => (
                    <div key={item.title} style={{ width: '20%', padding: '10px', textAlign: 'center' }}>
                        <img src={item.icon} alt={item.title} style={{ width: '50px', height: '50px', fontFamily: 'Poppins' }} />
                        <h3 style={{ fontFamily: 'Poppins' }} >{item.title}</h3>
                        <p style={{ fontFamily: 'Poppins' }} >{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DonationImpact;

import React from 'react';

const testimonials = [
    {
        name: "Awlady Orphanage",
        logo: "https://img1.wsimg.com/isteam/ip/298cb803-7078-4032-b25d-88a8bd8d08d0/Awlady%20logo%20wider-0001.jpg/:/rs=h:1000,cg:true,m",
        quote: "Thanks to generous donations through Waslet Kheir, we've been able to provide resources and support to hundreds of orphans in need this year alone."
    },
    {
        name: "Misr el Kheir",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Resala.png",
        quote: "Our partnership with Waslet Kheir has allowed us to provide food, clothing, and essential supplies to those in need."
    },
    {
        name: "Magdy Yacoub Heart Foundation ",
        logo: "https://www.logotypes101.com/logos/219/34CB77E3CBCE830DED2804B880F31BA2/magdi_yacoub_eng%20[Converted].png",
        quote: 'The contributions from donors have been vital in supporting our medical programs, enabling us to provide essential healthcare services and save lives.'
    }
];

function Testimonials() {
    return (
        <div style={{ padding: '40px', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ textAlign: 'center', color: '#4D869C', fontFamily: 'poppins' }}>Success Stories</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ width: '30%', padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                        <img src={testimonial.logo} alt={testimonial.name} style={{ width: '100px', height: '100px' }} />
                        <h3>{testimonial.name}</h3>
                        <p>"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;

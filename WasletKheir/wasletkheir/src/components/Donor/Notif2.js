import React, { useState, useEffect } from 'react';
import DonorNavbar from './DonorNavbar';
import Footer from '../Footer';

// Main component for displaying delivery details
const Delivery = () => {
    const [minutes, setMinutes] = useState(26);

    useEffect(() => {
        if (minutes > 0) {
            const timerId = setTimeout(() => {
                setMinutes(minutes - 1);
            }, 30000);

            return () => clearTimeout(timerId);
        }
    }, [minutes]);

    return (
        <div>
            <DonorNavbar />
            <div style={styles.container}>
                <div style={styles.imageSection}>
                    <img src="scooter2.gif" alt="Courier Logo" style={styles.image} />
                </div>
                <div style={styles.info}>
                    <h1 style={styles.text}><strong>Courier Name:</strong> Ahmed Magdy</h1>
                    <h1 style={styles.text}><strong>Courier Phone:</strong> +201154632039</h1>
                    <h1 style={styles.text}><strong>Estimated Arrival:</strong> 3:45 PM</h1>
                    <h1 style={styles.text}><strong>Arriving in:</strong> {minutes} minutes</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        marginTop: '11%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: '20px',
        margin: '100px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FBF9F1',
        borderRadius: '10px',
        height: '500px'
    },
    imageSection: {
        marginBottom: '20px',
    },
    image: {
        width: '100px',
        height: '100px',
    },
    info: {
        textAlign: 'center',
    },
    text: {
        margin: '5px 0',
        fontSize: '26px',
        color: '#4D869C'
    },
};

export default Delivery;

import React, { useState } from 'react';
import NavBarLogoTitle from '../NavBarLogoTitle';
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        framework: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // Add form submission logic here
    };

    return (
        <div style={styles.pageContainer}>
            < NavBarLogoTitle />
            <div style={styles.contentContainer}>
                <div style={styles.backgroundImage}>
                    <div>
                        <h1> Contact Information</h1>
                        <h1> Fill up the form and our team will get back to you in 24 hours</h1>
                        <h2> <MdOutlinePhone style={{ color: 'fuschia' }} />
                            our num</h2>
                        <h2> <MdOutlineEmail />
                            our phone </h2>
                    </div>
                </div>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Email"
                        style={styles.input}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },

    contentContainer: {
        display: 'flex',
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        backgroundImage: 'url("https://www.colorhexa.com/aad7d9.png")',
        backgroundSize: 'cover'
    },
    form: {
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    input: {
        marginBottom: '50px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    textarea: {
        height: '100px',
        marginBottom: '50px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    submitButton: {
        padding: '10px',
        color: 'white',
        backgroundColor: '#92C7CF',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer'

    }
};

export default ContactForm;

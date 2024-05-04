import React, { useState } from 'react';
import Footer from '../Footer';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import { FaEdit, FaSave, FaRegEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { Button, Popover } from 'antd';

export default function OrgProfile() {
    const [isEdit, setIsEdit] = useState(false);
    const [buttonText, setText] = useState("Edit details");
    const buttonMessage = (
        <div>
            <p>Click here to edit any of your profile details</p>

        </div>
    );
    const [formData, setFormData] = useState({
        firstName: 'Mohamed',
        lastName: 'Seif',
        gender: 'Male',
        email: 'mohamedseif@mersal.egypt.com',
        password: 'abcdefghghdjdi',
        orgName: 'Mersal Foundatiom',
        orgType: 'Charity',
        address: 'Rehab Building 36',
        area: 'New Cairo',
        governate: 'Cairo'
    });
    const [inputType, setInputType] = useState("password");

    const toggleEdit = () => {
        setIsEdit(!isEdit);
        if (buttonText === "Edit details")
            setText("Save changes");
        else
            setText("Edit details");

    }




    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('Update data:', formData);

    };

    console.log("isEdit:", isEdit); // Check the value of isEdit in the console
    return (
        <div className='Page'>
            <OrgNavBar2 />

            <button className={isEdit ? 'savebutton' : 'editbutton'} onClick={toggleEdit}>
                {isEdit && (<FaSave />)}
                {!isEdit && (<FaEdit />)}
                {buttonText}
            </button>


            <br></br> <br></br> <br></br>
            <br></br>


            <div className='profile'>

                <div className='leftHalf'>
                    <div className='logoanduser' >
                        <img className='NGOLogo' src='charitylogo.png' alt='Charity Logo' />
                    </div>
                </div>
                <div className='rightHalf'>
                    <div className={'representative' + (isEdit ? " glowing-border" : "")}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2>Representative details</h2>

                        </div>


                        <form onSubmit={handleUpdate}>
                            <div className='Element'>
                                <label htmlFor='FirstName'>First Name:</label>
                                <input type='text' id='firstName' readOnly={!isEdit} value={formData.firstName} onChange={handleInputChange} />
                            </div>
                            <div className='Element'>
                                <label htmlFor='LastName'>Last Name:</label>
                                <input type='text' id='lastName' readOnly={!isEdit} value={formData.lastName} onChange={handleInputChange} />
                            </div>
                            <div className='Element'>
                                <label htmlFor='Gender'>Gender:</label>
                                <input type='text' id='gender' readOnly={!isEdit} onChange={handleInputChange} value={formData.gender} />
                            </div>
                            <div className='Element'>
                                <label htmlFor='Email'>Email:</label>
                                <input type='text' id='email' value={formData.email} readOnly={!isEdit} onChange={handleInputChange} />
                            </div>
                            <div className='Element'>
                                <label htmlFor='pass'>Password:</label>
                                <input
                                    id='password'
                                    className='PwInput'
                                    readOnly={!isEdit}
                                    value={formData.password}
                                    type={inputType}
                                    onChange={handleInputChange}
                                />
                                &nbsp; &nbsp;

                                {inputType === 'password' && (<FaRegEye style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />)}
                                {inputType === 'text' && (<BiSolidHide style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />)}
                                <br />
                                <br />
                                <ChangePassword />
                            </div>
                        </form>
                        <br />
                        <br />

                    </div>
                </div>
                <div className={'orgdetails' + (isEdit ? " glowing-border" : "")}>
                    <div className='orginfo'>
                        <h2>Organization Details</h2>
                        <div className='orgElement'>
                            <label htmlFor='OrgName'>Organization Name:</label>
                            <input type='text' id='orgName' readOnly={!isEdit} value={formData.orgName} onChange={handleInputChange} />
                        </div>
                        <div className='orgElement'>
                            <label htmlFor='OrgType'>Organization Type:</label>
                            <input type='text' id='orgType' readOnly={!isEdit} value={formData.orgType} />
                        </div>
                        <div className='orgElement'>
                            <label htmlFor='Address'>Address:</label>
                            <input type='text' id='address' readOnly={!isEdit} value={formData.address} onChange={handleInputChange} />
                        </div>
                        <div className='orgElement'>
                            <label htmlFor='Area'>Area:</label>
                            <input type='text' id='area' readOnly={!isEdit} value={formData.area} onChange={handleInputChange} />
                        </div>
                        <div className='orgElement'>
                            <label htmlFor='Governate'>Governate:</label>
                            <input type='text' id='governate' readOnly={!isEdit} value={formData.governate} />
                        </div>
                    </div>
                    <div className='mapOrg' style={{ width: "auto", width: "400px", maxWidth: "600px", height: "auto", marginTop: "5%", marginRight: "5%" }} >
                        <iframe
                            title="google map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110498.99855352928!2d31.337858116406252!3d30.062848400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714755042487!5m2!1sen!2seg"
                            style={{ width: '100%', height: '300px', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className='actions'>
                    <Link to='/'>
                        <button className='deleteButton'>Delete Account</button>
                    </Link>

                </div>
                <br />
                <br />

            </div>
            <Footer />
        </div >
    );
}
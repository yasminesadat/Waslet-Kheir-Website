import React, { useState } from 'react';
import Footer from './Footer';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";

export default function OrgProfile() {
    const [inputType, setInputType] = useState("password"); // to change password from hidden to visible and vice versa 
    const [isEditable, setIsEditable] = useState(false); // if he presses on the edit button 

    const [formData, setFormData] = useState({
        firstName: 'Mohamed',
        lastName: 'Seif',
        gender: 'Male',
        email: 'mohamedseif@mersal.egypt.com',
        password: 'abcdefghghdjdi',
        orgName: 'Mersal Foundation',
        orgType: 'Charity',
        orgAdd: 'Rehab Building 36',
        orgArea: 'New Cairo',
        orgGov: 'Cairo'
    });

    const toggleEditable = () => {
        setIsEditable(!isEditable);
        console.log('i pressed here');
    };

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return (
        <div className='Page'>
            <OrgNavBar2 />
            <br />
            <br />
            <div className='profile'>
                <div className='leftHalf'>
                    <div className='logoanduser'>
                        <img className='NGOLogo' src='charitylogo.png' alt='Charity Logo' />
                    </div>
                </div>
                <div className='rightHalf'>
                    <div className='representative'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2 style={{ marginRight: 'auto' }}>Representative details</h2>
                            {!isEditable && <FaEdit onClick={toggleEditable} style={{ fontSize: '20px' }} />}
                        </div>

                        <div className='Element'>
                            <label htmlFor='FirstName'>First Name:</label>
                            {isEditable ? (
                                <input type='text' id='FirstName' value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)} />
                            ) : (
                                <input type='text' readOnly value={formData.firstName} />
                            )}
                        </div>

                        <div className='Element'>
                            <label htmlFor='LastName'>Last Name:</label>
                            {isEditable ? (
                                <input type='text' id='LastName' value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)} />
                            ) : (
                                <input type='text' id='LastName' readOnly value={formData.lastName} />
                            )}
                        </div>

                        {/* Other fields go here */}

                        <div className='Element'>
                            <label htmlFor='pass'>Password:</label>
                            <input
                                id='pass'
                                className='PwInput'
                                readOnly={!isEditable}
                                value={formData.password}
                                type={inputType}
                                onChange={(e) => handleChange('password', e.target.value)}
                            />
                            &nbsp; &nbsp;
                            {inputType === 'password' ? (
                                <FaRegEye style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />
                            ) : (
                                <BiSolidHide style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />
                            )}
                            <br />
                            <br />
                            <ChangePassword />
                        </div>
                    </div>
                </div>
                <div className='orgdetails'>
                    <h2>Organization Details</h2>
                    {/* Organization details */}
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
        </div>
    );
}

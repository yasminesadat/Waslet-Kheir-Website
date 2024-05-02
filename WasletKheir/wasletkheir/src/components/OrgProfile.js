import React from 'react';
import Footer from './Footer';
import OrgNavBar2 from './NavbarOrg';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import checkORx from './checkORx';


export default function OrgProfile() {
    const toggleEditState = (fieldName) => {
        setEditStates(prevState => ({
            ...prevState,
            [fieldName]: !prevState[fieldName]
        }));
    };
    const [inputType, setInputType] = useState("password");
    const [editStates, setEditStates] = useState({
        firstName: false,
        lastName: false,
        gender: false,
        email: false,
        password: false,
        orgName: false,
        orgType: false,
        address: false,
        area: false,
        governate: false
    });

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };
    return (
        <div className='Page'>
            <OrgNavBar2 />
            <br>
            </br>
            <br>
            </br>
            <div className='profile'>

                <div className='leftHalf'>
                    <div className='logoanduser'>
                        {/* <h2>Mersal Foundation</h2> */}
                        <img className='NGOLogo' src='charitylogo.png' alt='Charity Logo' />
                    </div>
                </div>
                <div className='rightHalf'>
                    <div className='representative'>
                        <h2>Representative details</h2>
                        <div className='Element'>
                            <label htmlFor='FirstName'>First Name:</label>
                            <input type='text' readOnly value='Mohamed' />
                            &nbsp; &nbsp;
                            !firstName && <FaEdit onClick={() => toggleEditState('firstName')} id='FirstName' style={{ fontSize: '20px' }} />
                            firstName && <checkORx />
                        </div>
                        <div className='Element'>
                            <label htmlFor='LastName'>Last Name:</label>
                            <input type='text' id='LastName' readOnly value='Seif' />
                            &nbsp; &nbsp;
                            <FaEdit onClick={() => toggleEditState('lastName')} style={{ fontSize: '20px' }} />

                        </div>
                        <div className='Element'>
                            <label htmlFor='Gender'>Gender:</label>
                            <input type='text' id='Gender' readOnly value='Male' />
                            &nbsp; &nbsp;
                            <FaEdit onClick={() => toggleEditState('gender')} style={{ fontSize: '20px' }} />
                        </div>
                        <div className='Element'>
                            <label htmlFor='Email'>Email:</label>
                            <input type='text' id='Email' readOnly value='mohamedseif@mersal.egypt.com' />
                            &nbsp; &nbsp;
                            <FaEdit style={{ fontSize: '20px' }} />



                        </div>
                        <div className='Element'>
                            <label htmlFor='pass'>Password:</label>
                            <input
                                id='pass'
                                className='PwInput'
                                readOnly value='abcdefghghdjdi'
                                type={inputType}

                            />
                            &nbsp; &nbsp;
                            {inputType === 'password' && (<FaRegEye style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />)}
                            {inputType === 'text' && (<BiSolidHide style={{ fontSize: '20px' }} onClick={togglePasswordVisibility} />)}

                            {/* <button className='changePasswordbutton' >
                                {inputType === "password" ? "Show password" : "Hide password"}
                            </button> */}
                            <br></br>
                            <br></br>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
                <div className='orgdetails'>
                    <h2>Organization Details</h2>
                    <div className='Element'>
                        <label htmlFor='OrgName'>Organization Name:</label>
                        <input type='text' id='OrgName' readOnly value='Mersal Foundatiom' />
                    </div>
                    <div className='Element'>
                        <label htmlFor='OrgType'>Organization Type:</label>
                        <input type='text' id='OrgType' readOnly value='Charity' />
                    </div>
                    <div className='Element'>
                        <label htmlFor='Address'>Address:</label>
                        <input type='text' id='Address' readOnly value='Rehab Building 36' />
                    </div>
                    <div className='Element'>
                        <label htmlFor='Area'>Area:</label>
                        <input type='text' id='Area' readOnly value='New Cairo' />
                    </div>
                    <div className='Element'>
                        <label htmlFor='Governate'>Governate:</label>
                        <input type='text' id='Governate' readOnly value='Cairo' />
                    </div>
                </div>
                <div className='actions'>
                    <Link to='/'>
                        <button className='deleteButton'>Delete Account</button>
                    </Link>
                </div>
                <br></br>
                <br></br>

            </div>
            <Footer />

        </div >
    );
}

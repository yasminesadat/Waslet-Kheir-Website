import React from 'react';
import Footer from './Footer';
import OrgNavBar2 from './NavbarOrg';
export default function OrgProfile() {
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
                        <h2>Mersal Foundation</h2>
                        <img className='NGOLogo' src='charitylogo.png' alt='Charity Logo' />
                    </div>
                </div>
                <div className='rightHalf'>
                    <div className='representative'>
                        <h2>Representative details</h2>
                        <div className='Element'>
                            <label htmlFor='FirstName'>First Name:</label>
                            <input type='text' id='FirstName' readOnly value='Mohamed' />
                        </div>
                        <div className='Element'>
                            <label htmlFor='LastName'>Last Name:</label>
                            <input type='text' id='LastName' readOnly value='Seif' />
                        </div>
                        <div className='Element'>
                            <label htmlFor='Gender'>Gender:</label>
                            <input type='text' id='Gender' readOnly value='Male' />
                        </div>
                        <div className='Element'>
                            <label htmlFor='Email'>Email:</label>
                            <input type='text' id='Email' readOnly value='mohamedseif@misrelkheir.egypt.com' />
                        </div>
                        <div className='Element'>
                            <label htmlFor='pass'>Password:</label>
                            <input type='password' id='pass' readOnly value='abcdefghghdjdi' />
                            <button className='NormalButton'>Change password</button>
                        </div>
                    </div>
                </div>
                <div className='orgdetails'>
                    <h2>Organization Details</h2>
                    <div className='Element'>
                        <label htmlFor='OrgType'>Organization Type:</label>
                        <input type='text' id='OrgType' readOnly value='NGO' />
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

                    <button className='deleteButton'>Delete Account</button>
                </div>
                <br></br>
                <br></br>

            </div>
            <Footer />

        </div>
    );
}
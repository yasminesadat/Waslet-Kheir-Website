import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import './Org.css';
import { FaLock } from "react-icons/fa";


export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [open, setOpen] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (oldPassword !== '1234') {
            // message.error('Old password is incorrect.');
            return;
        }

        if (newPassword !== confirmPassword) {
            // message.error('The new passwords do not match.');
            return;
        }

        // message("Password changed successfully");
        setOpen(false); // Close the popup immediately after the alert
    };

    return (
        <div>
            <button onClick={() => setOpen(true)} className='smallpinButton'>Change Password</button>
            <Popup
                open={open}
                onClose={() => setOpen(false)}  // Handle closing of the popup
                contentStyle={{ width: "auto", height: "auto", backgroundColor: '#f9f9f9' }}
            >
                <div className="cpMainDiv">
                    <div onClick={() => setOpen(false)} >   <CloseButton /></div>
                    {/* <div style={{ color: '#4D869C', marginTop: '%30', marginTop: '%40', }}>   <FaLock /></div> */}
                    <div className="cpCardStyle">
                        <form onSubmit={handleSubmit}>
                            <h2 className="cpFormTitle"> <FaLock style={{ color: '#4D869C' }} /> Change Account Password</h2>
                            <div className="cpInputDiv">
                                <label htmlFor="oldPassword">Old Password</label>
                                <input type="password" id="oldPassword" required value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                            </div>
                            <div className="cpInputDiv">
                                <label htmlFor="newPassword">New Password</label>
                                <input type="password" id="newPassword" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            </div>
                            <div className="cpInputDiv">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className="cpButtonWrapper">
                                <button type="submit" className='pinButtonCp'>
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

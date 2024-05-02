import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseButton from './CloseButton';
import '../App.css';

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [open, setOpen] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (oldPassword !== '1234') {
            alert('Old password is incorrect.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('The new passwords do not match.');
            return;
        }

        alert("Password changed successfully");
        setOpen(false); // Close the popup immediately after the alert
    };

    return (
        <div>
            <button onClick={() => setOpen(true)} className='pinButton'>Change Password</button>
            <Popup
                open={open}
                onClose={() => setOpen(false)}  // Handle closing of the popup
                contentStyle={{ width: "auto", height: "auto" }}
            >
                <div className="cpMainDiv">
                    <div onClick={() => setOpen(false)} >   <CloseButton /></div>

                    <div className="cpCardStyle">
                        <form onSubmit={handleSubmit}>
                            <h2 className="cpFormTitle">Change Account Password</h2>
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
                                <button type="submit" className='pinButton'>
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

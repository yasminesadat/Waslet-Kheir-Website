
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
    return (
        <div>

            <Popup
                trigger={<button className='passButton'>Change Password</button>}
                position="right center"
                modal
                nested
            >
                <div className="form-container">
                    <form className="reset-password-form">
                        <h2>Reset Your Password</h2>
                        <div className="input-group">
                            <label htmlFor="oldPassword">Old Password:</label>
                            <input type="password" id="oldPassword" name="oldPassword" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="password" id="newPassword" name="newPassword" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm New Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePasswordForm = ({ defaultPassword,redirectLink }) => {
  const [oldPassword, setOldPassword] = useState(defaultPassword);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (oldPassword !== defaultPassword) {
      setPasswordError(true);
      return;
    }
    else {
      setPasswordError(false); 
      
    }

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }
    else {
      setConfirmPasswordError(false); 
    }

    setSuccessMessage('Password changed successfully.');
    
      setTimeout(() => {
        setSuccessMessage('');
        navigate(redirectLink);
      }, 3000);
    
  }
  
  return (
    <div className="mainDiv">
      <div className="cardStyle">
        <form onSubmit={handleSubmit} name="signupForm" id="signupForm">
          <img src="lock-custom.svg" id="signupLogo" alt="Lock Logo"/>
          <h2 className="formTitle">
          
            Change Account Password
          </h2>
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="oldPassword">Old Password</label>
            <input type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
            {passwordError && <p className="error">Incorrect password</p>}
          </div>
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <div className="inputDiv">
            <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {confirmPasswordError && <p className="error">Passwords do not match</p>}
          </div>
          <div className="buttonWrapper">
            <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
              <span>Confirm</span>
              
            </button>
            
          </div>
          {successMessage && <p className="correct">{successMessage} <span id="loader"></span></p>}
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
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

    setSuccessMessage('Password changed successfully');
    
    setTimeout(() => {
      setSuccessMessage('');
      setTimeout(() => {
       
        navigate(redirectLink);
      }, 3000);
      message.success('Password changed successfully');
    }, 2000);
  };
  
  return (
    <div className="mainDivAd">
      <div className="cardStyleAd">
        <form onSubmit={handleSubmit} name="signupForm" id="signupForm">
          <img className='lockLogoAd' src="https://i.ibb.co/K9GV7DL/icons8-lock-64.png" id="lockLogo" alt="Lock Logo"/>
          <h2 className="formTitleAd">
          
            Change Account Password
          </h2>
          <div className="inputDivAd">
            <label className="inputLabelAd" htmlFor="oldPassword">Old Password</label>
            <input className='inputAd' type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
            {passwordError && <p className="error">Incorrect password</p>}
          </div>
          <div className="inputDivAd">
            <label className="inputLabelAd" htmlFor="newPassword">New Password</label>
            <input className='inputAd' type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <div className="inputDivAd">
            <label className="inputLabelAd" htmlFor="confirmPassword">Confirm Password</label>
            <input  className='inputAd' type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {confirmPasswordError && <p className="error">Passwords do not match</p>}
          </div>
          <div className="buttonWrapperAd">
            <button type="submit" id="submitButton" className="submitButtonAd pure-button pure-button-primary">
              <span>Confirm</span>
              
            </button>
            
          </div>
          {successMessage && <p className="correct"> <span id="loaderAd"></span></p>}
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
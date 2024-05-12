import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Modal ,Button,message} from 'antd';


export default function WelcomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email1, setEmail1] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'donor@gmail.com' && password === '1234') {
      localStorage.setItem('user', 'donor');
      navigate("/Home");
    }
    else if (email === 'doctor@gmail.com' && password === '1234') {
      localStorage.setItem('user', 'doctor');
      navigate("/Home");
    }
    else if (email === 'teacher@gmail.com' && password === '1234') {
      localStorage.setItem('user', 'teacher');
      navigate("/Home");
    } else if (email === 'org@gmail.com' && password === '1234') {
      navigate("/OrgMain2");
    } else {
      message.error('Invalid email or password');
    }

  }

  function handleForgotPassword(e){
    e.preventDefault();
    if (email1.trim() === ''){
      message.error('Please enter your email address');
  }
  else{
    message.success('An email has been sent to your email address');
    setIsModalOpen(false);
  }
}


  return (
    <div className='welcome-page-wrapper'>
      <div className="content-wrapper">
        <form onSubmit={handleSubmit} className="login">
          <div className="input-group">
            <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" autoComplete="off" />
            <label className="user-label">Email</label>
          </div>
          <div className="input-group">
            <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" autoComplete="off" />
            <label className="user-label">Password</label>
            <p></p>
            <input type="checkbox" id="rememberMe" />
            <label>Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="account-options">
        
        <a href="#" onClick={(e) => {
         e.preventDefault();
         setIsModalOpen(true);
         }}>Forgot password?</a>

        <Modal
        title="Password Recovery"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalOpen(false)} style={{borderColor:'rgb(106, 106, 215)'}}className='forgotpass-button'>
            Cancel
          </Button>,
          <Button key="submit" type="primary" style={{backgroundColor:'rgb(106, 106, 215)'}}  onClick={(e) => {
            handleForgotPassword(e)
          }}>
            Submit
          </Button>,
        ]}
        >
          <p style={{fontSize:'medium'}}>Please enter the email address that you used when
          creating your account. An email will be sent to that
          address with further instructions on how to reset your
          password.</p>
          <div style={{justifyContent:'center',display:'flex'}}>
          <input required type="email" name="email1" placeholder='Email' value={email1} onChange={(e) => setEmail1(e.target.value)} className="input" autoComplete="off" />
          </div>
        </Modal>
          Don't have an account?
          <Link to="/RegisterD" >Register here as a Donor</Link>
          <Link to="/RegisterO">Register here as an Organization</Link>
          <Link to="/AdminLogin">Go to Admin</Link>
        </div>

        <img src="https://i.ibb.co/7bQ6pjm/logo.png" alt="Waslet Kheir" className="welcome-page-logo" />
      </div>

      <div className="vertical-line"></div>
      <div className="left-side-image">
        <div className="left-side-text">Waslet Kheir</div>
        <div className="subtext">Connecting the World</div>
      </div>
    </div>

  )
}
import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";


export default function WelcomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    if (email === 'Donor@gmail.com' && password === '1234') {
        navigate("/Donor");
    } else if (email === 'Org@gmail.com' && password === '1234') {
        navigate("/Org");
    } else {    
        
        alert('Invalid username or password');
    }
   
}


  return (
    <div>
    <form onSubmit={handleSubmit} className="login">
        <div className="login-container"></div>
        <div className="input-group">
            <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" autoComplete="off"/>
            <label className="user-label">Email</label>
        </div>
        <div className="input-group">
            <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" autoComplete="off"/>
            <label className="user-label">Password</label>
     
        <p></p>
        <input type="checkbox" id="rememberMe"/>
        <label>Remember me</label>
        </div>
        <button type="submit">Login</button>
    </form>
    <div className="remember-and-forgot">
    <div className="forgot-password">
        <a href="#">Forgot password?</a>
       
    </div>
    </div>
 
    <div className="register-account">
        Don't have an account? <a href="#">Register</a>
        <div className="go-to-admin">
        <a href="/AdminLogin">Login as an Admin</a>
    </div>
    </div>
   

    <img src="https://i.ibb.co/gFxywzc/logo1Yes.png" alt="Waslet Kheir" className="welcome-page-logo" />
    <div className="vertical-line"></div>
    <div className="left-side-image">
        <div className="left-side-text">Waslet Kheir</div>
        <div className="subtext">Connecting the World</div>
    </div>
    
 


</div>
  )
}


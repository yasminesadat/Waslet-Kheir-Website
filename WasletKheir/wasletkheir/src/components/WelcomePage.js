import React from 'react'
import { useState } from 'react';
import {useNavigate,Link} from "react-router-dom";


export default function WelcomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    if (email === 'donor@gmail.com' && password === '1234') {
        navigate("/Home");
    } else if (email === 'org@gmail.com' && password === '1234') {
        navigate("/OrgMain2");
    } else {    
        
        alert('Invalid username or password');
    }
   
}


  return (
    <div>
    <form onSubmit={handleSubmit} className="login">
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

    <div className="account-options">
    <a href="#">Forgot password?</a>
     Don't have an account? 
    <Link to="/RegisterD" >Register here as a Donor</Link>
    <Link to="/RegisterO">Register here as an Organization</Link>
    <Link to="/AdminLogin">Go to Admin</Link>
</div>
   
   <img src="https://i.ibb.co/R45gdfG/image-removebg-preview-1.png" alt="Waslet Kheir" className="welcome-page-logo" />
    <div className="vertical-line"></div>
    <div className="left-side-image">
        <div className="left-side-text">Waslet Kheir</div>
        <div className="subtext">Connecting the World</div>
    </div>
    
 


</div>
  )
}
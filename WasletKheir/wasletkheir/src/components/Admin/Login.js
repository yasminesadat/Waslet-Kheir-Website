import React from 'react'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './App.css';

export default function WelcomePage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
        navigate("/Admin");
    } else {    
        alert("Incorrect username or password");
    }
   
}


  return (
    <div>
    <form onSubmit={handleSubmit} className="login">
        <div className="login-container"></div>
        <div className="input-group">
            <input required type="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="input" autoComplete="off"/>
            <label className="user-label">Username</label>
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
 
    <div className="register-account">
        <div className='go-to-admin' >
        <a href="/">Login as a user</a>
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
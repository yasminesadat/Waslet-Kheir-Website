import React from 'react'
import { useState } from 'react';
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import './App.css'

export default function WelcomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (email === 'Donor@gmail.com' && password === '1234') {
            navigate("/Home");
        } else if (email === 'Org@gmail.com' && password === '1234') {
            navigate("/OrgMain2");
        } else {
            alert('Invalid username or password');
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="login">
                <div className="login-container"></div>
                <div className="input-group">
                    <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" autoComplete="off" />
                    <label className="user-label">Email</label>
                </div>
                <div className="input-group">
                    <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" autoComplete="off" />
                    <label className="user-label">Password</label>

                </div>
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" /> &nbsp;
                    <label htmlFor="rememberMe">Remember me </label>
                </div>
                <br></br>
                <button type="submit">Login</button>
            </form>
            <div className="remember-and-forgot">
                <div className="forgot-password">

                    <a href="#">Forgot password?</a>

                </div>
            </div>

            <div className="register-account">

                Don't have an account? <Link to="/RegisterD"><b>Register as a Donor</b></Link>
                <br></br>
                <Link to="/RegisterO"><b>Register as an Organization</b></Link>
                <div className="go-to-admin">
                    <Link to="/AdminLogin">Go to Admin</Link>
                    {/* <a href="/AdminLogin">Go to Admin</a> */}
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

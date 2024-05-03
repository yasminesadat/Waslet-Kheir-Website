import './App.css';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Donor/Home';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleLogin() {

        // Validate username and password
        if (username === 'admin' && password === '1234') {
            // Successful login
            // You can redirect the user to another page or perform any other actions here
            navigate("/Home");
        } else {
            // Login failed, set error message
            setError('Invalid username or password');
        }
    };

    return (
        <div class="loginPage">
            <h2>Admin Login</h2>
            {error && <div className="error">{error}</div>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>

    );
};

export default AdminLogin;

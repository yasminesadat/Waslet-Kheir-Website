import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://i.ibb.co/gFxywzc/logo1Yes.png" alt="Waslet Kheir" className="logo-image" />  
          Waslet Kheir
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/donate" className="navbar-link">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
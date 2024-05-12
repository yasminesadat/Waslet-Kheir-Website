import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import Icon from './Admin/Icon';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBarLogoTitle() {


    const navigate = useNavigate();
    const location = useLocation();
    return (

        <nav className="navbar fixed-navbar">
            <div className="navbar-container">
                {location.pathname !== '/' &&
                    <div style={{ position: 'absolute', top: '25%', left: '1%' }} onClick={() => navigate(-1)}>
                        <Icon iconSrc="https://i.ibb.co/mHFpvP2/image.png" altText="Go Back" />
                    </div>
                }
                <Link to="/" className="navbar-logo">
                <img src="https://i.ibb.co/7bQ6pjm/logo.png" alt="Waslet Kheir" className="logo-image" />
                    <p style={{color:'#2e5359'}}>Waslet Kheir</p>
                </Link>


            </div>

        </nav>


    );
}










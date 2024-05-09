import React from 'react';
import { Link } from 'react-router-dom';
import Notif from './Notif';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Admin/Icon';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OrgNavBar2() {
    const messages = [
        "Your request with request id #2333 for jackets has been chosen by a donor",
        "The courier is on his way with the school supplies for request #9012",
        "Your request with id #2346 for puzzles and toys has been chosen by a donor",
        "The courier is on his way with your fresh food delivery for request #0187, Get ready to meet him",
        "Your request with id #8711 for the fridge has been chosen by a donor"
    ];
    const navigate = useNavigate();
    const location = useLocation();
    return (

        <nav className="navbar fixed-navbar">
            <div className="navbar-container">
                {location.pathname !== '/OrgMain2' &&
                    <div style={{ position: 'absolute', top: '20%', left: '1%' }} onClick={() => navigate(-1)}>
                        <Icon iconSrc="https://i.ibb.co/mHFpvP2/image.png" altText="Go Back" />
                    </div>
                }
                <Link to="/OrgMain2" className="navbar-logo">
                    <img src="https://i.ibb.co/n16ZNjJ/image-removebg-preview.png" alt="Waslet Kheir" className="logo-image" />
                    Waslet Kheir
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/OrgMain2" className="navbar-link">
                            <FontAwesomeIcon icon={faHome} color="white" className='home-icon' />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="navbar-item dropdown">
                        <div className="navbar-link">
                            <FontAwesomeIcon icon={faHandHoldingHeart} color="white" className='home-icon' /> Donations
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgReqDon" className="dropdown-link">
                                    Request a Donation
                                </Link>
                            </li>
                            <li>
                                <Link to="/OrgViewDon" className="dropdown-link">
                                    View my donations request status
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item dropdown">
                        <div className="navbar-link">
                            <FontAwesomeIcon icon={faUsers} color="white" className='home-icon' />
                            Services
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgReqServ" className="dropdown-link">
                                    Request a Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/OrgViewServ" className="dropdown-link">
                                    View my services request status
                                </Link>
                            </li>


                        </ul>
                    </li>
                    <li>
                        <div style={{ marginTop: '-3px' }}>
                            {/* <Notif messages={messages} /> */}
                        </div>
                    </li>

                    <li className="navbar-item dropdown">
                        <div className="navbar-link">
                            <FontAwesomeIcon icon={faUser} color="white" className='home-icon' />
                            Profile
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgProfile" className="dropdown-link">
                                    View profile                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="dropdown-link">
                                    Log out
                                </Link>
                            </li>

                        </ul>
                    </li>

                </ul>
            </div>
        </nav>

    );
}










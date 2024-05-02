import React from 'react';
import { Link } from 'react-router-dom';
import Notif from './Notif';
import '../App.css';

export default function OrgNavBar2() {
    return (
        <nav className="navbar fixed-navbar"> {/* Added "navbar" class */}
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="https://i.ibb.co/gFxywzc/logo1Yes.png" alt="Waslet Kheir" className="logo-image" />
                    Waslet Kheir
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/OrgMain" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item dropdown">
                        <Link to="/Org" className="navbar-link">
                            Donations
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgReqDon" className="dropdown-link">
                                    Request a donation
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
                        <Link to="/Org" className="navbar-link">
                            Services
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgReqServ" className="dropdown-link">
                                    Request a Service                                </Link>
                            </li>
                            <li>
                                <Link to="/Org" className="dropdown-link">
                                    View fulfilled services
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        {/* <Link to="/Org" className="navbar-link"> */}
                        <Notif />
                        {/* </Link> */}
                    </li>
                    <li className="navbar-item dropdown">
                        <Link to="/Org" className="navbar-link">
                            <img src='charitylogo.png' className='profileicon' />
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/OrgProfile" className="dropdown-link">
                                    View my profile
                                </Link>
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
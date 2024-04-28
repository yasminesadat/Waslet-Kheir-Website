import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/Org" className="navbar-link">
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
                                <Link to="/Org" className="dropdown-link">
                                    View All donations
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
                                <Link to="/Org" className="dropdown-link">
                                    View offered services
                                </Link>
                            </li>
                            <li>
                                <Link to="/Org" className="dropdown-link">
                                    View fulfilled services
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Org" className="navbar-link">
                            Notifications
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/OrgProfile" className="navbar-link">
                            My Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
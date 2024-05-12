import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useNavigate, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faUser,faFileInvoice,faUsers} from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function AdminNavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className="navbar fixed-navbar"> 
            <div className="navbar-container"> 
            {location.pathname !== '/Admin' && 
                <div style={{position: 'absolute', top: '25%', left: '1%'}} onClick={()=>navigate("/Admin")}>
                    <Icon  iconSrc="https://i.ibb.co/mHFpvP2/image.png" altText="Go Back"/>   
                </div>
            }
                              <Link to="/Admin" className="navbar-logo">
                    <img src="https://i.ibb.co/ZWh2bBD/logo-with-text.png" alt="Waslet Kheir" className="logo-image" />
                    {/* Waslet Kheir  */}
                </Link>
                <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/Admin" className="navbar-link">
            <FontAwesomeIcon icon={faHome} color="white" className='home-icon' />
<span>Home</span>
            </Link>
          </li>
          <li className="navbar-item dropdown">
                        <div className="navbar-link">
                        <FontAwesomeIcon icon={faFileInvoice} color="white" className='home-icon'/> Requests
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Admin/OrgRequests" className="dropdown-link">
                                    Organizations
                                </Link>
                            </li>
                            <li>
                                <Link to="/Admin/VolunteerRequests" className="dropdown-link">
                                    Volunteers
                                </Link>
                            </li>
                        </ul>
           </li>
           <li className="navbar-item dropdown">
                        <div className="navbar-link">
                        <FontAwesomeIcon icon={faUsers} color="white" className='home-icon' />
                           Accounts
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Admin/OrgAccounts" className="dropdown-link">
                                    Organizations
                                </Link>
                            </li>
                            <li>
                                <Link to="/Admin/VolunteerAccounts" className="dropdown-link">
                                    Volunteers
                                </Link>
                            </li>
                            <li>
                                <Link to="/Admin/DonorAccounts" className="dropdown-link">
                                    Donors
                                </Link>
                            </li>
                            
                        </ul>
           </li>
           <li className="navbar-item dropdown">
                        <div className="navbar-link">
                        <FontAwesomeIcon icon={faUser} color="white" className='home-icon' />
                          Profile
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Admin/ChangePassword" className="dropdown-link">
                                    Change Password
                                </Link>
                            </li>
                            <li>
                                <Link to="/AdminLogin" className="dropdown-link">
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileInvoice, faUsers, faUserDoctor, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import Notif from '../Organization/Notif';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";

import Icon from '../Admin/Icon';
const { Search } = Input;
const donordata = [
    {
        image: "notifbell.png",
        message: "A courier is coming to pick up your donation to 57357 Hospital for medical supplies,Click to know more ",
        detailPage: "./Notif2",
        receivedTime: "1 minute ago"
    },
    {
        image: "notifbell.png",
        message: "The courier has arrived to pick up your winter clothes for the donation to Misr El Kheir Foundation",
        detailPage: "",
        receivedTime: "2 hours ago"
    },
    {
        image: "notifbell.png",
        message: "The courier has arrived to pick up your fresh food for the donation to Nour al Amal Orphanage",

        detailPage: "",
        receivedTime: "Yesterday"
    },


];
const teacherData = [
    {
        image: "notifbell.png",
        message: "The courier has arrived to pick up your winter clothes for the donation to Misr El Kheir Foundation",
        detailPage: "",
        receivedTime: "1 minute ago "
    },

    {
        image: "notifbell.png",
        message: "Your request to volunteer as a teacher is currently being processed,Click to enter additional details!",
        detailPage: "./DonorProfile",
        receivedTime: "2 days ago"
    },


];
const DRdata = [

    {
        image: "notifbell.png",
        message: "You can now browse through the volunteer section and choose cases that suit you",
        detailPage: "",
        receivedTime: "1 minute ago "
    },
    {
        image: "notifbell.png",
        message: "Your request to volunteer as a doctor has been accepted",
        detailPage: "./DonorProfile",
        receivedTime: "5 minutes ago "
    },
    {
        image: "notifbell.png",
        message: "The courier has arrived to pick up your fresh food for the donation to Nour al Amal Orphanage",

        detailPage: "",
        receivedTime: " 4 daysago "
    }


];




export default function DonorNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className="navbar fixed-navbar">
            <div className="navbar-container">
                {location.pathname !== '/Home' &&
                    <div style={{ position: 'absolute', top: '25%', left: '1%' }} onClick={() => navigate(-1)}>
                        <Icon iconSrc="https://i.ibb.co/mHFpvP2/image.png" altText="Go Back" />
                    </div>
                }

                <Link to="/Home" className="navbar-logo">
                    <img src="https://i.ibb.co/n16ZNjJ/image-removebg-preview.png" alt="Waslet Kheir" className="logo-image" />
                    Waslet Kheir
                </Link>
                <ul className="navbar-menu">

                    <li className="navbar-item">
                        <Link to="/Home" className="navbar-link">
                            <FontAwesomeIcon icon={faHome} color="white" className='home-icon' />
                            <span>Home</span>
                        </Link>
                    </li>
                    {localStorage.getItem('user') === 'doctor' && (
                        <li className="navbar-item">

                            <Link to="/MedicalCasesPage" className="navbar-link">
                                <FontAwesomeIcon icon={faUserDoctor} color="white" className='home-icon' />
                                <span>Volunteer</span>
                            </Link>
                        </li>
                    )}
                    {localStorage.getItem('user') === 'teacher' && (
                        <li className="navbar-item">

                            <Link to="/TeachingPage" className="navbar-link">
                                <FontAwesomeIcon icon={faChalkboardUser} color="white" className='home-icon' />
                                <span>Volunteer</span>
                            </Link>
                        </li>
                    )}


                    <li className="navbar-item dropdown">
                        <div className="navbar-link">
                            <FontAwesomeIcon icon={faFileInvoice} color="white" className='home-icon' /> View
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/ViewOrgDonor" className="dropdown-link">
                                    Organizations
                                </Link>
                            </li>
                            <li>
                                <Link to="/DonorDonatePage" className="dropdown-link">
                                    Donation Requests
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <div className='notification' style={{ marginTop: '9px' }}>

                        <div style={{ marginTop: '-8.5px' }}>
                            {localStorage.getItem('user') === 'doctor' && (<Notif data={DRdata} />)}
                            {localStorage.getItem('user') === 'donor' && (<Notif data={donordata} />)}
                            {localStorage.getItem('user') === 'teacher' && (<Notif data={teacherData} />)}

                        </div>
                    </div>
                    <li className="navbar-item dropdown">
                        < div className="navbar-link">
                            <FontAwesomeIcon icon={faUser} color="white" className='home-icon' />
                            Profile
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/DonorProfile" className="dropdown-link">
                                    Profile Details
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="dropdown-link">
                                    Log Out
                                </Link>
                            </li>

                        </ul>

                    </li>
                    <li className="navbar-item">
                        <Link to="/DonorDonatePage" className="navbar-link">
                            <button style={{
                                backgroundColor: 'white', // White background color
                                color: '#AAD7D9',         // Light blue text color
                                borderRadius: '10px',     // Rounded edges with 20px radius
                                padding: '5px 10px',     // Padding around the text
                                border: 'none',           // No border (you can add one if you like)
                                fontSize: '100%',         // Font size
                                fontWeight: 'bold',       // Bold font weight
                                cursor: 'pointer',        // Cursor indicates it's clickable
                                outline: 'none',          // Remove focus outline
                                // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' // Optional: shadow for better visibility
                            }}>Donate Now!</button>

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    );
}
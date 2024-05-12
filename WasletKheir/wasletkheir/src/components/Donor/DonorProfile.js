import React, { useState } from 'react';
import './UserProfile.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FaPhone, FaLock, FaUser, FaHospitalUser, FaEdit, FaSave, FaChalkboardTeacher, FaRegEye } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { GiTeacher } from "react-icons/gi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor, FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer';
import DonorHistory from './DonorHistory';
import DonorNavbar from './DonorNavbar';
import DoctorForm from './DoctorForm';
import Map from '../Map'
import Teacherform from './Teacherform';
import {message} from 'antd';
import { Link } from 'react-router-dom';

function DonorProfile() {
    let user = localStorage.getItem('user');
    const [isEdit, setIsEdit] = useState(false);
    const [mapLocation, setLocation] = useState('');
    const badges = [
        {
            name: "Hero of Hope",
            image: "Hero.png",
            description: "for supporters during critical moments"
        },
        {
            name: "Champion of charity",
            image: "championb.png",
            description: "for donors who made 100+ donations"
        },
        {
            name: "Catalyst for Change",
            image: "star.png",
            description: "for donors who initiate significant change"
        },

    ];
    const badgesdr = [
        {
            name: "Hero of Hope",
            image: "Hero.png",
            description: "for doctors who show outstanding medical intervention in life-saving situations"
        },

    ];
    const selectedBadges = user === 'doctor' ? badgesdr : badges;
    const [formData, setFormData] = useState({
        firstName: 'Hana',
        lastName: 'Mohamed',
        gender: 'Female',
        email: 'hanaseif19@gmail.com',
        password: 'hana@Hana19',
        phoneNumber: '01154632039',
        address: 'Rehab Group 44',
        area: 'New Cairo',
        governorate: 'Cairo',
    });

    const [buttonText, setText] = useState("Edit details");
    const [inputType, setInputType] = useState("password");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
        setText(isEdit ? "Edit details" : "Save changes");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    function Badge({ badge }) {
        const [showDescription, setShowDescription] = useState(false);


        return (


            <div
                className="badge"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
            >

                <img src={badge.image} alt={badge.name} className="badge-image" />
                {showDescription && (
                    <div className="badge-description">
                        <p>{badge.description}</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <DonorNavbar />

            <br />
            <br />
            <div className='pageProfileDonor'>
                <div className='rightSideProfile'>
                    {(localStorage.getItem('user') === 'doctor' && isEdit !== true) && (
                        <section className="map-section">

                            <h2>Clinic Location</h2>
                            <div className="map" style={{ textAlign: 'center' }}>
                                <iframe
                                    title="google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110498.99855352928!2d31.337858116406252!3d30.062848400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714755042487!5m2!1sen!2seg"
                                    style={{ width: '100%', height: '300px', border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </section>
                    )}
                    {(localStorage.getItem('user') === 'doctor' && isEdit === true) && (
                        <section className="map-section">

                            <h2>Submit your clinic Location</h2>
                            <div className="map" style={{
                                textAlign: 'center', opacity: '0.5', position: 'relative', overflow: 'visible'
                            }}>
                                <iframe
                                    title="google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110498.99855352928!2d31.337858116406252!3d30.062848400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714755042487!5m2!1sen!2seg"
                                    style={{ width: '100%', height: '300px', border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                            <Map location={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.439948317082!2d31.47988364693166!3d30.062381639874868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458187ef98f872b%3A0x569e8c6d7f481214!2sOne%20Care%20Clinics!5e0!3m2!1sen!2seg!4v1715460503244!5m2!1sen!2seg"} />
                            {/* <div className="map" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>

                                <Map />

                            </div> */}
                        </section>
                    )}
                    <div className='badgesANDstats'>

                        <section className='statistics-section'>
                            {localStorage.getItem('user') === 'donor' && (<DonorHistory />)}
                            {localStorage.getItem('user') === 'doctor' && (<DoctorForm isEdit={isEdit} />)}
                            {localStorage.getItem('user') === 'teacher' && (<Teacherform isEdit={isEdit} />)}
                        </section>
                        <div className='actions'>
                    <Link to='/'>
                        <button className='deleteButton' style={{marginLeft:'30%', width:'140px', marginTop:'4%'}}>Delete Account</button>
                    </Link>

                </div>



                    </div>

                </div>
                <div className="profile-container">

                    <section className="profile-overview">
                        <Avatar size={64} icon={<UserOutlined />} className="profile-picture" />

                        <div className="profile-info">
                            <div className="profile-name">
                                <h1 style={{ fontSize: '25px' }}>{formData.firstName} {formData.lastName}</h1>
                            </div>
                            <div className="profile-button">
                                <button className={isEdit ? 'savebuttonsmall' : 'editbuttonsmall'} onClick={toggleEdit}>{buttonText}</button>
                            </div>

                        </div>
                        <section className="badge-section">
                            <div className="badge-container">

                                {selectedBadges.map((badge, index) => (
                                    <Badge key={index} badge={badge} />
                                ))}
                            </div>
                        </section>
                    </section>

                    <section className={"user-details" + (isEdit ? " glowing-border" : " ")}>
                        <h3>User Details</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName"><FaUser /> First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"><FaUser /> Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender"><FaUser />  Gender</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            {/* {localStorage.getItem('user') === 'teacher' && (<div className="form-group">
                                <label htmlFor="subjects"><FaChalkboardTeacher /> Subjects</label>
                                <input
                                    type="text"
                                    id="subjects"
                                    name="gender"
                                    value="Math, English"
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            )
                            } */}
                            <div className="form-group">
                                <label htmlFor="email"><MdEmail /> Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><FaLock /> Password</label>
                                <div className="password-input">
                                    <input
                                        type={inputType}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        readOnly={!isEdit}
                                    />
                                    <button type="button" onClick={togglePasswordVisibility}>
                                        {inputType === "password" ? <FaRegEye /> : <BiSolidHide />}
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber"><FaPhone /> Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address"><FaLocationDot /> Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area"><FaLocationDot />  Area</label>
                                <input
                                    type="text"
                                    id="area"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="governorate"><FaLocationDot />  Governorate</label>
                                <select className='selectProfile' id="governorate" onChange={handleChange}
                                    name="Governorate" disabled={!isEdit} >
                                    <option value="option0">Choose a governorate</option>
                                    <option value="option1" selected >Cairo </option>
                                    <option value="option2">Alexandria</option>
                                    <option value="option3">Giza</option>
                                    <option value="option4">Damietta</option>
                                    <option value="option5">Aswan</option>
                                    <option value="option6">Asyut</option>
                                    <option value="option7">Beheira</option>
                                    <option value="option8">Beni Suef</option>
                                    <option value="option9">Port Said</option>
                                    <option value="option10">Red Sea</option>
                                    <option value="option11">Dakahlia</option>
                                    <option value="option12">Sohag</option>
                                    <option value="option13">South Sinai</option>
                                    <option value="option14">Suez</option>
                                    <option value="option15">Sharqia</option>
                                    <option value="option16">Fayoum</option>
                                    <option value="option17">Qena</option>
                                    <option value="option18">Kafr El Sheikh</option>
                                    <option value="option19">Matrouh</option>
                                    <option value="option20">Minya</option>
                                    <option value="option21">Monufia</option>
                                    <option value="option22">Luxor</option>
                                    <option value="option23">New Valley</option>
                                    <option value="option24">North Sinai</option>
                                    <option value="option25">Gharbia</option>
                                    <option value="option26">Ismailia</option>
                                    <option value="option27">Qalyubia</option>
                                </select>

                            </div>
                        </form>
                    </section>

                    <div className="split-container">



                    </div>
                    


                </div >
                

            </div>



            <Footer />
        </div >
    );
} export default DonorProfile;
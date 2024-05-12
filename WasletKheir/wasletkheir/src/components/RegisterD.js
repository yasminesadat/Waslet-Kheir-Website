import React from 'react';
import './Register.css';
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaPhone, FaLock } from "react-icons/fa";
import { FaUser, FaLocationDot } from "react-icons/fa6";
import GoogleMap from './Map';
import NavBarLogoTitle from './NavBarLogoTitle';
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import {message} from "antd";



function RegisterD() {
    const [isLoading, setIsLoading] = useState(false);
    const [pass1, setpass1] = useState('');
    const [pass2, setpass2] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showUploadDr, setShowUploadDr] = useState(false);
    const [showUploadTeacher, setShowUploadTeacher] = useState(false);

    const navigate = useNavigate();
    const openPopUp = () => {
        setIsOpen(true);
        setShowMessage(false);
    };

    const closePopUp = () => {

        setShowMessage(true);
        setTimeout(() => {
            setIsOpen(false);

        }, 2000);
    };
    const handlepass1 = (event) => {
        setpass1(event.target.value);
    };
    const handlepass2 = (event) => {
        setpass2(event.target.value);
    };
    const handleDonorTypeChoice = (event) => {
        console.log("i chose" + event.target.value);
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === 'Doctor') {
            setShowUploadDr(true);
            setShowUploadTeacher(false);

        } else if (selectedValue === 'Teacher') {
            setShowUploadTeacher(true);
            setShowUploadDr(false);
        } else {
            setShowUploadTeacher(false);
            setShowUploadDr(false);
        }
    };
    const handleMapClick = () => {
        setShowMessage(true);
        console.log("map");
    };
    const handleClick = (event) => {
        event.preventDefault();
        if (pass1 !== pass2) {
            message.error("Passwords do not match");
        }
        else {
            setIsLoading(true);

            setTimeout(() => {
                setIsRegistered(true);
                setIsLoading(false);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }, 2000);

        };
    }
    return (


        <div>
            <NavBarLogoTitle />
            <br></br>  <br></br>  <br></br><br></br>
            <div className="form_wrapper" >

                <div className="form_container">
                    <div className="title_container">
                        <h2>Let's get you started</h2>
                    </div>
                    <div className="row clearfix">
                        <div>
                            <form onSubmit={handleClick}>
                                <div className="row clearfix">
                                    
                                    <div className="input_field select_option">
                                    <select id='role' value={selectedOption} onChange={handleDonorTypeChoice}>
                                        <option value="">Choose your role</option>
                                        <option value="reg">Regular Donor</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Teacher">Teacher</option>
                                    </select>
                                    <div className="select_arrow" style={{marginRight:'2%'}}></div>
                                </div>
                                <div className="col_half">
                                        <div className="input_field">
                                            <span><FaUser className='fa' />
                                            </span>
                                            <input type="text" name="firstName" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field">
                                            <span><FaUser className='fa' /></span>
                                            <input type="text" name="lastName" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="input_field radio_option">
                                    <input type="radio" name="radiogroup1" id="rd1" />
                                    <label htmlFor="rd1"> Male</label>
                                    <input type="radio" name="radiogroup1" id="rd2" />
                                    <label htmlFor="rd2">
                                        Female</label>
                                </div>

                                <div className="input_field">
                                    <span><MdEmail
                                        className='fa' />
                                    </span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="input_field">
                                    <span><FaPhone className='fa' />
                                    </span>
                                    <input type="tel" name="phone" placeholder="Phone Number" required />
                                </div>
                                <div className="input_field">
                                    <span><FaLock className='fa' />
                                    </span>
                                    <input type="password" value={pass1} onChange={handlepass1} name="password" placeholder="Password" required />
                                </div>
                                <div className="input_field">
                                    <span><FaLock className='fa' /></span>
                                    <input type="password" value={pass2} onChange={handlepass2} name="confirmPassword" placeholder="Confirm Password" required />
                                </div>

                                <div className="input_field">
                                    <span> <FaLocationDot className='fa' /> </span>
                                    <input type="text" name="address" placeholder="Address" required />
                                </div>
                                <div className="input_field">
                                    <span><FaLocationDot className='fa' /> </span>
                                    <input type="text" name="area" placeholder="Area" required />
                                </div>

                                

                                <div className="input_field select_option">
                                    <select name="governorate">
                                        <option value="option0">Choose a governorate</option>
                                        <option value="option1">Cairo</option>
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
                                    <div className="select_arrow"></div>
                                </div>


                                {showUploadDr && (
                                    <div>
                                        <div className="input_field">
                                            <span><FaUserDoctor className='fa' />
                                            </span>
                                            <input type="text" name="Medicalspeciality" placeholder="Medical Speciality" required />
                                        </div>
                                        <div className="input_field">
                                            <span><FaHospitalUser className='fa' />
                                            </span>
                                            <input type="text" name="Clinicloc" placeholder="Clinic Location" required />
                                        </div>
                                        <div className="formElement">
                                            <label htmlFor="fileInput"><b>Upload your Medical License</b></label>
                                            <br></br>
                                            <br></br>
                                            <input type="file" required />
                                        </div>
                                        <GoogleMap location="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13824.106906149644!2d31.4350481!3d29.9786619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b579cbe8515%3A0x1b8c3382fecf884!2sEgyptian%20Food%20Bank!5e0!3m2!1sen!2seg!4v1715125534942!5m2!1sen!2seghttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110406.59114316876!2d31.260180260583876!3d30.14552667069166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fae28324a23%3A0xd9d93042473567de!2sLaris%20clinic!5e0!3m2!1sen!2seg!4v1715126962309!5m2!1sen!2seg" />
                                  <br></br>
                                    </div>

                                )}
                                {showUploadTeacher && (
                                    <div>
                                        <div className="input_field">
                                            <span><GiTeacher
                                                className='fa' />
                                            </span>
                                            <input type="text" name="subjects" placeholder="Subjects" required multiple />
                                        </div>
                                        <div className="formElement">
                                            <label htmlFor="fileInput"><b>Upload your Teaching License</b></label>
                                            <br></br>
                                            <br></br>
                                            <input type="file" required />
                                        </div>
                                    </div>
                                )}

                                <button type="submit" disabled={isLoading || isRegistered} className={isRegistered ? 'greenButton' : 'NormalButton'}>
                                    {isLoading ? 'Loading...' : isRegistered ? 'Registered!' : 'Register'}

                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RegisterD;
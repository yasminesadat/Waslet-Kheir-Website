import React from 'react';
import { useState } from 'react';
import { useNavigate, Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faMapMarker, faUsers } from '@fortawesome/free-solid-svg-icons';
import GoogleMap from './Map';
import NavBarLogoTitle from './NavBarLogoTitle';


function Form() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (confirmPassword !== event.target.value) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (password !== event.target.value) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (password !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setIsLoading(true);

            setTimeout(() => {
                setIsRegistered(true);
                setIsLoading(false);
                setTimeout(() => {
                    navigate("/Home");
                }, 2000);
            }, 2000);

        }

    };

    return (
        <div>
            <NavBarLogoTitle />
            <br></br><br></br><br></br><br></br>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Let's get you started</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={handleSubmit} >
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faUser} aria-hidden="true" /></span>
                                            <input type="text" name="name" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faUser} aria-hidden="true" /></span>
                                            <input type="text" name="name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>



                                <div className="input_field radio_option">
                                    <input type="radio" name="radiogroup1" id="rd1" />
                                    <label htmlFor="rd1"> Male </label>
                                    <input type="radio" name="radiogroup1" id="rd2" />
                                    <label htmlFor="rd2"> Female</label>
                                </div>

                                <div className="input_field"><span><FontAwesomeIcon className='fa' icon={faEnvelope} aria-hidden="true" /></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>

                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faPhone} aria-hidden="true" /></span>
                                    <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
                                </div>

                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faLock} aria-hidden="true" /></span>
                                    <input type="password" name="password1" placeholder="Password" required value={password} onChange={handlePasswordChange} />
                                </div>
                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faLock} aria-hidden="true" /></span>
                                    <input type="password" name="password2" placeholder="Confirm Password" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                </div>
                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faUsers} aria-hidden="true" /></span>
                                    <input type='text' id='orgName' name='orgName' placeholder="Organization Name" required />
                                </div>

                                <div className="input_field select_option">
                                    <select>
                                        <option value="option0">Choose your Organization type</option>
                                        <option value="option1">Public School</option>
                                        <option value="option2">Hospital</option>
                                        <option value="option3">Mosque</option>
                                        <option value="option4">Church</option>
                                        <option value="option5">Charity</option>
                                        <option value="option6">Orphanage</option>
                                    </select>
                                    <div class="select_arrow"></div>
                                </div>


                                <div class="input_field select_option">
                                    <select>
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

                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faMapMarker} aria-hidden="true" /></span>
                                    <input type='text' id='area' placeholder="Area" required />
                                </div>

                                <div className="input_field"> <span><FontAwesomeIcon className='fa' icon={faMapMarker} aria-hidden="true" /></span>
                                    <input type='text' id='address' placeholder="Address" required />
                                </div>

                                <div className='formElement'>
                                    <div className='formText'>Please upload the Organizations's Tax registration document</div>
                                    <input type="file" id="documents" multiple required />
                                </div>
                                <GoogleMap location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110497.17550589156!2d31.182106716406256!3d30.06448150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e451b2a3603%3A0xfca80e4ff9d274dc!2sMersal%20Foundation!5e0!3m2!1sen!2seg!4v1714426159716!5m2!1sen!2seg" />
                                <br />
                                {formSubmitted && !passwordMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}

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


export default Form;


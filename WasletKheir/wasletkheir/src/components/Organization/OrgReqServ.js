import React, { useState, useEffect } from 'react';
import OrgNavBar2 from './NavbarOrg';
import './Org.css';
import Footer from '../Footer';
export default function OrgReqServ() {
    const [selectedOption, setSelectedOption] = useState('teacher');
    const [formSubmitted, setFormSubmitted] = useState(false);







    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
        }, 4000);
    };

    return (
        <>
            <OrgNavBar2 />
            <br></br>
            <br></br>
            <br></br>

            <center>
                <br></br>
                <br></br>
                <h1>Request a Service</h1>
            </center>
            <div className="select-container">
                <select onChange={handleSelectChange}>
                    <option value="teacher">Teaching Services</option>
                    <option value="doctor">Doctor Services</option>
                </select>
            </div>

            {/* Form for teaching services */}
            {selectedOption === 'teacher' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Number of Students:
                            <input type="number" name="name" placeholder="1" />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="type" placeholder="Enter address" />
                        </label>
                        <label>
                            Subjects:
                            <input type="text" name="material" placeholder="Enter desired subjects" />
                        </label>

                        <label>
                            Description:
                            <input type="text" name="description" placeholder="Enter description and required teaching time slots" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )}



            {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )}

            {/* Form for doctor services */}
            {selectedOption === 'doctor' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Patient Name:
                            <input type="text" name="name" placeholder="Enter patient name" />
                        </label>
                        <label>
                            Patient Age:
                            <input type="number" name="type" placeholder="Enter age" />
                        </label>
                        <label>
                            Patient Gender:
                            <select name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label>
                            Patient Weight:
                            <input type="number" name="type" placeholder="Enter weight" />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="type" placeholder="Enter address" />
                        </label>
                        <label>
                            Medical Specialty:
                            <input type="text" name="specialty" placeholder="Enter medical specialty" />
                        </label>

                        <label>
                            Case Description:
                            <input type="text" name="description" placeholder="Enter case description" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {formSubmitted && (
                <div className="success-message">
                    Service Request Created Successfully
                </div>
            )}

                <Footer></Footer>

        </>
    )
}
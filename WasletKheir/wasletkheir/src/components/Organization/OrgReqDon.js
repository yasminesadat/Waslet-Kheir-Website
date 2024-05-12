import React, { useState, useEffect } from 'react';
import OrgNavBar2 from './NavbarOrg';
import './Org.css';
import Footer from '../Footer';
import { message } from 'antd';
export default function OrgReqDon() {
    const [selectedOption, setSelectedOption] = useState('clothes');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [foodType, setFoodType] = useState('');
    const [bookType, setBookType] = useState('');

    const handleTypeChange = (event) => {
        setBookType(event.target.value);
    };


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFoodTypeChange = (event) => {
        setFoodType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        message.success("Donation Request Created Successfully");
        setTimeout(() => {
            setFormSubmitted(false);
        }, 4000);
    };

    function DonationForm() {
        const [foodType, setFoodType] = useState('');

        const handleSelectChange = (event) => {
            setFoodType(event.target.value);
        };
    }

    return (
        <>
            <OrgNavBar2 />
            <br />
            <br />
            <br />
            <br />
            <center>
                <h1>Request a Donation</h1>
            </center>
            <div className="select-container">
                <select onChange={handleSelectChange}>
                    <option value="clothes">Clothes</option>
                    <option value="toys">Toys</option>
                    <option value="food">Food</option>
                    <option value="medicalsupplies">Medical Supplies</option>
                    <option value="schoolsupplies">School Supplies</option>
                    <option value="blooddonations">Blood Donations</option>
                </select>
            </div>

            {/* Form for clothes */}
            {selectedOption === 'clothes' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:<span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of item" />
                        </label>
                        <label>
                            Type:<span style={{ color: 'red' }}>*</span>
                            <input type="text" name="type" required placeholder="Enter type of clothing" />
                        </label>
                        <label>
                            Age:
                            <select name="age">
                                <option value="0-2">0-2 years</option>
                                <option value="3-7">3-7 years</option>
                                <option value="8-12">8-12 years</option>
                                <option value="13-17">13-17 years</option>
                                <option value="18+">18+ years</option>
                            </select>
                        </label>
                        <label>
                            Gender:
                            <select name="gender">
                                <option value="unisex">Unisex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label>
                            Season:
                            <select name="season">
                                <option value="spring">Spring</option>
                                <option value="summer">Summer</option>
                                <option value="fall">Fall</option>
                                <option value="winter">Winter</option>
                            </select>
                        </label>
                        <label>
                            Material: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="material" required placeholder="e.g., Cotton, Polyester" />
                        </label>
                        <label>
                            Quantity: <span style={{ color: 'red' }}>*</span>
                            <input type="number" name="quantity" required placeholder="1" min="1" />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description"  placeholder="Enter description" />
                        </label>
                        <label>
                            Scheduled Donation Drop-off time: <span style={{ color: 'red' }}>*</span>
                            <input type="datetime-local" name="description" required placeholder="Enter description" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}
{/* 
            {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}

            {/* Form for toys */}
            {selectedOption === 'toys' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:<span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of item" />
                        </label>
                        <label>
                            Age:
                            <select name="age">
                                <option value="0-3">0-3 years</option>
                                <option value="4-6">4-6 years</option>
                                <option value="7-12">7-12 years</option>
                                <option value="12+">12+ years</option>
                            </select>
                        </label>
                        <label>
                            Gender:
                            <select name="gender">
                                <option value="unisex">Unisex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                        <label>
                            Category: <span style={{ color: 'red' }}>*</span>
                            <select name="toycategory">
                                <option value="board-games">Board Games</option>
                                <option value="stuffed-toys">Stuffed Toys</option>
                                <option value="dolls">Dolls</option>
                                <option value="sports">Sports</option>
                                <option value="car">Car</option>
                                <option value="outdoor">Outdoor</option>
                            </select>
                        </label>
                        <label>
                            Quantity: <span style={{ color: 'red' }}>*</span>
                            <input type="number" name="quantity" required placeholder="1" min="1" />
                        </label>
                        <label>
                            Picture: 
                            <input type="file" name="picture"  accept="image/*" />
                        </label>
                        <br></br>
                        <label>
                            Description:
                            <input type="text" name="description"  placeholder="Enter description" />
                        </label>
                        <label>
                            Scheduled Donation Drop-off time:<span style={{ color: 'red' }}>*</span>
                            <input type="datetime-local" name="description" required placeholder="Enter description" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {/* {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}






            {/* Form for food */}
            {selectedOption === 'food' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:<span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of item" />
                        </label>
                        <label>
                            Type: <span style={{ color: 'red' }}>*</span>
                            <select name="food-type" onChange={handleFoodTypeChange}>
                                <option value="canned">Canned Foods</option>
                                <option value="fruitveg">Fruits & Vegetables</option>
                                <option value="fresh">Fresh Foods</option>
                                <option value="baked">Baked Foods</option>
                            </select>
                        </label>
                        <label>
                            {foodType === 'fruitveg' ? 'Quantity (in kg)' : 'Quantity (by amount)'}: <span style={{ color: 'red' }}>*</span>
                            <input type="number" name="quantity" required placeholder="1" min="1"  />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description"  placeholder="Enter description"  />
                        </label>
                        <label>
                            Scheduled Donation Drop-off time: <span style={{ color: 'red' }}>*</span>
                            <input type="datetime-local" name="description" required placeholder="Enter description"  />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {/* {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}

            {/* Form for medical supplies */}
            {selectedOption === 'medicalsupplies' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of item" />
                        </label>
                        <label>
                            Type: <span style={{ color: 'red' }}>*</span>
                            <select name="age">
                                <option value="medicine">Medicine</option>
                                <option value="medeq">Medical Equipment</option>
                                <option value="medsup">Medical Devices</option>
                            </select>
                        </label>
                        <label>
                            Picture: 

                
                            <input type="file" name="picture"  accept="image/*" />
                        </label>
                        <br></br>
                        <label>
                            Quantity: <span style={{ color: 'red' }}>*</span>
                            <input type="number" name="quantity" required placeholder="1" min="1" />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description"  placeholder="Enter description" />
                        </label>
                        <label>
                            Scheduled Donation Drop-off time: <span style={{ color: 'red' }}>*</span>
                            <input type="datetime-local" required name="description" placeholder="Enter description" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {/* {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}

            {/* Form for school supplies */}
            {selectedOption === 'schoolsupplies' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of item" />
                        </label>
                        <label>
                            Type: <span style={{ color: 'red' }}>*</span>
                            <select name="suptype" onChange={handleTypeChange}>
                                <option value="stationary">Stationary</option>
                                <option value="books">Books</option>
                            </select>
                        </label>
                        {bookType === 'books' && (
                            <>
                                <label>
                                    Author:
                                    <input type="text" name="author"  placeholder="Enter author's name" />
                                </label>
                                <label>
                                    Language: <span style={{ color: 'red' }}>*</span>
                                    <input type="text" name="language" required placeholder="Enter book's language" />
                                </label>
                                <label>
                                    Edition:
                                    <input type="text" name="language"  placeholder="Enter book's edition" />
                                </label>
                                <label>
                                    Picture: 
                                    <input type="file"  name="picture" />
                                </label>
                                <br></br>
                            </>
                        )}
                        <label>
                            Quantity: <span style={{ color: 'red' }}>*</span>
                            <input type="number" name="quantity" required placeholder="1" min="1" />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description" placeholder="Enter description" />
                        </label>
                        <label>
                            Scheduled Donation Drop-off time: <span style={{ color: 'red' }}>*</span>
                            <input type="datetime-local" name="description" required placeholder="Enter description" />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {/* {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}

            {/* Form for blood donations */}
            {selectedOption === 'blooddonations' && (
                <div className="main-request-container">
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Patient Name: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of patient" />
                        </label>
                        <label>
                            Hospital Name: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="name" required placeholder="Enter name of hospital" />
                        </label>
                        <label>
                            Hospital Governorate: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="type" required placeholder="Enter location of hospital" />
                        </label>
                        <label>
                            Hospital Area: <span style={{ color: 'red' }}>*</span>
                            <input type="text" name="type" required placeholder="Enter area of hospital" />
                        </label>

                        <label>
                            Blood Type: <span style={{ color: 'red' }}>*</span>
                            <select name="blood">
                                <option value="o-">O-</option>
                                <option value="o+">O+</option>
                                <option value="a-">A-</option>
                                <option value="a+">A+</option>
                                <option value="b-">B-</option>
                                <option value="b+">B+</option>
                                <option value="ab-">AB-</option>
                                <option value="ab+">AB+</option>
                            </select>
                        </label>
                        <label>
                            Description: 
                            <input type="text" name="description" placeholder="Enter description" />
                        </label>
                        {/* <label>
                            Scheduled Donation Drop-off time:
                            <input type="datetime-local" name="description" required placeholder="Enter description" />
                        </label> */}
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )}

            {/* {formSubmitted && (
                <div className="success-message">
                    Donation Request Created Successfully
                </div>
            )} */}
            <Footer></Footer>
        </>
    );
}
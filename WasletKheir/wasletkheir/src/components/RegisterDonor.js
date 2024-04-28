import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import GoogleMap from "./MapTrial";


function RegisterDonor() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showUploadDr, setShowUploadDr] = useState(false);
    const [showUploadTeacher, setShowUploadTeacher] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);


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
        setShowMessage(true);  // Location pinned successfully
        console.log("map");
    };
    const handleClick = (event) => {
        setIsLoading(true);
        event.preventDefault();
        setTimeout(() => {
            setIsRegistered(true);
            setIsLoading(false);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }, 2000);
    };

    return (

        <div className="RegisterDonor" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <form className="regform" onSubmit={handleClick} style={{ overflowY: 'auto', maxHeight: '100%' }}>
                <h1 className='title'> Create an Account</h1>
                <div className="formElement">
                    <label htmlFor="fname"><b>First Name</b></label>
                    <input type="text" placeholder="Enter your first name" name="fname" id="fname" required />
                </div>
                <div className="formElement">
                    <label htmlFor="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter your last name" name="lname" id="lname" required />
                </div>
                <div className="formElement">
                    <label><b>Gender</b></label>
                    <div className="genderOption">
                        <input type="radio" id="male" name="genderoption" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="genderOption">
                        <input type="radio" id="female" name="genderoption" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="formElement">
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter your email" name="email" id="email" required />
                </div>
                <div className="formElement">
                    <label htmlFor="phone"><b>Phone Number</b></label>
                    <input type="tel" placeholder="Enter your phone number" name="phone" id="phone" required />
                </div>
                <div className="formElement">
                    <label htmlFor="pass"><b>Password</b></label>
                    <input type="password" placeholder="Enter your password" name="pass" id="pas" required />
                </div>
                <div className="formElement">
                    <label htmlFor="add"><b>Address</b></label>
                    <input type="text" placeholder="Enter your address" name="add" id="add" required />
                </div>
                <div className="formElement">
                    <input type="text" placeholder="Enter your area" name="area" id="area" required />
                </div>
                <div className="formElement">
                    <input type="text" placeholder="Enter your governate" name="gov" id="gov" required />
                </div>
                <div className="formElement">
                    <label htmlFor="role"><b>Choose a role</b></label>
                    <select value={selectedOption} onChange={handleDonorTypeChoice}>
                        <option value="reg">Regular Donor</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                </div>
                {showUploadDr && (
                    <div className="formElement">
                        <label htmlFor="fileInput"><b>Upload your Medical License</b></label>
                        <input type="file" required />
                    </div>
                )}
                {showUploadTeacher && (
                    <div className="formElement">
                        <label htmlFor="fileInput"><b>Upload your Teaching License</b></label>
                        <input type="file" required />
                    </div>
                )}
                <div className="formElement">
                    <button type="button" className='NormalButton' onClick={openPopUp}>
                        Pin Location on Map
                    </button>
                    {isOpen && (
                        <div className="popup">
                            <div className="popup-content"  >
                                <GoogleMap />
                                <button className='NormalButton' onClick={closePopUp}>Close</button>
                                {showMessage && (<h3>Pinned successfully! </h3>)}
                            </div>

                        </div>
                    )}
                </div>
                <div className="formElement">
                    <button type="submit" disabled={isLoading || isRegistered} className={isRegistered ? 'greenButton' : 'NormalButton'}>
                        {isLoading ? 'Loading...' : isRegistered ? 'Registered!' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterDonor;

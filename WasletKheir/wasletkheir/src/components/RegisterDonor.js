import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function RegisterDonor() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);


    function handleClick(event) {
        setIsLoading(true);
        event.preventDefault(); // is this necessary?
        setTimeout(() => {
            setIsRegistered(true);

            setIsLoading(false);

            setTimeout(() => {
                navigate("/OrgMain");

            }, 2000);
        }, 2000);
    }




    return (
        <div className="RegisterDonor">
            <form className="regform" onSubmit={handleClick}>
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
                    <input type="text" placeholder="Enter your area and governate" name="add" id="add" required />
                    <input type="text" placeholder="Enter your area" name="area" id="area" required />
                    <input type="text" placeholder="Enter your governate" name="gov" id="gov" required />
                </div>
                <div className="formElement">
                    <label htmlFor="role"><b>Choose a role</b></label>
                    <select name="role" id="role">
                        <option value="reg">Regular Donor</option>
                        <option value="dr">Doctor</option>
                        <option value="teach">Teacher</option>
                    </select>
                </div>
                <div className="formElement">
                    <button type="button" onClick={handleClick} disabled={isLoading || isRegistered}
                        className={isRegistered ? 'greenButton' : ''}
                    >
                        {isLoading ? 'Loading...' : isRegistered ? 'Registered!' : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    );
}

// add google maps and uplaoding documents idea 
export default RegisterDonor;

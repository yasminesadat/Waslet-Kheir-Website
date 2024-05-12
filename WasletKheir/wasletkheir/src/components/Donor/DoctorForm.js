import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaClinicMedical } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { MdOutlineSick } from "react-icons/md";
import {message} from "antd";


export default function DoctorForm({ isEdit }) {
    const [button, setButtonAppear] = useState(true);
    // Initialize form state with default values
    const [formData, setFormData] = useState({
        address: 'Rehab Medical Center',
        area: 'New Cairo',
        governorate: 'Cairo',
        numCases: '1',
        speciality: 'Cardiologist'
    });

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleConfirm = () => {
        message.success("Information Updated Successfully");
        setButtonAppear(false);
        }
    


    return (
        <div style={{
            width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20%',marginTop:'-17%'
        }}>
            <section className={"user-details" + (isEdit ? " glowing-border" : "")} style={{ width: '100%', marginRight: '10%' }}>
                <h3>Doctor Details</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="clinicArea"><FaClinicMedical />&nbsp;
                            Clinic Area</label>
                        <input
                            type="text"
                            id="clinicArea"
                            name="clinicArea"
                            value={formData.area}
                            onChange={handleChange}
                            readOnly={!isEdit}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="clinicAddress"><FaClinicMedical /> &nbsp; Clinic Address</label>
                        <input
                            type="text"
                            id="clinicAddress"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            readOnly={!isEdit}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="clinicGovernorate"><FaClinicMedical />&nbsp;
                            Clinic Governorate</label>
                        <input
                            type="text"
                            id="clinicGovernorate"
                            name="governorate"
                            value={formData.governorate}
                            onChange={handleChange}
                            readOnly={!isEdit}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="clinicAddress"><LuHeartPulse /> &nbsp;
                            Speciality</label>
                        <input
                            type="text"
                            id="clinicAddress"
                            name="address"
                            value={formData.speciality}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="proBonoCases"><MdOutlineSick />&nbsp;
                            Number of Pro Bono Cases{button&&<span style={{ color: 'red' }}>*</span>}</label>
                        <input
                            type="number"
                            min="1"
                            id="proBonoCases"
                            name="numCases"
                            value={formData.numCases}
                            onChange={handleChange}
                            readOnly={!isEdit}
                        />
                    </div>
                    {button && (
                            <button onClick={handleConfirm} type="submit" style={{ padding: '10px 20px', backgroundColor: '#4D869C', color: 'white', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '4px', display:'block'}}>
                                Confirm
                            </button>
                        )}
                        
                </form>
            </section>
        </div>
    );
}

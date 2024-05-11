import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaClinicMedical } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { MdOutlineSick } from "react-icons/md";


export default function DoctorForm({ isEdit }) {
    // Initialize form state with default values
    const [formData, setFormData] = useState({
        address: 'Rehab Medical Center',
        area: 'New Cairo',
        governorate: 'Cairo',
        numCases: '100',
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

    return (
        <div style={{
            width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20%'
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
                            readOnly={!isEdit}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="proBonoCases"><MdOutlineSick />&nbsp;
                            Number of Pro Bono Cases</label>
                        <input
                            type="number"
                            id="proBonoCases"
                            name="numCases"
                            value={formData.numCases}
                            onChange={handleChange}
                            readOnly={!isEdit}
                        />
                    </div>
                </form>
            </section>
        </div>
    );
}

import React, { useState } from 'react';
import { FaChalkboardTeacher, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {message} from "antd";

export default function TeacherForm() {
    const [formData, setFormData] = useState({
        numStudents: '',
        numClasses: ''
    });
    const [title, setTitle] = useState('Click here to enter missing teacher details');
    const [button, setButtonAppear] = useState(true);
    const [tempFormData, setTempFormData] = useState({
        numStudents: '',
        numClasses: ''
    });

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleConfirm = () => {
        setFormData(tempFormData);
        if(tempFormData.numStudents === '' || tempFormData.numClasses === '') {
            return;
        }
        else{
        setTitle('Your teaching details');
        setButtonAppear(false);
        }
    };

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <div style={{
            width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', marginTop: '40%', border: '1px solid #ccc',
            borderRadius: '8px', boxSizing: 'border-box', backgroundColor: '#f2f2f2'
        }}>
            <div style={{ width: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={toggleForm}>
                <h2 style={{ marginLeft: '10%' }}>{title}</h2>
                {isFormOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <img src="https://img.freepik.com/premium-photo/teacher-woman-avatar-icon-illustration-vector-style_131965-796.jpg" alt="Teacher" style={{ marginBottom: '10px', width: '120px', height: '120px', borderRadius: '50%', alignSelf: 'center' }} />
            {isFormOpen && (
                <section className="user-details" style={{
                    width: '80%', paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                    <form style={{ width: '100%' }} onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group" style={{ marginBottom: '10px', width: '100%' }}>
                            <label htmlFor="subjects" style={{ display: 'block', marginBottom: '5px' }}>
                                <FaChalkboardTeacher /> Subjects
                            </label>
                            <input
                                type="text"
                                id="subjects"
                                name="subjects"
                                value={"English , Biology"}
                                readOnly
                                style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '10px', width: '100%' }}>
                            <label htmlFor="numStudents" style={{ display: 'block', marginBottom: '5px' }}>
                                <FaChalkboardTeacher /> Number of Students <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="number"
                                min="1"
                                id="numStudents"
                                name="numStudents"
                                value={tempFormData.numStudents}
                                onChange={handleInputChange}
                                required
                                style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                                placeholder="Enter number of students you can tutor privately"
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '10px', width: '100%' }}>
                            <label htmlFor="numClasses" style={{ display: 'block', marginBottom: '5px' }}>
                                <FaChalkboardTeacher /> Number of Classes <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="number"
                                min="1"
                                id="numClasses"
                                name="numClasses"
                                value={tempFormData.numClasses}
                                onChange={handleInputChange}
                                required
                                style={{ width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                                placeholder="Enter number of classes you can teach"
                            />
                        </div>
                        {button && (
                            <button onClick={handleConfirm} type="submit" style={{ padding: '10px 20px', backgroundColor: '#4D869C', color: 'white', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '4px', marginTop: '10px' }}>
                                Confirm
                            </button>
                        )}
                    </form>
                </section>
            )}
        </div>
    );
}

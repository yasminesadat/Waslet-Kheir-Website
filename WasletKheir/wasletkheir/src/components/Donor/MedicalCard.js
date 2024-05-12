import React, { useState } from 'react';
import './donor.css';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Progress, Divider, Modal } from 'antd';
import { message } from 'antd';

const MedicalCard = ({ title, patientName, age, gender, weight, organizationName, medicalSpecialty, caseDescription, image, progress, caseDescriptionLong, location }) => {
    const isFulfilled = Number(progress) === 100;
    const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
    const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
    const progressBarClass = isFulfilled ? 'progress-bar-green' : '';

    const handleVolunteer = () => {
        if(status==='Ongoing')
            message.success('Thank you for volunteering')
        else
        message.warning('This service request has been fulfilled');
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="cardMariam">
            <img className="card-imgMariam" style={{ objectFit: 'cover', objectPosition: '0% 1%' }} src={image} alt={title} />
            <div className="card-contentMariam">
                <h2 className="card-title">{title}</h2>
                <p className="card-descriptionMariam">{caseDescription}</p>
                <br></br>
                <div className="button-container">
                    <button className="donate-button" onClick={handleVolunteer}>Volunteer</button>
                    <button className="view-details-button-donor" onClick={showModal}><FontAwesomeIcon icon={faInfo} /></button>
                    <Modal
                        footer={null}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        bodyStyle={{ height: '400px', overflowY: 'auto' }}  // Enable vertical scrolling
                    >                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', margin:'2%' }}>
                            <Avatar size={55} icon={<UserOutlined />} />
                            <span style={{ fontSize: '20px', marginLeft: '12px' , fontWeight:'bold'}}>{organizationName}</span>
                            <Progress
                                type="circle"
                                percent={progress}
                                size={70}
                                style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%) translateX(-10%)' }}
                                showInfo={false}
                            />
                        </div>
                        <Divider style={{ marginTop: '3%', marginBottom: '-1.5%' }} />
                        <div className='details' style={{margin:'2%'}}>
                            <p>Patient Name: {patientName}</p>
                            <p>Age: {age}</p>
                            <p>Gender: {gender}</p>
                            <p>Weight: {weight}</p>
                            <p>Medical Speciality: {medicalSpecialty}</p>
                            <p>Description:{caseDescriptionLong}</p>
                            <p>Progress: {progress}% </p>
                            <p>Location:</p>
                            <iframe
                                title="google map"
                                src={location}
                                style={{ width: '250px', height: '220px', border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Modal>
                </div>
                <div className="progress-container">
                    <progress className={`progress-bar ${progressBarClass}`} style={{ marginBottom: '10%' }} value={progress} max="100"></progress>
                    <div className={`status ${statusClass}`}>Status: {status}</div>
                    <h3 style={{ marginTop: '-8%', fontSize: '13px' }}>{progress}% </h3>
                </div>
            </div>
        </div>
    );
};

export default MedicalCard;

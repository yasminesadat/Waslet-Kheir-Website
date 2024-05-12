import React, { useState } from 'react';
import './donor.css';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Progress, Divider, Modal } from 'antd';
import { TEACHING_CASES_DATA } from '../helpers/services';
const TeachingCards = ({ title, numStudents, address, location, subject, organizationName, image, progress, descriptionGrade }) => {
    const isFulfilled = Number(progress) === 100;
    const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
    const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
    const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
    const navigate = useNavigate();

    const handleVolunteer = () => {

        alert('thank you for volunteering')
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
                <p className="card-descriptionMariam">{descriptionGrade}</p>
                <br></br>
                <div className="button-container">
                    <button className="donate-button" onClick={handleVolunteer}>Volunteer</button>
                    <button className="view-details-button-donor" onClick={showModal}><FontAwesomeIcon icon={faInfo} /></button>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} bodyStyle={{ height: '390px' }}>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <Avatar size={55} icon={<UserOutlined />} />
                            <span style={{ fontSize: '20px', marginLeft: '12px' }}>{organizationName}</span>
                            <Progress
                                type="circle"
                                percent={progress}
                                size={70}
                                style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%) translateX(-10%)' }}
                                showInfo={false}
                            />
                        </div>
                        <Divider style={{ marginTop: '3%', marginBottom: '-1.5%' }} />
                        <div className='details'>
                            <p>Number of Students: {numStudents}</p>
                            <p>Address: {address}</p>
                            <p>location: 'google map here'</p>
                            <p>subjects: {subject}</p>
                            <p>Description: {descriptionGrade}</p>
                            <p>Progress: {progress}% Donated</p>

                        </div>
                    </Modal>
                </div>
                <div className="progress-container">
                    <progress className={`progress-bar ${progressBarClass}`} style={{ marginBottom: '10%' }} value={progress} max="100"></progress>
                    <div className={`status ${statusClass}`}>Status: {status}</div>
                    <h3 style={{ marginTop: '-8%', fontSize: '13px' }}>{progress}% Donated</h3>
                </div>
            </div>
        </div>
    );
};

export default TeachingCards;

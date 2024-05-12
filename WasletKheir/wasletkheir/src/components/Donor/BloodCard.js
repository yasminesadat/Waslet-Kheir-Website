import {React, useState} from 'react';
import './donor.css'
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Modal, Avatar, Progress,Divider, Dropdown , Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
const BloodCard = ({ title, text,patientName,blood,hospitalAddress, hospitalName, governorate, area, progress,image, category,orgName }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
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
      <img className="card-imgMariam" src={image} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{orgName}{text}</p>
        <br></br>
        <div className="button-container">

          <button className="donate-button">Donate</button>
          <button className="view-details-button-donor"  onClick={showModal}><FontAwesomeIcon icon={faInfo} /></button>
          <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} bodyStyle={{height:'380px',}}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Avatar size={55} icon={<UserOutlined />} />
          <span style={{ fontSize: '20px', marginLeft: '12px' }}>{orgName}</span>
          <Progress
            type="circle"
            percent={progress}
            size={70}
            style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%) translateX(-10%)' }}
            showInfo={false}
          />
        </div>
          <Divider style={{marginTop:'3%', marginBottom:'-1.5%'}}/>
          
          <div className='details'> 
         
          <p>Type: {title}</p>
          <p>Description: {text}</p> 
          <p>Patient name: {patientName}</p>
          <p>Patient's blood type: {blood}</p>
          <p>Hospital name: {hospitalName}</p>

          <p>
          <Dropdown
              trigger={['click']}
              overlay={
                <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110498.99855352928!2d31.337858116406252!3d30.062848400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714755042487!5m2!1sen!2seg"
                style={{ width: '100%', height: '180px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>              }
            >
              <a onClick={(e) => e.preventDefault()} style={{ color: 'black', fontSize:'15x' }}>
                <Space>
                  Location
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>  
            </p>                   
             <p>Hospital address: {hospitalAddress}</p>
            <p>Area: {area}</p>
            <p>Governorate: {governorate}</p>
            </div>


          </Modal>
        </div>
        <div className="progress-container">
        <progress className={`progress-bar ${progressBarClass}`} style={{marginBottom:'10%'}} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3 style={{marginTop:'-8%' , fontSize:'13px'}}>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default BloodCard;
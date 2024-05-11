import {React, useState} from 'react';
import './donor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { MedicalSuppliesTypes } from '../helpers/types';
import { DownOutlined } from '@ant-design/icons';
import { Modal, Avatar, Progress,Divider, Dropdown , Space } from 'antd';
const MedicalSuppliesCard = ({ title,use,quantity, type, medicationValue,image, text, progress,category }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
  const navigate = useNavigate(); 
  const handleDonate = () => {
    const details = { title,use,quantity, type, medicationValue,image, text, progress,category };

    console.log('Details:', details); 
    navigate('/DonateAction', { state: details }); 
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
      <img className="card-imgMariam" src={image} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{text}</p>
        <br></br>
       <div className="button-container">
        {/* <Link to={{ pathname: '/DonateAction', state: { title, text, age, gender, season, material, quantity, progress } }} className="donate-button">Donate</Link>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button> */}
          <button className="donate-button" onClick={handleDonate}>Donate</button>
          <button className="view-details-button-donor" onClick={showModal}><FontAwesomeIcon icon={faInfo} /></button>
          <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} bodyStyle={{height:'380px',}}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Avatar size={55} icon={<UserOutlined />} />
          <span style={{ fontSize: '20px', marginLeft: '12px' }}>Masr el kheir</span>
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
            <br/>
          <Dropdown
              trigger={['click']}
              overlay={
                <img src={image} alt="Your Image" style={{ width: '370px', height:'240px' }} />
              }
            >
              <a onClick={(e) => e.preventDefault()} style={{ color: 'black', fontSize:'15x' }}>
                <Space>
                  Image
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          <p>Type: {title}</p>
          <p>Description: {text}</p>
          <p>Use: {use}</p>
          <div>
          {type ===  MedicalSuppliesTypes.Medication && (
        <>
            <p>Area of use: {medicationValue}</p>
        </>
         )}
            <p>Quantity: {quantity}</p>
          </div>
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

export default MedicalSuppliesCard;
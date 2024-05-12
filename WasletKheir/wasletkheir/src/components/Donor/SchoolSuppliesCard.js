import {React,useState} from 'react';
import './donor.css'
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
import { SchoolTypes } from '../helpers/types';
import { DownOutlined } from '@ant-design/icons';
import { Modal, Avatar, Progress,Divider, Dropdown , Space } from 'antd';

const SchoolSuppliesCard = ({ title,type,quantity,image, text, progress,bookName,orgName, author, language,edition,summary,category,stationaryType ,orgPic}) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
  const navigate = useNavigate();
  const handleDonate = () => {
    const details = {  title,type,quantity, text, progress,bookName,orgName, author,image, language,edition,summary,category,stationaryType};

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
      <img className="card-imgMariam" style={{
        objectFit: 'cover', // This property ensures that the image covers the entire container while maintaining its aspect ratio
        objectPosition: '0% 1%'
      }} src={image} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{orgName}{text}</p>
        <br></br>
        <div className="button-container">
          {/* <Link to={{ pathname: '/DonateAction', state: { title, text, age, gender, season, material, quantity, progress } }} className="donate-button">Donate</Link>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button> */}
          <button className="donate-button" onClick={handleDonate}>Donate</button>
          <button className="view-details-button-donor" onClick={showModal}><FontAwesomeIcon icon={faInfo} /></button>
          <Modal footer = {null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} bodyStyle={{height:'340px',overflowY: 'auto'}}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' , margin:'2%' }}>
          <Avatar className="custom-avatar" size={55} icon={<UserOutlined />} src={orgPic} />
          <span style={{ fontSize: '20px', marginLeft: '12px', fontWeight:'bold' }}>{orgName}</span>
          <Progress
            type="circle"
            percent={progress}
            size={70}
            style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%) translateX(-10%)' }}
            showInfo={false}
          />
        </div>
          <Divider style={{marginTop:'3%', marginBottom:'-1.5%'}}/>
          
          <div className='details' style={{margin:'2%'}}>
          <p>Type: {title}</p>
          <p>Description: {orgName}{text}</p>
          {type ===  SchoolTypes.SchoolBooks && (
        <>
          {/* <Dropdown
              trigger={['click']}
              overlay={
                <img src={image} alt="Your Image" style={{ width: '325px', height:'275px' }} />
              }
            >
              <a onClick={(e) => e.preventDefault()} style={{ color: 'black', fontSize:'14px' }}>
                <Space>
                  Book Picture
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown> */}
          <p>Book Name: {bookName}</p>
          <p>Summary: {summary}</p>
          <p>Author: {author}</p>
          <p>Language: {language}</p>
          <p>Edition: {edition}</p>
          <p>Quantity: {quantity}</p>
          <p>Book Picture: </p>
          <img src={image} alt="Your Image" style={{ width: '270px', height:'250px' }} /> 
        </>
         )}
          {type === SchoolTypes.SchoolStationary && (
            <>
              <p>Stationary Type: {stationaryType}</p>
              <p>Quantity: {quantity}</p>
            </>
          )}
          </div>
          </Modal> 
        </div>
        <div className="progress-container">
          <progress className={`progress-bar ${progressBarClass}`} style={{ marginBottom: '10%' }} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3 style={{ marginTop: '-8%', fontSize: '13px' }}>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default SchoolSuppliesCard;
import {React} from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useNavigate} from "react-router-dom";
import { Popconfirm } from 'antd';
import './App.css';

export const docs = [
    { 
        uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
        fileType : "docx",
        fileName: "Document1.docx"
    },
];


export default function AdminDocNavBar() {
    const navigate = useNavigate();

   
    function handleOnClick() {
    let data = localStorage.getItem('rowData');
    if(data) {
        if(data === "\"info@egyptianfoodbank.org\"") {
            navigate("/Admin/DeletedOrgRequest");
        }
        else if(data === "\"ahmed.ibrahim@example.com\""){
            navigate("/Admin/DeletedVolRequest");
        }
    }
}
   
    return (
        <nav className="navbar fixed-navbar"> 
             <div className="navbar-container"> 
            <div style={{position: 'absolute', top: '20%', left: '1%'}} onClick={() => navigate(-1)}>
            <Icon  iconSrc="https://i.ibb.co/mHFpvP2/image.png" altText="Go Back"/>   
            </div>
           
             <Link to="Admin" className="navbar-logo">
             <img src="https://i.ibb.co/n16ZNjJ/image-removebg-preview.png" alt="Waslet Kheir" className="logo-image" />
              Waslet Kheir
             </Link>
              <ul className="navbar-menu">
              <li style={{ marginRight: '40%' }}></li> 
              <li className="navbar-item">
                <Popconfirm 
                title="Are you sure you want to accept?"
                onConfirm={() => {
                  handleOnClick();
                }}
                okText="Yes"
                cancelText="No">
              <button className="button button-green">Accept</button>
              </Popconfirm>
             </li>
             <li className="navbar-item">
                <Popconfirm
                title="Are you sure you want to reject?"
                onConfirm={() => {
                  handleOnClick();
                }}
                okText="Yes"
                cancelText="No">
             <button className="button button-red">Reject</button>
                </Popconfirm>
             </li>
                  
             <li>
             {docs.map((doc) => (
                    
             <a href={doc.uri} download={doc.fileName}>
              <Icon 
              iconSrc="https://i.ibb.co/BZ7X1ct/image.png"
              altText="Download"
               />
               </a>
              
                ))}
              </li>
            </ul>          
            </div>
        </nav>
    );
}

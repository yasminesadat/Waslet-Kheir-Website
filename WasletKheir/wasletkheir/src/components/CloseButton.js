// close button 

import React from 'react'
import { IoMdClose } from 'react-icons/io';

const CloseButton = () => {
    return (
        <div style={containerStyle}>
            <IoMdClose style={iconStyle} />
        </div>
    );
};
export default CloseButton;

const containerStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
};

const iconStyle = {
    fontSize: '30px',
    color: '#61dafb',
};



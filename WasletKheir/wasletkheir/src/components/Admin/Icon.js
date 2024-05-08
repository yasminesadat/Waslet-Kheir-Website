import React from 'react';
import './App.css';

const Icon = ({ iconSrc, altText }) => {
    return (
      <img
        src={iconSrc}
        alt={altText}
        className="barIcon"
        title={altText}
      />
    );
};

export default Icon;
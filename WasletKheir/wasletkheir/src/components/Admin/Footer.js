import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CTRL-Shift-Elite</p>
    </footer>
  );
};

export default Footer;
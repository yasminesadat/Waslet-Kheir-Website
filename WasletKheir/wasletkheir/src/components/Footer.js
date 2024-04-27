import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Contact Us</h2>
        <ul>
          <li>Phone: +204387332984</li>
          <li>Email: help@ctrlshiftdelete.com</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Site Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <p>© {new Date().getFullYear()} CTRL-Shift-Elite</p>
    </footer>
  );
};

export default Footer;
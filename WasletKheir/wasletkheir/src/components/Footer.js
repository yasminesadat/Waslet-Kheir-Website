import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Contact Us</h2>
        <ul>
          <li>Phone: +204387332984</li>
          <li>Email: <a href="mailto:help@ctrlshiftelite.com"> help@ctrlshiftelite.com </a></li>
        </ul>
        {/* <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="mailto:help@ctrlshiftelite.com">Contact</a></li>
        </ul> */}
      </div>

      <div className="footer-section">


      </div>
      <p>© {new Date().getFullYear()} CTRL-Shift-Elite</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Pooja Dental Care</h3>
            <p className="footer-desc">
              Providing modern, painless, and highly affordable dental care in Secunderabad. Your smile is our priority.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#reviews">Patient Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Local Area Links</h4>
            <ul className="footer-links">
              <li><span>Dental Clinic near Swapnalok Complex</span></li>
              <li><span>Dentist in S D Road</span></li>
              <li><span>Teeth Cleaning in Secunderabad</span></li>
              <li><span>Root Canal Specialist near me</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pooja Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

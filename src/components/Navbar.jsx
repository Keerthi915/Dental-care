import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Offers Banner */}
      <div className="offers-banner">
        <div className="container banner-content">
          <span className="banner-text">🎉 Special Offer: First Consultation Free & ₹500 off Teeth Cleaning!</span>
          <div className="banner-contact">
            <span className="flex-center"><Phone size={14} /> +91 96408 17307</span>
            <span className="flex-center"><MapPin size={14} /> Secunderabad</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${isScrolled ? 'glass scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🦷</span>
            <div className="logo-text">
              <span className="logo-title">Pooja Dental</span>
              <span className="logo-subtitle">Care</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#reviews" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="tel:+919640817307" className="btn btn-primary nav-btn">
              <Calendar size={18} />
              Book Appointment
            </a>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
            <a href="#services" className="mobile-link" onClick={toggleMenu}>Services</a>
            <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
            <a href="#reviews" className="mobile-link" onClick={toggleMenu}>Reviews</a>
            <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>
            <a href="tel:+919640817307" className="btn btn-primary mobile-cta">
              <Calendar size={18} /> Book Appointment
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

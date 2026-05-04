import React from 'react';
import { PhoneCall } from 'lucide-react';
import './FloatingActions.css';

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <a 
        href="tel:+919640817307" 
        className="float-btn float-call"
        aria-label="Call Now"
      >
        <PhoneCall size={24} />
      </a>
      
      <a 
        href="https://wa.me/919640817307?text=Hello%2C%20I%20found%20Pooja%20Dental%20Care%20online.%20I%20would%20like%20to%20book%20an%20appointment." 
        target="_blank" 
        rel="noopener noreferrer"
        className="float-btn float-wa"
        aria-label="WhatsApp Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default FloatingActions;

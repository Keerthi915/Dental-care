import React from 'react';
import { PhoneCall } from 'lucide-react';
import './EmergencyCall.css';

const EmergencyCall = () => {
  return (
    <section className="emergency-call">
      <div className="container emergency-container">
        <div className="emergency-content glass">
          <div className="emergency-icon-wrapper">
            <PhoneCall size={32} className="emergency-icon" />
          </div>
          <div className="emergency-text">
            <h2>Tooth pain? Same-day treatment available</h2>
            <p>Don't wait. Call us now and we will get you out of pain today.</p>
          </div>
          <a href="tel:+919640817307" className="btn btn-primary emergency-btn">
            Call Emergency Number
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCall;

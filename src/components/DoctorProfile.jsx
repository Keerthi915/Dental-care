import React from 'react';
import { CheckCircle2, GraduationCap, Award } from 'lucide-react';
import './DoctorProfile.css';

const DoctorProfile = () => {
  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container doctor-container">
        <div className="doctor-image-wrapper">
          {/* Placeholder for Doctor Image */}
          <div className="doctor-image-placeholder">
            <span>Doctor Photo</span>
          </div>
          <div className="experience-badge glass">
            <span className="years">10+</span>
            <span className="text">Years<br/>Experience</span>
          </div>
        </div>
        
        <div className="doctor-info">
          <span className="section-subtitle">Meet Your Dentist</span>
          <h2 className="section-title">Dr. Pooja</h2>
          <div className="qualifications">
            <span className="qual"><GraduationCap size={18} /> BDS, MDS (Endodontics)</span>
            <span className="qual"><Award size={18} /> Certified Implantologist</span>
          </div>
          
          <p className="doctor-bio">
            With over a decade of experience in providing world-class dental care, Dr. Pooja is dedicated to giving you the perfect smile. We believe in painless dentistry and use the latest technology to ensure your comfort.
          </p>
          
          <div className="trust-points">
            <div className="point">
              <CheckCircle2 className="point-icon" size={20} />
              <span>Specialist in Painless Root Canals</span>
            </div>
            <div className="point">
              <CheckCircle2 className="point-icon" size={20} />
              <span>Advanced Dental Implants</span>
            </div>
            <div className="point">
              <CheckCircle2 className="point-icon" size={20} />
              <span>Compassionate Patient Care</span>
            </div>
          </div>
          
          <div className="doctor-cta-wrapper">
            <p className="scarcity-text mb-2">Book a consultation directly with the specialist</p>
            <a href="tel:+919640817307" className="btn btn-primary">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;

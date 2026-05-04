import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Award } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="trust-badges top-badges">
            <span className="badge glass"><Award size={16} /> Certified Dentist</span>
            <span className="badge glass"><ShieldCheck size={16} /> 10+ Years Experience</span>
          </div>
          
          <h1 className="hero-title">
            Your Smile Deserves the <span>Best Care</span> in Secunderabad
          </h1>
          <p className="hero-subtitle">
            Experience painless, modern dental treatments with Pooja Dental Care. We prioritize your comfort and dental health above all.
          </p>
          
          <div className="hero-actions">
            <a href="tel:+919640817307" className="btn btn-primary hero-btn-main">
              <Phone size={20} /> Call Now for Appointment
            </a>
            <p className="scarcity-text">⏳ Limited slots available today</p>
          </div>
        </motion.div>
        
        {/* Note to client about images */}
        {/* Developer Note: heroBg is an AI generated placeholder. Replace with real clinic photo for maximum trust. */}
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Visit Our Clinic</h2>
          <p className="section-description">We are conveniently located in the heart of Secunderabad. Book an appointment or walk in for a consultation.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-wrapper glass">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-details">
                <h4>Clinic Address</h4>
                <p>Near Swapnalok Complex, S D Road,<br/>Secunderabad, Telangana 500003</p>
                <a href="https://maps.app.goo.gl/LiBdUEgtjyPaRpWm6" target="_blank" rel="noopener noreferrer" className="link-primary">Get Directions</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-details">
                <h4>Phone & WhatsApp</h4>
                <p>Call us for emergencies or appointments.</p>
                <a href="tel:+919640817307" className="link-bold">+91 96408 17307</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Clock size={24} /></div>
              <div className="contact-details">
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-map glass">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.283838380482!2d78.4878235!3d17.439869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a3a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sSwapnalok%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

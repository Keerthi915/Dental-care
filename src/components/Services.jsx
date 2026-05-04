import React from 'react';
import { Stethoscope, Sparkles, Syringe, Activity, ShieldPlus, Drill } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Root Canal Treatment',
    description: 'Painless single-visit root canals using advanced rotary technology to save your natural tooth.',
    icon: <Activity size={32} />
  },
  {
    id: 2,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore your smile and chewing ability.',
    icon: <ShieldPlus size={32} />
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    description: 'Professional laser teeth whitening for a noticeably brighter, stain-free smile in just one hour.',
    icon: <Sparkles size={32} />
  },
  {
    id: 4,
    title: 'Painless Extractions',
    description: 'Safe and comfortable tooth removal, including complex wisdom tooth extractions.',
    icon: <Syringe size={32} />
  },
  {
    id: 5,
    title: 'Dental Crowns & Bridges',
    description: 'High-quality zirconia and ceramic caps to restore damaged or missing teeth.',
    icon: <Drill size={32} />
  },
  {
    id: 6,
    title: 'General Checkup & Cleaning',
    description: 'Comprehensive dental exams, scaling, and polishing to maintain optimal oral hygiene.',
    icon: <Stethoscope size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Our Treatments</span>
          <h2 className="section-title">Comprehensive Dental Services</h2>
          <p className="section-description">We provide a full range of dental treatments under one roof, using state-of-the-art equipment for accurate diagnosis and effective care.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card glass">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="https://wa.me/919640817307?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services" className="service-link">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <a href="tel:+919640817307" className="btn btn-primary">Book Appointment Now</a>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer: "Not at all. With modern rotary endodontics and effective local anesthesia, a root canal is as comfortable as getting a simple filling. You won't feel any pain during the procedure."
  },
  {
    question: "Do I need an appointment before visiting?",
    answer: "While we recommend booking an appointment to avoid waiting, we do accept walk-in patients, especially for dental emergencies like severe tooth pain or trauma."
  },
  {
    question: "What is the cost of teeth cleaning?",
    answer: "The cost varies slightly based on the extent of plaque and tartar buildup. However, we ensure our treatments are highly affordable. Contact us or visit for a free initial consultation to get an exact quote."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and good oral hygiene, dental implants can last a lifetime. They are a permanent and highly durable solution for missing teeth."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-accent">
      <div className="container faq-container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="mb-2">Still have questions?</p>
          <a href="https://wa.me/919640817307?text=Hello%2C%20I%20have%20a%20question%20about%20dental%20treatments." className="btn btn-primary" style={{ backgroundColor: '#25D366' }}>
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

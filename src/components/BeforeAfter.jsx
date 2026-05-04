import React from 'react';
import './BeforeAfter.css';

const BeforeAfter = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Smile Transformations</h2>
          <p className="section-description">See the difference we've made in our patients' lives. From simple cleanings to complete smile makeovers.</p>
        </div>

        <div className="ba-grid">
          <div className="ba-card glass">
            <div className="ba-images">
              <div className="ba-image-container before">
                <div className="ba-placeholder">Before</div>
              </div>
              <div className="ba-image-container after">
                <div className="ba-placeholder">After</div>
              </div>
            </div>
            <div className="ba-content">
              <h3>Teeth Whitening</h3>
              <p>Noticeably brighter smile after a 45-minute laser whitening session.</p>
            </div>
          </div>
          
          <div className="ba-card glass">
            <div className="ba-images">
              <div className="ba-image-container before">
                <div className="ba-placeholder">Before</div>
              </div>
              <div className="ba-image-container after">
                <div className="ba-placeholder">After</div>
              </div>
            </div>
            <div className="ba-content">
              <h3>Ceramic Crowns</h3>
              <p>Restored damaged front teeth with natural-looking zirconia crowns.</p>
            </div>
          </div>
        </div>
        
        {/* Developer Note: These placeholders should be replaced with actual before/after clinic photos. */}
      </div>
    </section>
  );
};

export default BeforeAfter;

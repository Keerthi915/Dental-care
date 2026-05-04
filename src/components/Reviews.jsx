import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    text: "Excellent service! I had severe tooth pain and they treated me the same day. The root canal was completely painless. Highly recommend Dr. [Name].",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    text: "Very clean clinic and professional staff. Got my teeth whitening done here and the results are amazing. Best dental clinic in Secunderabad.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mohammed Ali",
    text: "Took my mother for dental implants. The doctor explained everything clearly and the procedure was smooth. Very affordable prices too.",
    rating: 5,
    date: "2 months ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <div className="google-rating-banner glass">
          <div className="rating-info">
            <div className="stars">
              <Star size={24} fill="#f59e0b" color="#f59e0b" />
              <Star size={24} fill="#f59e0b" color="#f59e0b" />
              <Star size={24} fill="#f59e0b" color="#f59e0b" />
              <Star size={24} fill="#f59e0b" color="#f59e0b" />
              <Star size={24} fill="#f59e0b" color="#f59e0b" />
            </div>
            <div className="rating-text">
              <span className="score">4.8</span> Rating on Google
            </div>
          </div>
          <a href="https://maps.app.goo.gl/LiBdUEgtjyPaRpWm6" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View on Google
          </a>
        </div>

        <div className="text-center mb-5 mt-5">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card glass">
              <Quote size={32} className="quote-icon" />
              <div className="review-stars mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="author-info">
                  <span className="author-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="google-icon-small">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="20" height="20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

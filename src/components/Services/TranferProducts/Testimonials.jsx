// Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    rating: 5,
    title: "Absolutely love these guys",
    content: "Absolutely love these guys! I've been with them for the last couple of years...",
    author: "PG"
  },
  {
    rating: 5,
    title: "Capyod has been amazing",
    content: "Capyod has built an extensive network of printing providers offering a huge range...",
    author: "Kevin"
  },
  {
    rating: 5,
    title: "Honestly it’s the best",
    content: "Honestly, everything. I love how intuitive the website is, and the convenience of linking...",
    author: "Kweek"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonials">
      <h2>Rated excellent 4.8 out of 5</h2>
      <p className="subtitle">See our 3000+ reviews on <span className="trustpilot">Trustpilot</span></p>
      <div className="carousel">
        <button onClick={prev} className="nav-button">❮</button>
        <div className="testimonial">
          <div className="stars">{"★".repeat(testimonials[current].rating)}</div>
          <h3>{testimonials[current].title}</h3>
          <p>{testimonials[current].content}</p>
          <small>{testimonials[current].author}</small>
        </div>
        <button onClick={next} className="nav-button">❯</button>
      </div>
    </div>
  );
};

export default Testimonials;

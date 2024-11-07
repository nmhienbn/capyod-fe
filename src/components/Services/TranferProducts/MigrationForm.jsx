// MigrationForm.js
import React from 'react';
import './MigrationForm.css';

const MigrationForm = () => {
  return (
    <div className="migration-container">
      <div className="migration-content">
        <h1>Move your existing merchandise business to Capyod</h1>
        <p className="highlight-text">Switch to Capyod today and get:</p>
        <ul className="today-exclusive">
          <li>
            <span className="icon">🚚</span> 
            Free product migration assistance depending on your current sales volumes
          </li>
          <li>
            <span className="icon">💵</span> 
            3-month rebate on the migrated products after surpassing a minimum sales volume
          </li>
          <li>
            <span className="icon">📞</span> 
            Dedicated account manager when you surpass a certain sales volume to help you grow your business
          </li>
        </ul>
      </div>
      <div className="migration-form">
        <h2>Unlock your growth with Capyod</h2>
        <p className="subheading">
          Our experts will be thrilled to provide a free product migration solution tailored to your needs.
        </p>
        <form>
          <label>
            Business website / Store url
            <input type="url" placeholder="www.mystore.com" />
          </label>
          <label>
            Name and Surname
            <input type="text" placeholder="Jon Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="jon.doe@company.com" />
          </label>
          <label>
            Phone number (incl. country code)
            <input type="tel" placeholder="+1-628-244-9499" />
          </label>
          <label>
            Current merchandise monthly order volume
            <select>
              <option>Select from dropdown</option>
              <option value="1">1-10</option>
              <option value="2">10-50</option>
              <option value="3">50+</option>
            </select>
          </label>
          <label>
            What do you want to discuss? (optional)
            <textarea placeholder="Describe your requirements" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p className="privacy-note">
          Never share sensitive information (credit card numbers, social security numbers, passwords) through this form.
        </p>
      </div>
    </div>
  );
};

export default MigrationForm;

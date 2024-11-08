// SwitchBanner.js
import React from 'react';
import './SwitchBanner.css';
import Switch from '../../../assets/services/Switching-to-Capyod-is-easy.png';

const SwitchBanner = () => {
  return (
    <div className="switch-banner">
      <div className="banner-content">
        <h2>Switching to Capyod is easy</h2>
        <p>Make your POD journey easier than ever.</p>
        <button>Make the switch</button>
      </div>
      <div className="banner-image">
        {/* Replace with actual images */}
        <img src={Switch} alt="Switch to Capyod" />
      </div>
    </div>
  );
};

export default SwitchBanner;

import React, { useState } from 'react';
import './Header.css';

function Header() {
  // State để quản lý mở/đóng dropdown
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  // State để lưu quốc gia và đơn vị tiền tệ được chọn
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Danh sách các quốc gia và đơn vị tiền tệ
  const countries = [
    { name: "USA", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { name: "Vietnam", flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
    { name: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
    { name: "UK", flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
  ];

  const currencies = ["USD", "VND", "CAD", "GBP"];

  return (
    <div className="header">
      {/* Ship from dropdown */}
      <div className="header-option">
        <span>Ship from</span>
        <div
          className="header-dropdown"
          onClick={() => {
            setIsCountryDropdownOpen(!isCountryDropdownOpen);
            setIsCurrencyDropdownOpen(false)}
          }
        >
          <img
            src={countries.find(c => c.name === selectedCountry).flag}
            alt="flag"
            className="flag-icon"
          />
          <span className="header-text">{selectedCountry}</span>
          <span className="dropdown-icon">▼</span>
        {isCountryDropdownOpen && (
          <div className="dropdown-list">
            {countries.map((country) => (
              <div
                key={country.name}
                className="dropdown-item"
                onClick={() => {
                  setSelectedCountry(country.name);
                  setIsCountryDropdownOpen(false);
                }}
              >
                <img src={country.flag} alt={`${country.name} flag`} className="flag-icon" />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>

      {/* Currency dropdown */}
      <div className="header-option">
        <span>Currency</span>
        <div
          className="header-dropdown"
          onClick={() => {
            setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
            setIsCountryDropdownOpen(false)}
          }
        >
          <span className="header-text">{selectedCurrency}</span>
          <span className="dropdown-icon">▼</span>
        {isCurrencyDropdownOpen && (
          <div className="dropdown-list">
            {currencies.map((currency) => (
              <div
                key={currency}
                className="dropdown-item"
                onClick={() => {
                  setSelectedCurrency(currency);
                  setIsCurrencyDropdownOpen(false);
                }}
              >
                <span>{currency}</span>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for products, brands, categories, and print providers"
          className="search-input"
        />
      </div>
    </div>
  );
}

export default Header;

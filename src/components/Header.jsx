
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="school-header">
      <div className="header-container">

        <div className="school-brand">
          <img
            src="/logo.jpeg"
            alt="St. Anthony's School Logo"
            className="school-logo"
          />

          <div className="school-info">
            <h2>ST. ANTHONY'S HIGH SCHOOL</h2>
          </div>
        </div>

        <div className="header-tag">
          <span className="status-dot"></span>
          <span>El-Nino</span>
        </div>

      </div>
    </header>
  );
}

export default Header;

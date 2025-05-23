import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-remaining">
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About</Link>
          <Link to="/contactus" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link">Login/Signup</Link>
        </nav>
      </div>

      <div className="clipped-brand">
        <Link to="/" className="brand-content">
          <i className="fa-solid fa-ticket fa-2x text-dark"></i>
          <h2 className="brand-heading mt-2">MATCHPASS</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;


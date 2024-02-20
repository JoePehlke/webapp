// HamburgerMenu.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css'; // Import the CSS file for styling

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="menu-links">
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/blog" className="nav-link" onClick={toggleMenu}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;

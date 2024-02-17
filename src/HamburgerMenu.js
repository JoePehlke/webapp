// HamburgerMenu.js

import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ onClose }) => {
  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={onClose}>
        &#9776;
      </div>
      <div className="nav-buttons">
        <Link to="/" className="nav-button" onClick={onClose}>
          Home
        </Link>
        <Link to="/blog" className="nav-button" onClick={onClose}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;

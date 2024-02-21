import React from 'react';
import { Link } from 'react-router-dom';
import './OverlayMenu.css';

const OverlayMenu = ({ onClose }) => {
  return (
    <div className="overlay-menu">
      <div className="close-icon" onClick={onClose}>
        &#10006;
      </div>
      <div className="menu-links">
        <Link to="/" className="nav-link" onClick={onClose}>
          Home
        </Link>
        <Link to="/blog" className="nav-link" onClick={onClose}>
          Blog
        </Link>
        <Link to ="/contact" className="nav-link" onClick={onClose}>
          Contact
        </Link>
        <Link to ="/github" className="nav-link" onClick={onClose}>
          Github
        </Link>
        <Link to ="/linkedin" className="nav-link" onClick={onClose}>
          linkedin
        </Link>
      </div>
    </div>
  );
};

export default OverlayMenu;

// Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'; // Import the new component
import './Header.css'; // Import the CSS file

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      {windowWidth >= 768 ? (
        // Regular navigation for larger screens
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/blog" className="nav-button">
            Blog
          </Link>
        </div>
      ) : (
        // Hamburger menu for smaller screens
        <HamburgerMenu onClose={() => setShowMenu(false)} />
      )}

      {/* Additional code to conditionally hide buttons */}
      {windowWidth < 768 && (
        <style>{`.nav-buttons { display: none; }`}</style>
      )}
    </header>
  );
};

export default Header;

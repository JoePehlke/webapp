import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

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
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/blog" className="nav-button">
            Blog
          </Link>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
        </div>
      ) : (
        <div className="hamburger" onClick={toggleHamburger}>
          <HamburgerMenu isOpen={hamburgerOpen} onClose={() => setHamburgerOpen(false)} />
        </div>
      )}

      {windowWidth < 768 && (
        <style>{`.nav-buttons { display: none; }`}</style>
      )}
    </header>
  );
};

export default Header;

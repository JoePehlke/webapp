import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';
import githublogo from './github-logo.svg';
import linkedinlogo from './linkedin-logo.png';
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
        <div className = "toolbar">
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
          <div className = "logos" >
              <img src={githublogo} alt="githublogo" className="githublogo" />
              <img src={linkedinlogo} alt="linkedinlogo" className="linkedinlogo" />
          </div>
        </div>
      ) : (
        <div className="hamburger" onClick={toggleHamburger}>
          <HamburgerMenu isOpen={hamburgerOpen} onClose={() => setHamburgerOpen(false)} />
        </div>
      )}

    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';
import BlogDropdown from './BlogDropdown'; 

import githublogo from './github-logo.svg';
import linkedinlogo from './linkedin-logo.png';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBlogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="Header">
      {windowWidth >= 768 ? (
        <div className = "toolbar">
          <div className="nav-buttons">
            <Link to="/" className="nav-button">
              Home
            </Link>
            <div className="nav-button" onClick={toggleBlogDropdown} ref={dropdownRef} style={{ position: 'relative' }}>
              Blog &#9660;

              {blogDropdownOpen && <BlogDropdown />}
            </div>
            <Link to="/resume" className="nav-button">
              Resume
            </Link>
            <Link to="/contact" className="nav-button">
              Contact
            </Link>
          </div>
          <div className = "logos" >
              <a href="https://github.com/JoePehlke">
                <img src={githublogo} alt="githublogo" className="githublogo" />
              </a>
              <a href="https://linkedin.com/in/JoePehlke" >
                <img src={linkedinlogo} alt="linkedinlogo" className="linkedinlogo" />
              </a>
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

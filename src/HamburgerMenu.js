import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import OverlayMenu from './OverlayMenu';
const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>

      {menuOpen && <OverlayMenu onClose={toggleMenu} />}
    </div>
  );
};

export default HamburgerMenu;

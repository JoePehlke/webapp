// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header>

        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
    </header>
  );
};

export default Header;

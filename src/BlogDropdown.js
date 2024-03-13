// BlogDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDropdown.css'
const BlogDropdown = () => {
  return (
    <div className="blog-dropdown">
         <div className="blog-column">
        <Link to ="/blog/all" className='blog-dropdown-item'>
          All
        </Link>
        <Link to="/blog/fullstack" className="blog-dropdown-item">
          Full Stack
        </Link>
        <Link to="/blog/cybersecurity" className="blog-dropdown-item">
          Cybersecurityff
        </Link>
      </div>
      <div className="blog-column">
        <Link to="/blog/devops" className="blog-dropdown-item">
          DevOps
        </Link>
        <Link to="/blog/dataengineering" className="blog-dropdown-item">
          Data Engineering
        </Link>
      </div>
    </div>
  );
};

export default BlogDropdown;

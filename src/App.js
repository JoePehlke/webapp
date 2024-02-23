// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Blog from './BlogPage'
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

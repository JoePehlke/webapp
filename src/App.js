// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import BlogPostList from './BlogPostList';
import BlogPostPage from './BlogPostPage';
import Home from './Home';
import Contact from './Contact';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/blog" element={<BlogPostList />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

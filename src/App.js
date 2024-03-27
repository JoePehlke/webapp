import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import BlogPage from './BlogPage'; // Assuming this is the component rendering the list of all blog posts
import MachineLearningBlog from './MachineLearningBlog';
import DataEngineeringBlog from './DataEngineeringBlog';
import DevOpsMLOpsBlog from './DevOpsMLOpsBlog';
import FullstackBlog from './FullstackBlog';
import './App.css';

const App = () => {
  // Sample blog post data
  const blogPosts = [
    // Sample blog post objects with category property
    { id: 1, title: 'Post 1', content: 'Content 1', category: 'machine_learning' },
    { id: 2, title: 'Post 2', content: 'Content 2', category: 'data_engineering' },
    { id: 3, title: 'Post 3', content: 'Content 3', category: 'devops_mlops' },
    { id: 4, title: 'Post 4', content: 'Content 4', category: 'fullstack' },
    // Add more blog post objects as needed
  ];

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage blogPosts={blogPosts} />} />
          <Route path="/machine-learning" element={<MachineLearningBlog blogPosts={blogPosts} />} />
          <Route path="/data-engineering" element={<DataEngineeringBlog blogPosts={blogPosts} />} />
          <Route path="/devops-mlops" element={<DevOpsMLOpsBlog blogPosts={blogPosts} />} />
          <Route path="/fullstack" element={<FullstackBlog blogPosts={blogPosts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// BlogPage.js
import React from 'react';
import Card from './Card';
import BlogData from './BlogData';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      {BlogData.map((post) => (
        <Card key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogPage;

// MachineLearningBlog.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';

const FullstackBlog = ({ blogPosts }) => {
  // Filter blog posts for machine learning category
  const fullstackPosts = blogPosts.filter(post => post.category === 'fullstack');

  return (
    <div>
      <h2>fullstack</h2>
      {fullstackPosts.map(post => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default FullstackBlog;

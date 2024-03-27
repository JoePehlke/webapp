// MachineLearningBlog.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';

const DataEngineeringBlog = ({ blogPosts }) => {
  // Filter blog posts for machine learning category
  const dataEngineeringPosts = blogPosts.filter(post => post.category === 'data_engineering');

  return (
    <div>
      <h2>Data Engineering</h2>
      {dataEngineeringPosts.map(post => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default DataEngineeringBlog;

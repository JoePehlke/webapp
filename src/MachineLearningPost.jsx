// MachineLearningBlog.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';

const MachineLearningBlog = ({ blogPosts }) => {
  // Filter blog posts for machine learning category
  const machineLearningPosts = blogPosts.filter(post => post.category === 'machine_learning');

  return (
    <div>
      <h2>Machine Learning</h2>
      {machineLearningPosts.map(post => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default MachineLearningBlog;

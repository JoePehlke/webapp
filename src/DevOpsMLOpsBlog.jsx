// MachineLearningBlog.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';

const DevOpsMLOpsBlog = ({ blogPosts }) => {
  // Filter blog posts for machine learning category
  const devOpsMLOpsPosts = blogPosts.filter(post => post.category === 'devops_mlops');

  return (
    <div>
      <h2>devOpsMLOps</h2>
      {devOpsMLOpsPosts.map(post => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default DevOpsMLOpsBlog;

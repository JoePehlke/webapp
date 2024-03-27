import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogPage = ({ blogPosts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map(blogPost => (
        <BlogPostCard key={blogPost.id} {...blogPost} />
      ))}
    </div>
  );
};

export default BlogPage;

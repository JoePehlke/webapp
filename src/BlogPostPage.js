// BlogPostPage.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogPostsData from './blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const blogPost = blogPostsData.find(post => post.id === parseInt(id, 10));

  if (!blogPost) {
    // Handle the case where the blog post is not found
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <Link to="/blog">Back to Blog List</Link>
    </div>
  );
};

export default BlogPostPage;

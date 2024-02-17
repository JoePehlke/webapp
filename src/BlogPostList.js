// BlogPostList.js

import React from 'react';
import { Link } from 'react-router-dom';
import blogPostsData from './blogData';

const BlogPostList = () => {
  return (
    <div>
      {blogPostsData.map(blogPostData => (
        <div key={blogPostData.id}>
          <h2>{blogPostData.title}</h2>
          <p>{blogPostData.content.slice(0, 100)}...</p>
          <Link to={`/blog/${blogPostData.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;

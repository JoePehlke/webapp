// BlogPost.js

import React, { useState } from 'react';
import BlogPostPage from './BlogPostPage';

const BlogPost = ({ blogPostData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleBlogPostClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {/* Conditionally render either the blog post details or the summary */}
      {showDetails ? (
        <BlogPostPage blogPost={blogPostData} onBackButtonClick={handleBlogPostClick} />
      ) : (
        <div onClick={handleBlogPostClick}>
          {/* Display blog post summary */}
          <h2>{blogPostData.title}</h2>
          <p>{blogPostData.content.slice(0, 100)}...</p>
        </div>
      )}
    </div>
  );
};

export default BlogPost;

// BlogPostCard.jsx
import React from 'react';
import './BlogPostCard.css'; // Import CSS file for styling

const BlogPostCard = ({ title, content, author, date }) => {
  return (
    <div className="blog-post-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="author-date">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;

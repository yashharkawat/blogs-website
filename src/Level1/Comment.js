import React, { useEffect, useState } from "react";
import './Comment.css'

const initialComments = [
  { id: 1, author: "John", content: "This is a great post!" },
  { id: 2, author: "Alice", content: "Thanks for sharing!" },
  { id: 3, author: "Bob", content: "Nice work!" },
];

const Comment = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    setName(current_user.username);
  }, []);

  const [content, setContent] = useState("");
  const [comments, setComments] = useState(initialComments);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([{ author: name, content: content }, ...comments]);
    setContent("");
  };

  return (
    <>
      <h2>{name}</h2>
      <div className="comment-section">
        <div className="comment-form">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your comment..."
              required
            /><br />
            <button type="submit" className="logout-button">Add Comment</button>
          </form>
        </div>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-content">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;

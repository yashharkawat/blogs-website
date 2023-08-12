import React, { useEffect, useState } from "react";
import "./Comment.css";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { setRevisionHistory } from "../../actions/setRevisionHistory";

const Comment = (props) => {
  const name = useSelector((state) => state.name);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState(props.comments);
  const currUser = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComments = [{ author: name, content: content }, ...comments];

    setComments(newComments);
    const newPost = { ...props.post, comments: newComments };
    //setPost(newPost);
    const currentPostRef = doc(db, "articles", props.post.id);
    await updateDoc(currentPostRef, newPost);
    props.addComment(name,content);
    setRevisionHistory(
      currUser.revisionHistory,
      dispatch,
      currUser,
      props.post.title,
      "commented"
    );

    setContent("");
  };

  return (
    <div className="comments">
      <div className="flex space-between">
        <h2>{name}</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={()=>props.close()}
        >
          <path
            d="M5 5l7 7m7 7l-7-7m0 0l7-7m-7 7l-7 7"
            stroke="currentColor"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div className="comment-section">
        <div className="comment-form">
          <form onSubmit={handleSubmit}>
            <textarea
              className="text-area"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your comment..."
              required
            />
            <button type="submit" className="comment-button">
              Add Comment
            </button>
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
    </div>
  );
};

export default Comment;

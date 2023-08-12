import React, { useEffect, useState } from "react";
import './Comment.css'
import { useDispatch, useSelector } from "react-redux";
import {db} from '../../config/firebase';
import { updateDoc,doc } from "firebase/firestore";
import { setRevisionHistory } from "../../actions/setRevisionHistory";

const Comment = (props) => {
  const name=useSelector(state=>state.name);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState(props.comments);
  const currUser=useSelector(state=>state);
  const dispatch=useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComments=[{ author: name, content: content }, ...comments];

    setComments(newComments);
    const newPost={...props.post,comments:newComments};
    //setPost(newPost);
    const currentPostRef=doc(db,"articles",props.post.id);
    await updateDoc(currentPostRef,newPost);
    setRevisionHistory(currUser.revisionHistory,dispatch,currUser,props.post.title,"commented");
  
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

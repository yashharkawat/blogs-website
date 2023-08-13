import { useState, useEffect } from "react";
import Post from "../post/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const SimilarAuthor = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articlesCollection = collection(db, "articles");
      const data = await getDocs(articlesCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const sameAuthorPosts = filteredData.filter(
        (post) => post.author === props.author && post.id !== props.id
      );
      //setPosts(sameAuthorPosts);
      const newData = sameAuthorPosts.map((item) => {
        if (item.liked_by === undefined && item.comments === undefined) {
          return { ...item, liked_by: [], comments: [] };
        } else if (item.liked_by === undefined) {
          return { ...item, liked_by: [] };
        } else if (item.comments === undefined) {
          return { ...item, comments: [] };
        } else return item;
      });
      setPosts(newData);
    };
    try {
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }, [props.id]);

  const deletePostHandler = () => {};
  return (
    <>
      <h2 style={{textAlign:"center"}}>Posts by a similar author</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <Post key={index} post={post} deletePost={deletePostHandler} />
        ))}
      </div>
    </>
  );
};
export default SimilarAuthor;

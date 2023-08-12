import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Post from "../posts/post/Post";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const username = useSelector((state) => state.name);
  const getArticles = async () => {
    const articlesCollection = collection(db, "articles");
    const data = await getDocs(articlesCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const mypost = filteredData.filter((post) => post.author === username);
    const newData = mypost.map((item) => {
      if (item.liked_by === undefined && item.comments === undefined) {
        return { ...item, liked_by: [], comments: [] };
      } else if (item.liked_by === undefined) {
        return { ...item, liked_by: [] };
      } else if (item.comments === undefined) {
        return { ...item, comments: [] };
      } else return item;
    });
    setPosts(newData);
    console.log(newData);
  };
  useEffect(() => {
    try {
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const deletePostHandler = async (postId) => {
    const articleDoc = doc(db, "articles", postId);
    await deleteDoc(articleDoc);
  };
  return (
    <div>
      <h2>My posts</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} deletePost={deletePostHandler} />
      ))}
      {posts.length===0&&<h4>You haven't added any posts</h4>}
    </div>
  );
};
export default MyPost;

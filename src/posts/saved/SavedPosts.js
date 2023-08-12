import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const SavedPosts = () => {
  const [loading, setLoading] = useState(true);
  const savedPostsId = useSelector((state) => state.saved);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getArticles = async () => {
      const articlesRef = collection(db, "articles");
      const articles = await getDocs(articlesRef);
      const data = articles.docs.map((article) => ({
        ...article.data(),
        id: article.id,
      }));
      const saved = data.filter((post) => savedPostsId.includes(post.id));
      setSavedPosts(saved);
    };
    getArticles();

    setLoading(false);
  }, [savedPostsId]);
  
  return (
    <div>
      <h1>Saved Posts</h1>
      {savedPosts.map((post) => {
        return <Post deletePost={() => {}} post={post} />;
      })}
    </div>
  );
};

export default SavedPosts;

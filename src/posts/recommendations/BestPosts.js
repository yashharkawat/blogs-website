import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const BestPosts = () => {
  const [bestPosts, setbestPosts] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesCollection = collection(db, "articles");
      const data = await getDocs(articlesCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const newData = filteredData.map((item) => {
        if (item.liked_by === undefined && item.comments === undefined) {
          return { ...item, liked_by: [], comments: [] };
        } else if (item.liked_by === undefined) {
          return { ...item, liked_by: [] };
        } else if (item.comments === undefined) {
          return { ...item, comments: [] };
        } else return item;
      });
      setbestPosts(newData);
    };
    try {
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    const now = new Date(); // You can adjust the unit time as needed (e.g., 24 hours, 7 days, etc.)

    const postsWithAvgLikes = bestPosts.map((post) => {
      const datetime = new Date(post.datetime);
      const timeDifferenceInHours = now - datetime;
      const avgLikes = post.likes / timeDifferenceInHours;
      return { ...post, avgLikes };
    });

    // Sort the posts based on the average likes per unit time in descending order
    postsWithAvgLikes.sort((a, b) => b.avgLikes - a.avgLikes);
    console.log(postsWithAvgLikes);
    // Set the best posts based on the sorted array
    setbestPosts(postsWithAvgLikes);
  }, []);
  const deleteHandler = (postId) => {
    const newPosts = bestPosts.filter((item) => item.id != postId);
    setbestPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Top Posts</h2>
      <div className="post-list">
        {bestPosts.map((post) => {
          return <Post post={post} deletePost={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default BestPosts;

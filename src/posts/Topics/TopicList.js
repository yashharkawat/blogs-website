import React, { useEffect, useState } from "react";
import "./TopicList.css";
import Post from "../post/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const TopicListPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    console.log(topic);
  };

  useEffect(() => {
    const getArticles = async () => {
      const articlesCollection = collection(db, "articles");
      const data = await getDocs(articlesCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const topicPosts = filteredData.filter((post) => {
        if (selectedTopic === "others") return true;
        return post.topic === selectedTopic;
      });
      const newData = topicPosts.map((item) => {
        if (item.liked_by === undefined && item.comments === undefined) {
          return { ...item, liked_by: [], comments: [] };
        } else if (item.liked_by === undefined) {
          return { ...item, liked_by: [] };
        } else if (item.comments === undefined) {
          return { ...item, comments: [] };
        } else return item;
      });
      setPosts(newData);
      const diffTopics = filteredData.map((post) => {
        if (post.topic === undefined) return "others";
        return post.topic;
      });
      const uniqueTopics = Array.from(new Set(diffTopics));
      setTopics(uniqueTopics);
    };
    try {
      getArticles();
    } catch (err) {
      console.log(err);
    }
  }, [selectedTopic]);

  const deletePostHandler = (postId) => {};
  return (
    <div className="topic-list-container">
      <h1>Topic List</h1>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li onClick={() => handleTopicClick(topic)}>{topic}</li>
        ))}
      </ul>

      {selectedTopic && (
        <div className="post-list">
          {posts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              post={post}
              deletePost={(e) => deletePostHandler()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicListPage;

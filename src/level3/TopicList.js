import React, { useEffect, useState } from "react";
import "./TopicList.css"; 
import Post from "../Level1/Post";
const TopicListPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [posts,setPosts]=useState([]);
  const [topics,setTopics]=useState([]);
  const [loading,setLoading]=useState(true);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  useEffect(()=>{
    setLoading(true);
    try{
        const url='http://localhost:3000/articles';
        const getRequest=async ()=>{
          const options = {
            method: 'GET',
            headers: new Headers({'content-type': 'application/json'
            })};
          const data=await fetch(url,options);
          let getPosts=await data.json();
          getPosts=getPosts.map(post=>{return {...post,'topic':'science'}})

          const topicPosts=getPosts.filter((post)=>{
            if(selectedTopic==='others') return true;
            return post.topic===selectedTopic;
          });
          const diffTopics=getPosts.map((post)=>{
            if(post.topic===undefined) return 'others';
            return post.topic;
          })
            const uniqueTopics = Array.from(new Set(diffTopics));
            console.log(uniqueTopics);
          setTopics(uniqueTopics);
          setPosts(topicPosts);
          //console.log(posts);
        }  
        getRequest();
    }
    catch (err){
        console.log(err);
    }
    setLoading(false);
  },[selectedTopic])
  const deletePostHandler=(postId)=>{
    
}
  if(loading){
    return <div>loading</div>;
  }
  return (
    <div className="topic-list-container">
      <h1>Topic List</h1>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li onClick={()=>handleTopicClick(topic)}>
            {topic}
          </li>
        ))}
      </ul>

      {selectedTopic && (
        <div className="post-list">
        {posts.map((post, index) => (
        <Post key={index} id={post.id} post={post} deletePost={(e)=>deletePostHandler()}/>
        ))}
    </div>
      )}
    </div>
  );
};

export default TopicListPage;

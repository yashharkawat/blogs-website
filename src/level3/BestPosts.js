import React, { useState, useEffect } from "react";
import Post from "../Level1/Post";
// Assuming we have a posts array with post objects having 'likes' and 'datetime' properties


const BestPosts = () => {
  const [bestPosts, setbestPosts] = useState([]);

  useEffect(() => {
    const posts=JSON.parse(localStorage.getItem('posts'));
    setbestPosts(posts);
    // Calculate the average likes per unit time for each post
    const now = new Date(); // You can adjust the unit time as needed (e.g., 24 hours, 7 days, etc.)

    const postsWithAvgLikes = posts.map((post) => {
      const datetime = new Date(post.datetime);
      const timeDifferenceInHours = (now - datetime) ;
      const avgLikes = post.likes / (timeDifferenceInHours );
      return { ...post, avgLikes };
    });

    // Sort the posts based on the average likes per unit time in descending order
    postsWithAvgLikes.sort((a, b) => b.avgLikes - a.avgLikes);
    console.log(postsWithAvgLikes);
    // Set the best posts based on the sorted array
    setbestPosts(postsWithAvgLikes);
  }, []);
  const deleteHandler=(postId)=>{
    const newPosts=bestPosts.filter(item=>item.id!=postId);
    setbestPosts(newPosts);
    localStorage.setItem('posts',JSON.stringify(newPosts));
}

  return (
   
    <div>
      <h2>Top Posts</h2>
      {bestPosts.map(post=>{
        return <Post post={post} deletePost={deleteHandler}/>
      })}
    </div>
  );
};

export default BestPosts;

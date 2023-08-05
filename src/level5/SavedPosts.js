import React, { useEffect, useState } from "react";
import Post from "../Level1/Post";
const SavedPosts = () => {
 
    const [loading,setLoading]=useState(true);
  const [savedPosts,setSavedPosts]=useState([]);

    useEffect(()=>{
        setLoading(true);

        const posts=JSON.parse(localStorage.getItem('posts'));
        const postId=JSON.parse(localStorage.getItem('savedPostId'));
        console.log(postId,posts);
        const saved=posts.filter((post)=>postId.includes(`${post.id}`));
        setSavedPosts(saved);

        setLoading(false);
    },[])

  //api
//   useEffect(()=>{
//     setLoading(true);
//     try{
//         const url='http://localhost:3000/articles';
//         const getRequest=async ()=>{
//           const options = {
//             method: 'GET',
//             headers: new Headers({'content-type': 'application/json'
//             })};
//           const data=await fetch(url,options);
//           const getPosts=await data.json();
//           const postId=JSON.parse(localStorage.getItem('savedPostId'));
//           console.log(postId);
//           const posts=getPosts.filter((post)=>{
//             return postId.includes(`${post.id}`);
//           })
//           //console.log(posts);
//           setSavedPosts(posts);
//           console.log(savedPosts);
//         }  
//         getRequest();
//     }
//     catch(err) {console.log(err)};
//     setLoading(false);
//   },[localStorage.getItem('savedPostId')])
  if(loading){
    return <div>Loading</div>
  }
  return (
    <div>
      <h1>Saved Posts</h1>
      {savedPosts.map((post)=>{
        return <Post deletePost={()=>{}} post={post}/>
      })}
      </div>
    
  );
};

export default SavedPosts;

import React from 'react';
import Post from './Post';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const PostList = (props) => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        try{
          const url='http://localhost:3000/articles';
          const getRequest=async (url)=>{
            const options = {
              method: 'GET',
              headers: new Headers({'content-type': 'application/json'
              })};
            const data=await fetch(url,options);
            const getPosts=await data.json();
            setPosts(getPosts);
            //console.log(posts);
          }  
          
          try{
            getRequest(url);    
            //console.log(data);
          }
          catch (err){
            console.log(err);
          }
          //console.log(posts);
            if(props.searchText!==undefined&&props.filter!==undefined){
              //console.log(posts,searchText);
              
              const searchPosts = posts.filter(
                (post) =>{
                  
                  if(post.topic===undefined)
                  {
                    return post.author.toLowerCase().includes(props.searchText) ||
                    post.topic.toLowerCase().includes(props.searchText);
                  
                  }
                  return post.author.toLowerCase().includes(props.searchText) ||
                  post.topic.toLowerCase().includes(props.searchText)||post.topic.toLowerCase().includes(props.searchText);
                }
                  
              );
          
              let filterPosts=searchPosts.filter(post=>{
                if(props.filter.author==='') return true;
                return props.filter.author.toLowerCase()===post.author.toLowerCase();
              })
              filterPosts=filterPosts.filter(post=>{
                if(props.filter.date==='') return true;
                return props.filter.date===post.date;
              })
              filterPosts=filterPosts.filter(post=>{
                if(props.filter.likes==='') return true;
                return props.filter.likes===post.likes;
              })
              filterPosts=filterPosts.filter(post=>{
                if(props.filter.comments==='') return true;
                return props.filter.comments===post.comments;
              })
              setPosts(filterPosts);
            }
        }
        catch (err){
            console.log(err);
        }
    },[props.searchText,props.filter])
    const deletePostHandler=(postId)=>{
        const newPosts=posts.filter(item=>item.id!=postId);
        setPosts(newPosts);
        localStorage.setItem('posts',JSON.stringify(newPosts));
    }


    return (
    <div className="post-list">
        {posts.map((post, index) => (
        <Post key={index} post={post} deletePost={deletePostHandler}/>
        ))}
    </div>
    );
   
    
};

export default PostList;

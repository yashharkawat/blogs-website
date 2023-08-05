import React from 'react';
import Post from './Post';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const PostList = (props) => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        try{
            const newPosts=JSON.parse(localStorage.getItem('posts'));
             setPosts(newPosts);
            if(props.searchText!==undefined&&props.filter!==undefined){
              const searchPosts = newPosts.filter(
                (post) =>
                  post.title.toLowerCase().includes(props.searchText) ||
                  post.author.toLowerCase().includes(props.searchText) ||
                  post.topic.toLowerCase().includes(props.searchText)
              );
              //console.log(props.filter);
              //filter

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
                return props.filter.likes<=post.likes;
              })
              filterPosts=filterPosts.filter(post=>{
                if(props.filter.comments==='') return true;
                return props.filter.comments<=post.comments;
              })
              setPosts(filterPosts);
            }
              //filter
              
              //console.log('in try block');
              //console.log(posts);
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
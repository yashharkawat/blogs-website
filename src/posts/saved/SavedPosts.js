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
  // if (loading) {
  //   return <div>Loading</div>
  // }
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

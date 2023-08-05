import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [post,setPost]=useState({});
    const params=useParams();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        //console.log(params.id);
        setLoading(true);

        const posts=JSON.parse(localStorage.getItem('posts'));
        const editpost=posts.filter(item=>item.id==params.id);
        setPost(editpost[0]);
        
        //api

        // try{
        //     const url=`http://localhost:3000/articles/${params.id}`;
        //     const getRequest=async ()=>{
        //       const options = {
        //         method: 'GET',
        //         headers: new Headers({'content-type': 'application/json'
        //         })};
        //       const data=await fetch(url,options);
        //       const getPosts=await data.json();
              
        //       setPost(getPosts);
              
        //     }  
        //     getRequest();
        // }
        // catch(err){
        //     console.log(err);
        // }
        setLoading(false);
   },[params.id])

   if(loading){
    return (
        <div>Loading..</div>
    );
   }
  return (
    <div>
        <h2 className='container'>Edit Post</h2>
        <NewPost initialValues={post} id={params.id}/>
    </div>
  );
};

export default Edit;

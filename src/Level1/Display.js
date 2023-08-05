import PostList from "./PostList";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import SignUp from "../level2/SignUp";
import { Link } from "react-router-dom";

const post = [
    {
      id:1,
      title: 'Introduction to React',
      topic: 'Technology',
      image: 'https://via.placeholder.com/300',
      text: 'In this article, we will introduce you to the basics of React and its core concepts.',
      datetime: '2023-08-03T12:00',
      author: 'John Doe',
    },
    {
      id:2,
      title: 'The Art of Writing',
      topic: 'Writing',
      image: 'https://example.com/writing-art.jpg',
      text: 'Discover the secrets of becoming a skilled and prolific writer in this insightful article.',
      datetime: '2023-08-02T15:30',
      author: 'Jane Smith',
    },
    {
      id:3,
      title: 'Healthy Eating Habits',
      topic: 'Health',
      image: 'https://example.com/healthy-eating.jpg',
      text: 'Learn about the importance of maintaining healthy eating habits and its impact on overall well-being.',
      datetime: '2023-08-01T10:15',
      author: 'Alex Johnson',
    },
    {
      id:4,
      title: 'Introduction to java',
      topic: 'Technology',
      image: 'https://example.com/react-intro.jpg',
      text: 'In this article, we will introduce you to the basics of React and its core concepts.',
      datetime: '2023-08-03T12:00',
      author: 'John Doe',
    },
    // Add more posts here
  ];
localStorage.setItem('posts',JSON.stringify(post));
const Display=()=>{

    const [search,setSearch]=useState('');
    const [filter,setFilter]=useState({
        author:'',
        date:'',
        likes:'',
        comments:'',
    });
    //     useEffect(()=>{
    //       const url='http://localhost:3000/articles';
    //       const postData={title:'how are you',description:'sdajnhds sdahbda adsjn'};
      
    //       const getRequest=async (url)=>{
    //         const options = {
    //           method: 'GET',
    //           headers: new Headers({'content-type': 'application/json'
    //           })};
    //         const data=await fetch(url,options);
    //         const posts=await data.json();
    //         //console.log(posts);
            
    //       }  
    //       const postRequest=async (url,postData)=>{
    //         const options = {
    //               method: 'POST',
    
    //               headers: new Headers({'content-type': 'application/json'
    //               }),
    //               body: JSON.stringify(postData)
    //         };
    //         const data=await fetch(url,options);
    //         const posts=await data.json();
    //         //console.log(posts);
         
    //       } 
    //       try{
    //         const data=getRequest(url);    
    //         console.log(data);
    //       }
    //       catch (err){
    //         console.log(err);
    //       }
    
    //       try{
    //         const data=postRequest(url,postData);    
    //         console.log(data);
    //       }
    //       catch (err){
    //         console.log(err);
    //       }
          
    // },[])
    const searchHandler=(searchText)=>{
        setSearch(searchText);
    }
    const filterHandler=(filterValues)=>{
        setFilter(filterValues);
    }
    return (
        <>
            <Link to='/topics'><button>Topics</button></Link>
            <Link to='/pay'><button>Pay</button></Link>
            <NavBar searchHandler={searchHandler} sendFilter={filterHandler}/>
            <PostList searchText={search} filter={filter}/>
            
        </>
    );
}
export default Display;
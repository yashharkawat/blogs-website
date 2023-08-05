import PostList from "./PostList";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import SignUp from "../level2/SignUp";
import { Link } from "react-router-dom";
import './Display.css'
import Button from '@mui/material/Button';
const post = [
    {
      id:1,
      title: 'Introduction to React',
      topic: 'Technology',
      image: 'https://via.placeholder.com/300',
      text: 'In this article, we will introduce you to the basics of React and its core concepts.',
      created_at: '2023-08-03T12:00',
      author: 'John Doe',
      likes:59,
      view:200,
      comments:20
    },
    {
      id:2,
      title: 'The Art of Writing',
      topic: 'Writing',
      image: 'https://example.com/writing-art.jpg',
      text: 'Discover the secrets of becoming a skilled and prolific writer in this insightful article.',
      created_at: '2023-08-02T15:30',
      author: 'Jane Smith',
      likes:100,
      view:200,
      comments:20
    },
    {
      id:3,
      title: 'Healthy Eating Habits',
      topic: 'Health',
      image: 'https://example.com/healthy-eating.jpg',
      text: 'Learn about the importance of maintaining healthy eating habits and its impact on overall well-being.',
      created_at: '2023-08-01T10:15',
      author: 'Alex Johnson',
      likes:100,
      view:200,
      comments:20
    },
    {
      id:4,
      title: 'Introduction to java',
      topic: 'Technology',
      image: 'https://example.com/react-intro.jpg',
      text: 'In this article, we will introduce you to the basics of React and its core concepts.',
      created_at: '2023-08-03T12:00',
      author: 'John Doe',
      likes:100,
      view:200,
      comments:20
    },
    
      {
        id: 5,
        title: "The Power of Meditation",
        topic: "Wellness",
        image: "https://example.com/meditation",
        text: "Discover the transformative effects of meditation on mental and emotional well-being.",
        created_at: "2023-08-04T11:30",
        author: "Alice Johnson",
        likes: 85,
        view: 180,
        comments: 15,
      },
      {
        id: 6,
        title: "Art of Photography",
        topic: "Art",
        image: "https://example.com/art-of-photography.jpg",
        text: "Explore the world of photography and learn how to capture stunning images.",
        created_at: "2023-08-04T16:45",
        author: "Bob Smith",
        likes: 70,
        view: 150,
        comments: 12,
      },
      {
        id: 7,
        title: "The Science of Climate Change",
        topic: "Science",
        image: "https://images.unsplash.com/photo-1512758017271-4e4c209f2280",
        text: "Dive into the scientific aspects of climate change and its implications for the planet.",
        created_at: "2023-08-05T09:00",
        author: "Carol Johnson",
        likes: 120,
        view: 250,
        comments: 30,
      },
      {
        id: 8,
        title: "Healthy Skin Care Routine",
        topic: "Health",
        image: "https://example.com/skin-care.jpg",
        text: "Learn how to build a daily skin care routine for a healthy and radiant complexion.",
        created_at: "2023-08-06T14:15",
        author: "David Lee",
        likes: 95,
        view: 190,
        comments: 18,
      },
      {
        id: 9,
        title: "Introduction to Python",
        topic: "Technology",
        image: "https://example.com/python-intro.jpg",
        text: "In this article, we will introduce you to the basics of Python programming language.",
        created_at: "2023-08-07T10:30",
        author: "Emily White",
        likes: 105,
        view: 210,
        comments: 22,
      },
      {
        id: 10,
        title: "Healthy Lifestyle Tips",
        topic: "Health",
        image: "https://example.com/healthy-lifestyle.jpg",
        text: "Discover essential tips for maintaining a healthy lifestyle and well-being.",
        created_at: "2023-08-07T16:00",
        author: "Frank Johnson",
        likes: 75,
        view: 160,
        comments: 10,
      },
      {
        id: 11,
        title: "The World of Fantasy Books",
        topic: "Books",
        image: "https://example.com/fantasy-books.jpg",
        text: "Immerse yourself in the captivating world of fantasy books and mythical adventures.",
        created_at: "2023-08-08T11:45",
        author: "Grace Smith",
        likes: 80,
        view: 170,
        comments: 14,
      },
      {
        id: 12,
        title: "Introduction to Machine Learning",
        topic: "Technology",
        image: "https://example.com/machine-learning.jpg",
        text: "Get started with the fundamentals of machine learning and its real-world applications.",
        created_at: "2023-08-09T12:30",
        author: "Henry Lee",
        likes: 110,
        view: 230,
        comments: 25,
      },
      {
        id: 13,
        title: "Yoga for Stress Relief",
        topic: "Wellness",
        image: "https://example.com/yoga-stress-relief.jpg",
        text: "Learn various yoga poses and techniques to alleviate stress and promote relaxation.",
        created_at: "2023-08-09T16:15",
        author: "Isabella Johnson",
        likes: 90,
        view: 200,
        comments: 20,
      },
      {
        id: 14,
        title: "The World of Classic Literature",
        topic: "Books",
        image: "https://example.com/classic-literature.jpg",
        text: "Discover timeless classics and delve into the world of classic literature masterpieces.",
        created_at: "2023-08-10T09:30",
        author: "John Doe",
        likes: 130,
        view: 270,
        comments: 35,
      },
      {
        id: 15,
        title: "The Art of Cooking",
        topic: "Food",
        image: "https://example.com/art-of-cooking.jpg",
        text: "Explore the art of cooking and learn recipes from around the world.",
        created_at: "2023-08-10T13:00",
        author: "Jane Smith",
        likes: 95,
        view: 190,
        comments: 18,
      },
    
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
        
    const searchHandler=(searchText)=>{
        setSearch(searchText);
    }
    const filterHandler=(filterValues)=>{
        setFilter(filterValues);
    }
    return (
      <>
      <h2 className="page-heading container">
        <p className="text" >Your Feed</p>
      </h2>
          <NavBar searchHandler={searchHandler} sendFilter={filterHandler}/>
          <div className="button-sheet">
      <span className="button-style">
          <Button
          variant="contained" 
          href='/topics'
          >
            Topics
          </Button>
      </span>
      <span className="button-style">
          <Button
          variant="contained" 
          href='/pay'
          >
            Pay
          </Button>
      </span>
      <span className="button-style">
          <Button
          variant="contained" 
          href='/saved-posts'
          >
            Saved Posts
          </Button>
      </span>
      </div>
      
          <PostList searchText={search} filter={filter}/>
          
      </>
  );
}
export default Display;

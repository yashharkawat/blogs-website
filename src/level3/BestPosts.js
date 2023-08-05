import React, { useState, useEffect } from "react";
import Post from "../Level1/Post";
// Assuming we have a posts array with post objects having 'likes' and 'datetime' properties
const posts = [
  {
    id: 1,
    author: "John Doe",
    title: "Post 1",
    topic: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://example.com/image1",
    likes: 10,
    numberOfComments: 2,
    views: 100,
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Post 2",
    topic: "Travel",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "https://example.com/image2",
    likes: 15,
    numberOfComments: 1,
    views: 200,
  },
  {
    id: 3,
    author: "David Johnson",
    title: "Post 3",
    topic: "Science",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://example.com/image3",
    likes: 8,
    numberOfComments: 3,
    views: 150,
  },
  {
    id: 4,
    author: "Sarah Brown",
    title: "Post 4",
    topic: "Food",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: "https://example.com/image4",
    likes: 12,
    numberOfComments: 5,
    views: 300,
  },
  {
    id: 5,
    author: "Michael Williams",
    title: "Post 5",
    topic: "Health",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    image: "https://example.com/image5",
    likes: 20,
    numberOfComments: 2,
    views: 180,
  },
  {
    id: 6,
    author: "Emily Davis",
    title: "Post 6",
    topic: "Fashion",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    image: "https://example.com/image6",
    likes: 5,
    numberOfComments: 0,
    views: 50,
  },
  {
    id: 7,
    author: "Daniel Wilson",
    title: "Post 7",
    topic: "Sports",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    image: "https://example.com/image7",
    likes: 18,
    numberOfComments: 4,
    views: 250,
  },
  {
    id: 8,
    author: "Olivia Johnson",
    title: "Post 8",
    topic: "Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://example.com/image8",
    likes: 14,
    numberOfComments: 1,
    views: 120,
  },
  {
    id: 9,
    author: "Ethan Brown",
    title: "Post 9",
    topic: "Books",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "https://example.com/image9",
    likes: 7,
    numberOfComments: 3,
    views: 170,
  },
  {
    id: 10,
    author: "Sophia Wilson",
    title: "Post 10",
    topic: "Art",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://example.com/image10",
    likes: 9,
    numberOfComments: 2,
    views: 220,
  },
  // Add more dummy posts here...
];


const BestPosts = () => {
  const [bestPosts, setbestPosts] = useState([]);

  useEffect(() => {
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

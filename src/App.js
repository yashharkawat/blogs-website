import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import React from 'react';
import NewPost from './posts/createEditPost/NewPost'
import Edit from './posts/createEditPost/Edit'
import Display from './posts/display/Display';
import SignUp from './users/login/SignUp';
import Login from './users/login/Login';
import ProfilePage from './users/profile/ProfilePage';
import EditProfile from './users/profile/EditProfile';
import PostDetails from './posts/post/PostDetails';
import BestPosts from './posts/recommendations/BestPosts';
import Root from './posts/Root';
import TopicListPage from './posts/Topics/TopicList';
import PayToViewContent from './Pay/PayToViewContent';
import AuthorProfilePage from './users/profile/AuthorProfilePage';
import SavedPosts from './posts/saved/SavedPosts';
import StripeContainer from "./Payment/StripeContainer";
import MyPost from "./users/MyPost";
import RevisionHistory from "./RevisionHistory/RevisionHistory";
const router=createBrowserRouter([
{
  path:'/',
  element:<Root />,
  children:[
    {
      index:true,element:<Display />
    },
    {
      path:'profile',
      element:<ProfilePage />
    },
    {
      path:'editProfile',
      element:<EditProfile />
    },
    
    {
      path:'post-details/:id',
      element:<PostDetails />
    },
    {
      path:'best-posts',
      element:<BestPosts />
    },
    {
      path:'add',
      element:<div className='container'><h1>Create new Post</h1><NewPost initialValues={{}}/></div>
    },
    {
      path:'edit/:id',
      element:<Edit />
    },
    {
      path:'topics',
      element:<TopicListPage />
    },{
      path:'pay',
      element:<PayToViewContent />
    },
    {
      path:'authors/:name',
      element:<AuthorProfilePage />
    },
    {
      path:'saved-posts',
      element:<SavedPosts />
    },
    {
      path:'stripe',
      element:<StripeContainer />
    },
    {
      path:'/my-posts',
      element:<MyPost />
    },
    {
      path:'/revision-history',
      element:<RevisionHistory />
    }
  ]
},
{
  path:'signup',
  element:<SignUp />
},
{
  path:'login',
  element:<Login />
},

])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  
  );
}

export default App;


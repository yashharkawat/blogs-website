import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import NewPost from "./posts/createEditPost/NewPost";
import Edit from "./posts/createEditPost/Edit";
import Display from "./posts/display/Display";
import SignUp from "./users/login/SignUp";
import Login from "./users/login/Login";
import ForgotPassword from "./users/login/ForgotPassword";
import ProfilePage from "./users/profile/ProfilePage";
import EditProfile from "./users/profile/EditProfile";
import PostDetails from "./posts/post/PostDetails";
import BestPosts from "./posts/recommendations/BestPosts";
import Root from "./posts/Root";
import TopicListPage from "./posts/Topics/TopicList";
import PayToViewContent from "./Pay/PayToViewContent";
import AuthorProfilePage from "./users/profile/AuthorProfilePage";
import SavedPosts from "./posts/saved/SavedPosts";
import MyPost from "./users/MyPost";
import RevisionHistory from "./RevisionHistory/RevisionHistory";
import Drafts from "./posts/Drafts/Drafts";
import Lists from "./Lists/Lists";
import List from "./Lists/List";
import AddPost from "./Lists/AddPost";
import DraftDesription from "./posts/Drafts/DraftDescription";
import ListDescription from "./Lists/ListDescription";
import LandingPage from "./pages/LandingPage";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "feed", element: <Display /> },
      { path: "post-details/:id", element: <PostDetails /> },
      { path: "best-posts", element: <BestPosts /> },
      { path: "authors/:name", element: <AuthorProfilePage /> },
      { path: "topics", element: <TopicListPage /> },
      {
        element: <RequireAuth />,
        children: [
          { path: "profile", element: <ProfilePage /> },
          { path: "saved-posts", element: <SavedPosts /> },
          { path: "my-posts", element: <MyPost /> },
          { path: "revision-history", element: <RevisionHistory /> },
          { path: "editProfile", element: <EditProfile /> },
          { path: "pay", element: <PayToViewContent /> },
          { path: "add", element: <NewPost initialValues={{}} /> },
          { path: "edit/:id", element: <Edit /> },
          { path: "drafts", element: <Drafts /> },
          { path: "drafts/:id", element: <DraftDesription /> },
          { path: "lists", element: <Lists /> },
          { path: "lists/:id", element: <List /> },
          { path: "lists/:id/add", element: <AddPost /> },
          { path: "lists/:id/:postId", element: <ListDescription /> },
        ],
      },
    ],
  },
{
  path: "welcome",
  element: <LandingPage />,
},
{
  path: "signup",
  element:<SignUp />
},
{
  path: "login",
  element: <Login />,
},
{
  path: "forgot-password",
  element: <ForgotPassword />,
}
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  
  );
}

export default App;


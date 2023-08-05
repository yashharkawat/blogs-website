import { Link } from "react-router-dom";
import MyPost from "./MyPost";
import "./ProfilePage.css";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [show,setShow]=useState(false);
  const [user,setUser]=useState({});

  useEffect(()=>{
    const current_user=JSON.parse(localStorage.getItem('current_user'));
    setUser(current_user);
  },[localStorage.getItem('current_user')])
  return (
    <div className="profile-container">
      <h1 className="heading">Welcome, {user.name}</h1>
      <div>
      <p className="paragraph">Username:{user.username}</p>
      <p className="paragraph">Age: {user.age}</p>
        <p className="paragraph">Bio: {user.bio}</p>
        <p className="paragraph">Email: {user.email}</p>
        
        <Link to="/editProfile">
          <button className="button">Edit Profile</button>
        </Link>
        {!show &&<button className="button" onClick={()=>setShow(true)}>My Posts</button>}
          {show &&<button className="button" onClick={()=>setShow(false)}>Hide Posts</button>}
        
        {show&&<MyPost />}
      </div>
    </div>
  );
};

export default ProfilePage;

import { Link } from "react-router-dom";
import MyPost from "../MyPost";
import "./ProfilePage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../store/index'
import { db } from '../../config/firebase';
import { updateDoc, doc, getDocs, collection } from "firebase/firestore";
const ProfilePage = () => {
  const user=useSelector(state=>state);
  const [show,setShow]=useState(false);
  //console.log("yash",user);
  return (
    <div className="profile-container">
      <h1 className="heading">Welcome, {user.name}</h1>
      <div>
        <p className="paragraph">Age: {user.age}</p>
        <p className="paragraph">Bio: {user.bio}</p>
        <p className="paragraph">Email: {user.email}</p>

        <Link to="/editProfile">
          <button className="button">Edit Profile</button>
        </Link>
        {!show && <button className="button" onClick={() => setShow(true)}>My Posts</button>}
        {show && <button className="button" onClick={() => setShow(false)}>Hide Posts</button>}

        {show && <MyPost />}
      </div>
    </div>
  );
};

export default ProfilePage;

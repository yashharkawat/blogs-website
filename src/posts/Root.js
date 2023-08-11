import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
const Root = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
    } else {
      navigate("/login");
    }
  });

  return <Outlet />;
};
export default Root;

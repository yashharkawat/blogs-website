import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { actions } from "../store";
import { AuthModalProvider } from "../context/AuthModalContext";

const Root = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        dispatch(actions.changeCurrentUser("reset"));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return null;

  return (
    <AuthModalProvider>
      <Outlet />
    </AuthModalProvider>
  );
};
export default Root;

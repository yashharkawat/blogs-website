import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignInPromptPage } from "./SignInPrompt";

const RequireAuth = () => {
  const userId = useSelector((state) => state.id);

  if (!userId) {
    return <SignInPromptPage />;
  }

  return <Outlet />;
};

export default RequireAuth;

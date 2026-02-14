import { createContext, useState } from "react";
import { SignInPromptModal } from "../components/SignInPrompt";

export const AuthModalContext = createContext(null);

export const AuthModalProvider = ({ children }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const openSignInModal = () => setShowSignInModal(true);
  const closeSignInModal = () => setShowSignInModal(false);
  return (
    <AuthModalContext.Provider value={{ openSignInModal }}>
      {children}
      {showSignInModal && <SignInPromptModal onClose={closeSignInModal} />}
    </AuthModalContext.Provider>
  );
};

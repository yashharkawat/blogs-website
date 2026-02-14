import React from "react";
import { Link } from "react-router-dom";
import "./SignInPrompt.css";

export const SignInPromptModal = ({ onClose }) => (
  <div className="signin-prompt-overlay" onClick={onClose}>
    <div className="signin-prompt-modal" onClick={(e) => e.stopPropagation()}>
      <h2 className="signin-prompt-title">Sign in to continue</h2>
      <p className="signin-prompt-text">
        Create an account or sign in to like, comment, save posts, and more.
      </p>
      <div className="signin-prompt-actions">
        <Link to="/login" className="signin-prompt-btn signin-prompt-btn-primary" onClick={onClose}>
          Sign In
        </Link>
        <Link to="/signup" className="signin-prompt-btn signin-prompt-btn-secondary" onClick={onClose}>
          Get Started
        </Link>
      </div>
      <button type="button" className="signin-prompt-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  </div>
);

export const SignInPromptPage = () => (
  <div className="signin-prompt-page">
    <h1 className="signin-prompt-page-title">Sign in to continue</h1>
    <p className="signin-prompt-page-text">
      You need to be signed in to access this page.
    </p>
    <div className="signin-prompt-page-actions">
      <Link to="/login" className="signin-prompt-btn signin-prompt-btn-primary">
        Sign In
      </Link>
      <Link to="/signup" className="signin-prompt-btn signin-prompt-btn-secondary">
        Create Account
      </Link>
    </div>
  </div>
);

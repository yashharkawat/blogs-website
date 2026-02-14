import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const trimmedEmail = (email || "").trim().toLowerCase();
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, trimmedEmail);
      setMessage("Check your email for a link to reset your password. If you don't see it, check your spam folder.");
      setEmail("");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up first.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Reset password</h3>
      <p className="login-text" style={{ marginTop: 0, marginBottom: 20, textAlign: "center" }}>
        Enter your email and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        <div style={{ width: "100%" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="login-input"
            autoComplete="email"
            disabled={loading}
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Sending…" : "Send reset link"}
        </button>
      </form>
      {message && (
        <div className="login-text" style={{ color: "#4ade80", marginTop: 16, textAlign: "center" }}>
          {message}
        </div>
      )}
      {error && (
        <div className="login-text login-error" style={{ marginTop: 16 }}>
          {error}
        </div>
      )}
      <div className="login-text" style={{ marginTop: 24 }}>
        <Link to="/login" className="signin-link">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

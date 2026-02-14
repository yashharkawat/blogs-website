import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import profileImage from "../../images/profile.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { actions } from "../../store";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      dispatch(actions.changeCurrentUser("reset"));
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const navLinks = [
    { to: "/saved-posts", label: "Saved Posts" },
    { to: "/drafts", label: "Drafts" },
    { to: "/my-posts", label: "My Posts" },
    { to: "/revision-history", label: "Activity Log" },
    { to: "/pay", label: "Buy Posts" },
    { to: "/lists", label: "Lists" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className={`navbar-container ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <button
          type="button"
          className="navbar-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
        </button>
        {userId ? (
          <div className="navbar-links">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="pages" onClick={closeMobileMenu}>
                {label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="navbar-links navbar-links-guest">
            <Link to="/login" className="pages" onClick={closeMobileMenu}>
              Sign In
            </Link>
            <Link to="/signup" className="pages" onClick={closeMobileMenu}>
              Get Started
            </Link>
          </div>
        )}
        <div className="navbar-right">
          {userId ? (
            <>
              <Link to="/profile" onClick={closeMobileMenu}>
                <img
                  className="navbar-profile"
                  src={profileImage}
                  alt="profile photo"
                />
              </Link>
              <Link to="/add" className="navbar-write" onClick={closeMobileMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Write"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  />
                </svg>
                <span className="write">Write</span>
              </Link>
              <button onClick={logoutHandler} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-signin" onClick={closeMobileMenu}>
                Sign In
              </Link>
              <Link to="/signup" className="navbar-get-started" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
      <div
        className={`navbar-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </>
  );
};
export default NavBar;

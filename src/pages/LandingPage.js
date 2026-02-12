import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <div className="landing-logo">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="landing-logo-text">BlogSpace</span>
          </div>
          <div className="landing-nav-links">
            <Link to="/login" className="landing-nav-link">Sign In</Link>
            <Link to="/signup" className="landing-nav-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1 className="landing-hero-title">
            Where good ideas <br />
            <span className="landing-hero-accent">find you.</span>
          </h1>
          <p className="landing-hero-subtitle">
            BlogSpace is a place to read, write, and deepen your understanding. 
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Link to="/signup" className="landing-hero-cta">
            Start Reading
          </Link>
        </div>
        <div className="landing-hero-visual">
          <div className="landing-hero-card landing-hero-card-1">
            <div className="landing-card-tag">Technology</div>
            <div className="landing-card-title">The Future of AI in Everyday Life</div>
            <div className="landing-card-meta">5 min read</div>
          </div>
          <div className="landing-hero-card landing-hero-card-2">
            <div className="landing-card-tag">Science</div>
            <div className="landing-card-title">Understanding Quantum Computing</div>
            <div className="landing-card-meta">8 min read</div>
          </div>
          <div className="landing-hero-card landing-hero-card-3">
            <div className="landing-card-tag">Design</div>
            <div className="landing-card-title">Principles of Modern UI Design</div>
            <div className="landing-card-meta">4 min read</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features">
        <h2 className="landing-section-title">Why BlogSpace?</h2>
        <div className="landing-features-grid">
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="landing-feature-title">Write Freely</h3>
            <p className="landing-feature-desc">
              A distraction-free editor that lets you focus on what matters most — your words. 
              Create drafts, publish stories, and build your voice.
            </p>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="landing-feature-title">Find Your Community</h3>
            <p className="landing-feature-desc">
              Follow writers you admire, discover stories by topic, and connect 
              with a community of curious minds.
            </p>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="landing-feature-title">Save & Organize</h3>
            <p className="landing-feature-desc">
              Bookmark stories for later, create reading lists, and organize content 
              that inspires you — all in one place.
            </p>
          </div>
          <div className="landing-feature">
            <div className="landing-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="landing-feature-title">Track Your Impact</h3>
            <p className="landing-feature-desc">
              See who's reading your work with view counts, likes, and comments. 
              Watch your influence grow with every story you publish.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="landing-topics">
        <h2 className="landing-section-title">Explore Topics You Love</h2>
        <p className="landing-section-subtitle">
          From technology to art, science to philosophy — find stories that spark your curiosity.
        </p>
        <div className="landing-topics-list">
          {["Technology", "Science", "Design", "Programming", "AI", "Business", "Health", "Culture", "Philosophy", "Art"].map(
            (topic) => (
              <span key={topic} className="landing-topic-pill">{topic}</span>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta">
        <h2 className="landing-cta-title">Start your journey today.</h2>
        <p className="landing-cta-subtitle">
          Join a community of curious readers and talented writers. Your story is waiting to be told.
        </p>
        <div className="landing-cta-buttons">
          <Link to="/signup" className="landing-cta-btn-primary">Create Account</Link>
          <Link to="/login" className="landing-cta-btn-secondary">Sign In</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="landing-footer-logo-text">BlogSpace</span>
          </div>
          <p className="landing-footer-text">A place to read, write, and grow.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

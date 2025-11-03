import React from "react";
import "./home.css";

const homescreen: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">
          <div className="logo-icon"></div>
          <span>AlgoZap</span>
        </div>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="#login" className="btn btn-secondary">Log in</a>
          <a href="#signup" className="btn btn-primary">Get started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="plant"></div>
        <div className="hero-content">
          <h1>Automate your work with AutoConnect</h1>
          <p>
            Connect your apps and automate workflows in a few clicks. Move data between
            your apps automatically, so you can focus on your most important work.
          </p>
          <button className="btn btn-primary hero-btn">Get started for free</button>
          <div className="phone-mockup">
            <div className="phone">
              <div className="phone-screen"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <h2>How AlgoZap works</h2>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🔗</div>
            <h3>Connect your apps</h3>
            <p>Easily connect two or more apps to automate repetitive tasks without coding.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Automate your tasks</h3>
            <p>Automate your tasks with our simple drag-and-drop interface.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💼</div>
            <h3>Get more done</h3>
            <p>AlgoZap automates your tasks so you can focus on your most important work.</p>
          </div>
        </div>
      </section>

      {/* What You Can Automate */}
      <section className="automate-section">
        <h2>What you can automate</h2>
        <div className="automation-cards">
          <div className="automation-card">
            <div className="card-image email">
              <div className="email-shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
              </div>
            </div>
            <div className="card-content">
              <h3>Email marketing</h3>
              <p>Automate your email marketing campaigns and nurture your leads.</p>
            </div>
          </div>

          <div className="automation-card">
            <div className="card-image social">
              <div className="social-shape"></div>
            </div>
            <div className="card-content">
              <h3>Social media</h3>
              <p>Automate your social media posts and engage with your audience.</p>
            </div>
          </div>

          <div className="automation-card">
            <div className="card-image ecommerce">
              <div className="ecommerce-shape">
                <div className="text">E-COMMERCE AUTOMATION</div>
                <div className="blob"></div>
              </div>
            </div>
            <div className="card-content">
              <h3>E-commerce</h3>
              <p>Automate your e-commerce tasks and grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <h2>Trusted by businesses worldwide</h2>
        <div className="logos">
          <div className="logo-box">🏢</div>
          <div className="logo-box">🚀</div>
          <div className="logo-box">🔥</div>
          <div className="logo-box">💡</div>
          <div className="logo-box">⭐</div>
          <div className="logo-box">🎯</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <button className="btn btn-primary hero-btn">Start automating today</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <p className="copyright">© 2024 AlgoZap. All rights reserved.</p>
      </footer>
    </>
  );
};

export default homescreen;

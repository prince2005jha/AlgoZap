import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Zap,
  Users,
  TrendingUp,
  Lock,
  BarChart3,
  Workflow,
} from 'lucide-react';
import './ProductScreen.css';

const ProductScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const integrations = ['Gmail', 'Slack', 'Google Sheets', 'HubSpot', 'Salesforce', 'Trello'];

  const features = [
    { icon: <Zap className="icon" />, title: 'Faster', description: 'See your work move faster than ever before by automating your most manual work.', link: 'Learn more about Zap speed' },
    { icon: <Users className="icon" />, title: 'Better', description: 'Automate more than ever before with AI-powered automation that adapts to your needs.', link: 'Learn more about AI in Zapier' },
    { icon: <TrendingUp className="icon" />, title: 'Smarter', description: 'Go beyond basic automation with advanced workflows that think for themselves.', link: 'Learn about workflows' },
    { icon: <Lock className="icon" />, title: 'Data encryption', description: 'Keep your data secure with enterprise-level encryption and compliance.', link: 'Learn more about security' },
    { icon: <BarChart3 className="icon" />, title: 'Logging', description: 'Track every automation with detailed logs and debugging tools.', link: 'Learn about Zap history' },
    { icon: <Workflow className="icon" />, title: 'Webhooks', description: 'Connect to any API with custom webhooks for unlimited possibilities.', link: 'Learn more about webhooks' },
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">zapier</div>
          <ul className="nav-links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
          <div className="nav-actions">
            <button>Contact Sales</button>
            <button>Sign in</button>
            <button className="cta-btn">Try it free</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">New</span>
          <h1>Make your work flow</h1>
          <p>Streamline your workflows by connecting your apps and automating repetitive tasks.<br />Join 3 million+ companies and over 2 million users automating work every day.</p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get started free <ArrowRight className="icon-small" />
            </button>
            <button className="btn-secondary">
              <Play className="icon-small" /> See how it works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <p>TRUSTED BY COMPANIES AROUND THE WORLD</p>
        <div className="companies">
          <span>Spotify</span>
          <span>LinkedIn</span>
          <span>Adobe</span>
          <span>Dropbox</span>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        {features.map((feature, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#">{feature.link} <ArrowRight className="icon-small" /></a>
          </div>
        ))}
      </section>

      {/* Integrations */}
      <section className="integrations">
        <h2>Our automation right comes with our library of integrations</h2>
        <div className="integration-list">
          {integrations.map((app) => (
            <div key={app} className="integration-item">{app}</div>
          ))}
        </div>
        <button className="btn-explore">Explore all products</button>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Join 3.4m companies automating<br />with Zapier</h2>
        <button className="btn-primary">Get started free</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Platform</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">By Role</a></li>
              <li><a href="#">By Team Size</a></li>
              <li><a href="#">By Use Case</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Learn</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductScreen;

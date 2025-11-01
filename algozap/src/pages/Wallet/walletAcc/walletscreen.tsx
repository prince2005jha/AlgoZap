import React, { useState } from "react";
import {
  Home,
  Send,
  Settings,
  HelpCircle,
  Info,
  ExternalLink,
  Twitter,
} from "lucide-react";
import "./Wallet.css";

export default function WalletScreen() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="wallet-container">
      {/* Sidebar */}
      <div className="wallet-sidebar">
        {/* Logo */}
        <div className="wallet-logo-section">
          <div className="wallet-logo">
            <span className="wallet-logo-icon">⚡</span>
          </div>
          <span className="wallet-logo-text">algozap</span>
        </div>

        {/* Navigation */}
        <nav className="wallet-nav">
          <button
            onClick={() => setActiveTab("home")}
            className={`wallet-nav-btn ${
              activeTab === "home" ? "active" : ""
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </button>

          <button
            onClick={() => setActiveTab("send")}
            className={`wallet-nav-btn ${
              activeTab === "send" ? "active" : ""
            }`}
          >
            <Send size={20} />
            <span>Send</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`wallet-nav-btn ${
              activeTab === "settings" ? "active" : ""
            }`}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="wallet-footer">
          <button className="wallet-footer-btn">
            <HelpCircle size={16} /> Get Help
          </button>
          <button className="wallet-footer-btn">
            <Info size={16} /> About AlgoZap
          </button>
          <button className="wallet-footer-btn">
            <ExternalLink size={16} /> AlgoZap Explorer
          </button>
          <button className="wallet-footer-btn">Terms of Use</button>

          <div className="wallet-footer-social">
            <Twitter size={20} className="social-icon twitter" />
            <ExternalLink size={20} className="social-icon link" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="wallet-main">
        {/* Header */}
        <div className="wallet-header">
          <div className="wallet-market">
            <span className="symbol">ALGO</span>
            <span className="price">$0.1892</span>
            <span className="change">+0.62 3.26% 1D</span>
          </div>
          <button className="wallet-btn">Get Started</button>
        </div>

        {/* Welcome Section */}
        <div className="wallet-welcome">
          <div className="wallet-content">
            <div className="wallet-intro">
              <h1>Welcome to AlgoZap Wallet</h1>
              <p>
                AlgoZap Wallet is the easiest and safest way to store, buy and
                swap on the Algorand blockchain.
              </p>
            </div>

            <div className="wallet-grid">
              {/* Create Account Card */}
              <div className="wallet-card">
                <h2>I want to create an account</h2>
                <div className="wallet-progress">
                  <div className="progress-row">
                    <div className="progress-icon">📝</div>
                    <div className="progress-line"></div>
                  </div>
                  <div className="progress-bars">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="progress-bars">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <button className="wallet-btn full">
                  Create a new Algorand account
                </button>
              </div>

              {/* Import Account Card */}
              <div className="wallet-card">
                <h2>I already have an account</h2>
                <div className="wallet-import">
                  <div className="import-row">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="import-row three">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <button className="wallet-btn gray full">
                  Import an existing Algorand account from another device or
                  backup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

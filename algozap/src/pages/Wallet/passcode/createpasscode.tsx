import React, { useState } from "react";
import "./CreatePasscode.css";

const CreatePasscode: React.FC = () => {
  const [passcode, setPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");

  const strength = (pass: string) => {
    let strengthValue = 0;
    if (pass.length >= 6) strengthValue += 25;
    if (pass.length >= 8) strengthValue += 25;
    if (/[A-Z]/.test(pass)) strengthValue += 25;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) strengthValue += 25;
    return strengthValue;
  };

  const updateStrengthColor = (strengthValue: number) => {
    if (strengthValue < 50) return "#ef4444";
    if (strengthValue < 75) return "#f59e0b";
    return "#10b981";
  };

  const isFormValid = passcode.length >= 6 && passcode === confirmPasscode;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) alert("Passcode created successfully!");
  };

  return (
    <div className="create-passcode-page">
      {/* Header */}
      <div className="header">
        <div></div>
        <div className="price-ticker">
          <span className="bold">ALGO</span>
          <div className="price-icon">A</div>
          <span className="bold">$0.1891</span>
          <span className="price-change">+0.64 3.41% 1D</span>
        </div>
      </div>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span>algozap</span>
        </div>
        <button className="back-button">← Back to Home</button>
        <button className="get-started-btn">Get started</button>
      </div>

      {/* Main Content */}
      <div className="container">
        <h1>Create a passcode</h1>

        <div className="info-box">
          <div className="info-content">
            <div className="info-icon">ⓘ</div>
            <div className="info-text">
              <p>
                Your passcode is used to encrypt your accounts locally, only
                on this device.
              </p>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="passcode">Create Passcode</label>
            <input
              type="password"
              id="passcode"
              placeholder="Enter passcode"
              autoComplete="new-password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            {passcode.length > 0 && (
              <div className="strength-indicator show">
                <div
                  className="strength-bar"
                  style={{
                    width: `${strength(passcode)}%`,
                    background: updateStrengthColor(strength(passcode)),
                  }}
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPasscode">Confirm Passcode</label>
            <input
              type="password"
              id="confirmPasscode"
              placeholder="Enter your passcode again"
              autoComplete="new-password"
              value={confirmPasscode}
              onChange={(e) => setConfirmPasscode(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${isFormValid ? "active" : ""}`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>

        <div className="terms">
          By creating an account, you agree to AlgoZap Wallet's{" "}
          <a href="#">Terms and Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default CreatePasscode;

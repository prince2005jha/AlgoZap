
import "./Login.css";

export default function LoginScreen() {
  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
        <div className="logo-section">
          <div className="logo-circle" />
          <span className="logo-text">Algozap</span>
        </div>
        <div className="signup-section">
          <span className="signup-text">Don't have an account?</span>
          <button className="signup-btn">Sign up</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-main">
        {/* Left Side: Form */}
        <div className="login-left">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Log in to your account to continue.</p>

          <form className="login-form">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" required />
            </div>

            <div className="remember-section">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>

          <div className="divider">
            <div className="line" />
            <span>Or continue with</span>
            <div className="line" />
          </div>

          <div className="social-login">
            <button className="social-btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Google
            </button>
            <button className="social-btn">
              <img
                src="https://www.svgrepo.com/show/452092/slack.svg"
                alt="Slack"
              />
              Slack
            </button>
          </div>
        </div>

        {/* Right Side: Info Section */}
        <div className="login-right">
          <div className="emoji">✨</div>
          <h2>New to Algozap?</h2>
          <p>Create an account to unlock powerful automation features.</p>

          <ul>
            <li>
              <span>✔️</span>
              <div>
                <p className="feature-title">Automate your workflows</p>
                <p className="feature-text">
                  Connect your favorite apps and save time.
                </p>
              </div>
            </li>
            <li>
              <span>✔️</span>
              <div>
                <p className="feature-title">Build custom integrations</p>
                <p className="feature-text">
                  Create powerful connections with our visual builder.
                </p>
              </div>
            </li>
            <li>
              <span>✔️</span>
              <div>
                <p className="feature-title">Increase productivity</p>
                <p className="feature-text">
                  Focus on what matters most, let us handle the rest.
                </p>
              </div>
            </li>
          </ul>

          <button className="create-account-btn">
            Explore more AlgoZap
          </button>
        </div>
      </main>
    </div>
  );
}

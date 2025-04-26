import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);  // for animation
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true); // Trigger animation on page load
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Authentication logic can go here
  };

  return (
    <div className="login-container">
      <div className="left-section">
        {/* Replace with your image */}
        <img src="/src/assets/login.jpg" alt="Login Illustration" className="login-image" />
      </div>

      <div className="right-section">
        <div className={`login-form ${animate ? 'fade-in' : ''}`}>
          <h2>LOGIN <span style={{color: '#ffcc00'}}>HERE</span></h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          <div className="footer-links">
            <p style={{color:'black'}}>Don't have an account? <a href="/register">Register</a></p>
            <p><a href="/forgot-password">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

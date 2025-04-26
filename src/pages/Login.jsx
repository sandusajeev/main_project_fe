import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation after login
import '../style/Login.css';  // Import the CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // // Here you can call the API to verify login
    // // This is just a mock example, replace it with real authentication logic
    // if (email === 'admin@example.com' && password === 'admin123') {
    //   navigate('/admin-dashboard');  // Redirect to Admin dashboard
    // } else if (email === 'organisation@example.com' && password === 'org123') {
    //   navigate('/organisation-dashboard');  // Redirect to Organisation dashboard
    // } else if (email === 'club@example.com' && password === 'club123') {
    //   navigate('/club-dashboard');  // Redirect to Club dashboard
    // } else {
    //   setError('Invalid email or password');
    // }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>LOGIN <span style={{color:' #ffcc00'}}>HERE</span></h2>
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
          <p>Don't have an account? <a href="/register">Register</a></p>
          <p><a href="/forgot-password">Forgot Password?</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

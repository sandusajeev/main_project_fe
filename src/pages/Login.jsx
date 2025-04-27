import React from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="left-section1">
        {/* <img 
          src="/src/assets/login.jpg" 
          alt="Login Illustration" 
          className="login-image" 
        /> */}
      </div>

      <div className="right-section">
        <div className="login-form fade-in">
          <h2>LOGIN <span style={{color: '#ffcc00'}}>HERE</span></h2>
          <form>
            <div className="input-group1">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group1">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <Link to='/dashboardadmin'>
            <button type="submit" className="login-button">LOGIN</button>
            </Link>
          </form>
          <div className="footer-links">
            <p style={{color:'black'}}>Don't have an account? <Link to='/registerorg'> <a href="/registerorg">Register</a></Link></p>
            <p><a href="">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


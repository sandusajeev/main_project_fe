import React, { useState } from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="loginpg-container">
      <div className="loginpg-left-section"></div>

      <div className="loginpg-right-section">
        <div className="loginpg-form-container fade-in shadow-lg">
          <h2 className="text-center mb-4">LOGIN <span style={{ color: '#ffcc00' }}>HERE</span></h2>
          <form>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label fw-semibold">Password</label>
              <input type="password" className="form-control" id="email" placeholder="Enter your password" required />
            </div>

            {/* <div className="mb-3 text-start position-relative">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password && (
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  onClick={togglePassword}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#444',
                    opacity: 0.6,
                    marginTop: '6px'
                  }}
                ></i>
              )}
            </div> */}

            <Link to='/dashboardadmin'>
              <button type="submit" className="btn w-100 loginpg-btn">LOGIN</button>
            </Link>
          </form>

          <div className="loginpg-footer-links mt-3 text-center">
            <p className="text-dark">Don't have an account? <Link to='/registerorg' className='text-info'>Register</Link></p>
            <p><a href="#" className='text-info'>Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;



import React from 'react';
import '../style/RegisterClub.css';
import { Link } from 'react-router-dom';

function RegisterClub() {
  return (
    <div className='register-container'>
      <div className='register-card'>
        <h3>Register as <span style={{ color: '#ffae00ce' }}>Club</span></h3>
        <form>
          <div className="form-row">
            <div className="form-group half-width">
              <label>Club Name</label>
              <input type='text' name='clubName' required />
            </div>
            <div className="form-group half-width">
              <label>Phone</label>
              <input type='tel' name='phone' required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label>Email</label>
              <input type='email' name='email' required />
            </div>
            <div className="form-group half-width">
              <label>Team Logo</label>
              <input type='file' accept='image/*' />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Address</label>
              <textarea name='address' rows='4' required></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label>Password</label>
              <input type='password' name='password' required />
            </div>
            <div className="form-group half-width">
              <label>Confirm Password</label>
              <input type='password' name='confirmPassword' required />
            </div>
          </div>

          <div className="checkbox-group1">
            <input type="checkbox" id="acceptTerms" required/>
            <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
          </div>

          <Link to='/dashboardclub'>
            <button type="submit" className="register-btn">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterClub;

import React from 'react';
import '../style/RegisterOrg.css';
import { Link } from 'react-router-dom';

function RegisterOrg() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register as <span>Organisation</span></h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Organisation Name</label>
              <input type="text" name="organisationName" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address</label>
              <textarea name="address" rows="3" required></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" required />
            </div>

          </div>
          <div className="checkbox-group1">
            <input type="checkbox" id="acceptTerms" required />
            <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
          </div>
          <Link to='/dashboardorg'>
            <button type="submit" className="register-btn">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterOrg;





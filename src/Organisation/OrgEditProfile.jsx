import React from 'react';
import '../Organisation/styleorg/OrgEditProfile.css';

function OrgEditProfile() {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2>Edit <span>Profile</span></h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Organisation Name</label>
              <input
                type="text"
                name="organisationName"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                minLength="10" pattern="\d+"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ width: '100%' }}>
              <label>Address</label>
              <textarea
                name="address"
                rows="3"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
              />
            </div>
          </div>

          {/* <div className="checkbox-group">
            <input
              type="checkbox"
              id="showPassword"
            />
            <label htmlFor="showPassword">Show Password</label>
          </div> */}

          <button type="submit" className="update-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default OrgEditProfile;




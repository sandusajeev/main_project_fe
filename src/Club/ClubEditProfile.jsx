import React, { useState } from 'react';
import '../Club/styleclub/ClubEditProfile.css';

function ClubEditProfile() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="editprofile-container">
      <div className="editprofile-card">
        <h3>Edit <span style={{ color: '#ffae00ce' }}>Club Profile</span></h3>
        <form className="form-animation">
          <div className="input-row">
            <div className="input-field">
              <label>Club Name</label>
              <input type="text" name="clubName" required />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-field">
              <label>Phone</label>
              <input type="tel" name="phone" minLength="10" pattern="\d+" required />
            </div>
            <div className="input-field">
              <label>Team Logo</label>
              <input type="file" accept="image/*" required/>
            </div>
          </div>

          <div className="input-field">
            <label>Address</label>
            <textarea name="address" rows="3" required></textarea>
          </div>

          <div className="input-row">
            <div className="input-field">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                minLength="8"
                required
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="input-field">
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                minLength="8"
                required
              />
            </div>
          </div>

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default ClubEditProfile;

import React, { useState } from 'react';
import '../style/RegisterClub.css';
import { Link } from 'react-router-dom';

function RegisterClub() {
  const [logoPreview, setLogoPreview] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  return (
    <div className="club-register-container">
      <div className="club-content-wrapper">
        {/* Left form section */}
        <div className="club-form-section">
          <div className="club-register-form">
            <div className="form-header text-center mb-4">
              <h2 className="fw-bold mb-2">
                Create Your <span className="text-warning">Club</span> Account
              </h2>
              <p className="text-muted">Register your team and start competing</p>
            </div>
            
            <form>
              <div className="row mb-1">
                <div className="col-6 mb-1">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="clubName" 
                      placeholder="Club Name"
                      required 
                    />
                    <label htmlFor="clubName">Club Name</label>
                  </div>
                </div>
                <div className="col-6 mb-1">
                  <div className="form-floating">
                    <input 
                      type="tel" 
                      className="form-control form-control-lg" 
                      id="phoneNumber" 
                      placeholder="Phone Number"
                      required 
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                </div>
              </div>

              {/* Email field - now on its own line */}
              <div className="mb-1">
                <div className="form-floating">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    placeholder="Email Address"
                    required 
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              {/* Logo field - now on its own line */}
              <div className="mb-1">
                <div className="logo-upload-container">
                  <label htmlFor="teamLogo" className="form-label mb-2">Team Logo</label>
                  <div className="logo-upload-wrapper">
                    <label className="logo-upload-label">
                      {logoPreview ? (
                        <div className="logo-preview-container">
                          <img 
                            src={logoPreview} 
                            alt="Team logo preview" 
                            className="logo-preview-image"
                          />
                          <span className="logo-change-text">Change Logo</span>
                        </div>
                      ) : (
                        <div className="logo-upload-placeholder">
                          <i className="bi bi-camera fs-4"></i>
                          <span>Click to upload logo (JPEG/PNG)</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        id="teamLogo" 
                        className="d-none" 
                        accept="image/jpeg, image/png"
                        onChange={handleLogoChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <div className="form-floating">
                  <textarea 
                    className="form-control form-control-lg" 
                    id="address" 
                    placeholder="Club Address"
                    style={{height: "100px"}}
                    required
                  ></textarea>
                  <label htmlFor="address">Club Address</label>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-md-6 mb-1">
                  <div className="form-floating">
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="password" 
                      placeholder="Password"
                      required 
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="col-md-6 mb-1">
                  <div className="form-floating">
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="confirmPassword" 
                      placeholder="Confirm Password"
                      required 
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                </div>
              </div>

              <div className="form-check mb-1">
                <input 
                  type="checkbox" 
                  className="form-check-input me-2" 
                  id="clubTerms" 
                  required 
                />
                <label className="form-check-label" htmlFor="clubTerms">
                  I accept the <a href="#" className="text-warning">Terms</a> and <a href="#" className="text-warning">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="btn btn-warning btn-lg w-10 mb-3 py-3 align-items-center">
                Register Club
              </button>
              
              <div className="text-center mt-1">
                <p className="text-muted mb-1">Already have an account?</p>
                <Link to="/login" className="btn btn-outline-warning btn-lg">
                  Sign In
                </Link>
              </div>

              <div className="divider my-1">
                <span className="divider-text">or</span>
              </div>

              <div className="text-center">
                <Link to="/registerorg" className="text-warning fw-semibold">
                  Register as Organizer
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right image section */}
        <div className="club-image-section">
          <div className="image-overlay">
            <h2 className="display-5 fw-bold text-white mb-3">Join the Competition</h2>
            <p className="lead text-light">Connect with teams and showcase your talent</p>
            <div className="features-list mt-4">
              <div className="feature-item">
                <i className="bi bi-trophy-fill me-2"></i>
                <span>Join in tournaments</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-people-fill me-2"></i>
                <span>Manage your team</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-calendar-event-fill me-2"></i>
                <span>Track your schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterClub;
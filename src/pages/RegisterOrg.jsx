import '../style/RegisterOrg.css';
import { Link } from 'react-router-dom';

function RegisterOrg() {
  return (
    <div className="register-page-container">
      <div className="register-content-wrapper">
        {/* Left form section */}
        <div className="form-section">
          <div className="register-form-container">
            <div className="form-header text-center mb-4">
              <h2 className="fw-bold mb-3">
                Create Your <span className="text-warning">Organizer</span> Account
              </h2>
              <p className="text-muted">Start managing your events in minutes</p>
            </div>

            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-1">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="organizerName"
                      placeholder="Organizer Name"
                      required
                    />
                    <label htmlFor="organizerName">Organizer Name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-1">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="mb-1">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    style={{ height: "100px" }}
                    required
                  ></textarea>
                  <label htmlFor="address">Address</label>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-md-6 mb-1">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
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
                  id="terms"
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <a href="#" className="text-warning">Terms and Conditions</a> and <a href="#" className="text-warning">Privacy Policy</a>
                </label>
              </div>
              <Link to="/dashboardorg/">
                <button type="submit" className="btn btn-warning btn-lg w-100 mb-1 py-3">
                  Create Account
                </button>
              </Link>

              <div className="text-center mt-1">
                <p className="text-muted mb-1">Already have an account?</p>
                <Link to="/login" className="btn btn-outline-warning">
                  Sign In
                </Link>
              </div>

              <div className="divider my-1">
                <span className="divider-text">or</span>
              </div>

              <div className="text-center text-warning">
                <Link to="/registerclub" className="text-warning">
                  Register as Club
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right image section */}
        <div className="image-section">
          <div className="image-overlay">
            <h2 className="display-5 fw-bold text-white mb-3">Event Management Made Easy</h2>
            <p className="lead text-light">Join thousands of organizers who trust our platform</p>
            <div className="features-list mt-5">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Easy event creation</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Real-time analytics</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>Secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOrg;
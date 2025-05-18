import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Organisation/styleorg/OrgEditProfile.css';

function OrgEditProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="org-edit-profile-container container-fluid">
      <div className="row w-100 m-0">
        {/* Left Column - Update Profile */}
        <div className="col-md-6 p-4">
          <div className="org-glass-card shadow org-slide-left">
            <h2 className="text-center mb-4 org-heading">Edit <span className="text-warning">Profile</span></h2>
            <form>
              <div className="mb-1">
                <label className="form-label fw-semibold">Organisation Name</label>
                <input type="text" className="form-control org-glass-input" required />
              </div>
              <div className="mb-1">
                <label className="form-label fw-semibold">Phone Number</label>
                <input type="tel" className="form-control org-glass-input" required />
              </div>
              <div className="mb-1">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control org-glass-input" required />
              </div>
              <div className="mb-1">
                <label className="form-label fw-semibold">Address</label>
                <textarea className="form-control org-glass-input" rows="4" required style={{ height: '100px' }}></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 py-3 fw-bold org-glass-btn">Update Profile</button>
            </form>
          </div>
        </div>

        {/* Right Column - Update Password */}
        <div className="col-md-6 p-4">
          <div className="org-glass-card shadow org-slide-right">
            <div className="d-flex align-items-start justify-content-between">
              <h3 className="mb-3 org-heading">Update <span className="text-warning">Password</span></h3>
              <button
                className="btn btn-outline-warning org-collapse-toggle"
                onClick={() => setOpen(!open)}
                aria-controls="collapsePasswordForm"
                aria-expanded={open}
              >
                <i className={`fa-solid ${open ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
              </button>
            </div>

            <Collapse in={open}>
              <div id="collapsePasswordForm">
                <form>
                  <div className="mb-1 mt-4">
                    <label className="form-label fw-semibold">Current Password</label>
                    <input type="password" className="form-control org-glass-input" required />
                  </div>
                  <div className="mb-1">
                    <label className="form-label fw-semibold">New Password</label>
                    <input type="password" className="form-control org-glass-input" required />
                  </div>
                  <div className="mb-1">
                    <label className="form-label fw-semibold">Confirm New Password</label>
                    <input type="password" className="form-control org-glass-input" required />
                  </div>
                  <button type="submit" className="btn btn-warning w-100 py-3 fw-bold org-glass-btn">
                    Update Password
                  </button>
                </form>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgEditProfile;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Organisation/styleorg/OrgUpdateEvents.css';

function OrgUpdateEvents() {
  return (
    <div className="org-event-container">
      <div className="org-event-wrapper">
        <div className="org-event-card p-5 rounded-4">
          <div className="org-event-header text-center mb-5">
            <h2 className="display-5 fw-bold">
              Update <span className="text-warning">Event</span>
            </h2>
            <p className="text-muted">Update your event details below</p>
          </div>

          <form className="needs-validation" noValidate>
            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control org-event-input" id="eventName" placeholder="Event Name" required />
                  <label htmlFor="eventName" className="fw-semibold">Event Name</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control org-event-input" id="category" placeholder="Category" required />
                  <label htmlFor="category" className="fw-semibold">Category</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="date" className="form-control org-event-input" id="startDate" required />
                  <label htmlFor="startDate" className="fw-semibold">Start Date</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="date" className="form-control org-event-input" id="endDate" required />
                  <label htmlFor="endDate" className="fw-semibold">End Date</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="time" className="form-control org-event-input" id="startTime" required />
                  <label htmlFor="startTime" className="fw-semibold">Start Time</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="time" className="form-control org-event-input" id="endTime" required />
                  <label htmlFor="endTime" className="fw-semibold">End Time</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="form-floating">
                <textarea className="form-control org-event-input" id="place" placeholder="Place" style={{ height: '100px' }} required></textarea>
                <label htmlFor="place" className="fw-semibold">Place</label>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control org-event-input" id="winnerPrize" placeholder="Winner Prize" />
                  <label htmlFor="winnerPrize" className="fw-semibold">Winner Prize</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control org-event-input" id="participationAge" placeholder="Eg: 17-30" />
                  <label htmlFor="participationAge" className="fw-semibold">Participation Age Range</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input type="number" className="form-control org-event-input" id="registrationFee" placeholder="Registration Fee (₹)" />
                  <label htmlFor="registrationFee" className="fw-semibold">Registration Fee (₹)</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="file" className="form-control org-event-input py-3" id="eventLogo" accept="image/*" />
                  <label htmlFor="eventLogo" className="form-label fw-semibold mb-3">Event Logo</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="form-floating">
                <input type="text" className="form-control org-event-input" id="winner" placeholder="Club Name (Optional)" />
                <label htmlFor="winner" className="fw-semibold">Winner (Club Name)</label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-warning btn-lg org-event-btn py-3 fw-bold">
                <i className="bi bi-calendar-check me-2"></i> Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrgUpdateEvents;



import React from 'react';
import '../Organisation/styleorg/OrgUpdateEvents.css';

function OrgUpdateEvents() {
  return (
    <div className="update-event-container">
      <div className="update-event-card">
        <h2>Update <span>Event</span></h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Event Name</label>
              <input type="text" name="eventName" required />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input type="text" name="category" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input type="date" name="startDate" required />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input type="date" name="endDate" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Time</label>
              <input type="time" name="startTime" required />
            </div>

            <div className="form-group">
              <label>End Time</label>
              <input type="time" name="endTime" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ width: '100%' }}>
              <label>Place</label>
              <textarea name="place" rows="3" required></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Winner Prize</label>
              <input type="text" name="winnerPrize" />
            </div>

            <div className="form-group">
              <label>Participation Age Range</label>
              <input type="text" name="participationAge" placeholder="Eg: 17-30" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Registration Fee (₹)</label>
              <input type="number" name="registrationFee" />
            </div>

            <div className="form-group">
              <label>Event Logo</label>
              <input type="file" accept="image/*" name="eventLogo" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ width: '100%' }}>
              <label>Winner (Club Name)</label>
              <input type="text" name="winner" placeholder="Optional: Club Name" />
            </div>
          </div>

          <button type="submit" className="update-btn">Update Event</button>
        </form>
      </div>
    </div>
  );
}

export default OrgUpdateEvents;

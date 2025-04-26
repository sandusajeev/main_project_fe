import React from 'react';
import '../Organisation/styleorg/OrgViewEvents.css';
import { Link } from 'react-router-dom';

function OrgViewEvents() {
  return (
    <div className="view-events-container">
      <h2>My <span>Created Events</span></h2>

      <div className="events-grid">
        <div className="event-card">
          <img
            src="https://img.freepik.com/premium-vector/football-soccer-tournament-with-ball-emblem-logo-championship-with-stadium_22052-2505.jpg"
            alt="Event Logo"
            className="event-logo"
          />
          <h3>Summer Football Tournament</h3>
          <p><strong>Category:</strong> Football</p>
          <p><strong>Date:</strong> 2025-05-10 to 2025-05-20</p>
          <p><strong>Time:</strong> 4:00 PM</p>
          <p><strong>Place:</strong> City Stadium</p>
          <p><strong>Winner Prize:</strong> ₹50,000</p>
          <p><strong>Age Range:</strong> 17-30</p>
          <p><strong>Registration Fee:</strong> ₹500</p>

          <div className="event-buttons">
          <Link to='/orgviewregclubs'>
            <button className="view-btn w-100">View Registered Clubs</button>
            </Link>
            <button className="update-btn">Update Event</button>
          </div>
        </div>

        <div className="event-card">
          <img
            src="https://img.freepik.com/premium-vector/badminton-tournament-logo_25327-227.jpg"
            alt="Event Logo"
            className="event-logo"
          />
          <h3>Badminton Championship</h3>
          <p><strong>Category:</strong> Badminton</p>
          <p><strong>Date:</strong> 2025-06-01 to 2025-06-05</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Place:</strong> Sports Complex</p>
          <p><strong>Winner Prize:</strong> ₹30,000</p>
          <p><strong>Age Range:</strong> 15-28</p>
          <p><strong>Registration Fee:</strong> ₹300</p>

          <div className="event-buttons">
            <Link to='/orgviewregclubs'>
            <button className="view-btn w-100">View Registered Clubs</button>
            </Link>
            <button className="update-btn">Update Event</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrgViewEvents;

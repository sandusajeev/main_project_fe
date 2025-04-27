import React from 'react';
import '../Club/styleclub/ClubViewRegEvents.css';
import { Link } from 'react-router-dom';

function ClubViewRegEvents() {
  return (
    <div className="reg-events-container">
      
      <Link to="/dashboardclub/clubhome">
        <button className="back-button bg-warning rounded p-2">
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </Link>

      <h2>View <span>Registered Events</span></h2>

      <div className="table-container">
        <table className="reg-events-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>Organisation Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Place</th>
              <th>Register Fee</th>
              <th>Download Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Summer Football Tournament</td>
              <td>ABCD Sports Org</td>
              <td>2025-05-10</td>
              <td>10:00 AM</td>
              <td>City Stadium</td>
              <td>₹500</td>
              <td>
                <button className="download-btn">Download</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Badminton Championship</td>
              <td>EFG</td>
              <td>2025-06-15</td>
              <td>2:00 PM</td>
              <td>Sports Arena</td>
              <td>₹300</td>
              <td>
                <button className="download-btn">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClubViewRegEvents;

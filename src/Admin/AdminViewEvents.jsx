import React from 'react';
import '../Admin/styleAdmin/AdminViewEvents.css';

function AdminViewEvents() {
  return (
    <div className="admin-events-container">
      <h1>View <span>Events</span></h1>

      <div className="admin-events-table-container">
        <table className="admin-events-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>Organisation Name</th>
              <th>Place</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Registration Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Football Fiesta</td>
              <td>Galaxy Sports Club</td>
              <td>New York</td>
              <td>2025-06-15</td>
              <td>10:00 AM</td>
              <td>$1000</td>
              <td>$50</td>
              <td><button className="delete-btn">Delete</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Basketball Bash</td>
              <td>Star Warriors</td>
              <td>Los Angeles</td>
              <td>2025-07-10</td>
              <td>2:00 PM</td>
              <td>$1500</td>
              <td>$75</td>
              <td><button className="delete-btn">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewEvents;

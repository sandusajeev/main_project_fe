import React from 'react';
import '../Organisation/styleorg/OrgViewRegClubs.css';
import { Link } from 'react-router-dom';

function OrgViewRegClubs() {
  return (
    <div className="reg-clubs-container">
        {/* Back Button */}
        <Link to="/orgviewevents">
      <button className="back-button bg-warning rounded p-2"><i class="fa-solid fa-arrow-left"></i>Back</button>
      </Link>
      <h2>Registered <span>Clubs</span></h2>

      <div className="table-container">
        <table className="reg-clubs-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>Club Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Registration Fee</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Summer Football Tournament</td>
              <td>City FC</td>
              <td>9876543210</td>
              <td>cityfc@example.com</td>
              <td>₹500</td>
              <td><span className="paid">Paid</span></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Badminton Championship</td>
              <td>Smashers Club</td>
              <td>9123456780</td>
              <td>smashers@example.com</td>
              <td>₹300</td>
              <td><span className="paid">Paid</span></td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrgViewRegClubs;

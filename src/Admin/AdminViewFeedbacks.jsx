import React from 'react';
import '../Admin/styleAdmin/AdminViewFeedbacks.css';

function AdminViewFeedbacks() {
  return (
    <div className="admin-feedbacks-container">
      <h1>View <span>Feedbacks</span></h1>

      <div className="admin-feedbacks-table-container">
        <table className="admin-feedbacks-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>City FC</td>
              <td>9876543210</td>
              <td>cityfc@example.com</td>
              <td>Great Platform</td>
              <td>MatchPass made tournament registration super easy!</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Smashers Club</td>
              <td>9123456780</td>
              <td>smashers@example.com</td>
              <td>User Friendly</td>
              <td>The dashboard is very smooth and easy to navigate.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewFeedbacks;

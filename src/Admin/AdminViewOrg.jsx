import React from 'react';
import '../Admin/styleAdmin/AdminViewOrg.css';

function AdminViewOrg() {
  return (
    <div className="admin-org-container">
      <h1>View Registered <span>Organisations</span></h1>

      <div className="admin-org-table-container">
        <table className="admin-org-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Organisation Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Sports United</td>
              <td>9876543210</td>
              <td>sportsunited@example.com</td>
              <td>123 Stadium Road, City</td>
              <td><button className="deactivate-btn">Deactivate</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Champions Club</td>
              <td>9123456780</td>
              <td>championsclub@example.com</td>
              <td>456 Arena Street, Town</td>
              <td><button className="deactivate-btn">Deactivate</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewOrg;

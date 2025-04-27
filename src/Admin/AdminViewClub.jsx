import React from 'react';
import '../Admin/styleAdmin/AdminViewClub.css';

function AdminViewClub() {
  return (
    <div className="admin-club-container">
      <h1>View Registered <span>Clubs</span></h1>

      <div className="admin-club-table-container">
        <table className="admin-club-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Club Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Star Warriors</td>
              <td>9876543210</td>
              <td>starwarriors@example.com</td>
              <td>12 Galaxy Street, Metro City</td>
              <td><button className="deactivate-btn">Deactivate</button></td>
            </tr>
            <tr>
              <td>02</td>
              <td>Thunder Bolts</td>
              <td>9123456789</td>
              <td>thunderbolts@example.com</td>
              <td>78 Lightning Avenue, Sports Town</td>
              <td><button className="deactivate-btn">Deactivate</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewClub;

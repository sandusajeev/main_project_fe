import React from 'react';
import '../Admin/styleAdmin/AdminHome.css';

function AdminHome() {
  return (
    <div className="admin-content">
      <h1>Welcome Admin</h1>
      <p>MatchPass is your ultimate sports tournament management system that simplifies the organisation, registration, and management of clubs and events. Keep track of everything effortlessly!</p>

      <h2>Users and Events</h2>

      <div className="admin-cards">
        <div className="admin-card">
          <h3>Organisations</h3>
          <p>10</p>
        </div>
        <div className="admin-card">
          <h3>Clubs</h3>
          <p>25</p>
        </div>
        <div className="admin-card">
          <h3>Events</h3>
          <p>15</p>
        </div>
      </div>
    </div>
  )
}

export default AdminHome;

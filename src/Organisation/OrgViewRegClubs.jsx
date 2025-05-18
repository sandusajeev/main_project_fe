import React from 'react';
import '../Organisation/styleorg/OrgViewRegClubs.css';
import { Link } from 'react-router-dom';

function OrgViewRegClubs() {
  return (
    <div className="container-fluid py-5 reg-clubs-container bg-white min-vh-100">
      <div className="container">

        <Link to="/dashboardorg/orgviewevents" className="btn btn-warning mb-4 shadow-sm">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Link>

        <h2 className="text-center fw-bold mb-5 text-white">Registered <span className="text-warning">Clubs</span></h2>

        <div className="table-responsive shadow-lg rounded overflow-hidden">
          <table className="table table-bordered table-hover text-center align-middle mb-0">
            <thead className="table-dark">
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
            <tbody className="table-light">
              <tr>
                <td>01</td>
                <td>Summer Football Tournament</td>
                <td>City FC</td>
                <td>9876543210</td>
                <td>cityfc@example.com</td>
                <td>₹500</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>
              <tr>
                <td>02</td>
                <td>Badminton Championship</td>
                <td>Smashers Club</td>
                <td>9123456780</td>
                <td>smashers@example.com</td>
                <td>₹300</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrgViewRegClubs;

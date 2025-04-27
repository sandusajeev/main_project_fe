import React from 'react';
import '../Club/styleclub/ClubHome.css';

function ClubHome() {

  return (
    <div className="club-home-container">
      <div className="left-section">
        <h1>Welcome to Your Club Home!</h1>
        <p>MatchPass is your go-to platform for managing sports tournaments, keeping your club updated, and registering teams for competitions. Lead your team to victory!</p>
      </div>

      <div className="right-section">
        <h2>Club Details</h2>
        <div className="details-box">
          <p><span>Club Name:</span> XYZ Football Club</p>
          <p><span>Email:</span> xyzclub@example.com</p>
          <p><span>Phone Number:</span> +91 9876543210</p>
          <p><span>Address:</span> Kochi, Kerala, India</p>
        </div>
      </div>
    </div>
  );
}

export default ClubHome;

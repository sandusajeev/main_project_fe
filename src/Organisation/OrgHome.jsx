import React from 'react';
import '../Organisation/styleorg/OrgHome.css';
import { Link } from 'react-router-dom';

function OrgHome() {
    const organisation = {
        name: 'ABC Sports Club',
        email: 'abcclub@example.com',
        phone: '+91 9876543210',
        address: 'Kochi, Kerala, India'
    };

    return (
        <div className="org-home-container">
            <div className="left-section">
                <div className="welcome-content">
                    <h1>Welcome Home!</h1>
                    <p className="welcome-text">MatchPass is your ultimate destination to manage, organize, and participate in sports tournaments effortlessly.  
                    Stay updated, register your teams, and lead your club to victory!</p>
                </div>
            </div>

            <div className="right-section">
                <div className="profile-card">
                    <h2>Organisation Profile</h2>
                    <div className="details-box">
                        <div className="detail-item">
                            <span className="detail-label">Name:</span>
                            <span className="detail-value">{organisation.name}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Email:</span>
                            <span className="detail-value">{organisation.email}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Phone:</span>
                            <span className="detail-value">{organisation.phone}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Address:</span>
                            <span className="detail-value">{organisation.address}</span>
                        </div>
                    </div>
                    <Link to='/dashboardorg/orgeditprofile'>
                    <button className="edit-btn">
                        Edit Profile
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrgHome;


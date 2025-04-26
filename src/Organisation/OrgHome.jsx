import React from 'react';
import '../Organisation/styleorg/OrgHome.css';

function OrgHome() {
    // Example data (you can fetch actual user data dynamically later)
    const organisation = {
        name: 'ABC Sports Club',
        email: 'abcclub@example.com',
        phone: '+91 9876543210',
        address: 'Kochi, Kerala, India'
    };

    return (
        <div className="org-home-container">
            <div className="left-section">
                <h1>Welcome Home!</h1>
                <p>MatchPass is your ultimate destination to manage, organize, and participate in sports tournaments effortlessly.  
                Stay updated, register your teams, and lead your club to victory!</p>
            </div>

            <div className="right-section">
                <h2>Organisation Details</h2>
                <div className="details-box">
                    <p><span>Organisation Name:</span> {organisation.name}</p>
                    <p><span>Email:</span> {organisation.email}</p>
                    <p><span>Phone Number:</span> {organisation.phone}</p>
                    <p><span>Address:</span> {organisation.address}</p>
                </div>
            </div>
        </div>
    );
}

export default OrgHome;


import React from 'react';
import '../Organisation/styleorg/OrgHome.css';

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
                <h1>Welcome Home!</h1>
                <p>MatchPass is your ultimate destination to manage, organize, and participate in sports tournaments effortlessly.  
                Stay updated, register your teams, and lead your club to victory!</p>
            </div>

            <div className="right-section">
                <h2>Organisation Details</h2>
                <div className="details-box">
                    <p><span>Organisation Name:</span> ABC Sports Club</p>
                    <p><span>Email:</span> abcclub@example.com</p>
                    <p><span>Phone Number:</span> +91 9876543210</p>
                    <p><span>Address:</span> Kochi, Kerala, India</p>
                </div>
            </div>
        </div>
    );
}

export default OrgHome;


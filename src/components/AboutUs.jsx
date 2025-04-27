import React from 'react';
import '../style/AboutUs.css';

function AboutUs() {
return (
    <div className="aboutus-container">
        <h1>About <span>Us</span></h1>

        <div className="aboutus-grid">
            <div className="aboutus-block">
                <h2>MatchPass</h2>
                <p className='text-justify'>MatchPass is a powerful sports tournament management system designed to simplify the organization, registration, and management of clubs, events, and tournaments, ensuring a smooth experience for everyone involved.</p>
            </div>

            <div className="aboutus-block">
                <h2>Admin</h2>
                <p className='text-justify'>The Admin has full control over the platform, ensuring smooth operations by managing users, monitoring events, handling feedback, and maintaining the integrity and security of the system.</p>
            </div>

            <div className="aboutus-block">
                <h2>Organisation</h2>
                <p className='text-justify'>Organisations are the heart of MatchPass. They are responsible for creating tournaments and events, handling registrations, and communicating essential details to clubs and participants.</p>
            </div>

            <div className="aboutus-block">
                <h2>Clubs</h2>
                <p className='text-justify'>Clubs participate in tournaments and events organized through MatchPass. They can register for events, edit their profiles, and provide feedback to enhance the platform's quality.</p>
            </div>

            <div className="aboutus-block">
                <h2>Events</h2>
                <p className='text-justify'>Events represent the tournaments organized by Organisations, containing vital details such as location, date, time, and registration information, allowing clubs to easily participate.</p>
            </div>

            <div className="aboutus-block">
                <h2>Event Registration</h2>
                <p className='text-justify'>Event registration is made simple and quick through MatchPass, allowing clubs to easily browse available tournaments and register their teams with just a few clicks.</p>
            </div>
        </div>
    </div>
);
}

export default AboutUs;

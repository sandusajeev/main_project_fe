import React from 'react';
import '../Club/styleclub/ClubViewEvents.css';
import { Link } from 'react-router-dom';

function ClubViewEvents() {
    return (
        <div className="club-view-events-container">
            <h2>Available <span>Events</span></h2>

            <div className="search-bar">
                <input type="text" placeholder="Search events..." className="search-input" />
                <button className="search-btn">Search</button>
            </div>

            <div className="events-grid">
                <div className="event-card">
                    <img
                        src="https://img.freepik.com/premium-vector/football-soccer-tournament-with-ball-emblem-logo-championship-with-stadium_22052-2505.jpg"
                        alt="Football Event"
                        className="event-logo"
                    />
                    <div className='event-details-main'>
                        <h3>Summer Football Tournament</h3>
                        <div className="event-details">
                            <p><strong>Category:</strong> Football</p>
                            <p><strong>Date:</strong> 2025-05-10 to 2025-05-20</p>
                            <p><strong>Time:</strong> 4:00 PM</p>
                            <p><strong>Place:</strong> City Stadium, Ernakulam</p>
                            <p><strong>Winner Prize:</strong> ₹50,000</p>
                            <p><strong>Age Range:</strong> 17-30</p>
                            <p><strong>Registration Fee:</strong> ₹500</p>
                        </div>
                    </div>
                    <div className="event-buttons">
                        <Link to="/dashboardclub/clubregisterevents">
                            <button className="register-btn">Register Now</button>
                        </Link>
                    </div>
                </div>

                <div className="event-card">
                    <img
                        src="https://img.freepik.com/premium-vector/badminton-tournament-logo_25327-227.jpg"
                        alt="Badminton Event"
                        className="event-logo"
                    />
                    <div className='event-details-main'>
                        <h3>Badminton Championship</h3>
                        <div className="event-details">
                            <p><strong>Category:</strong> Badminton</p>
                            <p><strong>Date:</strong> 2025-06-01 to 2025-06-05</p>
                            <p><strong>Time:</strong> 10:00 AM</p>
                            <p><strong>Place:</strong> Sports Complex, Kottayam</p>
                            <p><strong>Winner Prize:</strong> ₹30,000</p>
                            <p><strong>Age Range:</strong> 15-28</p>
                            <p><strong>Registration Fee:</strong> ₹300</p>
                        </div>
                    </div>
                    <div className="event-buttons">
                        <Link to="/dashboardclub/clubregisterevents">
                            <button className="register-btn">Register Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ClubViewEvents;



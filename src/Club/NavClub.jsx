import React from 'react'
import { Link } from 'react-router-dom';
import '../Club/styleclub/NavClub.css';

function NavClub() {
  return (
    <>
            <nav className="nav-container">
            <div className="nav-left">
                <ul className="nav-links">
                    <li><Link to="/dashboardclub/clubhome" className="nav-link">HOME</Link></li>
                    <li><Link to="/dashboardclub/clubeditprofile" className="nav-link">EDIT PROFILE</Link></li>
                    <li><Link to="/dashboardclub/clubviewevents" className="nav-link">VIEW EVENTS</Link></li>
                    <li><Link to="/dashboardclub/clubviewregevents" className="nav-link">VIEW REGISTERED EVENTS</Link></li>
                    <li><Link to="/dashboardclub/clubaddfeedback" className="nav-link">ADD FEEDBACK</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Link to="/" className="nav-link-log">
                    <button className="logout-button">LOGOUT</button>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default NavClub

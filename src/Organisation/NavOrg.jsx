import React from 'react';
import { Link } from 'react-router-dom';
import '../Organisation/styleorg/NavOrg.css';

function NavOrg() {
    return (
        <nav className="nav-container">
            <div className="nav-left">
                <ul className="nav-links">
                    <li><Link to="/dashboardorg/orghome" className="nav-link">HOME</Link></li>
                    <li><Link to="/dashboardorg/orgeditprofile" className="nav-link">EDIT PROFILE</Link></li>
                    <li><Link to="/dashboardorg/orgcreateevent" className="nav-link">ADD EVENTS</Link></li>
                    <li><Link to="/dashboardorg/orgviewevents" className="nav-link">VIEW EVENTS</Link></li>
                    <li><Link to="/dashboardorg/orgaddfeedback" className="nav-link">ADD FEEDBACK</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <Link to="/" className="nav-link-log">
                    <button className="logout-button">LOGOUT</button>
                </Link>
            </div>
        </nav>
    );
}


export default NavOrg;


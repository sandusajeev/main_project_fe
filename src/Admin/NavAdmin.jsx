import React from 'react';
import { Link } from 'react-router-dom';
import '../Admin/styleAdmin/NavAdmin.css';

function NavAdmin() {
  return (
    <>
      <nav className="navadmin-container">
        <div className="navadmin-links">
          <ul>
            <li><Link to="/dashboardadmin/adminhome" className="navadmin-link">HOME</Link></li>
            <li><Link to="/dashboardadmin/adminvieworg" className="navadmin-link">VIEW ORGANISATIONS</Link></li>
            <li><Link to="/dashboardadmin/adminviewclub" className="navadmin-link">VIEW CLUBS</Link></li>
            <li><Link to="/dashboardadmin/adminviewevents" className="navadmin-link">VIEW EVENTS</Link></li>
            <li><Link to="/dashboardadmin/adminviewfeedbacks" className="navadmin-link">VIEW FEEDBACKS</Link></li>
          </ul>
        </div>
        <div className="navadmin-logout">
          <Link to="/" className="navadmin-link-logout">
            <button className="logoutadmin-button">LOGOUT</button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavAdmin;

import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function Footer() {
  return (
    <div className='footer bg-black text-white py-5' style={{ width: '100%' }}>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-md-3 mb-4'>
            <h5>
              <i className="fa-solid fa-ticket me-3 text-warning"></i>
              <span style={{ fontWeight: '700' }}>MATCH PASS</span>
            </h5>
            <p style={{ textAlign: "justify" }}>
              Unlock the world of gaming,<br />
              Dive into endless adventures. <br />
              One pass, countless experiences. <br />
              Welcome to Match Pass.
            </p>
          </div>

          <div className='col-md-3 mb-4'>
            <h6 style={{ fontWeight: '700' }}>GOTO</h6>
            <div className="d-flex flex-column gap-2 mt-2">
              <Link to="/" style={{ textDecoration: 'none', color: "white" }}>HOME</Link>
              <Link to="/contactus" style={{ textDecoration: 'none', color: "white" }}>CONTACT US</Link>
              <Link to="/dashboardorg/orgaddfeedback" style={{ textDecoration: 'none', color: "white" }}>FEEDBACK</Link>
            </div>
          </div>

          <div className='col-md-3 mb-4'>
            <h6 style={{ fontWeight: '700' }}>PAGES</h6>
            <div className="d-flex flex-column gap-2 mt-2">
              <Link to="/dashboardadmin" style={{ textDecoration: 'none', color: "white" }}>ADMIN</Link>
              <Link to="/dashboardorg" style={{ textDecoration: 'none', color: "white" }}>ORGANISATION</Link>
              <Link to="/dashboardclub" style={{ textDecoration: 'none', color: "white" }}>CLUB</Link>
            </div>
          </div>

          <div className='col-md-3 mb-4'>
            <h6 style={{ fontWeight: '700' }}>FOLLOW US ON</h6>
            <div className="d-flex gap-3 mt-3" id='contact'>
              <i className="fa-brands fa-instagram fa-2x footer-icon"></i>
              <i className="fa-brands fa-twitter fa-2x footer-icon"></i>
              <i className="fa-brands fa-whatsapp fa-2x footer-icon"></i>
              <i className="fa-brands fa-reddit fa-2x footer-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='w-100 d-flex justify-content-center align-items-center '>
        <p className=''>© 2025 Sandu Sajeev. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;



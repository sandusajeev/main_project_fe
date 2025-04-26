import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Carousel Section */}
      <div className='main w-100'>
        <div className="carousel-overlay-text">
          <h1>Welcome to MatchPass</h1>
          <p>Manage. Play. Win.</p>
          {/* Login Button under the text */}
          <Link to="/login" style={{ textDecoration: 'none', color: "white" }}>
          <button className='login_btn mt-3'>LOGIN</button>
          </Link>
        </div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/football-field-training-players-with-soccer-ball-free-photo.jpg?w=2210&quality=70" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702096.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://wallpapercave.com/wp/wp9783210.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div className='w-100' id='second_main'>
        <h2 className='join-heading text-center'>Join Us Today</h2>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 glass-box d-flex flex-column justify-content-center align-items-center' id='register_div'>
              <p style={{color:'black'}}>Don't have an Account?</p>
              <div className='d-flex justify-content-center'>
              <Link to="/registerorg" style={{ textDecoration: 'none', color: "white" }}>
                <button className='reg_btn me-2'>Register as Organisation</button>
                </Link>
                <Link to="/registerclub" style={{ textDecoration: 'none', color: "white" }}>
                <button className='reg_btn'>Register as Club</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className='w-100' id='thrid_main'>
        <div className='about-background'>
          <div className='about-inner'>
            <h2>ABOUT US</h2>
            <p>
              Welcome to MatchPass, your all-in-one Sports Tournament Management platform! Designed to streamline the organization of sports events, MatchPass empowers teams, players, and organizers with seamless match scheduling, team management. Whether it's a local football league or a statewide cricket tournament, MatchPass ensures smooth coordination and engaging experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

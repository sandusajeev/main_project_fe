import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

      <div className='main w-100'>
        <div className="carousel-overlay-text">
          <h1>Welcome to MatchPass</h1>
          <p>Manage. Play. Win.</p>

          <Link to="/login" style={{ textDecoration: 'none', color: "white" }}>
            <button className='login_btn mt-3'>GET STARTED</button>
          </Link>
        </div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702096.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://papers.co/wallpaper/papers.co-ay18-tennis-girl-blue-sports-illustration-art-flare-36-3840x2400-4k-wallpaper.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>


{/* Register Section */}
<div className="w-100" id="second_main">
  <div className="container-fluid d-flex" id="register-wrapper">
    
    {/* Left side clipped image */}
    <div className="register-image-section">
      <img src="/src/assets/registernow.png" alt="Register" className="register-image" />
    </div>

    {/* Right side glassy box */}
    <div className="register-content-section">
      <div className="content-wrapper text-center">

        {/* Join Us Heading Outside */}
        <h2 className="join-heading">Join Us Today</h2>

        <div className="register-box">
          <p className="account-text">Don't have an Account?</p>
          <div className="button-group">
            <Link to="/registerorg" style={{ textDecoration: 'none' }}>
              <button className="reg_btn">Register as Organisation</button>
            </Link>
            <Link to="/registerclub" style={{ textDecoration: 'none' }}>
              <button className="reg_btn">Register as Club</button>
            </Link>
          </div>
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

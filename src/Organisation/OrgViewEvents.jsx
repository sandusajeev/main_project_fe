import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Organisation/styleorg/OrgViewEvents.css';

function OrgViewEvents() {
  const events = [
    {
      title: 'Summer Football Tournament',
      category: 'Football',
      date: '2025-05-10 to 2025-05-20',
      time: '4:00 PM',
      place: 'City Stadium, Ernakulam',
      prize: '₹50,000',
      ageRange: '17-30',
      fee: '₹500',
      image:
        'https://img.freepik.com/premium-vector/football-soccer-tournament-with-ball-emblem-logo-championship-with-stadium_22052-2505.jpg',
    },
    {
      title: 'Badminton Championship',
      category: 'Badminton',
      date: '2025-06-01 to 2025-06-05',
      time: '10:00 AM',
      place: 'Sports Complex, Kottayam',
      prize: '₹30,000',
      ageRange: '15-28',
      fee: '₹300',
      image:
        'https://img.freepik.com/premium-vector/badminton-tournament-logo_25327-227.jpg',
    },
    {
      title: 'Cricket League Cup',
      category: 'Cricket',
      date: '2025-07-15 to 2025-07-30',
      time: '9:00 AM',
      place: 'Green Field, Trivandrum',
      prize: '₹1,00,000',
      ageRange: '18-35',
      fee: '₹1000',
      image:
        'https://img.freepik.com/premium-vector/cricket-tournament-logo_25327-225.jpg',
    },
    {
      title: 'Volleyball Challenge',
      category: 'Volleyball',
      date: '2025-08-05 to 2025-08-10',
      time: '6:00 PM',
      place: 'Beach Court, Calicut',
      prize: '₹40,000',
      ageRange: '16-29',
      fee: '₹400',
      image:
        'https://img.freepik.com/premium-vector/volleyball-tournament-logo_25327-231.jpg',
    },
  ];

  return (
    <div className="org-events-wrapper">
      <Container>
        <h2 className="text-center text-white mb-5">
          My <span className="highlight-title">Created Events</span>
        </h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {events.map((event, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-lg event-card-bootstrap">
                <Card.Img
                  variant="top"
                  src={event.image}
                  alt="event"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="text-primary">{event.title}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {event.category} <br />
                    <strong>Date:</strong> {event.date} <br />
                    <strong>Time:</strong> {event.time} <br />
                    <strong>Place:</strong> {event.place} <br />
                    <strong>Prize:</strong> {event.prize} <br />
                    <strong>Age Range:</strong> {event.ageRange} <br />
                    <strong>Fee:</strong> {event.fee}
                  </Card.Text>
                  <div className="d-grid gap-2 mt-3">
                    <Link to="/dashboardorg/orgviewregclubs">
                      <Button variant="success" size="sm">
                        View Registered Clubs
                      </Button>
                    </Link>
                    <Link to="/dashboardorg/orgupdateevents">
                      <Button variant="warning" size="sm">
                        Update Event
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OrgViewEvents;

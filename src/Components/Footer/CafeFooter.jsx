import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { FiCoffee, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'
import './CafeFooter.css'

export default function CafeFooter() {
  return (
    <footer className="cafe-footer">
      <Container>
        <Row className="gy-5">
          <Col lg={4}>
            <div className="footer-brand"><FiCoffee /> brew A bean</div>
            <p className="footer-copy">Good coffee, good company, and little moments worth slowing down for. Find your favourite corner at Brew & Bean.</p>
            <div className="footer-social"><a href="" aria-label="Instagram"><FaInstagram /></a><a href="" aria-label="Facebook"><FaFacebookF /></a><a href="" aria-label="Pinterest"><FaPinterestP /></a></div>
          </Col>
          <Col sm={6} lg={2}>
            <h5>Explore</h5>
            <Nav className="flex-column footer-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">Our story</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our menu</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/reservation">Reservations</Nav.Link>
            </Nav>
          </Col>
          <Col sm={6} lg={3}>
            <h5>Find us</h5>
            <p><FiMapPin /> navalur, Chennai, Tamil Nadu</p>
            <p><FiPhone /> +91 0000000000</p>
            <p><FiMail /> vasan@gmail.example</p>
          </Col>
          <Col lg={3}>
            <h5>Opening hours</h5>
            <p><FiClock /> Monday - Friday<br /><span>8:00 AM - 9:00 PM</span></p>
            <p><FiClock /> Saturday - Sunday<br /><span>9:00 AM - 10:00 PM</span></p>
          </Col>
        </Row>
        <div className="footer-bottom">© 2026 Brew A Bean Coffee House. Made for coffee haters.</div>
      </Container>
    </footer>
  )
}

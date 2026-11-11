import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { FiCoffee } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import './CafeNavbar.css'

export default function CafeNavbar() {
  return (
    <Navbar expand="lg" className="cafe-nav sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-mark">
          <span className="brand-icon"><FiCoffee /></span>
          <span>brew A bean
            {/* <small>ARTISAN COFFEE HOUSE</small> */}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="cafe-navigation" />
        <Navbar.Collapse id="cafe-navigation">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">KNOW ME</Nav.Link>
            <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/reservation" className="nav-reserve">BOOK A TABLE <FaArrowRight /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

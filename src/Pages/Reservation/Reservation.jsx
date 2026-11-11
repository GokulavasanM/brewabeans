import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FiCheckCircle, FiCoffee } from 'react-icons/fi'
import './Reservation.css'

export default function Reservation() {
  const [validated, setValidated] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setSubmitted(false)
    } else {
      setSubmitted(true)
      form.reset()
    }
    setValidated(true)
  }

  return (
    <div className="reservation-page">
      <section className="page-hero reservation-hero"><Container><p className="eyebrow">SAVE YOURSELF A SEAT</p><h1>Your table is waiting.</h1><p className="section-copy">Planning a catch-up, a quiet coffee date or a little celebration? We'd love to host you.</p></Container></section>
      <section className="section-pad">
        <Container>
          <Row className="g-5 align-items-start">
            <Col lg={5}>
              <p className="eyebrow">A GOOD TIME, GUARANTEED</p><h2 className="section-title">Make it a coffee date.</h2>
              <p className="section-copy">Fill in the details and our team can prepare a cosy spot for your visit. This demo form shows front-end validation only.</p>
              <div className="reservation-perk"><FiCheckCircle /><span>Comfortable seating for friends and family</span></div>
              <div className="reservation-perk"><FiCheckCircle /><span>Freshly brewed coffee and bakery favourites</span></div>
              <div className="reservation-perk"><FiCheckCircle /><span>A relaxed space for your everyday moments</span></div>
              <div className="reservation-photo"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85" alt="Warm cafe table set for guests" /><span><FiCoffee /> YOUR CORNER OF COMFORT</span></div>
            </Col>
            <Col lg={7}>
              <div className="reservation-form">
                <p className="eyebrow">BOOK A TABLE</p><h2 className="section-title">Let's plan your visit.</h2>
                {submitted && <div className="success-message" role="status">Your reservation request is ready! This demo does not send bookings to a server.</div>}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}><Form.Group><Form.Label>Full name *</Form.Label><Form.Control required type="text" placeholder="Your name" /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label>Phone number *</Form.Label><Form.Control required type="tel" pattern="[0-9+() -]{8,15}" placeholder="+91" /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label>Email address *</Form.Label><Form.Control required type="email" placeholder="name@example.com" /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label>Number of guests *</Form.Label><Form.Select required defaultValue=""><option value="" disabled>Select guests</option><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6+ guests</option></Form.Select></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label>Date *</Form.Label><Form.Control required type="date" min={new Date().toISOString().split('T')[0]} /></Form.Group></Col>
                    <Col md={6}><Form.Group><Form.Label>Preferred time *</Form.Label><Form.Select required defaultValue=""><option value="" disabled>Choose a time</option><option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>1:00 PM</option><option>3:00 PM</option><option>5:00 PM</option><option>6:00 PM</option><option>7:00 PM</option><option>8:00 PM</option></Form.Select></Form.Group></Col>
                    <Col xs={12}><Form.Group><Form.Label>Anything we should know?</Form.Label><Form.Control as="textarea" rows={3} placeholder="A special request (optional)" /></Form.Group></Col>
                    <Col xs={12}><Button type="submit" className="form-submit">Request a table</Button></Col>
                  </Row>
                </Form>
                <p className="form-note">Submitting this form will not create a real booking. A backend service would be needed for that.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

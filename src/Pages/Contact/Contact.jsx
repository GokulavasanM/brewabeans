import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [validated, setValidated] = useState(false)
  const [submitted, setSubmitted] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget

    if (form.checkValidity() === false) {
        event.stopPropagation()
    } else {
        const formData = new FormData(form)

        const contactDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            topic: formData.get('topic'),
            message: formData.get('message')
        }

        console.log("Contact Form Submitted:", contactDetails)

        setSubmitted(true)
        form.reset()
        setValidated(false)
        return
    }

    setValidated(true)
}

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero"><Container><p className="eyebrow">SAY HELLO</p><h1>We'd love to hear from you.</h1><p className="section-copy">Questions, feedback or just want to talk coffee? Drop us a note.</p></Container></section>
      <section className="section-pad">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <p className="eyebrow">COME BY FOR A CUP</p><h2 className="section-title">Find your way to us.</h2>
              <p className="section-copy">Our doors are open for good coffee and good company. Stop by whenever you're around.</p>
              <div className="contact-detail"><FiMapPin /><div><strong>Visit us</strong><span>navalur, Chennai, Tamil Nadu</span></div></div>
              <div className="contact-detail"><FiPhone /><div><strong>Call us</strong><span>+91 0000000000</span></div></div>
              <div className="contact-detail"><FiMail /><div><strong>Email us</strong><span>vasan@gmail.com</span></div></div>
              <div className="contact-detail"><FiClock /><div><strong>Opening hours</strong><span>Mon-Fri: 8 AM-9 PM · Sat-Sun: 9 AM-10 PM</span></div></div>
              <img className="contact-photo" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85" alt="Coffee shop seating area" />
            </Col>
            <Col lg={7}>
              <div className="contact-form-wrap">
                <p className="eyebrow">SEND A MESSAGE</p><h2 className="section-title">Let's talk.</h2>
                {submitted && <div className="success-message" role="status">Thanks for reaching out! Your demo message has been received.</div>}
                
<Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="g-3">

        <Col md={6}>
            <Form.Group>
                <Form.Label>Your name *</Form.Label>
                <Form.Control
                    required
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    minLength={2}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter your name (at least 2 characters).
                </Form.Control.Feedback>
            </Form.Group>
        </Col>

        <Col md={6}>
            <Form.Group>
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                </Form.Control.Feedback>
            </Form.Group>
        </Col>

        <Col xs={12}>
            <Form.Group>
                <Form.Label>What's this about? *</Form.Label>
                <Form.Select required  name="topic"
                defaultValue="">
                    <option value="" disabled>Select a topic</option>
                    <option>Menu enquiry</option>
                    <option>Event or catering</option>
                    <option>Feedback</option>
                    <option>Something else</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Please select a topic.
                </Form.Control.Feedback>
            </Form.Group>
        </Col>

        <Col xs={12}>
            <Form.Group>
                <Form.Label>Your message *</Form.Label>
                <Form.Control
                    required
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here..."
                    minLength={10}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter at least 10 characters.
                </Form.Control.Feedback>
            </Form.Group>
        </Col>

        <Col xs={12}>
            <Button type="submit" className="form-submit">
                Send message
            </Button>
        </Col>

    </Row>
</Form>

                <p className="form-note"></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

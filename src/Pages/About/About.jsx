import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiCoffee, FiHeart, FiSun} from 'react-icons/fi'
import { GiCoffeeBeans } from 'react-icons/gi'
import FeatureCard from '../../Common Design/FeatureCard'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <Container>
          <p className="eyebrow">OUR STORY</p>
          <h1>Rooted in good coffee.<br /><em>Made for good company.</em></h1>
          <p className="section-copy">A neighbourhood coffee house with a simple idea: make every cup and every visit feel special.</p>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}><img className="about-photo" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Warm and welcoming coffee shop interior" /></Col>
            <Col lg={6}>
              <p className="eyebrow">HOW IT STARTED</p>
              <h2 className="section-title">Coffee tastes better when there's a story behind it.</h2>
              <p className="section-copy">Brew & Bean began with a love for beautifully simple coffee. We wanted to create a place where beans are chosen with care, drinks are made with patience and everyone feels welcome.</p>
              <p className="section-copy">Today, that same idea guides everything we do — from the first grind in the morning to the last cup of the day.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-pad soft-section">
        <Container>
          <div className="text-center mb-5"><p className="eyebrow">WHAT MATTERS TO US</p><h2 className="section-title">The little things make the difference.</h2></div>
          <Row className="g-3">
            <Col md={3}><FeatureCard icon={<FiCoffee />} title="Quality first" para="Thoughtfully selected beans and carefully prepared drinks." /></Col>
            <Col md={3}><FeatureCard icon={<FiHeart />} title="Warm welcome" para="A friendly space where everyone has a place." /></Col>
            <Col md={3}><FeatureCard icon={<GiCoffeeBeans />} title="Mindful choices" para="We look for better ways to source and serve." /></Col>
            <Col md={3}><FeatureCard icon={<FiSun />} title="Everyday joy" para="Small moments, good conversations and great coffee." /></Col>
          </Row>
        </Container>
      </section>
      <section className="about-quote"><Container><h2>“A good cup can turn an ordinary day into a lovely one.”</h2><p>— THE BREW & BEAN WAY</p></Container></section>
    </div>
  )
}

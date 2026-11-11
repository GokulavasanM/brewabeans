import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { FiCoffee, FiHeart, FiClock, FiAward } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import FeatureCard from '../../Common Design/FeatureCard'
import MenuCard from '../../Common Design/MenuCard'
import OrderButton from '../../Common Design/OrderButton'
import './Home.css'

const coffeeItems = [
  { image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=85', title: 'Filter',  price: '₹80', tag: 'Bestseller' },
  { image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85', title: 'Filter Latte', tag: 'Chilled favourite' },
  { image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', title: 'Filter Pour Over', tag: 'Hand brewed' },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-shade" />
        <Container className="hero-content">
          <Row>
            <Col lg={7}>
              <p className="hero-kicker"><FiCoffee /> FRESHLY ROASTED. THOUGHTFULLY BREWED.</p>
              <h1>Your daily cup<br />of <em>something</em> good.</h1>
              <p className="hero-description">Slow down, sip something beautiful, and make room for the little moments. Your favourite coffee corner is waiting.</p>
              <div className="d-flex flex-wrap gap-3">
                <OrderButton content="Explore our menu" onClick={() => navigate('/menu')} variant="light" />
                <button className="hero-text-link" onClick={() => navigate('/about')}>OUR STORY <FaArrowRight /></button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-note">SMALL BATCH ROASTED · BIG ON FLAVOUR</div>
      </section>

      <section className="home-features">
        <Container>
          <Row className="g-3">
            <Col md={4}><FeatureCard icon={<FiCoffee />} title="Made with care" para="Every cup is prepared fresh by people who genuinely love coffee." /></Col>
            <Col md={4}><FeatureCard icon={<FiHeart />} title="Locally loved" para="A relaxed neighbourhood space for familiar faces and new friends." /></Col>
            <Col md={4}><FeatureCard icon={<FiClock />} title="Your kind of pace" para="Drop in for a quick espresso or stay a little longer. No rush." /></Col>
          </Row>
        </Container>
      </section>

      <section className="section-pad home-menu">
        <Container>
          <div className="section-heading text-center">
            <p className="eyebrow">A FEW HOUSE FAVOURITES</p>
            <h2 className="section-title">Good things are brewing.</h2>
            <p className="section-copy">A little look at the cups our regulars come back for.</p>
          </div>
          <Row className="g-4 mt-3">
            {coffeeItems.map((item) => <Col md={4} key={item.title}><MenuCard {...item} /></Col>)}
          </Row>
          <div className="text-center mt-5"><OrderButton content="View the full menu" onClick={() => navigate('/menu')} /></div>
        </Container>
      </section>

      <section className="home-story">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}><img className="story-image" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85" alt="Barista preparing a fresh coffee" /></Col>
            <Col lg={6}>
              <p className="eyebrow">MORE THAN JUST COFFEE</p>
              <h2 className="section-title">A little pause in your busy day.</h2>
              <p className="section-copy">We believe the best conversations happen over a good cup. That's why we bring together carefully sourced beans, thoughtful brewing and a welcoming space that feels like yours.</p>
              <OrderButton content="Get to know us" onClick={() => navigate('/about')} />
              <div className="story-signoff"><FiAward /> GOOD BEANS. GOOD PEOPLE. GOOD DAYS.</div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

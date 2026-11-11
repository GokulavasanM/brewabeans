import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MenuCard from '../../Common Design/MenuCard'
import './Menu.css'

const drinks = [
  { image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=85', title: 'Filter',  price: '₹120' },
  { image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85', title: 'premium Filter',  price: '₹170' },
  { image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85', title: 'authentic Filter',  price: '₹180', },
  { image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85', title: 'Filter latte',  price: '₹190' },
  { image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85', title: 'Standard filter',  price: '₹200' },
  { image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', title: 'large filter', price: '₹160', },
]
const bites = [
  { image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85', title: 'Butter bread',  price: '₹130' },
  { image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=900&q=85', title: 'Chocolate Brownie', price: '₹150' },
  { image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85', title: 'Bread jam ', price: '₹210' },
]

export default function Menu() {
  return (
    <div className="menu-page">
      <section className="page-hero menu-hero"><Container><p className="eyebrow">MADE FRESH, SERVED WITH LOVE</p><h1>Our menu</h1><p className="section-copy">Find your familiar favourite or discover a new one.</p></Container></section>
      <section className="section-pad">
        <Container>
          <div className="menu-section-heading"><div><p className="eyebrow">BREWED TO ORDER</p><h2 className="section-title">Coffee & more</h2></div><p className="section-copy">From bold and simple to smooth and sweet, there's a cup for every kind of day.</p></div>
          <Row className="g-4 mt-2">{drinks.map((item) => <Col sm={6} lg={4} key={item.title}><MenuCard {...item} /></Col>)}</Row>
        </Container>
      </section>
      <section className="section-pad soft-section">
        <Container>
          <div className="menu-section-heading"><div><p className="eyebrow">A LITTLE SOMETHING TO EAT</p><h2 className="section-title">Bakery & bites</h2></div><p className="section-copy">The perfect companions to your favourite coffee.</p></div>
          <Row className="g-4 mt-2">{bites.map((item) => <Col sm={6} lg={4} key={item.title}><MenuCard {...item} /></Col>)}</Row>
          <p className="menu-note"></p>
        </Container>
      </section>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import CafeNavbar from './Components/Header/CafeNavbar'
import CafeFooter from './Components/Footer/CafeFooter'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Menu from './Pages/Menu/Menu'
import Contact from './Pages/Contact/Contact'
import Reservation from './Pages/Reservation/Reservation'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <CafeNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      <CafeFooter />
    </div>
  )
}

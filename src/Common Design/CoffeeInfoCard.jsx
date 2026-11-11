import './common.css'

export default function CoffeeInfoCard({ icon, content }) {
  return (
    <div className="coffee-info-card">
      <div className="coffee-info-icon">{icon}</div>
      <p>{content}</p>
    </div>
  )
}

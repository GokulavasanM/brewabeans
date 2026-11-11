import './common.css'

export default function FeatureCard({ icon, title, para }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  )
}

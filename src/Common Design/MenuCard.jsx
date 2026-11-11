import './common.css'

export default function MenuCard({ image, title, description, price, tag }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={image} alt={title} />
        {tag && <span>{tag}</span>}
      </div>
      <div className="menu-card-body">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h3>{title}</h3>
          <strong>{price}</strong>
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

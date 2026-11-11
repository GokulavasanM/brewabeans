import Button from 'react-bootstrap/Button'
import './common.css'

export default function OrderButton({ content = 'Explore more', onClick, variant = 'dark' }) {
  return <Button onClick={onClick} className={`order-button ${variant === 'light' ? 'order-button-light' : ''}`}>{content}</Button>
}

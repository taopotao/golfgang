import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="card" style={{ maxWidth: 420, marginInline: 'auto', marginTop: '3rem' }}>
      <h1>404</h1>
      <p className="helper-text" style={{ marginTop: '0.4rem' }}>
        That page doesn&apos;t exist. Head back to the calendar.
      </p>
      <Link to="/" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
        Back to calendar
      </Link>
    </div>
  )
}

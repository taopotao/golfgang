import { Link } from 'react-router-dom'

export default function EventCard({ event, counts }) {
  const date = event.date?.toDate ? event.date.toDate() : null

  return (
    <div className="surface" style={{ padding: '0.85rem 0.9rem', marginBottom: '0.4rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.5rem',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.98rem' }}>{event.title}</h3>
            {date && (
              <span className="badge">
                {date.toLocaleDateString('en-AU', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}
              </span>
            )}
          </div>
          {counts && (
            <p
              style={{
                marginTop: '0.25rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}
            >
              <span className="chip-dot green" /> {counts.yes} going ·{' '}
              <span className="chip-dot yellow" /> {counts.maybe} maybe ·{' '}
              <span className="chip-dot red" /> {counts.no} no
            </p>
          )}
        </div>
        <Link to={`/event/${event.id}`} className="btn btn-secondary">
          Open
        </Link>
      </div>
    </div>
  )
}

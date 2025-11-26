import { Link } from 'react-router-dom'

export default function EventCard({ event, counts }) {
  const date = event.date?.toDate ? event.date.toDate() : null

  return (
    <div className="card" style={{ marginBottom: '0.75rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.5rem',
          alignItems: 'center'
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>{event.title}</h2>
          {date && (
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
              {date.toLocaleDateString()} (
              {date.toLocaleDateString('en-AU', {
                weekday: 'short'
              })}
              )
            </p>
          )}
        </div>
        <Link to={`/event/${event.id}`} className="btn btn-secondary">
          Open
        </Link>
      </div>
      {counts && (
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
          ✅ {counts.yes} · ❔ {counts.maybe} · ❌ {counts.no}
        </p>
      )}
    </div>
  )
}

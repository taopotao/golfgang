import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export default function EventCard({ event, responses }) {
  const { user } = useAuth()
  const date = event.date?.toDate ? event.date.toDate() : null
  
  // Calculate attending count
  const attendingCount = responses 
    ? Object.values(responses).filter(s => s === 'available').length 
    : 0
  
  // Check if current user has responded
  const myStatus = user && responses ? responses[user.uid] : null
  
  return (
    <div 
      className="surface" 
      style={{ 
        padding: '14px 16px', 
        marginBottom: 10,
        borderRadius: 12,
        border: myStatus === 'available' ? '2px solid var(--color-success)' : '1px solid var(--color-border-subtle)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          alignItems: 'flex-start'
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{event.title}</h3>
            {event.booked && (
              <span style={{
                fontSize: 11,
                padding: '2px 8px',
                borderRadius: 99,
                background: 'var(--color-success)',
                color: '#fff',
                fontWeight: 600,
              }}>
                BOOKED
              </span>
            )}
          </div>
          
          {/* Date and time */}
          <div style={{ 
            marginTop: 4, 
            fontSize: 14, 
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            {date && (
              <span>
                {date.toLocaleDateString('en-AU', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}
              </span>
            )}
            {event.tee && (
              <>
                <span>•</span>
                <span>{event.tee}</span>
              </>
            )}
          </div>
          
          {/* Course name */}
          {event.courseName && (
            <div style={{ 
              marginTop: 4, 
              fontSize: 13, 
              color: 'var(--color-text-muted)' 
            }}>
              📍 {event.courseName}
            </div>
          )}
          
          {/* Players count and your status */}
          <div style={{ 
            marginTop: 8, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 12,
            fontSize: 13,
          }}>
            <span style={{ color: 'var(--color-text-muted)' }}>
              👥 {attendingCount}/4 going
            </span>
            {myStatus === 'available' && (
              <span style={{ color: 'var(--color-success)', fontWeight: 500 }}>
                ✓ You're in
              </span>
            )}
            {!myStatus && !event.booked && (
              <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                Awaiting your response
              </span>
            )}
          </div>
        </div>
        
        <Link 
          to={`/event/${event.id}`} 
          className="btn btn-primary btn-sm"
          style={{ flexShrink: 0 }}
        >
          {myStatus ? 'View' : 'Respond'}
        </Link>
      </div>
    </div>
  )
}

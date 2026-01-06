import { Link } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { formatShortDate, getInitials, getAvatarStyle } from '../utils/helpers';

// Helper to get status from response (handles both old string format and new object format)
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === 'string') return response;
  return response.status;
};

export default function EventCard({ event, users = [] }) {
  const { user } = useAuth();
  
  const dateObj = event.date?.toDate?.();
  const dateStr = formatShortDate(dateObj);
  
  // Get user's response status
  const myStatus = user && event.responses 
    ? getResponseStatus(event.responses[user.uid]) 
    : null;
  
  // Count attending players
  const attendingCount = event.responses 
    ? Object.values(event.responses).filter(r => getResponseStatus(r) === 'available').length 
    : 0;
  
  // Get attending user IDs for avatars
  const attendingIds = event.responses
    ? Object.entries(event.responses)
        .filter(([_, r]) => getResponseStatus(r) === 'available')
        .map(([uid]) => uid)
        .slice(0, 4)
    : [];

  // Get username from users array
  const getUserName = (uid) => {
    const u = users.find(u => u.id === uid);
    return u?.username || u?.email?.split('@')[0] || 'User';
  };

  return (
    <Link to={`/event/${event.id}`} className="event-card">
      <div className="event-card-header">
        <div className="event-card-date">
          <span className="event-card-day">{dateObj?.getDate()}</span>
          <span className="event-card-month">
            {dateObj?.toLocaleDateString('en-AU', { month: 'short' })}
          </span>
        </div>
        <div className="event-card-info">
          <div className="event-card-title">
            {event.title || 'Golf Round'}
            {event.booked && <span className="badge badge-success">Booked</span>}
            {!event.booked && <span className="badge badge-info">Proposed</span>}
          </div>
          {event.tee && (
            <div className="event-card-detail">🕐 {event.tee}</div>
          )}
          {event.courseName && (
            <div className="event-card-detail">📍 {event.courseName}</div>
          )}
        </div>
      </div>
      
      <div className="event-card-footer">
        <div className="event-card-avatars">
          {attendingIds.map((uid) => {
            const name = getUserName(uid);
            const style = getAvatarStyle(name);
            return (
              <div 
                key={uid} 
                className="avatar avatar-sm"
                style={{ backgroundColor: style.bg, color: style.text }}
                title={name}
              >
                {getInitials(name)}
              </div>
            );
          })}
          <span className="event-card-count">
            {attendingCount}/4
          </span>
        </div>
        
        {myStatus === 'available' && (
          <span className="badge badge-success-soft">✓ You're in</span>
        )}
      </div>
    </Link>
  );
}

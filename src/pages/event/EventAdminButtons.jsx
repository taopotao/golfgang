import { useState } from 'react';
import { triggerConfetti, showToast, hapticFeedback } from '../utils/uiEffects';

export default function EventAdminButtons({
  isAdmin,
  editing,
  setEditing,
  saveEdits,
  markBooked,
  unmarkBooked,
  deleteEvent,
  share,
  event,
  myStatus,
  onSendReminder, // Add this prop for RSVP reminder
}) {
  const [isLoading, setIsLoading] = useState(null); // Track which button is loading

  const handleMarkBooked = async () => {
    setIsLoading('book');
    hapticFeedback('medium');
    
    try {
      await markBooked();
      triggerConfetti(); // 🎉 Celebrate!
      showToast('Round confirmed! ⛳', 'success');
    } catch (error) {
      showToast('Failed to book event', 'error');
    }
    
    setIsLoading(null);
  };

  const handleSendReminder = async () => {
    setIsLoading('reminder');
    hapticFeedback('light');
    
    try {
      await onSendReminder();
      showToast('Reminders sent! 📬', 'success');
    } catch (error) {
      showToast('Failed to send reminders', 'error');
    }
    
    setIsLoading(null);
  };

  const handleDelete = async () => {
    hapticFeedback('heavy');
    
    // Confirm dialog with better UX
    if (!window.confirm('Are you sure you want to delete this event? This cannot be undone.')) {
      return;
    }
    
    setIsLoading('delete');
    
    try {
      await deleteEvent();
      showToast('Event deleted', 'default');
    } catch (error) {
      showToast('Failed to delete event', 'error');
    }
    
    setIsLoading(null);
  };

  const handleShare = async () => {
    hapticFeedback('light');
    
    try {
      await share();
      showToast('Link copied! 📋', 'success');
    } catch (error) {
      showToast('Failed to share', 'error');
    }
  };

  return (
    <div style={{ padding: '12px 0', marginBottom: 24 }}>
      <div style={{ 
        display: 'flex', 
        gap: 10, 
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>

        {isAdmin && (
          <>
            {/* Edit / Save Button */}
            {!editing ? (
              <button 
                className="btn btn-ghost hover-lift press-effect"
                onClick={() => setEditing(true)}
              >
                <span style={{ marginRight: 6 }}>✏️</span>
                Edit
              </button>
            ) : (
              <button 
                className="btn btn-primary hover-lift press-effect"
                onClick={saveEdits}
              >
                <span style={{ marginRight: 6 }}>💾</span>
                Save changes
              </button>
            )}

            {/* Book / Unbook Button */}
            {!event.booked ? (
              <button 
                className={`btn btn-primary hover-lift press-effect ${isLoading === 'book' ? 'btn-loading' : ''}`}
                onClick={handleMarkBooked}
                disabled={isLoading === 'book'}
              >
                <span style={{ marginRight: 6 }}>✅</span>
                Mark as booked
              </button>
            ) : (
              <button 
                className="btn btn-ghost hover-lift press-effect"
                onClick={unmarkBooked}
              >
                <span style={{ marginRight: 6 }}>↩️</span>
                Unmark booked
              </button>
            )}

            {/* RSVP Reminder Button - Only show for unbooked events */}
            {!event.booked && onSendReminder && (
              <button 
                className={`btn btn-ghost hover-lift press-effect ${isLoading === 'reminder' ? 'btn-loading' : ''}`}
                onClick={handleSendReminder}
                disabled={isLoading === 'reminder'}
                style={{
                  borderColor: 'var(--color-sand, #e9c46a)',
                  color: '#b8860b',
                }}
              >
                <span style={{ marginRight: 6 }}>🔔</span>
                Send Reminder
              </button>
            )}

            {/* Share Button */}
            <button 
              className="btn btn-ghost hover-lift press-effect"
              onClick={handleShare}
            >
              <span style={{ marginRight: 6 }}>📤</span>
              Share
            </button>

            {/* Delete Button */}
            <button 
              className={`btn btn-danger hover-lift press-effect ${isLoading === 'delete' ? 'btn-loading' : ''}`}
              onClick={handleDelete}
              disabled={isLoading === 'delete'}
            >
              <span style={{ marginRight: 6 }}>🗑️</span>
              Delete
            </button>
          </>
        )}

        {/* Non-admin: Add to Calendar */}
        {!isAdmin && event.booked && myStatus === "yes" && (
          <button
            className="btn btn-primary hover-lift press-effect"
            onClick={() => {
              hapticFeedback('light');
              const url = window.location.href;
              const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(url)}`;
              window.open(calUrl, "_blank");
              showToast('Opening Google Calendar...', 'default');
            }}
          >
            <span style={{ marginRight: 6 }}>📅</span>
            Add to Calendar
          </button>
        )}

      </div>

      {/* Booked badge */}
      {event.booked && (
        <div 
          style={{
            marginTop: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.1) 0%, rgba(64, 145, 108, 0.1) 100%)',
            borderRadius: 20,
            border: '1px solid rgba(45, 106, 79, 0.2)',
            animation: 'fade-up 0.4s ease-out',
          }}
        >
          <span style={{ fontSize: 18 }}>⛳</span>
          <span style={{ 
            fontWeight: 600, 
            color: 'var(--color-fairway, #2d6a4f)',
            fontSize: 14,
          }}>
            Round Confirmed!
          </span>
        </div>
      )}
    </div>
  );
}

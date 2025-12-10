// src/components/CalendarMenu.jsx
import { useState, useRef, useEffect } from 'react';
import { downloadICS } from '../utils/icsGenerator';
import { showToast, hapticFeedback } from '../utils/uiEffects';

/**
 * Build Google Calendar URL
 */
function buildGoogleCalendarUrl(event, eventUrl) {
  if (!event) return "";
  const date = event.date?.toDate ? event.date.toDate() : null;
  const teeTime = event.tee || "";
  const courseName = event.courseName || "";
  const notes = event.notes || "";

  let startDateTime = date ? new Date(date) : new Date();
  if (teeTime) {
    const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
    if (!Number.isNaN(h)) startDateTime.setHours(h);
    if (!Number.isNaN(m)) startDateTime.setMinutes(m);
  }

  const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

  function toGoogleDateTime(d) {
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const min = String(d.getUTCMinutes()).padStart(2, "0");
    const ss = String(d.getUTCSeconds()).padStart(2, "0");
    return `${yyyy}${mm}${dd}T${hh}${min}${ss}Z`;
  }

  const datesParam = `${toGoogleDateTime(startDateTime)}/${toGoogleDateTime(endDateTime)}`;
  const calendarTitle = `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: calendarTitle,
    dates: datesParam,
    details: notes ? `${notes}\n\nEvent: ${eventUrl}` : `Event: ${eventUrl}`,
    location: courseName,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * CalendarMenu - Dropdown menu for adding event to various calendars
 * Uses fixed positioning to avoid being clipped by parent overflow
 */
export default function CalendarMenu({ 
  event, 
  buttonClassName = "btn btn-primary btn-sm hover-lift press-effect",
  buttonStyle = {},
  buttonText = "📅 Add to Calendar"
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const eventUrl = window.location.href;

  // Calculate menu position when opening
  useEffect(() => {
    if (showMenu && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const menuWidth = 200;
      
      // Position below the button, aligned to the right edge
      let left = rect.right - menuWidth;
      let top = rect.bottom + 8;
      
      // Make sure it doesn't go off the left edge
      if (left < 8) left = 8;
      
      // Make sure it doesn't go off the right edge
      if (left + menuWidth > window.innerWidth - 8) {
        left = window.innerWidth - menuWidth - 8;
      }
      
      setMenuPosition({ top, left });
    }
  }, [showMenu]);

  const handleGoogleCalendar = () => {
    hapticFeedback('light');
    window.open(buildGoogleCalendarUrl(event, eventUrl), "_blank");
    showToast('Opening Google Calendar...', 'default');
    setShowMenu(false);
  };

  const handleDownloadICS = () => {
    hapticFeedback('light');
    downloadICS(event, eventUrl);
    showToast('Calendar file downloaded!', 'success');
    setShowMenu(false);
  };

  return (
    <>
      <button 
        ref={buttonRef}
        className={buttonClassName}
        style={buttonStyle}
        onClick={() => setShowMenu(!showMenu)}
      >
        {buttonText}
      </button>
      
      {showMenu && (
        <>
          {/* Backdrop to close menu */}
          <div 
            style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 1000,
            }} 
            onClick={() => setShowMenu(false)} 
          />
          
          {/* Dropdown menu - fixed position to escape overflow:hidden */}
          <div 
            style={{ 
              position: 'fixed',
              top: menuPosition.top,
              left: menuPosition.left,
              zIndex: 1001, 
              minWidth: 200,
              background: 'var(--color-surface, #fff)',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              border: '1px solid var(--color-border, #e5e7eb)',
              padding: 8,
              animation: 'fade-up 0.15s ease-out',
            }}
          >
            <button 
              onClick={handleGoogleCalendar}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '10px 12px',
                border: 'none',
                background: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                color: 'var(--color-text, #1f2937)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg-hover, #f3f4f6)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <span style={{ marginRight: 10, fontSize: 16 }}>📱</span>
              Google Calendar
            </button>
            <button 
              onClick={handleDownloadICS}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '10px 12px',
                border: 'none',
                background: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                color: 'var(--color-text, #1f2937)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg-hover, #f3f4f6)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <span style={{ marginRight: 10, fontSize: 16 }}>🍎</span>
              Apple Calendar
            </button>
            <button 
              onClick={handleDownloadICS}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '10px 12px',
                border: 'none',
                background: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                color: 'var(--color-text, #1f2937)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg-hover, #f3f4f6)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
            >
              <span style={{ marginRight: 10, fontSize: 16 }}>📧</span>
              Outlook
            </button>
            
            <div style={{ 
              height: 1, 
              background: 'var(--color-border, #e5e7eb)', 
              margin: '8px 0',
            }} />
            
            <div style={{ 
              padding: '8px 12px', 
              fontSize: 11, 
              color: 'var(--color-text-tertiary, #9ca3af)',
              lineHeight: 1.4,
            }}>
              Apple & Outlook download a .ics file
            </div>
          </div>
        </>
      )}
    </>
  );
}
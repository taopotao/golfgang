import { useState, useRef, useEffect } from 'react';
import { downloadICS } from '../utils/icsGenerator';

export default function CalendarMenu({ event, eventUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Build Google Calendar URL
  function getGoogleCalendarUrl() {
    const date = event.date?.toDate ? event.date.toDate() : new Date();
    const teeTime = event.tee || "";
    const courseName = event.courseName || "";
    const notes = event.notes || "";

    let startDateTime = new Date(date);
    if (teeTime) {
      const [h, m] = teeTime.split(":").map((x) => parseInt(x, 10));
      if (!Number.isNaN(h)) startDateTime.setHours(h);
      if (!Number.isNaN(m)) startDateTime.setMinutes(m);
    }

    const endDateTime = new Date(startDateTime.getTime() + 4.5 * 60 * 60 * 1000);

    const formatDate = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `⛳ ${teeTime || "Golf"} - ${courseName || "Golf Round"}`,
      dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
      details: notes ? `${notes}\n\nEvent: ${eventUrl}` : `Event: ${eventUrl}`,
      location: courseName,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  function handleGoogleCalendar() {
    window.open(getGoogleCalendarUrl(), '_blank');
    setIsOpen(false);
  }

  function handleAppleCalendar() {
    downloadICS(event, eventUrl);
    setIsOpen(false);
  }

  function handleOutlook() {
    downloadICS(event, eventUrl);
    setIsOpen(false);
  }

  return (
    <div className="cal-menu-container" ref={menuRef}>
      <button 
        className="ep-fab" 
        onClick={() => setIsOpen(!isOpen)}
        title="Add to Calendar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </button>

      {isOpen && (
        <div className="cal-menu-dropdown">
          <button className="cal-menu-item" onClick={handleGoogleCalendar}>
            <span className="cal-menu-icon">📅</span>
            Google Calendar
          </button>
          
          <button className="cal-menu-item" onClick={handleAppleCalendar}>
            <span className="cal-menu-icon">🍎</span>
            Apple Calendar
          </button>
          
          <button className="cal-menu-item" onClick={handleOutlook}>
            <span className="cal-menu-icon">📧</span>
            Outlook
          </button>
        </div>
      )}
    </div>
  );
}
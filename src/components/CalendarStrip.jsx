import { useState, useEffect, useRef } from 'react';

/**
 * CalendarStrip - A horizontal scrollable week/date picker
 * Inspired by modern calendar apps
 */
export default function CalendarStrip({ 
  selectedDate, 
  onDateSelect, 
  events = [],
  showMonth = true,
}) {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    // Start from Monday (adjust if Sunday = 0)
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today);
    monday.setDate(diff);
    return monday;
  });
  
  const scrollRef = useRef(null);
  const todayRef = useRef(null);

  // Generate days for the current view (3 weeks)
  const getDays = () => {
    const days = [];
    const start = new Date(currentWeekStart);
    start.setDate(start.getDate() - 7); // Start from previous week
    
    for (let i = 0; i < 21; i++) { // 3 weeks
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const days = getDays();

  // Check if a date has events
  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = event.date?.toDate ? event.date.toDate() : new Date(event.date);
      return isSameDay(eventDate, date);
    });
  };

  const isSameDay = (d1, d2) => {
    return d1.getDate() === d2.getDate() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getFullYear() === d2.getFullYear();
  };

  const isToday = (date) => {
    return isSameDay(date, new Date());
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return isSameDay(date, selectedDate);
  };

  // Scroll to today on mount
  useEffect(() => {
    if (todayRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const todayEl = todayRef.current;
      const containerWidth = container.offsetWidth;
      const todayLeft = todayEl.offsetLeft;
      const todayWidth = todayEl.offsetWidth;
      
      // Center today in the view
      container.scrollLeft = todayLeft - (containerWidth / 2) + (todayWidth / 2);
    }
  }, []);

  const handlePrevWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const handleToday = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today);
    monday.setDate(diff);
    setCurrentWeekStart(monday);
    onDateSelect?.(new Date());
  };

  const formatDayName = (date) => {
    return date.toLocaleDateString('en-AU', { weekday: 'short' }).slice(0, 3);
  };

  const formatMonthYear = () => {
    const middleDay = days[10]; // Middle of 3 weeks
    return middleDay.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="calendar-strip">
      {showMonth && (
        <div className="calendar-header">
          <div className="calendar-month">{formatMonthYear()}</div>
          <div className="calendar-nav">
            <button 
              className="calendar-nav-btn" 
              onClick={handlePrevWeek}
              aria-label="Previous week"
            >
              ←
            </button>
            <button 
              className="calendar-nav-btn" 
              onClick={handleToday}
              style={{ fontSize: '11px', width: 'auto', padding: '0 10px' }}
            >
              Today
            </button>
            <button 
              className="calendar-nav-btn" 
              onClick={handleNextWeek}
              aria-label="Next week"
            >
              →
            </button>
          </div>
        </div>
      )}
      
      <div className="week-strip hide-scrollbar" ref={scrollRef}>
        {days.map((date, idx) => {
          const dateEvents = getEventsForDate(date);
          const hasBookedEvent = dateEvents.some(e => e.booked);
          const hasProposedEvent = dateEvents.some(e => !e.booked);
          const today = isToday(date);
          const selected = isSelected(date);
          
          return (
            <div
              key={idx}
              ref={today ? todayRef : null}
              className={`week-day ${today ? 'today' : ''} ${selected ? 'selected' : ''}`}
              onClick={() => onDateSelect?.(date)}
            >
              <span className="week-day-name">{formatDayName(date)}</span>
              <span className="week-day-number">{date.getDate()}</span>
              
              {/* Event dots */}
              {(hasBookedEvent || hasProposedEvent) && (
                <div style={{ 
                  display: 'flex', 
                  gap: '3px', 
                  marginTop: '4px',
                  height: '6px',
                }}>
                  {hasBookedEvent && (
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: today || selected ? 'rgba(255,255,255,0.9)' : 'var(--color-event-booked)',
                    }} />
                  )}
                  {hasProposedEvent && (
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: today || selected ? 'rgba(255,255,255,0.7)' : 'var(--color-event-proposed)',
                    }} />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="calendar-legend-item">
          <span className="calendar-legend-dot calendar-legend-dot--booked" />
          <span>Booked</span>
        </div>
        <div className="calendar-legend-item">
          <span className="calendar-legend-dot calendar-legend-dot--proposed" />
          <span>Open</span>
        </div>
      </div>
    </div>
  );
}

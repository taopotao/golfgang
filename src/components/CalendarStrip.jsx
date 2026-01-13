import { useRef, useEffect, useState } from "react";

export default function CalendarStrip({ events = [], selectedDate, onDateSelect }) {
  const scrollRef = useRef(null);
  const todayRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate 5 weeks of dates centered on today
  const getDays = () => {
    const days = [];
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 7); // Start 1 week before today

    for (let i = 0; i < 35; i++) { // 5 weeks
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const days = getDays();

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Check if date is selected
  const isSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  // Check if date has events
  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = event.date?.toDate ? event.date.toDate() : new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Check if any event on date is booked
  const hasBookedEvent = (date) => {
    const dateEvents = getEventsForDate(date);
    return dateEvents.some((e) => e.booked);
  };

  // Scroll to today on mount
  useEffect(() => {
    if (todayRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const todayEl = todayRef.current;
      const scrollLeft = todayEl.offsetLeft - container.offsetWidth / 2 + todayEl.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  // Get month label for display
  const getMonthLabel = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const centerX = container.scrollLeft + container.offsetWidth / 2;
      const dayWidth = 56 + 8; // width + gap
      const centerIndex = Math.floor(centerX / dayWidth);
      if (days[centerIndex]) {
        return days[centerIndex].toLocaleDateString("en-AU", {
          month: "long",
          year: "numeric",
        });
      }
    }
    return new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" });
  };

  const [monthLabel, setMonthLabel] = useState(getMonthLabel());

  const handleScroll = () => {
    setMonthLabel(getMonthLabel());
  };

  return (
    <div className="calendar-strip">
      <div className="calendar-strip-header">
        <span className="calendar-strip-month">{monthLabel}</span>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => {
            if (todayRef.current && scrollRef.current) {
              const container = scrollRef.current;
              const todayEl = todayRef.current;
              const scrollLeft =
                todayEl.offsetLeft - container.offsetWidth / 2 + todayEl.offsetWidth / 2;
              container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
          }}
        >
          Today
        </button>
      </div>

      <div className="calendar-strip-days" ref={scrollRef} onScroll={handleScroll}>
        {days.map((date, index) => {
          const dateEvents = getEventsForDate(date);
          const hasBooked = hasBookedEvent(date);
          const eventCount = dateEvents.length;

          return (
            <button
              key={index}
              ref={isToday(date) ? todayRef : null}
              className={`calendar-day ${isToday(date) ? "today" : ""} ${
                isSelected(date) ? "selected" : ""
              } ${eventCount > 0 ? "has-events" : ""}`}
              onClick={() => onDateSelect(date)}
            >
              <span className="calendar-day-name">
                {date.toLocaleDateString("en-AU", { weekday: "short" }).slice(0, 3)}
              </span>
              <span className="calendar-day-number">{date.getDate()}</span>
              
              {/* Event dots */}
              {eventCount > 0 && (
                <div className="calendar-day-dots">
                  {dateEvents.slice(0, 3).map((ev, i) => (
                    <span
                      key={i}
                      className={`calendar-dot ${ev.booked ? "booked" : "proposed"}`}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
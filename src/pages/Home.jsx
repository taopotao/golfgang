import { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import CalendarStrip from "../components/CalendarStrip";
import { showToast, hapticFeedback, triggerConfetti } from "../utils/helpers";

// Helper to get status from response
const getResponseStatus = (response) => {
  if (!response) return null;
  if (typeof response === "string") return response;
  return response.status;
};

// Get relative time string
const getRelativeTime = (date) => {
  const now = new Date();
  const eventDate = new Date(date);
  const diffTime = eventDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return "Past";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < 14) return "Next week";
  return `In ${Math.ceil(diffDays / 7)} weeks`;
};

// Group events by timeframe
const groupEventsByTimeframe = (events) => {
  const now = new Date();
  const thisWeekEnd = new Date(now);
  thisWeekEnd.setDate(now.getDate() + (7 - now.getDay()));
  
  const nextWeekEnd = new Date(thisWeekEnd);
  nextWeekEnd.setDate(thisWeekEnd.getDate() + 7);

  const groups = {
    thisWeek: [],
    nextWeek: [],
    later: [],
  };

  events.forEach((event) => {
    const eventDate = event.date?.toDate ? event.date.toDate() : new Date(event.date);
    if (eventDate <= thisWeekEnd) {
      groups.thisWeek.push(event);
    } else if (eventDate <= nextWeekEnd) {
      groups.nextWeek.push(event);
    } else {
      groups.later.push(event);
    }
  });

  return groups;
};

export default function Home() {
  const { user, profile } = useAuth();
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [creating, setCreating] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [weatherCache, setWeatherCache] = useState({});

  const [form, setForm] = useState({
    date: "",
    tee: "08:00",
    courseName: "",
    notes: "",
  });

  // Load events
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setEvents(list);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Load users
  useEffect(() => {
    async function loadUsers() {
      const snap = await getDocs(collection(db, "users"));
      setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    loadUsers();
  }, []);

  // Fetch weather for event dates
  useEffect(() => {
    const fetchWeather = async () => {
      const upcomingDates = events
        .filter((e) => {
          const d = e.date?.toDate ? e.date.toDate() : new Date(e.date);
          return d >= new Date();
        })
        .map((e) => {
          const d = e.date?.toDate ? e.date.toDate() : new Date(e.date);
          return d.toISOString().split("T")[0];
        })
        .filter((date, index, self) => self.indexOf(date) === index)
        .slice(0, 7); // Only fetch for next 7 unique dates

      for (const dateStr of upcomingDates) {
        if (weatherCache[dateStr]) continue;
        
        try {
          // Using Open-Meteo API (free, no key required)
          const [year, month, day] = dateStr.split("-");
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&daily=temperature_2m_max,precipitation_probability_max,weathercode&timezone=Australia/Sydney&start_date=${dateStr}&end_date=${dateStr}`
          );
          const data = await response.json();
          
          if (data.daily) {
            setWeatherCache((prev) => ({
              ...prev,
              [dateStr]: {
                temp: Math.round(data.daily.temperature_2m_max[0]),
                rain: data.daily.precipitation_probability_max[0],
                code: data.daily.weathercode[0],
              },
            }));
          }
        } catch (err) {
          console.warn("Weather fetch failed:", err);
        }
      }
    };

    if (events.length > 0) {
      fetchWeather();
    }
  }, [events]);

  // Get weather icon from code
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 48) return "☁️";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "🌨️";
    if (code <= 82) return "🌧️";
    if (code >= 95) return "⛈️";
    return "🌤️";
  };

  // Filter and sort events
  const now = new Date();
  const upcomingEvents = events
    .filter((e) => {
      const d = e.date?.toDate ? e.date.toDate() : new Date(e.date);
      return d >= new Date(now.setHours(0, 0, 0, 0));
    })
    .sort((a, b) => {
      const da = a.date?.toDate ? a.date.toDate() : new Date(a.date);
      const db = b.date?.toDate ? b.date.toDate() : new Date(b.date);
      return da - db;
    });

  // Filter by selected date if any
  const filteredEvents = selectedDate
    ? upcomingEvents.filter((e) => {
        const d = e.date?.toDate ? e.date.toDate() : new Date(e.date);
        return d.toDateString() === selectedDate.toDateString();
      })
    : upcomingEvents;

  const groupedEvents = groupEventsByTimeframe(filteredEvents);

  // Get user's first name
  const firstName = profile?.username?.split(" ")[0] || 
                    profile?.email?.split("@")[0] || 
                    "Golfer";

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Format date as title
  const formatDateAsTitle = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const weekday = date.toLocaleDateString("en-AU", { weekday: "long" });
    const monthName = date.toLocaleDateString("en-AU", { month: "long" });
    const ordinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    return `${weekday} ${ordinal(day)} ${monthName}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.date) {
      showToast("Please select a date", "error");
      return;
    }

    setCreating(true);
    hapticFeedback("medium");

    try {
      const [year, month, day] = form.date.split("-").map(Number);
      const eventDate = new Date(year, month - 1, day, 12, 0, 0);

      await addDoc(collection(db, "events"), {
        title: formatDateAsTitle(form.date),
        date: Timestamp.fromDate(eventDate),
        tee: form.tee || null,
        courseName: form.courseName || null,
        notes: form.notes || null,
        booked: false,
        createdBy: user.uid,
        createdAt: Timestamp.now(),
        responses: {
          [user.uid]: { status: "available", respondedAt: Timestamp.now() },
        },
      });

      showToast("Round proposed! ⛳", "success");
      setForm({ date: "", tee: "08:00", courseName: "", notes: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error creating event:", error);
      showToast("Failed to create event", "error");
    }
    setCreating(false);
  };

  // Count events needing response
  const needsResponseCount = upcomingEvents.filter((e) => {
    if (!user) return false;
    const response = e.responses?.[user.uid];
    return !response;
  }).length;

  if (loading) {
    return (
      <div className="page">
        <div className="page-content">
          <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page home-page">
      <div className="page-content">
        {/* Greeting Header */}
        <div className="home-header">
          <div className="home-greeting">
            <h1 className="greeting-text">
              {getGreeting()}, {firstName}! 👋
            </h1>
            <p className="greeting-subtitle">
              {upcomingEvents.length === 0
                ? "No upcoming rounds scheduled"
                : upcomingEvents.length === 1
                ? "1 upcoming round"
                : `${upcomingEvents.length} upcoming rounds`}
              {needsResponseCount > 0 && (
                <span className="needs-response-badge">
                  {needsResponseCount} awaiting RSVP
                </span>
              )}
            </p>
          </div>
          <button
            className="btn btn-primary propose-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Propose"}
          </button>
        </div>

        {/* Calendar Strip */}
        <CalendarStrip
          events={events}
          selectedDate={selectedDate}
          onDateSelect={(date) => {
            if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
              setSelectedDate(null); // Deselect
            } else {
              setSelectedDate(date);
            }
            hapticFeedback("light");
          }}
        />

        {/* Selected date indicator */}
        {selectedDate && (
          <div className="selected-date-bar">
            <span>
              Showing events for{" "}
              <strong>
                {selectedDate.toLocaleDateString("en-AU", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </strong>
            </span>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setSelectedDate(null)}
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Propose Form */}
        {showForm && (
          <div className="card propose-card">
            <h3 className="card-title">Propose a Round</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    className="input"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Tee Time</label>
                  <input
                    type="time"
                    className="input"
                    value={form.tee}
                    onChange={(e) => setForm({ ...form, tee: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Course (optional)</label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g. Royal Sydney Golf Club"
                  value={form.courseName}
                  onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Notes (optional)</label>
                <textarea
                  className="input"
                  placeholder="Any details about the round..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={creating}
              >
                {creating ? "Creating..." : "Propose This Round"}
              </button>
            </form>
          </div>
        )}

        {/* Quick Action - No events this weekend */}
        {upcomingEvents.filter((e) => {
          const d = e.date?.toDate ? e.date.toDate() : new Date(e.date);
          const daysUntil = Math.ceil((d - new Date()) / (1000 * 60 * 60 * 24));
          return daysUntil <= 3;
        }).length === 0 && !showForm && (
          <div className="quick-action-card">
            <div className="quick-action-icon">🏌️</div>
            <div className="quick-action-text">
              <strong>Nothing coming up soon!</strong>
              <span>How about a round this weekend?</span>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setShowForm(true)}
            >
              Propose
            </button>
          </div>
        )}

        {/* Events List */}
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">⛳</div>
            <div className="empty-state-title">
              {selectedDate ? "No rounds on this day" : "No upcoming rounds"}
            </div>
            <p>
              {selectedDate
                ? "Try selecting a different date or clear the filter"
                : "Be the first to propose a round!"}
            </p>
            {!showForm && !selectedDate && (
              <button
                className="btn btn-primary"
                style={{ marginTop: 16 }}
                onClick={() => setShowForm(true)}
              >
                + Propose a Round
              </button>
            )}
          </div>
        ) : (
          <>
            {/* This Week */}
            {groupedEvents.thisWeek.length > 0 && !selectedDate && (
              <div className="event-section">
                <div className="section-header">
                  <span className="section-title">This Week</span>
                  <span className="section-count">{groupedEvents.thisWeek.length}</span>
                </div>
                <div className="event-list">
                  {groupedEvents.thisWeek.map((ev) => (
                    <EventCard
                      key={ev.id}
                      event={ev}
                      users={users}
                      weather={weatherCache[
                        (ev.date?.toDate ? ev.date.toDate() : new Date(ev.date))
                          .toISOString()
                          .split("T")[0]
                      ]}
                      getWeatherIcon={getWeatherIcon}
                      relativeTime={getRelativeTime(
                        ev.date?.toDate ? ev.date.toDate() : new Date(ev.date)
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Next Week */}
            {groupedEvents.nextWeek.length > 0 && !selectedDate && (
              <div className="event-section">
                <div className="section-header">
                  <span className="section-title">Next Week</span>
                  <span className="section-count">{groupedEvents.nextWeek.length}</span>
                </div>
                <div className="event-list">
                  {groupedEvents.nextWeek.map((ev) => (
                    <EventCard
                      key={ev.id}
                      event={ev}
                      users={users}
                      weather={weatherCache[
                        (ev.date?.toDate ? ev.date.toDate() : new Date(ev.date))
                          .toISOString()
                          .split("T")[0]
                      ]}
                      getWeatherIcon={getWeatherIcon}
                      relativeTime={getRelativeTime(
                        ev.date?.toDate ? ev.date.toDate() : new Date(ev.date)
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Later */}
            {groupedEvents.later.length > 0 && !selectedDate && (
              <div className="event-section">
                <div className="section-header">
                  <span className="section-title">Later</span>
                  <span className="section-count">{groupedEvents.later.length}</span>
                </div>
                <div className="event-list">
                  {groupedEvents.later.map((ev) => (
                    <EventCard
                      key={ev.id}
                      event={ev}
                      users={users}
                      weather={weatherCache[
                        (ev.date?.toDate ? ev.date.toDate() : new Date(ev.date))
                          .toISOString()
                          .split("T")[0]
                      ]}
                      getWeatherIcon={getWeatherIcon}
                      relativeTime={getRelativeTime(
                        ev.date?.toDate ? ev.date.toDate() : new Date(ev.date)
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Selected date events */}
            {selectedDate && (
              <div className="event-section">
                <div className="event-list">
                  {filteredEvents.map((ev) => (
                    <EventCard
                      key={ev.id}
                      event={ev}
                      users={users}
                      weather={weatherCache[
                        (ev.date?.toDate ? ev.date.toDate() : new Date(ev.date))
                          .toISOString()
                          .split("T")[0]
                      ]}
                      getWeatherIcon={getWeatherIcon}
                      relativeTime={getRelativeTime(
                        ev.date?.toDate ? ev.date.toDate() : new Date(ev.date)
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
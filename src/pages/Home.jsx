import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import EventCard from "../components/EventCard";
import { showToast, hapticFeedback } from "../utils/helpers";

export default function Home() {
  const { user, profile } = useAuth();
  
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [creating, setCreating] = useState(false);
  
  // Form state with preferences
  const [form, setForm] = useState({
    date: "",
    tee: "",
    courseName: "",
    notes: "",
  });

  // Proposer preferences
  const [preferences, setPreferences] = useState({
    timePreference: "",
    cartPreference: "",
    formatPreference: "",
    coursePreference: "",
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
      const eventDate = new Date(year, month - 1, day);

      await addDoc(collection(db, "events"), {
        title: formatDateAsTitle(form.date),
        date: Timestamp.fromDate(eventDate),
        tee: form.tee || null,
        courseName: form.courseName || null,
        notes: form.notes || null,
        proposedBy: user.uid,
        proposedByName: profile?.username || user.email?.split("@")[0],
        booked: false,
        createdAt: Timestamp.now(),
        responses: {
          [user.uid]: {
            status: "available",
            preferences: {
              timePreference: preferences.timePreference || null,
              cartPreference: preferences.cartPreference || null,
              formatPreference: preferences.formatPreference || null,
              coursePreference: preferences.coursePreference || null,
            },
            updatedAt: new Date().toISOString(),
          },
        },
      });

      showToast("Round proposed! ⛳", "success");
      setForm({ date: "", tee: "", courseName: "", notes: "" });
      setPreferences({ timePreference: "", cartPreference: "", formatPreference: "", coursePreference: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error creating event:", err);
      showToast("Failed to create event", "error");
    } finally {
      setCreating(false);
    }
  };

  // Filter and sort events
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  
  const upcomingEvents = events
    .filter((ev) => {
      const evDate = ev.date?.toDate?.();
      return evDate && evDate >= now;
    })
    .sort((a, b) => a.date.toMillis() - b.date.toMillis());

  const pastEvents = events
    .filter((ev) => {
      const evDate = ev.date?.toDate?.();
      return evDate && evDate < now;
    })
    .sort((a, b) => b.date.toMillis() - a.date.toMillis())
    .slice(0, 5);

  // Get min date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (loading) {
    return (
      <div className="page">
        <div className="page-content">
          <div className="skeleton" style={{ height: 60, marginBottom: 16 }}></div>
          <div className="skeleton" style={{ height: 100, marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 100, marginBottom: 12 }}></div>
          <div className="skeleton" style={{ height: 100 }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-content">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Upcoming Rounds</h1>
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "+ Propose"}
          </button>
        </div>

        {/* Propose Form */}
        {showForm && (
          <div className="card" style={{ marginBottom: 24 }}>
            <h3 style={{ marginTop: 0, marginBottom: 16 }}>Propose a Round</h3>
            <form onSubmit={handleSubmit}>
              {/* Date */}
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  id="date"
                  type="date"
                  className="input"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={getMinDate()}
                  required
                />
              </div>

              {/* Tee Time (optional - can be decided later) */}
              <div className="form-group">
                <label htmlFor="tee">Tee Time (if known)</label>
                <input
                  id="tee"
                  type="time"
                  className="input"
                  value={form.tee}
                  onChange={(e) => setForm({ ...form, tee: e.target.value })}
                />
              </div>
              
              {/* Course (optional) */}
              <div className="form-group">
                <label htmlFor="course">Course (if known)</label>
                <input
                  id="course"
                  type="text"
                  className="input"
                  value={form.courseName}
                  onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                  placeholder="e.g., Royal Melbourne"
                />
              </div>

              {/* Preferences Section */}
              <div className="preferences-section">
                <h4 className="preferences-title">Your Preferences</h4>
                
                {/* Time Preference */}
                <div className="form-group">
                  <label>Time Preference</label>
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.timePreference === 'AM' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, timePreference: preferences.timePreference === 'AM' ? '' : 'AM' })}
                    >
                      ☀️ AM
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.timePreference === 'PM' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, timePreference: preferences.timePreference === 'PM' ? '' : 'PM' })}
                    >
                      🌅 PM
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.timePreference === 'Any' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, timePreference: preferences.timePreference === 'Any' ? '' : 'Any' })}
                    >
                      🤷 Any
                    </button>
                  </div>
                </div>

                {/* Cart Preference */}
                <div className="form-group">
                  <label>Walk or Cart?</label>
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.cartPreference === 'Walk' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, cartPreference: preferences.cartPreference === 'Walk' ? '' : 'Walk' })}
                    >
                      🚶 Walk
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.cartPreference === 'Cart' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, cartPreference: preferences.cartPreference === 'Cart' ? '' : 'Cart' })}
                    >
                      🛒 Cart
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.cartPreference === 'Any' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, cartPreference: preferences.cartPreference === 'Any' ? '' : 'Any' })}
                    >
                      🤷 Any
                    </button>
                  </div>
                </div>

                {/* Format Preference */}
                <div className="form-group">
                  <label>Game Format</label>
                  <div className="toggle-group">
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.formatPreference === 'Stroke' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, formatPreference: preferences.formatPreference === 'Stroke' ? '' : 'Stroke' })}
                    >
                      🎯 Stroke
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.formatPreference === 'Scramble' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, formatPreference: preferences.formatPreference === 'Scramble' ? '' : 'Scramble' })}
                    >
                      🤝 Scramble
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${preferences.formatPreference === 'Any' ? 'active' : ''}`}
                      onClick={() => setPreferences({ ...preferences, formatPreference: preferences.formatPreference === 'Any' ? '' : 'Any' })}
                    >
                      🤷 Any
                    </button>
                  </div>
                </div>

                {/* Course Preference (free text) */}
                <div className="form-group">
                  <label htmlFor="coursePreference">Course Preference</label>
                  <input
                    id="coursePreference"
                    type="text"
                    className="input"
                    value={preferences.coursePreference}
                    onChange={(e) => setPreferences({ ...preferences, coursePreference: e.target.value })}
                    placeholder="e.g., Somewhere close to CBD"
                  />
                </div>
              </div>
              
              {/* Notes */}
              <div className="form-group">
                <label htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  className="input"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Any additional details..."
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

        {/* Upcoming Events */}
        {upcomingEvents.length === 0 ? (
          <div className="card empty-state">
            <div className="empty-state-icon">🏌️</div>
            <div className="empty-state-title">No upcoming rounds</div>
            <p>Be the first to propose a round!</p>
          </div>
        ) : (
          <div className="event-list">
            {upcomingEvents.map((ev) => (
              <EventCard key={ev.id} event={ev} users={users} />
            ))}
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <>
            <div className="section-divider">
              <span>Past Rounds</span>
            </div>
            <div className="event-list event-list-past">
              {pastEvents.map((ev) => (
                <EventCard key={ev.id} event={ev} users={users} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
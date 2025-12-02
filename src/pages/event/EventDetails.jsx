import React, { useEffect, useState } from "react";

// Helper: Formats a JS Date object into "YYYY-MM-DDTHH:MM" for input fields
function toInputDate(v) {
  if (!v) return "";
  const date = v.toDate ? v.toDate() : new Date(v);
  if (isNaN(date.getTime())) return ""; 
  
  // Format to local ISO string (cutting off seconds/timezone for the input)
  const pad = (n) => (n < 10 ? "0" + n : n);
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes())
  );
}

export default function EventDetails({ event, editing, form, setForm, formattedDate }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  // 1. Fetch the Google Maps photo automatically
  useEffect(() => {
    // GUARD CLAUSE: Strict checks to prevent "Missing parameter" error
    if (
      !window.google || 
      !window.google.maps || 
      !window.google.maps.places ||
      !event || 
      !event.coursePlaceId ||
      typeof event.coursePlaceId !== 'string'
    ) {
      return;
    }

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      placeId: event.coursePlaceId,
      fields: ["photos"],
    };

    service.getDetails(request, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place.photos &&
        place.photos.length > 0
      ) {
        setPhotoUrl(place.photos[0].getUrl({ maxHeight: 400 }));
      }
    });
  }, [event?.coursePlaceId]);

  return (
    <div className="card" style={{ padding: 24, marginBottom: 24 }}>
      <div className="event-card-grid">

        {/* LEFT COLUMN — Image + Conditions */}
        <div className="event-left">
          <div className="event-image">
            <img
              // Use the fetched photo, or fall back to event prop, or generic
              src={photoUrl || event.coursePhotoUrl || "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop"}
              alt="Course"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
            />
          </div>

          <div className="card simple">
            <h3>Golf Conditions</h3>
            <p style={{ fontSize: 13 }}>
              {formattedDate} &middot; Tee time {event.tee || "?"}
            </p>

            <p><strong>Score:</strong> {event.conditions?.score || "–"} / 10</p>
            <p><strong>Temp:</strong> {event.conditions?.temp || "–"}°C</p>
            <p><strong>Rain:</strong> {event.conditions?.rain || "–"}%</p>
            <p><strong>Wind:</strong> {event.conditions?.wind || "–"} km/h</p>
            <p><strong>Cloud:</strong> {event.conditions?.cloud || "–"}%</p>
          </div>
        </div>

        {/* MIDDLE COLUMN — Event Summary */}
        <div className="event-middle">
          {!editing && (
            <>
              <div className="event-title-row">
                <h2>{event.title}</h2>
                {event.booked && (
                  <span className="status-pill">Booked</span>
                )}
              </div>

              <div className="event-detail-line">
                <strong>Date:</strong> {formattedDate}
              </div>

              {event.tee && (
                <div className="event-detail-line">
                  <strong>Tee time:</strong> {event.tee}
                </div>
              )}

              <div className="event-detail-line">
                <strong>Course:</strong> {event.courseName}
              </div>

              {event.notes && (
                <p className="event-notes">{event.notes}</p>
              )}
            </>
          )}

          {editing && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Title</label>
                <input
                    className="input"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Date & Time</label>
                <input
                    className="input"
                    type="datetime-local"
                    value={toInputDate(form.date)}
                    onChange={(e) => setForm({ ...form, date: new Date(e.target.value) })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Course Name</label>
                <input
                    className="input"
                    value={form.courseName}
                    onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Tee Time (Text)</label>
                <input
                    className="input"
                    value={form.tee}
                    onChange={(e) => setForm({ ...form, tee: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Notes</label>
                <textarea
                    className="input"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    checked={form.booked || false}
                    onChange={(e) => setForm({ ...form, booked: e.target.checked })}
                    id="bookedCheck"
                />
                <label htmlFor="bookedCheck">Course is Booked?</label>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="event-right">
          {/* Buttons handled by parent in EventAdminButtons */}
        </div>
      </div>
    </div>
  );
}
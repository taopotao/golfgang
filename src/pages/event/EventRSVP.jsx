// src/pages/event/EventRSVP.jsx

import ResponseButtons from "../../components/ResponseButtons";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

export default function EventRSVP({ eventId, event, myStatus, user }) {
  const [saving, setSaving] = useState(false);

  const updateResponse = async (newStatus) => {
  console.log("updateResponse called:", { newStatus, eventId, user });

  if (!user || !user.uid) {
    console.error("❌ Missing user or UID");
    alert("You must be logged in to RSVP.");
    return;
  }

  if (!eventId) {
    console.error("❌ Missing eventId");
    alert("Event ID missing — cannot save RSVP.");
    return;
  }

  setSaving(true);

  try {
    const ref = doc(db, "events", eventId, "responses", user.uid);

    await setDoc(
      ref,
      { status: newStatus === null ? null : newStatus },
      { merge: true }
    );

  } catch (err) {
    console.error("🔥 Firestore error:", err);
    alert("Could not update your response.");
  }

  setSaving(false);
};

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <div className="card-header">
        <div className="card-title-group">
          <h3 className="card-title">Your Response</h3>
          <p className="card-subtitle">Let the group know if you’re available.</p>
        </div>
      </div>

      <div className="card-body">
        {event.booked ? (
          <p
            style={{
              padding: "12px 16px",
              background: "var(--color-surface-soft)",
              borderRadius: 8,
              fontWeight: 500,
              color: "var(--color-text-muted)",
            }}
          >
            ⛔ RSVP closed — this event is booked.
          </p>
        ) : (
          <ResponseButtons
            currentStatus={myStatus}
            onChange={updateResponse}
            loading={saving}
          />
        )}
      </div>
    </div>
  );
}

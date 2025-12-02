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
}) {
  return (
    <div style={{ padding: "8px 4px", marginBottom: 24 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>

        {isAdmin && (
          <>
            {!editing && (
              <button className="btn btn-ghost" onClick={() => setEditing(true)}>
                Edit
              </button>
            )}

            {editing && (
              <button className="btn btn-primary" onClick={saveEdits}>
                Save changes
              </button>
            )}

            {!event.booked ? (
              <button className="btn btn-primary" onClick={markBooked}>
                Mark as booked
              </button>
            ) : (
              <button className="btn btn-ghost" onClick={unmarkBooked}>
                Unmark booked
              </button>
            )}

            <button className="btn btn-primary" onClick={share}>
              Share
            </button>

            <button className="btn btn-danger" onClick={deleteEvent}>
              Delete
            </button>
          </>
        )}

        {!isAdmin && event.booked && myStatus === "yes" && (
          <button
            className="btn btn-primary"
            onClick={() => {
              const url = window.location.href;
              const calUrl =
                `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.title}&details=${url}`;
              window.open(calUrl, "_blank");
            }}
          >
            Add to Google Calendar
          </button>
        )}

      </div>
    </div>
  );
}

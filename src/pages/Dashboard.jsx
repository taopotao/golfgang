                          {ev.tee && ` • ${ev.tee}`}
                          {ev.courseName && ` • ${ev.courseName}`}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6, fontSize: 12 }}>
                          <span style={{ color: "var(--color-text-tertiary)" }}>
                            👥 {attendingCount}/4
                          </span>
                          {myStatus === 'available' && (
                            <span style={{ color: "var(--color-success)", fontWeight: 500 }}>
                              ✓ You're in
                            </span>
                          )}
                          {!myStatus && !ev.booked && (
                            <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>
                              Awaiting response
                            </span>
                          )}
                        </div>
                      </div>

                      <div style={{ fontSize: 18, color: "var(--color-text-tertiary)" }}>→</div>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </div>

      {/* DAY MODAL */}
      {showDayModal && (
        <div className="modal-backdrop" onClick={() => setShowDayModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, marginBottom: 16 }}>
              {selectedDay?.toLocaleDateString("en-AU", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h2>

            {selectedDayEvents.length > 0 ? (
              <div style={{ marginBottom: 20 }} className="stagger-list">
                {selectedDayEvents.map((ev) => {
                  const attendingCount = ev.responses 
                    ? Object.values(ev.responses).filter(s => s === 'available').length 
                    : 0;
                  const myStatus = user && ev.responses ? ev.responses[user.uid] : null;
                  
                  return (
                    <Link
                      key={ev.id}
                      to={`/event/${ev.id}`}
                      onClick={() => setShowDayModal(false)}
                      style={{
                        display: "block",
                        padding: 14,
                        background: "var(--color-bg-secondary)",
                        borderRadius: 8,
                        marginBottom: 8,
                        textDecoration: "none",
                        color: "inherit",
                        borderLeft: myStatus === 'available' ? "3px solid var(--color-success)" : "3px solid transparent",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{ev.title}</span>
                        <span className={`status-badge ${ev.booked ? "status-badge--booked" : "status-badge--proposed"}`}>
                          {ev.booked ? "Booked" : "Proposed"}
                        </span>
                      </div>
                      {ev.tee && (
                        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                          🕐 {ev.tee}
                        </div>
                      )}
                      {ev.courseName && (
                        <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
                          📍 {ev.courseName}
                        </div>
                      )}
                      <div style={{ marginTop: 8, fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                        <span>👥 {attendingCount}/4</span>
                        {myStatus === 'available' && (
                          <span style={{ color: "var(--color-success)" }}>✓ You're in</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div style={{ 
                padding: 24, 
                textAlign: "center", 
                color: "var(--color-text-secondary)",
                background: "var(--color-bg-secondary)",
                borderRadius: 8,
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🏌️</div>
                <div>No events on this day</div>
              </div>
            )}

            <div style={{ display: "flex", gap: 8 }}>
              {isAdmin && (
                <button className="btn btn-primary hover-lift press-effect" style={{ flex: 1 }} onClick={openCreateModal}>
                  + Create Event
                </button>
              )}
              <button className="btn btn-ghost press-effect" style={{ flex: isAdmin ? 0 : 1 }} onClick={() => setShowDayModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE EVENT MODAL */}
      {showCreateModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2 style={{ marginTop: 0 }}>Create Event</h2>
            <p style={{ color: "var(--color-text-secondary)", marginTop: -4, marginBottom: 20, fontSize: 14 }}>
              {selectedDay?.toLocaleDateString("en-AU", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label>Event title</label>
                <input
                  className="input"
                  value={title}
                  placeholder="e.g. Sunday Stableford"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label>Course</label>
                <CourseAutocomplete
                  initialValue={course.name}
                  onSelect={(payload) => setCourse(payload)}
                />
              </div>

              <div>
                <label>Tee time</label>
                <input
                  className="input"
                  value={tee}
                  placeholder="e.g. 7:15am"
                  onChange={(e) => setTee(e.target.value)}
                />
              </div>

              <div>
                <label>Notes (optional)</label>
                <textarea
                  className="input"
                  placeholder="Add any notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <label>RSVP Deadline</label>
                <input
                  className="input"
                  type="date"
                  value={rsvpDeadline}
                  onChange={(e) => setRsvpDeadline(e.target.value)}
                />
              </div>
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
              <button
                className="btn btn-primary hover-lift press-effect"
                style={{ flex: 1 }}
                onClick={createEvent}
                disabled={creating}
              >
                {creating ? "Creating…" : "Create Event"}
              </button>
              <button
                className="btn btn-ghost press-effect"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

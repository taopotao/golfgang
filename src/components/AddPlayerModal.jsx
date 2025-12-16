// src/components/AddPlayerModal.jsx

import { useState } from "react";
import { getInitials, getAvatarStyle } from "../utils/avatarUtils";

/**
 * Modal for admins to add players to an event's RSVP list
 * 
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - onAddPlayer: (userId) => void
 * - allUsers: array of user objects
 * - currentResponses: object of current responses { odUid: response }
 */
export default function AddPlayerModal({ isOpen, onClose, onAddPlayer, allUsers, currentResponses }) {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [adding, setAdding] = useState(false);

  if (!isOpen) return null;

  // Filter out users who have already responded "available"
  const availableUsers = allUsers.filter(user => {
    const response = currentResponses[user.id];
    const status = typeof response === 'object' ? response?.status : response;
    return status !== "available";
  });

  // Filter by search query
  const filteredUsers = availableUsers.filter(user => {
    const name = user.username || user.email?.split("@")[0] || "";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleAdd = async () => {
    if (!selectedUserId) return;
    setAdding(true);
    try {
      await onAddPlayer(selectedUserId);
      setSelectedUserId("");
      setSearchQuery("");
      onClose();
    } finally {
      setAdding(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getUserName = (user) => {
    return user.username || user.email?.split("@")[0] || "Unknown";
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" style={{ maxWidth: 400 }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, marginBottom: 4 }}>Add Player</h2>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>
            Add a player to the RSVP list
          </p>
        </div>

        {/* Search input */}
        <input
          type="text"
          className="input"
          placeholder="Search players..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: 12 }}
          autoFocus
        />

        {/* Player list */}
        <div style={{ 
          maxHeight: 300, 
          overflowY: "auto",
          border: "1px solid var(--color-border)",
          borderRadius: 8,
          marginBottom: 16,
        }}>
          {filteredUsers.length === 0 ? (
            <div style={{ 
              padding: 20, 
              textAlign: "center", 
              color: "var(--color-text-secondary)",
              fontSize: 14,
            }}>
              {searchQuery ? "No players found" : "All players have already RSVP'd"}
            </div>
          ) : (
            filteredUsers.map(user => {
              const name = getUserName(user);
              const isSelected = selectedUserId === user.id;
              const avatarStyle = getAvatarStyle(name, 32);
              
              return (
                <div
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    cursor: "pointer",
                    background: isSelected ? "var(--color-primary-soft)" : "transparent",
                    borderBottom: "1px solid var(--color-border)",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = "var(--color-bg-hover)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div style={avatarStyle}>
                    {getInitials(name)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontWeight: 500, 
                      fontSize: 14,
                      color: isSelected ? "var(--color-primary)" : "var(--color-text)",
                    }}>
                      {name}
                    </div>
                    {user.email && user.username && (
                      <div style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
                        {user.email}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <span style={{ color: "var(--color-primary)", fontSize: 18 }}>✓</span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button 
            className="btn btn-ghost press-effect"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="btn btn-primary press-effect"
            onClick={handleAdd}
            disabled={!selectedUserId || adding}
          >
            {adding ? "Adding..." : "Add Player"}
          </button>
        </div>
      </div>
    </div>
  );
}

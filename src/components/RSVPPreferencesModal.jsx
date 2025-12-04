import { useState } from "react";

/**
 * Modal for capturing player preferences when RSVPing to an event
 * 
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - onSubmit: (preferences) => void
 * - existingPreferences: object (optional, for editing)
 */
export default function RSVPPreferencesModal({ isOpen, onClose, onSubmit, existingPreferences = {} }) {
  const [preferences, setPreferences] = useState({
    transport: existingPreferences.transport || null, // 'cart' | 'walk' | null
    format: existingPreferences.format || null, // 'scramble' | 'stroke' | null
    coursePreference: existingPreferences.coursePreference || "",
  });
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (skipPreferences = false) => {
    setSaving(true);
    try {
      await onSubmit(skipPreferences ? {} : preferences);
    } finally {
      setSaving(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal" style={{ maxWidth: 420 }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, marginBottom: 4 }}>You're in! 🎉</h2>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
            Share your preferences for this round (optional)
          </p>
        </div>

        {/* Transport preference */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ 
            display: "block", 
            fontSize: 13, 
            fontWeight: 500, 
            marginBottom: 8,
            color: "var(--color-text)",
          }}>
            How do you want to get around?
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              onClick={() => setPreferences(p => ({ ...p, transport: p.transport === 'cart' ? null : 'cart' }))}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                border: `2px solid ${preferences.transport === 'cart' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: preferences.transport === 'cart' ? 'var(--color-primary-soft)' : 'var(--color-surface)',
                color: preferences.transport === 'cart' ? 'var(--color-primary)' : 'var(--color-text)',
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 24 }}>🛺</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Cart</span>
            </button>
            <button
              type="button"
              onClick={() => setPreferences(p => ({ ...p, transport: p.transport === 'walk' ? null : 'walk' }))}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                border: `2px solid ${preferences.transport === 'walk' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: preferences.transport === 'walk' ? 'var(--color-primary-soft)' : 'var(--color-surface)',
                color: preferences.transport === 'walk' ? 'var(--color-primary)' : 'var(--color-text)',
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 24 }}>🚶</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Walk</span>
            </button>
          </div>
        </div>

        {/* Format preference */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ 
            display: "block", 
            fontSize: 13, 
            fontWeight: 500, 
            marginBottom: 8,
            color: "var(--color-text)",
          }}>
            Preferred format?
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              onClick={() => setPreferences(p => ({ ...p, format: p.format === 'scramble' ? null : 'scramble' }))}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                border: `2px solid ${preferences.format === 'scramble' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: preferences.format === 'scramble' ? 'var(--color-primary-soft)' : 'var(--color-surface)',
                color: preferences.format === 'scramble' ? 'var(--color-primary)' : 'var(--color-text)',
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 24 }}>👥</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Scramble</span>
            </button>
            <button
              type="button"
              onClick={() => setPreferences(p => ({ ...p, format: p.format === 'stroke' ? null : 'stroke' }))}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                border: `2px solid ${preferences.format === 'stroke' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                background: preferences.format === 'stroke' ? 'var(--color-primary-soft)' : 'var(--color-surface)',
                color: preferences.format === 'stroke' ? 'var(--color-primary)' : 'var(--color-text)',
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 24 }}>🏌️</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Stroke Play</span>
            </button>
          </div>
        </div>

        {/* Course preference */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ 
            display: "block", 
            fontSize: 13, 
            fontWeight: 500, 
            marginBottom: 8,
            color: "var(--color-text)",
          }}>
            Course preference or suggestion?
          </label>
          <input
            type="text"
            className="input"
            placeholder="e.g. Somewhere with a good 19th hole..."
            value={preferences.coursePreference}
            onChange={(e) => setPreferences(p => ({ ...p, coursePreference: e.target.value }))}
            style={{ fontSize: 14 }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="btn btn-ghost"
            onClick={() => handleSubmit(true)}
            disabled={saving}
            style={{ flex: 1 }}
          >
            Skip
          </button>
          <button
            className="btn btn-primary hover-lift"
            onClick={() => handleSubmit(false)}
            disabled={saving}
            style={{ flex: 2 }}
          >
            {saving ? "Saving..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

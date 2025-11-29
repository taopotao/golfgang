// src/components/ResponseButtons.jsx

export default function ResponseButtons({
  currentStatus,
  onChange,
  loading,
}) {
  const isAvailable = currentStatus === "available";
  const isUnavailable = currentStatus === "unavailable";

  const handleClick = (status) => {
    if (loading) return;

    if (status === currentStatus) {
      // Clicking again toggles the response off
      onChange(null);
    } else {
      onChange(status);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      {/* AVAILABLE */}
      <button
        type="button"
        onClick={() => handleClick("available")}
        disabled={loading}
        style={{
          flex: 1,
          minWidth: 160,
          padding: "12px 18px",
          borderRadius: 999,
          border: "none",
          cursor: loading ? "default" : "pointer",
          background: isAvailable
            ? "linear-gradient(90deg, #7c5cff, #8b7bff)"
            : "var(--color-surface-soft)",
          color: isAvailable ? "#fff" : "var(--color-text)",
          fontWeight: 600,
          fontSize: 14,
          boxShadow: isAvailable
            ? "0 6px 18px rgba(124,92,255,0.45)"
            : "none",
          opacity: loading ? 0.7 : 1,
          transition: "150ms ease",
        }}
      >
        {loading && isAvailable ? "Saving…" : "Available"}
      </button>

      {/* UNAVAILABLE */}
      <button
        type="button"
        onClick={() => handleClick("unavailable")}
        disabled={loading}
        style={{
          flex: 1,
          minWidth: 160,
          padding: "12px 18px",
          borderRadius: 999,
          border: "none",
          cursor: loading ? "default" : "pointer",
          background: isUnavailable ? "#f97373" : "var(--color-surface-soft)",
          color: isUnavailable ? "#fff" : "var(--color-text)",
          fontWeight: 600,
          fontSize: 14,
          boxShadow: isUnavailable
            ? "0 6px 18px rgba(248,113,113,0.45)"
            : "none",
          opacity: loading ? 0.7 : 1,
          transition: "150ms ease",
        }}
      >
        {loading && isUnavailable ? "Saving…" : "Not Available"}
      </button>
    </div>
  );
}

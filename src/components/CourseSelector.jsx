import { useState } from "react";
import { hapticFeedback } from "../utils/uiEffects";

export default function CourseSelector({ 
  value, 
  onChange, 
  favouriteCourses = [], 
  onRandom, 
  disabled 
}) {
  const [showCustom, setShowCustom] = useState(false);
  const [customCourse, setCustomCourse] = useState("");

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (selected === "__custom__") {
      setShowCustom(true);
      onChange(null);
    } else if (selected === "__random__") {
      onRandom?.();
    } else if (selected === "") {
      onChange(null);
    } else {
      setShowCustom(false);
      onChange(selected);
    }
  };

  const handleCustomSubmit = () => {
    if (customCourse.trim()) {
      onChange(customCourse.trim());
      setShowCustom(false);
    }
  };

  const handleReroll = () => {
    hapticFeedback("medium");
    onRandom?.();
  };

  // Check if current value is a custom course (not in favourites and not "random")
  const isCustomValue = value && 
    value !== "random" && 
    !favouriteCourses.some(c => c.name === value);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: showCustom ? 8 : 0 }}>
        {/* Dropdown */}
        <select
          value={isCustomValue ? "__custom__" : (value || "")}
          onChange={handleSelectChange}
          disabled={disabled}
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 10,
            border: "2px solid var(--color-border)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            fontSize: 14,
            cursor: disabled ? "default" : "pointer",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
        >
          <option value="">Select a course...</option>
          {favouriteCourses.map((course) => (
            <option key={course.placeId || course.name} value={course.name}>
              {course.name}
            </option>
          ))}
          <option value="__random__">🎲 Random</option>
          <option value="__custom__">✏️ Type custom...</option>
        </select>

        {/* Random button */}
        <button
          type="button"
          onClick={handleReroll}
          disabled={disabled}
          title="Roll random course"
          style={{
            padding: "12px 16px",
            borderRadius: 10,
            border: "2px solid var(--color-border)",
            background: "var(--color-surface)",
            cursor: disabled ? "default" : "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          🎲
        </button>
      </div>

      {/* Custom course input */}
      {showCustom && (
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={customCourse}
            onChange={(e) => setCustomCourse(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCustomSubmit()}
            placeholder="Enter course name..."
            disabled={disabled}
            style={{
              flex: 1,
              padding: "12px 14px",
              borderRadius: 10,
              border: "2px solid var(--color-border)",
              background: "var(--color-surface)",
              color: "var(--color-text)",
              fontSize: 14,
            }}
          />
          <button
            type="button"
            onClick={handleCustomSubmit}
            disabled={disabled || !customCourse.trim()}
            className="btn btn-primary"
            style={{ padding: "12px 20px" }}
          >
            Set
          </button>
        </div>
      )}

      {/* Show current selection if custom */}
      {isCustomValue && !showCustom && (
        <div style={{ 
          marginTop: 8, 
          fontSize: 13, 
          color: "var(--color-text-secondary)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <span>✏️</span>
          <span>Custom: {value}</span>
          <button
            type="button"
            onClick={() => {
              setCustomCourse(value);
              setShowCustom(true);
            }}
            style={{
              marginLeft: 4,
              padding: "2px 8px",
              borderRadius: 4,
              border: "1px solid var(--color-border)",
              background: "transparent",
              cursor: "pointer",
              fontSize: 11,
              color: "var(--color-text-secondary)",
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

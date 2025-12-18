import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import { showToast, hapticFeedback } from "../utils/uiEffects";
import CourseAutocomplete from "../components/CourseAutocomplete";

export default function AdminSettings() {
  const { isAdmin } = useAuth();
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", placeId: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Poll settings
  const [pollSettings, setPollSettings] = useState({
    weekendPollEnabled: true,
    pollGenerateDay: 1, // Monday = 1
    pollCloseDay: 5, // Friday = 5
    pollCloseHour: 23, // 11pm
    daysBeforeWeekend: 12,
  });

  useEffect(() => {
    async function loadSettings() {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          const data = settingsDoc.data();
          setFavouriteCourses(data.favouriteCourses || []);
          if (data.pollSettings) {
            setPollSettings(data.pollSettings);
          }
        }
      } catch (err) {
        console.error("Error loading settings:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSettings();
  }, []);

  const handleAddCourse = () => {
    if (!newCourse.name.trim()) {
      showToast("Please enter a course name");
      return;
    }

    // Check for duplicates
    if (favouriteCourses.some((c) => c.name.toLowerCase() === newCourse.name.toLowerCase())) {
      showToast("Course already exists");
      return;
    }

    hapticFeedback("light");
    setFavouriteCourses([...favouriteCourses, { 
      name: newCourse.name.trim(), 
      placeId: newCourse.placeId || null,
    }]);
    setNewCourse({ name: "", placeId: "" });
  };

  const handleRemoveCourse = (index) => {
    hapticFeedback("light");
    setFavouriteCourses(favouriteCourses.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setSaving(true);
    hapticFeedback("medium");

    try {
      await setDoc(doc(db, "settings", "general"), {
        favouriteCourses,
        pollSettings,
        updatedAt: new Date(),
      }, { merge: true });

      showToast("Settings saved!");
    } catch (err) {
      console.error("Error saving settings:", err);
      showToast("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="page">
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          <p>You don't have permission to view this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Poll Settings</h1>
          <p>Configure polls and favourite courses</p>
        </div>
      </div>

      {/* Favourite Courses */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 600 }}>
          ⛳ Favourite Courses
        </h3>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 16 }}>
          These courses will appear in the dropdown when voting on polls.
        </p>

        {/* Course list */}
        <div style={{ marginBottom: 16 }}>
          {favouriteCourses.length === 0 ? (
            <p style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>
              No courses added yet
            </p>
          ) : (
            favouriteCourses.map((course, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  background: "var(--color-bg-secondary)",
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              >
                <div>
                  <span style={{ fontWeight: 500 }}>{course.name}</span>
                  {course.placeId && (
                    <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginLeft: 8 }}>
                      (linked)
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleRemoveCourse(index)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "none",
                    background: "var(--color-danger-soft)",
                    color: "var(--color-danger)",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Add course */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1 }}>
            <CourseAutocomplete
              value={{ name: newCourse.name, placeId: newCourse.placeId }}
              onChange={(course) => setNewCourse({ 
                name: course.name || "", 
                placeId: course.placeId || "" 
              })}
              placeholder="Add a course..."
            />
          </div>
          <button
            onClick={handleAddCourse}
            className="btn btn-primary"
            style={{ padding: "12px 20px" }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Poll Settings */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 600 }}>
          🗳️ Weekend Poll Settings
        </h3>

        {/* Enable/disable */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          padding: "12px 0",
          borderBottom: "1px solid var(--color-border)",
          marginBottom: 16,
        }}>
          <div>
            <div style={{ fontWeight: 500 }}>Auto-generate weekend polls</div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              Automatically create polls for each weekend
            </div>
          </div>
          <button
            onClick={() => setPollSettings(s => ({ ...s, weekendPollEnabled: !s.weekendPollEnabled }))}
            style={{
              width: 50,
              height: 28,
              borderRadius: 14,
              border: "none",
              background: pollSettings.weekendPollEnabled ? "var(--color-primary)" : "var(--color-bg-tertiary)",
              cursor: "pointer",
              position: "relative",
              transition: "background 0.2s ease",
            }}
          >
            <span style={{
              position: "absolute",
              top: 2,
              left: pollSettings.weekendPollEnabled ? 24 : 2,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "left 0.2s ease",
            }} />
          </button>
        </div>

        {/* Generate day */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
            Poll generates on
          </label>
          <select
            value={pollSettings.pollGenerateDay}
            onChange={(e) => setPollSettings(s => ({ ...s, pollGenerateDay: parseInt(e.target.value) }))}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "2px solid var(--color-border)",
              background: "var(--color-surface)",
              color: "var(--color-text)",
              fontSize: 14,
            }}
          >
            <option value={0}>Sunday</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
          </select>
          <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: 4 }}>
            Poll will be created {pollSettings.daysBeforeWeekend} days before the weekend
          </p>
        </div>

        {/* Close day */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
            Poll closes on
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <select
              value={pollSettings.pollCloseDay}
              onChange={(e) => setPollSettings(s => ({ ...s, pollCloseDay: parseInt(e.target.value) }))}
              style={{
                flex: 1,
                padding: "12px 14px",
                borderRadius: 10,
                border: "2px solid var(--color-border)",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                fontSize: 14,
              }}
            >
              <option value={0}>Sunday</option>
              <option value={1}>Monday</option>
              <option value={2}>Tuesday</option>
              <option value={3}>Wednesday</option>
              <option value={4}>Thursday</option>
              <option value={5}>Friday</option>
              <option value={6}>Saturday</option>
            </select>
            <select
              value={pollSettings.pollCloseHour}
              onChange={(e) => setPollSettings(s => ({ ...s, pollCloseHour: parseInt(e.target.value) }))}
              style={{
                width: 100,
                padding: "12px 14px",
                borderRadius: 10,
                border: "2px solid var(--color-border)",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                fontSize: 14,
              }}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i === 0 ? "12am" : i < 12 ? `${i}am` : i === 12 ? "12pm" : `${i - 12}pm`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Save button */}
      <button
        onClick={handleSave}
        disabled={saving}
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        {saving ? "Saving..." : "Save Settings"}
      </button>
    </div>
  );
}

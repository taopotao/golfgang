import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNotificationInfo, setShowNotificationInfo] = useState(false);

  async function usernameExists(name) {
    const uname = name.toLowerCase();
    const q = query(collection(db, "users"), where("username", "==", uname));
    const snap = await getDocs(q);
    return !snap.empty;
  }

  async function requestNotificationPermission() {
    if ("Notification" in window) {
      try {
        const permission = await Notification.requestPermission();
        return permission === "granted";
      } catch (err) {
        console.error("Notification permission error:", err);
        return false;
      }
    }
    return false;
  }

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    const cleanedUsername = username.trim().toLowerCase();

    if (!cleanedUsername.match(/^[a-z0-9_]+$/)) {
      setError("Username can only contain letters, numbers, and underscores.");
      return;
    }

    setLoading(true);

    try {
      if (await usernameExists(cleanedUsername)) {
        setError("That username is already taken.");
        setLoading(false);
        return;
      }

      const result = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", result.user.uid), {
        email,
        username: cleanedUsername,
        isAdmin: false,
      });

      // Request notification permission after successful signup
      await requestNotificationPermission();

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed");
    }

    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "calc(100vh - var(--nav-height))",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
    }}>
      <div className="card" style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ 
            fontSize: 32, 
            fontWeight: 700,
            background: "linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 8 
          }}>GolfGang</h1>
          <h2 style={{ marginBottom: 4, fontSize: 20, fontWeight: 500 }}>Create account</h2>
          <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: 14 }}>
            Join GolfGang to plan rounds with friends
          </p>
        </div>

        {error && (
          <div className="toast toast-danger" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: 16 }}>
            <label>Email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Username</label>
            <input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
            <p className="helper-text" style={{ marginTop: 4 }}>
              Letters, numbers, and underscores only
            </p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Notification info section */}
          <div style={{ 
            marginBottom: 20, 
            padding: 12, 
            background: "var(--color-surface-secondary, #f5f5f5)", 
            borderRadius: 8,
            fontSize: 13
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: showNotificationInfo ? 8 : 0
            }}>
              <span style={{ color: "var(--color-text-secondary)" }}>
                🔔 We'll ask for notification permissions to keep you updated
              </span>
              <button
                type="button"
                onClick={() => setShowNotificationInfo(!showNotificationInfo)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-primary, #0f7b6c)",
                  cursor: "pointer",
                  fontSize: 12,
                  padding: 0,
                  marginLeft: 8,
                  textDecoration: "underline"
                }}
              >
                {showNotificationInfo ? "Hide" : "Learn more"}
              </button>
            </div>
            {showNotificationInfo && (
              <div style={{ 
                color: "var(--color-text-secondary)", 
                fontSize: 12,
                lineHeight: 1.5
              }}>
                <p style={{ margin: "0 0 8px 0" }}>
                  Notifications help you stay in the loop when friends invite you to rounds or comment on your posts.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>To disable notifications later:</strong> Go to your Profile and toggle off notifications, or simply log out of your account.
                </p>
              </div>
            )}
          </div>

          <button
            className="btn btn-primary"
            style={{ width: "100%", padding: "12px 16px" }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Creating account…" : "Sign up"}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: "center", fontSize: 14 }}>
          <span style={{ color: "var(--color-text-secondary)" }}>Already have an account? </span>
          <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
}

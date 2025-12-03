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

  async function usernameExists(name) {
    const uname = name.toLowerCase();
    const q = query(collection(db, "users"), where("username", "==", uname));
    const snap = await getDocs(q);
    return !snap.empty;
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

      navigate("/");
    } catch (err) {
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
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "linear-gradient(135deg, #0f7b6c 0%, #2383e2 100%)",
            margin: "0 auto 16px",
          }} />
          <h1 style={{ marginBottom: 4 }}>Create account</h1>
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
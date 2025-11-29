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
  const [username, setUsername] = useState(""); // new
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
      // Check if username taken
      if (await usernameExists(cleanedUsername)) {
        setError("That username is already taken.");
        setLoading(false);
        return;
      }

      // Create authentication account
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user record
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
    <div style={{ maxWidth: 420, margin: "4rem auto", padding: "1rem" }}>
      <div className="surface" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0, fontSize: "1.8rem" }}>Create account</h1>

        <form onSubmit={handleSignup} style={{ marginTop: "1.5rem" }}>
          {/* EMAIL */}
          <label style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Email
          </label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ marginBottom: "1rem" }}
            required
          />

          {/* USERNAME */}
          <label style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Username
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
            style={{ marginBottom: "1rem" }}
            required
          />

          {/* PASSWORD */}
          <label style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Password
          </label>
          <input
            className="input"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "1rem" }}
            required
          />

          {/* ERROR MESSAGE */}
          {error && (
            <p style={{ color: "var(--danger)", marginBottom: "1rem" }}>
              {error}
            </p>
          )}

          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Creating account…" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

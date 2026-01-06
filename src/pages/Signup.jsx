import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, collection, query, where, getDocs } from "firebase/firestore";

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

    // Validate username format
    if (!cleanedUsername.match(/^[a-z0-9_]+$/)) {
      setError("Username can only contain letters, numbers, and underscores.");
      return;
    }

    if (cleanedUsername.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      // Check if username is taken
      if (await usernameExists(cleanedUsername)) {
        setError("That username is already taken.");
        setLoading(false);
        return;
      }

      // Create auth user
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Create user document in Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        email,
        username: cleanedUsername,
        isAdmin: false,
        createdAt: new Date().toISOString(),
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak. Use at least 6 characters.");
      } else {
        setError(err.message || "Signup failed.");
      }
    }

    setLoading(false);
  }

  return (
    <div className="auth-page">
      <div className="card auth-card">
        <div className="auth-header">
          <h1 className="auth-logo">⛳ GolfGang</h1>
          <h2 className="auth-title">Create account</h2>
          <p className="auth-subtitle">Join the crew and start playing</p>
        </div>

        {error && (
          <div className="toast toast-danger">{error}</div>
        )}

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="golfer123"
              required
              autoComplete="username"
            />
            <span className="input-hint">Letters, numbers, and underscores only</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
            <span className="input-hint">At least 6 characters</span>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

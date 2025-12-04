import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let emailToUse = identifier.trim();

      if (!identifier.includes("@")) {
        const q = query(
          collection(db, "users"),
          where("username", "==", identifier.trim().toLowerCase())
        );
        const snap = await getDocs(q);
        if (snap.empty) throw new Error("Username not found.");
        const userDoc = snap.docs[0].data();
        emailToUse = userDoc.email;
      }

      await signInWithEmailAndPassword(auth, emailToUse, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to sign in.");
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
          <h2 style={{ marginBottom: 4, fontSize: 20, fontWeight: 500 }}>Welcome back</h2>
          <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: 14 }}>
            Sign in to your GolfGang account
          </p>
        </div>

        {error && (
          <div className="toast toast-danger" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 16 }}>
            <label>Email or username</label>
            <input
              className="input"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />
          </div>

          <button
            className="btn btn-primary"
            style={{ width: "100%", padding: "12px 16px" }}
            disabled={loading}
            type="submit"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: "center", fontSize: 14 }}>
          <a href="/signup" style={{ display: "block", marginBottom: 8 }}>
            Create an account
          </a>
          <a href="/reset-password" style={{ color: "var(--color-text-secondary)" }}>
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

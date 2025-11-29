import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); // email OR username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let emailToUse = identifier.trim();

      // If user typed a username, convert it to email
      if (!identifier.includes("@")) {
        // Lookup username in Firestore
        const q = query(
          collection(db, "users"),
          where("username", "==", identifier.trim().toLowerCase())
        );

        const snap = await getDocs(q);

        if (snap.empty) throw new Error("Username not found.");

        const userDoc = snap.docs[0].data();
        emailToUse = userDoc.email;
      }

      // Now perform login with email + password
      await signInWithEmailAndPassword(auth, emailToUse, password);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to sign in.");
    }

    setLoading(false);
  }

  return (
  <div
    style={{
      minHeight: "calc(100vh - 80px)", // keep navbar spacing consistent
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        padding: "2.5rem 2rem",
        background: "var(--surface)",
        borderRadius: "16px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.8rem" }}>
        Sign in
      </h1>

      <p style={{ marginTop: 0, marginBottom: "1.8rem", color: "var(--text-muted)" }}>
        Use your email or username to log in
      </p>

      {error && (
        <p style={{ color: "var(--danger)", marginBottom: "1rem" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleLogin}>
        {/* Identifier */}
        <div style={{ marginBottom: "1.2rem" }}>
          <label style={{ display: "block", marginBottom: "0.35rem" }}>
            Email or username
          </label>
          <input
            className="input"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="e.g. tao@gmail.com OR taopotao"
            required
            style={{ width: "100%" }}   // ← add this
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1.6rem" }}>
          <label style={{ display: "block", marginBottom: "0.35rem" }}>
            Password
          </label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
            style={{ width: "100%" }}
          />
        </div>

        {/* Submit */}
        <button
          className="btn btn-primary"
          style={{
            width: "100%",
            height: 44,
            borderRadius: 10,
            fontSize: 15,
            marginBottom: "1.4rem",
          }}
          disabled={loading}
          type="submit"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      {/* Links */}
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <a
          href="/signup"
          style={{
            display: "block",
            marginBottom: "0.6rem",
            color: "var(--primary)",
            fontSize: 14,
          }}
        >
          Create an account
        </a>

        <a
          href="/reset-password"
          style={{ color: "var(--primary)", fontSize: 14 }}
        >
          Forgot password?
        </a>
      </div>
    </div>
  </div>
);
}

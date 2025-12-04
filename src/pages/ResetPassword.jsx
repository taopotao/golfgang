import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleReset(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setSuccess(true);
    } catch (err) {
      console.error(err);
      // Provide user-friendly error messages
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError(err.message || "Failed to send reset email.");
      }
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
            color: "#0f7b6c",
            marginBottom: 8 
          }}>GolfGang</h1>
          <h2 style={{ marginBottom: 4, fontSize: 20, fontWeight: 500 }}>Reset password</h2>
          <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: 14 }}>
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {error && (
          <div className="toast toast-danger" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}

        {success ? (
          <div>
            <div className="toast toast-success" style={{ marginBottom: 16 }}>
              Password reset email sent! Check your inbox (and spam folder) for a link to reset your password.
            </div>
            <Link 
              to="/login" 
              className="btn btn-primary"
              style={{ width: "100%", padding: "12px 16px", display: "block", textAlign: "center" }}
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleReset}>
            <div style={{ marginBottom: 20 }}>
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

            <button
              className="btn btn-primary"
              style={{ width: "100%", padding: "12px 16px" }}
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending…" : "Send reset link"}
            </button>
          </form>
        )}

        <div style={{ marginTop: 20, textAlign: "center", fontSize: 14 }}>
          <Link to="/login" style={{ color: "var(--color-text-secondary)" }}>
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

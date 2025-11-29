import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ResetPassword() {
  const [identifier, setIdentifier] = useState(""); // email or username
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getEmail(identifier) {
    if (identifier.includes("@")) return identifier;

    const q = query(
      collection(db, "users"),
      where("username", "==", identifier.toLowerCase())
    );
    const snap = await getDocs(q);

    if (snap.empty) throw new Error("Username not found");
    return snap.docs[0].data().email;
  }

  async function handleReset(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const email = await getEmail(identifier);
      await sendPasswordResetEmail(auth, email);

      setMessage("Password reset link sent! Check your email.");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 420, margin: "4rem auto", padding: "1rem" }}>
      <div className="surface" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Reset password</h1>

        <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
          Enter your email or username, and we’ll send you a reset link.
        </p>

        <form onSubmit={handleReset}>
          <input
            className="input"
            placeholder="Email or username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />

          {message && (
            <p style={{ color: "var(--success)" }}>{message}</p>
          )}

          {error && (
            <p style={{ color: "var(--danger)" }}>{error}</p>
          )}

          <button className="btn btn-primary" style={{ width: "100%" }}>
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
      </div>
    </div>
  );
}

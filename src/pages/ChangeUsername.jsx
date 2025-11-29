import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function ChangeUsername() {
  const { user } = useAuth();
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  if (!user) return <p>Loading…</p>;

  async function usernameExists(name) {
    const q = query(
      collection(db, "users"),
      where("username", "==", name.toLowerCase())
    );
    const snap = await getDocs(q);
    return !snap.empty;
  }

  async function updateUsername(e) {
    e.preventDefault();
    setError("");
    setMsg("");

    const cleaned = newUsername.toLowerCase().trim();

    if (!cleaned.match(/^[a-z0-9_]+$/)) {
      setError("Username must be letters, numbers or underscores.");
      return;
    }

    if (await usernameExists(cleaned)) {
      setError("Username already taken.");
      return;
    }

    await updateDoc(doc(db, "users", user.uid), {
      username: cleaned,
    });

    setMsg("Username updated!");
  }

  return (
    <div style={{ maxWidth: 420, margin: "4rem auto" }}>
      <div className="surface" style={{ padding: "2rem" }}>
        <h1>Change username</h1>

        <form onSubmit={updateUsername}>
          <input
            className="input"
            placeholder="New username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />

          {error && <p style={{ color: "var(--danger)" }}>{error}</p>}
          {msg && <p style={{ color: "var(--success)" }}>{msg}</p>}

          <button className="btn btn-primary" style={{ width: "100%" }}>
            Update username
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { auth, db } from "../firebase";
import NotificationSettings from '../components/NotificationSettings';
import {
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Profile() {
  const { user, profile } = useAuth();

  const [email, setEmail] = useState(user?.email || "");
  const [username, setUsername] = useState(profile?.username || "");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  if (!user || !profile) {
    return (
      <div className="page">
        <div className="card" style={{ maxWidth: 400, margin: "3rem auto", textAlign: "center" }}>
          Loading…
        </div>
      </div>
    );
  }

  async function usernameTaken(name) {
    const q = query(collection(db, "users"), where("username", "==", name));
    const snap = await getDocs(q);
    return !snap.empty && snap.docs[0].id !== user.uid;
  }

  async function verifyPassword() {
    const credential = EmailAuthProvider.credential(user.email, currentPass);
    await reauthenticateWithCredential(user, credential);
  }

  async function handleUpdateUsername() {
    setMsg("");
    setError("");

    const clean = username.toLowerCase().trim();

    if (!clean.match(/^[a-z0-9_]+$/)) {
      setError("Username can only contain letters, numbers, and underscores.");
      return;
    }

    if (await usernameTaken(clean)) {
      setError("That username is already taken.");
      return;
    }

    await updateDoc(doc(db, "users", user.uid), { username: clean });
    setMsg("Username updated.");
  }

  async function handleUpdateEmail() {
    setMsg("");
    setError("");

    try {
      await verifyPassword();
      await updateEmail(user, email);
      await updateDoc(doc(db, "users", user.uid), { email });
      setMsg("Email updated.");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdatePassword() {
    setMsg("");
    setError("");

    try {
      await verifyPassword();
      await updatePassword(user, newPass);
      setMsg("Password updated.");
      setNewPass("");
      setCurrentPass("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div className="page-header">
          <div className="page-header-title">
            <h1>Profile</h1>
            <p>Manage your account settings</p>
          </div>
        </div>

        {/* Notifications */}
        <NotificationSettings />

        {/* Messages */}
        {msg && (
          <div className="toast toast-success" style={{ marginBottom: 16 }}>
            {msg}
          </div>
        )}
        {error && (
          <div className="toast toast-danger" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Username section */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="section-header" style={{ marginBottom: 12 }}>
            <span className="section-title">Username</span>
          </div>
          <div style={{ marginBottom: 12 }}>
            <input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
            />
            <p className="helper-text" style={{ marginTop: 4 }}>
              Letters, numbers, and underscores only
            </p>
          </div>
          <button className="btn btn-primary btn-sm" onClick={handleUpdateUsername}>
            Update username
          </button>
        </div>

        {/* Email section */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="section-header" style={{ marginBottom: 12 }}>
            <span className="section-title">Email</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label>Email address</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Current password (to confirm)</label>
              <input
                className="input"
                type="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                placeholder="Enter current password"
              />
            </div>
          </div>
          <button className="btn btn-primary btn-sm" style={{ marginTop: 12 }} onClick={handleUpdateEmail}>
            Update email
          </button>
        </div>

        {/* Password section */}
        <div className="card">
          <div className="section-header" style={{ marginBottom: 12 }}>
            <span className="section-title">Change password</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label>Current password</label>
              <input
                className="input"
                type="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label>New password</label>
              <input
                className="input"
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
          </div>
          <button className="btn btn-primary btn-sm" style={{ marginTop: 12 }} onClick={handleUpdatePassword}>
            Update password
          </button>
        </div>
      </div>
    </div>
  );
}
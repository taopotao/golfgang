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
        <div
          className="card"
          style={{ maxWidth: 400, margin: "3rem auto" }}
        >
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
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPass
    );
    await reauthenticateWithCredential(user, credential);
  }

  async function handleUpdateUsername() {
    setMsg("");
    setError("");

    const clean = username.toLowerCase().trim();

    if (!clean.match(/^[a-z0-9_]+$/)) {
      setError(
        "Username must contain only letters, numbers, and underscores."
      );
      return;
    }

    if (await usernameTaken(clean)) {
      setError("That username is already taken.");
      return;
    }

    await updateDoc(doc(db, "users", user.uid), {
      username: clean,
    });

    setMsg("Username updated.");
  }

  async function handleUpdateEmail() {
    setMsg("");
    setError("");

    try {
      await verifyPassword();
      await updateEmail(user, email);

      await updateDoc(doc(db, "users", user.uid), {
        email,
      });

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
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="page">
      <div
        className="card"
        style={{ maxWidth: 520, margin: "3rem auto" }}
      >
        <div className="card-header">

          <NotificationSettings />
          
          <div className="card-title-group">
            <h1 className="card-title">Your profile</h1>
            <p className="card-subtitle">
              Update your username, email, and password.
            </p>
          </div>
        </div>

        <div className="card-body">
          {msg && (
            <div className="toast toast-success" style={{ marginBottom: 12 }}>
              {msg}
            </div>
          )}
          {error && (
            <div className="toast toast-danger" style={{ marginBottom: 12 }}>
              {error}
            </div>
          )}

          {/* Username */}
          <section style={{ marginTop: 8 }}>
            <h3 style={{ marginBottom: 8, fontSize: 16 }}>Username</h3>
            <div className="form-field">
              <input
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%" }}
              />
              <small>
                Use lowercase letters, numbers, and underscores only.
              </small>
            </div>
            <button
              className="btn btn-primary btn-sm"
              style={{ marginTop: 10 }}
              onClick={handleUpdateUsername}
            >
              Update username
            </button>
          </section>

          {/* Email */}
          <section style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 8, fontSize: 16 }}>Email</h3>

            <div className="form-field">
              <label>Email address</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <p className="text-muted" style={{ marginTop: 10 }}>
              Enter your current password to confirm.
            </p>

            <div className="form-field" style={{ marginTop: 8 }}>
              <label>Current password</label>
              <input
                className="input"
                type="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <button
              className="btn btn-primary btn-sm"
              style={{ marginTop: 12 }}
              onClick={handleUpdateEmail}
            >
              Update email
            </button>
          </section>

          {/* Password */}
          <section style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 8, fontSize: 16 }}>
              Change password
            </h3>

            <p className="text-muted">
              Enter your current password, then choose a new one.
            </p>

            <div className="form-field" style={{ marginTop: 10 }}>
              <label>Current password</label>
              <input
                className="input"
                type="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <div className="form-field" style={{ marginTop: 10 }}>
              <label>New password</label>
              <input
                className="input"
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>

            <button
              className="btn btn-primary btn-sm"
              style={{ marginTop: 12 }}
              onClick={handleUpdatePassword}
            >
              Update password
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

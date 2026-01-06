import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { getInitials, getAvatarStyle } from "../utils/helpers";
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { showToast } from "../utils/helpers";

export default function Profile() {
  const { user, profile, isAdmin, logout } = useAuth();

  const username = profile?.username || user?.email?.split('@')[0] || 'User';
  const avatarStyle = getAvatarStyle(username);

  // Edit states
  const [editingUsername, setEditingUsername] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  
  // Form states
  const [newUsername, setNewUsername] = useState(username);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Loading states
  const [savingUsername, setSavingUsername] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  // Check if username is taken
  async function usernameExists(name) {
    const uname = name.toLowerCase();
    const q = query(
      collection(db, "users"), 
      where("username", "==", uname)
    );
    const snap = await getDocs(q);
    // Allow if it's the current user's username
    return snap.docs.some(doc => doc.id !== user.uid);
  }

  // Update username
  const handleUpdateUsername = async () => {
    const cleanedUsername = newUsername.trim().toLowerCase();

    // Validation
    if (!cleanedUsername.match(/^[a-z0-9_]+$/)) {
      showToast("Username can only contain letters, numbers, and underscores");
      return;
    }

    if (cleanedUsername.length < 3) {
      showToast("Username must be at least 3 characters");
      return;
    }

    if (cleanedUsername === username.toLowerCase()) {
      setEditingUsername(false);
      return;
    }

    setSavingUsername(true);

    try {
      // Check if username is taken
      if (await usernameExists(cleanedUsername)) {
        showToast("That username is already taken");
        setSavingUsername(false);
        return;
      }

      // Update in Firestore
      await updateDoc(doc(db, "users", user.uid), {
        username: cleanedUsername
      });

      showToast("Username updated! 🎉");
      setEditingUsername(false);
      
      // Reload to update profile
      window.location.reload();
    } catch (err) {
      console.error("Error updating username:", err);
      showToast("Failed to update username");
    } finally {
      setSavingUsername(false);
    }
  };

  // Update password
  const handleUpdatePassword = async () => {
    // Validation
    if (!currentPassword) {
      showToast("Please enter your current password");
      return;
    }

    if (newPassword.length < 6) {
      showToast("New password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast("New passwords don't match");
      return;
    }

    setSavingPassword(true);

    try {
      // Re-authenticate user (required by Firebase before password change)
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, newPassword);

      showToast("Password updated! 🔒");
      setEditingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Error updating password:", err);
      if (err.code === "auth/wrong-password") {
        showToast("Current password is incorrect");
      } else if (err.code === "auth/weak-password") {
        showToast("New password is too weak");
      } else {
        showToast("Failed to update password");
      }
    } finally {
      setSavingPassword(false);
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        {/* Profile Header Card */}
        <div className="card profile-card">
          <div 
            className="avatar avatar-lg"
            style={{ 
              backgroundColor: avatarStyle.bg, 
              color: avatarStyle.text,
              margin: '0 auto 16px',
            }}
          >
            {getInitials(username)}
          </div>
          
          <h2 className="profile-name">{username}</h2>
          <p className="profile-email">{user?.email}</p>
          
          {isAdmin && (
            <span className="badge badge-success" style={{ marginTop: 8 }}>
              Admin
            </span>
          )}
        </div>

        {/* Username Section */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 className="card-title">Username</h3>
            {!editingUsername && (
              <button 
                className="btn btn-ghost btn-sm" 
                onClick={() => {
                  setNewUsername(username);
                  setEditingUsername(true);
                }}
              >
                Edit
              </button>
            )}
          </div>

          {!editingUsername ? (
            <div className="info-row">
              <span className="info-label">Current username</span>
              <span className="info-value">{username}</span>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label>New Username</label>
                <input
                  type="text"
                  className="input"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="golfer123"
                  autoFocus
                />
                <span className="input-hint">Letters, numbers, and underscores only</span>
              </div>
              
              <div className="form-actions">
                <button 
                  className="btn btn-ghost" 
                  onClick={() => {
                    setEditingUsername(false);
                    setNewUsername(username);
                  }}
                  disabled={savingUsername}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleUpdateUsername}
                  disabled={savingUsername}
                >
                  {savingUsername ? "Saving..." : "Save Username"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Password Section */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 className="card-title">Password</h3>
            {!editingPassword && (
              <button 
                className="btn btn-ghost btn-sm" 
                onClick={() => setEditingPassword(true)}
              >
                Change
              </button>
            )}
          </div>

          {!editingPassword ? (
            <div className="info-row">
              <span className="info-label">Password</span>
              <span className="info-value">••••••••</span>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  className="input"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  autoComplete="current-password"
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  autoComplete="new-password"
                />
                <span className="input-hint">At least 6 characters</span>
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                />
              </div>
              
              <div className="form-actions">
                <button 
                  className="btn btn-ghost" 
                  onClick={() => {
                    setEditingPassword(false);
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  disabled={savingPassword}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleUpdatePassword}
                  disabled={savingPassword}
                >
                  {savingPassword ? "Updating..." : "Update Password"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Account Info */}
        <div className="card">
          <h3 className="card-title">Account Info</h3>
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Member since</span>
            <span className="info-value">
              {profile?.createdAt 
                ? new Date(profile.createdAt).toLocaleDateString('en-AU', {
                    month: 'long',
                    year: 'numeric'
                  })
                : 'Unknown'
              }
            </span>
          </div>
        </div>

        {/* Sign Out */}
        <button 
          className="btn btn-danger btn-full"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
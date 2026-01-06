import { useAuth } from "../providers/AuthProvider";
import { getInitials, getAvatarStyle } from "../utils/helpers";

export default function Profile() {
  const { user, profile, isAdmin, logout } = useAuth();

  const username = profile?.username || user?.email?.split('@')[0] || 'User';
  const avatarStyle = getAvatarStyle(username);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="card profile-card">
          {/* Avatar */}
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
          
          {/* Username */}
          <h2 className="profile-name">{username}</h2>
          
          {/* Email */}
          <p className="profile-email">{user?.email}</p>
          
          {/* Admin badge */}
          {isAdmin && (
            <span className="badge badge-success" style={{ marginTop: 8 }}>
              Admin
            </span>
          )}
        </div>

        {/* Account Info */}
        <div className="card">
          <h3 className="card-title">Account</h3>
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Username</span>
            <span className="info-value">{profile?.username || 'Not set'}</span>
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

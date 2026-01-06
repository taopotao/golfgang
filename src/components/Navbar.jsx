import { Link } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export default function Navbar() {
  const { user, isAdmin } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">⛳</span>
          <span className="navbar-title">GolfGang</span>
        </Link>
        
        <div className="navbar-actions">
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin" className="btn btn-ghost btn-sm">
                  Admin
                </Link>
              )}
              <Link to="/profile" className="btn btn-ghost btn-sm">
                Profile
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

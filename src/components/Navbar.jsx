import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';

// Import your logo - uncomment and adjust path if you have one:
// import logoImg from '../assets/golfgang-logo.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  const { toggleTheme, isDark } = useTheme();

  // Get user initial for avatar
  const getUserInitial = () => {
    if (!user) return '?';
    const name = user.displayName || user.email || '';
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        {/* Logo / Brand - using text, replace with image if you have one */}
        <Link to="/" className="top-nav-left">
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ fontSize: '24px' }}>⛳</span>
            GolfGang
          </span>
        </Link>

        {/* Right side actions */}
        <div className="top-nav-right">
          {user && (
            <>
              {/* Desktop nav links */}
              <div className="top-nav-links desktop-only">
                <Link 
                  to="/" 
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Events
                </Link>
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className={location.pathname === '/admin' ? 'active' : ''}
                  >
                    Admin
                  </Link>
                )}
              </div>
            </>
          )}

          {/* Theme toggle */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* User avatar / Login */}
          {user ? (
            <div 
              className="header-avatar"
              onClick={() => navigate('/profile')}
              title="Profile"
              style={{ cursor: 'pointer' }}
            >
              {getUserInitial()}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
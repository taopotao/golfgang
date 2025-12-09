import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';

// Import your logo - uncomment and adjust path if you have one:
// import logoImg from '../assets/golfgang-logo.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Get user initial for avatar
  const getUserInitial = () => {
    if (!user) return '?';
    const name = user.displayName || user.email || '';
    return name.charAt(0).toUpperCase();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setShowMenu(false);
    await logout();
    navigate('/login');
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
            <div ref={menuRef} style={{ position: 'relative' }}>
              <div 
                className="header-avatar"
                onClick={() => setShowMenu(!showMenu)}
                title="Menu"
                style={{ cursor: 'pointer' }}
              >
                {getUserInitial()}
              </div>
              
              {showMenu && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border)',
                  minWidth: 160,
                  padding: '6px',
                  zIndex: 100,
                }}>
                  <div style={{
                    padding: '8px 12px',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    borderBottom: '1px solid var(--color-border)',
                    marginBottom: 6,
                  }}>
                    {user.displayName || user.email}
                  </div>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate('/profile');
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '10px 12px',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text)',
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--color-bg-hover)'}
                    onMouseLeave={(e) => e.target.style.background = 'none'}
                  >
                    👤 Profile
                  </button>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate('/admin');
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px 12px',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text)',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--color-bg-hover)'}
                      onMouseLeave={(e) => e.target.style.background = 'none'}
                    >
                      ⚙️ Admin
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '10px 12px',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-danger)',
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--color-bg-hover)'}
                    onMouseLeave={(e) => e.target.style.background = 'none'}
                  >
                    🚪 Log out
                  </button>
                </div>
              )}
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
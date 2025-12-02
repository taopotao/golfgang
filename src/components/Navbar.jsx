import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useTheme } from "../providers/ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="top-nav">
        <div className="top-nav-inner">
          {/* LEFT — Brand */}
          <Link to="/" className="top-nav-left" style={{ textDecoration: 'none' }}>
            <div className="brand-mark" />
            <div className="brand-title">
              <span className="brand-title-main">GolfGang</span>
              <span className="brand-title-sub">Tee Time Planner</span>
            </div>
          </Link>

          {/* RIGHT — Desktop menu */}
          <div className="top-nav-right desktop-only nav-desktop">
            {user && (
              <>
                <nav className="top-nav-links">
                  <Link to="/" className={location.pathname === "/" ? "active" : undefined}>
                    Calendar
                  </Link>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className={location.pathname.startsWith("/admin") ? "active" : undefined}
                    >
                      Admin
                    </Link>
                  )}
                </nav>

                <button onClick={toggleTheme} className="theme-toggle-btn">
                  <div
                    className="theme-toggle-thumb"
                    style={{ left: theme === "dark" ? 30 : 3 }}
                  />
                  <span>☀️</span>
                  <span>🌙</span>
                </button>

                <button onClick={() => navigate("/profile")} className="btn btn-ghost btn-sm">
                  Profile
                </button>

                <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          {user && (
            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                padding: 8,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
              aria-label="Menu"
            >
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main)',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }} />
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main)',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main)',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }} />
            </button>
          )}
        </div>
      </header>

      {/* MOBILE MENU - Full screen overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-only"
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--color-bg)',
            zIndex: 100,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            overflowY: 'auto',
          }}
        >
          {user && (
            <>
              {/* User info */}
              <div style={{
                padding: '16px 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                marginBottom: 8,
              }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {user.email?.split('@')[0]}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                  {user.email}
                  {isAdmin && ' • Admin'}
                </div>
              </div>

              {/* Navigation links */}
              <Link 
                to="/" 
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 0',
                  textDecoration: 'none',
                  color: location.pathname === '/' ? 'var(--color-primary)' : 'var(--color-text-main)',
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                📅 Calendar
              </Link>

              <Link 
                to="/profile" 
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 0',
                  textDecoration: 'none',
                  color: location.pathname === '/profile' ? 'var(--color-primary)' : 'var(--color-text-main)',
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                👤 Profile
              </Link>

              {isAdmin && (
                <Link 
                  to="/admin" 
                  onClick={closeMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 0',
                    textDecoration: 'none',
                    color: location.pathname.startsWith('/admin') ? 'var(--color-primary)' : 'var(--color-text-main)',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  ⚙️ Admin
                </Link>
              )}

              {/* Theme toggle */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                borderTop: '1px solid var(--color-border-subtle)',
                marginTop: 8,
              }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                  {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </span>
                <button 
                  onClick={toggleTheme}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--color-surface-soft)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontSize: 14,
                    color: 'var(--color-text-main)',
                  }}
                >
                  Switch
                </button>
              </div>

              {/* Logout */}
              <button 
                onClick={() => { handleLogout(); closeMenu(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 0',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: 'var(--color-danger)',
                  fontSize: 16,
                  fontWeight: 500,
                  width: '100%',
                }}
              >
                🚪 Logout
              </button>
            </>
          )}

          {!user && (
            <Link
              to="/login"
              className="btn btn-primary"
              onClick={closeMenu}
              style={{ marginTop: 20 }}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
}

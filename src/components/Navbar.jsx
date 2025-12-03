import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export default function Navbar() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{`
        .nav-desktop {
          display: flex;
        }
        .nav-mobile-burger {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-burger {
            display: flex !important;
          }
          .mobile-menu-overlay {
            display: flex;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-overlay {
            display: none !important;
          }
        }
      `}</style>
      
      <header className="top-nav">
        <div className="top-nav-inner">
          {/* LEFT — Brand Title */}
          <Link 
            to="/" 
            className="top-nav-left" 
            style={{ 
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-primary, #2d6a4f)',
            }}
          >
            GolfGang
          </Link>

          {/* RIGHT — Desktop menu */}
          <div className="top-nav-right nav-desktop" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            {user && (
              <>
                <nav className="top-nav-links" style={{ display: 'flex', gap: 16 }}>
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
              className="nav-mobile-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                padding: 8,
                cursor: 'pointer',
                flexDirection: 'column',
                gap: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Menu"
            >
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main, #333)',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }} />
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main, #333)',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--color-text-main, #333)',
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
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 'var(--nav-height, 60px)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--color-bg, #fff)',
            zIndex: 100,
            padding: 20,
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
                borderBottom: '1px solid var(--color-border-subtle, #eee)',
                marginBottom: 8,
              }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {user.email?.split('@')[0]}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted, #666)' }}>
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
                  color: location.pathname === '/' ? 'var(--color-primary, #2d6a4f)' : 'var(--color-text-main, #333)',
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
                  color: location.pathname === '/profile' ? 'var(--color-primary, #2d6a4f)' : 'var(--color-text-main, #333)',
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
                    color: location.pathname.startsWith('/admin') ? 'var(--color-primary, #2d6a4f)' : 'var(--color-text-main, #333)',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  ⚙️ Admin
                </Link>
              )}

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
                  color: 'var(--color-danger, #dc3545)',
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
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

  const isDashboard = location.pathname === "/";
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
  <header className="top-nav">
    <div className="top-nav-inner">

      {/* LEFT — Brand */}
      <div className="top-nav-left">
        <div className="brand-mark" />
        <div className="brand-title">
          <span className="brand-title-main">GolfGang</span>
          <span className="brand-title-sub">Tee Time Planner</span>
        </div>
      </div>

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
                style={{
                  left: theme === "dark" ? 30 : 3,
                }}
              />
              <span>☀️</span>
              <span>🌙</span>
            </button>

            <button onClick={() => navigate("/profile")} className="btn btn-ghost btn-sm">
              Profile
            </button>

            <span className="user-email">
              {user.email}
              {isAdmin && " · admin"}
            </span>

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
      <button
        className="nav-hamburger mobile-only"
        onClick={() => setMobileMenuOpen((x) => !x)}
      >
        ☰
      </button>
    </div>

    {/* MOBILE MENU */}
    {mobileMenuOpen && (
      <div className="mobile-menu mobile-only">
        {user && (
          <>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Calendar
            </Link>

            {isAdmin && (
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                Admin
              </Link>
            )}

            <button onClick={toggleTheme} className="theme-toggle-btn">
              <div
                className="theme-toggle-thumb"
                style={{
                  left: theme === "dark" ? 30 : 3,
                }}
              />
              <span>☀️</span>
              <span>🌙</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/profile");
              }}
              className="btn btn-ghost btn-sm"
            >
              Profile
            </button>

            <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {!user && (
          <Link
            to="/login"
            className="btn btn-primary btn-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    )}
  </header>
);
}

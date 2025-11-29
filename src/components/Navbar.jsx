import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useTheme } from "../providers/ThemeProvider";

export default function Navbar() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const isDashboard = location.pathname === "/";
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        {/* LEFT: Brand + links */}
        <div className="top-nav-left">
          <div className="brand-mark" />
          <div className="brand-title">
            <span className="brand-title-main">GolfGang</span>
            <span className="brand-title-sub">
              Tee Time Planner
            </span>
          </div>

          {user && (
            <nav className="top-nav-links">
              <Link
                to="/"
                className={isDashboard ? "active" : undefined}
              >
                Calendar
              </Link>

              {isAdmin && (
                <Link
                  to="/admin"
                  className={isAdminRoute ? "active" : undefined}
                >
                  Admin
                </Link>
              )}
            </nav>
          )}
        </div>

        {/* RIGHT: theme toggle + profile + auth */}
        <div className="top-nav-right">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              position: "relative",
              width: 56,
              height: 28,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.16)",
              background:
                theme === "dark"
                  ? "rgba(15,15,30,0.9)"
                  : "rgba(250,250,255,0.08)",
              display: "flex",
              alignItems: "center",
              padding: "0 6px",
              cursor: "pointer",
              gap: 6,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 3,
                left: theme === "dark" ? 28 : 3,
                width: 22,
                height: 22,
                borderRadius: 999,
                background:
                  theme === "dark"
                    ? "linear-gradient(135deg,#8b7bff,#b6aeff)"
                    : "#ffffff",
                boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                transition: "left 0.18s ease",
              }}
            />
            <span style={{ fontSize: 12, zIndex: 1 }}>☀️</span>
            <span style={{ fontSize: 12, zIndex: 1 }}>🌙</span>
          </button>

          {user && (
            <button
              onClick={() => navigate("/profile")}
              className="btn btn-ghost btn-sm"
            >
              Profile
            </button>
          )}

          {user && (
            <>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--color-text-soft)",
                  maxWidth: 180,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={user.email}
              >
                {user.email}
                {isAdmin && " · admin"}
              </span>

              <button
                className="btn btn-ghost btn-sm"
                onClick={handleLogout}
              >
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
      </div>
    </header>
  );
}

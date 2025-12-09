import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

/**
 * BottomNav - Mobile bottom navigation bar
 * Only shows when user is logged in
 */
export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Don't show on login/signup pages or if not logged in
  if (!user) return null;
  
  const publicPaths = ['/login', '/signup', '/reset-password'];
  if (publicPaths.includes(location.pathname)) return null;

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/my-events', icon: '✓', label: 'My RSVPs' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-content">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-item-icon">{item.icon}</span>
            <span className="nav-item-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

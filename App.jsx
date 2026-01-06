import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EventPage from './pages/EventPage'
import Profile from './pages/Profile'
import Admin from './pages/Admin'

function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function RequireAdmin({ children }) {
  const { user, isAdmin, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/event/:id" element={<RequireAuth><EventPage /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
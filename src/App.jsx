import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import EventPage from './pages/EventPage'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import { RequireAuth, RequireAdmin } from './components/RouteGuards'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main style={{ maxWidth: 900, margin: '1.5rem auto', padding: '0 1rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/event/:id"
            element={
              <RequireAuth>
                <EventPage />
              </RequireAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Admin />
              </RequireAdmin>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </div>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Login from './pages/Login'
import Home from "./pages/Home";
import MyEvents from './pages/MyEvents'
import EventPage from "./pages/event/EventPage";
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import { RequireAuth, RequireAdmin } from './components/RouteGuards'
import ResetPassword from "./pages/ResetPassword";
import ChangeUsername from "./pages/ChangeUsername";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Polls from "./pages/Polls";
import AdminSettings from "./pages/AdminSettings";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-inner">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/my-events"
            element={
              <RequireAuth>
                <MyEvents />
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
          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />

          {/* Public pages */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />

          {/* Auth-only pages */}
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="/change-username"
            element={
              <RequireAuth>
                <ChangeUsername />
              </RequireAuth>
            }
          />
<Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </main>
      
      {/* Bottom Navigation for mobile */}
      <BottomNav />
    </div>
  )
}

import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export function RequireAuth({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="main-inner">
        <div className="card">Checking who you are…</div>
      </div>
    )
  }
  if (!user) return <Navigate to="/login" replace />

  return children
}

export function RequireAdmin({ children }) {
  const { user, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="main-inner">
        <div className="card">Checking permissions…</div>
      </div>
    )
  }
  if (!user) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />

  return children
}

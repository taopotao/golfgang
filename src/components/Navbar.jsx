import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar() {
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <nav
      style={{
        borderBottom: '1px solid #1e293b',
        padding: '0.75rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#020617'
      }}
    >
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <span style={{ fontWeight: 700 }}>GolfGang</span>
        {user && (
          <>
            <Link to="/">Events</Link>
            {isAdmin && <Link to="/admin">Admin</Link>}
          </>
        )}
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {user && (
          <>
            <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>
              {user.email} {isAdmin && '(admin)'}
            </span>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
        {!user && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

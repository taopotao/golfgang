import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  if (user) {
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isRegister) {
        const cred = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, 'users', cred.user.uid), {
          email,
          isAdmin: false
        })
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card" style={{ marginTop: '3rem' }}>
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        Only your GolfGang should have accounts here.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <label>
          Email
          <input
            className="input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <div style={{ height: '0.75rem' }} />
        <label>
          Password
          <input
            className="input"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        {error && (
          <p style={{ color: '#f97373', marginTop: '0.5rem' }}>{error}</p>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: '1rem', width: '100%' }}
          disabled={loading}
        >
          {loading
            ? 'Working...'
            : isRegister
            ? 'Create account'
            : 'Login'}
        </button>
      </form>

      <button
        className="btn btn-secondary"
        style={{ marginTop: '0.75rem', width: '100%' }}
        type="button"
        onClick={() => setIsRegister((v) => !v)}
      >
        {isRegister
          ? 'Already have an account? Login'
          : 'Need an account? Register'}
      </button>
    </div>
  )
}

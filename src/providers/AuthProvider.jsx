import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null)
        setIsAdmin(false)
        setLoading(false)
        return
      }
      setUser(firebaseUser)

      try {
        const ref = doc(db, 'users', firebaseUser.uid)
        const snap = await getDoc(ref)
        const data = snap.data()
        setIsAdmin(data?.isAdmin === true)
      } catch (e) {
        console.error('Error loading user profile', e)
      }

      setLoading(false)
    })

    return () => unsub()
  }, [])

  const value = { user, isAdmin, loading }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

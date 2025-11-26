import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../providers/AuthProvider'
import EventCard from '../components/EventCard'

export default function Admin() {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const ref = collection(db, 'events')
    const unsub = onSnapshot(ref, (snap) => {
      const arr = []
      snap.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }))
      arr.sort((a, b) => {
        const da = a.date?.toDate ? a.date.toDate() : new Date()
        const dbb = b.date?.toDate ? b.date.toDate() : new Date()
        return da - dbb
      })
      setEvents(arr)
    })

    return () => unsub()
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!title || !date) return
    setLoading(true)
    try {
      const ref = collection(db, 'events')
      await addDoc(ref, {
        title,
        date: new Date(date),
        createdBy: user.uid,
        createdAt: serverTimestamp()
      })
      setTitle('')
      setDate('')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this event?')) return
    await deleteDoc(doc(db, 'events', id))
  }

  return (
    <div>
      <h1>Admin</h1>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Create event</h2>
        <form onSubmit={handleCreate}>
          <label>
            Title
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Round at Albert Park"
            />
          </label>
          <div style={{ height: '0.75rem' }} />
          <label>
            Date
            <input
              className="input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: '0.75rem' }}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>

      <h2>All events</h2>
      {events.map((ev) => (
        <div key={ev.id} style={{ position: 'relative' }}>
          <EventCard event={ev} />
          <button
            className="btn btn-danger"
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontSize: '0.75rem',
              padding: '0.25rem 0.75rem'
            }}
            onClick={() => handleDelete(ev.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

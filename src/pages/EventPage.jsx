import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../providers/AuthProvider'
import ResponseButtons from '../components/ResponseButtons'

export default function EventPage() {
  const { id } = useParams()
  const { user } = useAuth()
  const [event, setEvent] = useState(null)
  const [responses, setResponses] = useState([])
  const [myStatus, setMyStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const eventRef = doc(db, 'events', id)
    getDoc(eventRef).then((snap) => {
      if (snap.exists()) {
        setEvent({ id: snap.id, ...snap.data() })
      }
      setLoading(false)
    })

    const responsesRef = collection(db, 'events', id, 'responses')
    const unsub = onSnapshot(responsesRef, (snap) => {
      const arr = []
      snap.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }))
      setResponses(arr)

      const mine = arr.find((r) => r.id === user.uid)
      setMyStatus(mine?.status ?? null)
    })

    return () => unsub()
  }, [id, user.uid])

  const handleChangeStatus = async (status) => {
    setSaving(true)
    try {
      const ref = doc(db, 'events', id, 'responses', user.uid)
      await setDoc(ref, {
        status,
        updatedAt: serverTimestamp(),
        userEmail: user.email
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading || !event) return <div>Loading event...</div>

  const date = event.date?.toDate ? event.date.toDate() : null

  const grouped = {
    yes: responses.filter((r) => r.status === 'yes'),
    maybe: responses.filter((r) => r.status === 'maybe'),
    no: responses.filter((r) => r.status === 'no')
  }

  return (
    <div>
      <div className="card">
        <h1>{event.title}</h1>
        {date && (
          <p style={{ marginTop: 0 }}>
            {date.toLocaleDateString('en-AU', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </p>
        )}
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Mark your availability:
        </p>
        <ResponseButtons
          currentStatus={myStatus}
          onChange={handleChangeStatus}
          loading={saving}
        />
      </div>

      <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
        <ResponseGroup label="✅ Yes" list={grouped.yes} />
        <ResponseGroup label="❔ Maybe" list={grouped.maybe} />
        <ResponseGroup label="❌ No" list={grouped.no} />
      </div>
    </div>
  )
}

function ResponseGroup({ label, list }) {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>{label}</h2>
      {list.length === 0 && (
        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>No one yet.</p>
      )}
      {list.map((r) => (
        <p key={r.id} style={{ fontSize: '0.9rem' }}>
          {r.userEmail || r.id}
        </p>
      ))}
    </div>
  )
}

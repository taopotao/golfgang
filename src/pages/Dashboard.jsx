import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import EventCard from '../components/EventCard'

export default function Dashboard() {
  const [events, setEvents] = useState([])
  const [counts, setCounts] = useState({}) // eventId -> {yes, no, maybe}
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const eventsRef = collection(db, 'events')
    const unsub = onSnapshot(eventsRef, (snap) => {
      const arr = []
      snap.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }))
      arr.sort((a, b) => {
        const da = a.date?.toDate ? a.date.toDate() : new Date()
        const dbb = b.date?.toDate ? b.date.toDate() : new Date()
        return da - dbb
      })
      setEvents(arr)
      setLoading(false)
    })

    return () => unsub()
  }, [])

  useEffect(() => {
    // subscribe to each event's responses for counts
    if (events.length === 0) return
    let unsubscribes = []

    ;(async () => {
      const { collection, onSnapshot } = await import('firebase/firestore')

      unsubscribes = events.map((ev) => {
        const ref = collection(db, 'events', ev.id, 'responses')
        return onSnapshot(ref, (snap) => {
          let yes = 0,
            no = 0,
            maybe = 0
          snap.forEach((doc) => {
            const status = doc.data().status
            if (status === 'yes') yes++
            else if (status === 'no') no++
            else if (status === 'maybe') maybe++
          })
          setCounts((prev) => ({ ...prev, [ev.id]: { yes, no, maybe } }))
        })
      })
    })()

    return () => {
      unsubscribes.forEach((fn) => fn && fn())
    }
  }, [events])

  if (loading) return <div>Loading events...</div>

  return (
    <div>
      <h1>Upcoming rounds</h1>
      {events.length === 0 && (
        <p style={{ opacity: 0.8 }}>No events yet. Ask the admin to add one.</p>
      )}
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} counts={counts[ev.id]} />
      ))}
    </div>
  )
}

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function EventPlayers({ responses }) {
  const [users, setUsers] = useState({}); // { uid: { username, email } }

  useEffect(() => {
    if (!responses) return;

    const fetchUsers = async () => {
      const userMap = {};

      for (const uid of Object.keys(responses)) {
        try {
          const snap = await getDoc(doc(db, "users", uid));
          if (snap.exists()) {
            userMap[uid] = snap.data(); // includes username + email
          } else {
            userMap[uid] = { username: "Unknown User", email: "unknown" };
          }
        } catch {
          userMap[uid] = { username: "Error", email: "" };
        }
      }

      setUsers(userMap);
    };

    fetchUsers();
  }, [responses]);

  if (!responses) return null;

  const going = Object.entries(responses)
    .filter(([_, r]) => r === "available")
    .map(([uid]) => users[uid]?.username || users[uid]?.email || uid);

  const notGoing = Object.entries(responses)
    .filter(([_, r]) => r === "unavailable")
    .map(([uid]) => users[uid]?.username || users[uid]?.email || uid);

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3 className="card-title">Responses</h3>

      <div style={{ marginTop: 12 }}>
        <strong>Going</strong>
        <ul style={{ marginTop: 6 }}>
          {going.length > 0 ? (
            going.map((name, idx) => <li key={idx}>{name}</li>)
          ) : (
            <p>Nobody yet</p>
          )}
        </ul>
      </div>

      <div style={{ marginTop: 16 }}>
        <strong>Not Going</strong>
        <ul style={{ marginTop: 6 }}>
          {notGoing.length > 0 ? (
            notGoing.map((name, idx) => <li key={idx}>{name}</li>)
          ) : (
            <p>Nobody</p>
          )}
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, getDoc, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../providers/AuthProvider";
import WeekendPoll from "../components/WeekendPoll";
import { WeekdayProposalCard, CreateProposalForm } from "../components/WeekdayProposal";
import PollResults from "../components/PollResults";

export default function Polls() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState("weekend"); // "weekend" or "weekday"
  const [weekendPolls, setWeekendPolls] = useState([]);
  const [weekdayProposals, setWeekdayProposals] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [favouriteCourses, setFavouriteCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data
  useEffect(() => {
    // Load weekend polls
    const pollsQuery = query(
      collection(db, "polls"),
      orderBy("weekendOf", "desc")
    );
    const unsubPolls = onSnapshot(pollsQuery, (snapshot) => {
      const polls = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setWeekendPolls(polls);
      setLoading(false);
    });

    // Load weekday proposals
    const proposalsQuery = query(
      collection(db, "weekdayProposals"),
      orderBy("date", "asc")
    );
    const unsubProposals = onSnapshot(proposalsQuery, (snapshot) => {
      const proposals = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Filter out past proposals
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const futureProposals = proposals.filter((p) => {
        const propDate = p.date?.toDate();
        return propDate && propDate >= now;
      });
      setWeekdayProposals(futureProposals);
    });

    // Load users
    async function loadUsers() {
      const snap = await getDocs(collection(db, "users"));
      setAllUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    loadUsers();

    // Load favourite courses
    async function loadCourses() {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setFavouriteCourses(settingsDoc.data().favouriteCourses || []);
        }
      } catch (err) {
        console.error("Error loading settings:", err);
      }
    }
    loadCourses();

    return () => {
      unsubPolls();
      unsubProposals();
    };
  }, []);

  // Separate active and past polls
  const now = new Date();
  const activePolls = weekendPolls.filter((p) => p.deadline?.toDate() > now);
  const closedPolls = weekendPolls.filter((p) => p.deadline?.toDate() <= now && p.status !== "converted");

  const tabStyle = (isActive) => ({
    flex: 1,
    padding: "12px 16px",
    background: isActive ? "var(--color-primary)" : "transparent",
    color: isActive ? "white" : "var(--color-text-secondary)",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 500,
    fontSize: 14,
    transition: "all 0.2s ease",
  });

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Polls</h1>
          <p>Vote on when to play</p>
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: "flex",
        gap: 8,
        padding: 4,
        background: "var(--color-bg-secondary)",
        borderRadius: 12,
        marginBottom: 20,
      }}>
        <button
          onClick={() => setActiveTab("weekend")}
          style={tabStyle(activeTab === "weekend")}
        >
          🗓️ Weekend
        </button>
        <button
          onClick={() => setActiveTab("weekday")}
          style={tabStyle(activeTab === "weekday")}
        >
          📅 Weekday
        </button>
      </div>

      {loading ? (
        <div className="card" style={{ textAlign: "center", padding: 40 }}>
          Loading...
        </div>
      ) : (
        <>
          {/* Weekend Tab */}
          {activeTab === "weekend" && (
            <div>
              {/* Active Polls */}
              {activePolls.length > 0 ? (
                activePolls.map((poll) => (
                  <WeekendPoll key={poll.id} poll={poll} />
                ))
              ) : (
                <div className="card" style={{ textAlign: "center", padding: 30 }}>
                  <span style={{ fontSize: 40, display: "block", marginBottom: 12 }}>🗳️</span>
                  <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    No active weekend polls
                  </p>
                  <p style={{ color: "var(--color-text-tertiary)", fontSize: 13, marginTop: 4 }}>
                    A new poll will appear on Monday
                  </p>
                </div>
              )}

              {/* Closed Polls (for admin to convert) */}
              {closedPolls.length > 0 && isAdmin && (
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: "var(--color-text-secondary)" }}>
                    Ready to Book
                  </h3>
                  {closedPolls.map((poll) => (
                    <PollResults key={poll.id} poll={poll} allUsers={allUsers} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Weekday Tab */}
          {activeTab === "weekday" && (
            <div>
              {/* Create proposal form */}
              <CreateProposalForm 
                onCreated={() => {}} 
                favouriteCourses={favouriteCourses}
              />

              {/* Proposals list */}
              {weekdayProposals.length > 0 ? (
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: "var(--color-text-secondary)" }}>
                    Proposed Dates
                  </h3>
                  {weekdayProposals.map((proposal) => (
                    <WeekdayProposalCard
                      key={proposal.id}
                      proposal={proposal}
                      allUsers={allUsers}
                    />
                  ))}
                </div>
              ) : (
                <div className="card" style={{ textAlign: "center", padding: 30 }}>
                  <span style={{ fontSize: 40, display: "block", marginBottom: 12 }}>📅</span>
                  <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                    No weekday proposals yet
                  </p>
                  <p style={{ color: "var(--color-text-tertiary)", fontSize: 13, marginTop: 4 }}>
                    Be the first to propose a date!
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

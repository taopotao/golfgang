import { useState, useEffect } from "react";

export default function CountdownTimer({ deadline, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    if (!deadline) return null;
    
    const now = new Date();
    const diff = deadline - now;
    
    if (diff <= 0) {
      return { expired: true };
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft?.expired && onExpire) {
        onExpire();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, onExpire]);

  if (!timeLeft || timeLeft.expired) {
    return (
      <div style={{
        padding: "8px 12px",
        background: "var(--color-bg-tertiary)",
        borderRadius: 8,
        fontSize: 13,
        color: "var(--color-text-secondary)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}>
        <span>⏱️</span>
        <span>Poll closed</span>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  // Determine urgency color
  const isUrgent = days === 0 && hours < 6;
  const isWarning = days === 0 && hours < 24;

  return (
    <div style={{
      padding: "10px 14px",
      background: isUrgent 
        ? "var(--color-danger-soft)" 
        : isWarning 
          ? "var(--color-warning-soft)" 
          : "var(--color-primary-soft)",
      borderRadius: 10,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
    }}>
      <span style={{ fontSize: 16 }}>⏱️</span>
      <span style={{ 
        fontSize: 13, 
        color: isUrgent 
          ? "var(--color-danger)" 
          : isWarning 
            ? "var(--color-warning)" 
            : "var(--color-primary)",
        fontWeight: 500,
      }}>
        Closes in{" "}
        <span style={{ fontFamily: "monospace", fontWeight: 600 }}>
          {days > 0 && `${days}d `}
          {hours.toString().padStart(2, "0")}h{" "}
          {minutes.toString().padStart(2, "0")}m{" "}
          {days === 0 && (
            <span>{seconds.toString().padStart(2, "0")}s</span>
          )}
        </span>
      </span>
    </div>
  );
}

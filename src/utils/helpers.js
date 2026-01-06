// Toast notifications
export function showToast(message, type = 'default') {
  // Remove existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after delay
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Haptic feedback (for supported devices)
export function hapticFeedback(type = 'light') {
  if (navigator.vibrate) {
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [30],
      success: [10, 50, 10],
      error: [50, 30, 50]
    };
    navigator.vibrate(patterns[type] || patterns.light);
  }
}

// Confetti effect for celebrations
export function triggerConfetti() {
  const colors = ['#0f7b6c', '#10b981', '#3b82f6', '#f59e0b', '#ef4444'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 1 + 2) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// Avatar utilities
export function getInitials(name) {
  if (!name) return '??';
  const parts = name.trim().split(/[\s_]+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function getAvatarStyle(name) {
  const colors = [
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#dcfce7', text: '#166534' },
    { bg: '#fef3c7', text: '#92400e' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#e0e7ff', text: '#3730a3' },
    { bg: '#ccfbf1', text: '#0f766e' },
    { bg: '#fee2e2', text: '#991b1b' },
    { bg: '#f3e8ff', text: '#6b21a8' },
  ];
  
  // Generate consistent color based on name
  let hash = 0;
  for (let i = 0; i < (name || '').length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

// Date formatting
export function formatEventDate(date) {
  if (!date) return '';
  const d = date instanceof Date ? date : date.toDate();
  return d.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

export function formatShortDate(date) {
  if (!date) return '';
  const d = date instanceof Date ? date : date.toDate();
  return d.toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

// Build Google Calendar URL with custom title format
export function buildGoogleCalendarUrl(event, eventUrl) {
  const date = event.date?.toDate?.() || new Date();
  const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
  
  // Build title in format: ⛳ 2:22pm - North Turramurra Golf Course
  let title = '⛳';
  
  // Add tee time if available
  if (event.tee) {
    // Convert 24hr time (14:22) to 12hr format (2:22pm)
    const [hours, minutes] = event.tee.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'pm' : 'am';
    const displayHour = hour % 12 || 12; // Convert 0 to 12, keep 1-11
    title += ` ${displayHour}:${minutes}${ampm}`;
  }
  
  // Add course name if available (with separator if we have time)
  if (event.courseName) {
    if (event.tee) {
      title += ' - '; // Add separator only if we have both time and course
    } else {
      title += ' '; // Just space if only course
    }
    title += event.courseName;
  }
  
  const encodedTitle = encodeURIComponent(title);
  const location = encodeURIComponent(event.courseName || '');
  const details = encodeURIComponent(
    `${event.notes || ''}\n\nEvent details: ${eventUrl}`
  );
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${dateStr}/${dateStr}&location=${location}&details=${details}`;
}
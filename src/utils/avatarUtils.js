/**
 * Avatar utility functions for consistent initials and colors across the app
 */

/**
 * Get two initials from a name or email
 * Examples:
 *   "tao" → "TA"
 *   "barnesy" → "BA"
 *   "john.smith@email.com" → "JS"
 *   "John Smith" → "JS"
 */
export const getInitials = (name) => {
  if (!name) return "??";
  const parts = name.split(/[\s@._-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

/**
 * Get consistent avatar gradient colors based on name
 * Returns [lightColor, darkColor] for gradient
 */
export const getAvatarColor = (name) => {
  const colors = [
    ['#10b981', '#059669'], // green
    ['#3b82f6', '#2563eb'], // blue
    ['#8b5cf6', '#7c3aed'], // purple
    ['#f59e0b', '#d97706'], // amber
    ['#ec4899', '#db2777'], // pink
    ['#06b6d4', '#0891b2'], // cyan
    ['#f97316', '#ea580c'], // orange
  ];
  const index = (name || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

/**
 * Get avatar style object for inline styles
 */
export const getAvatarStyle = (name, size = 36) => {
  const [colorLight, colorDark] = getAvatarColor(name);
  return {
    width: size,
    height: size,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colorLight} 0%, ${colorDark} 100%)`,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: size * 0.38,
    flexShrink: 0,
  };
};

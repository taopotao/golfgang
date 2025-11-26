export default function ResponseButtons({ currentStatus, onChange, loading }) {
  const makeHandler = (status) => () => onChange(status)

  const baseStyle = (active) => ({
    flex: 1,
    marginRight: '0.5rem',
    opacity: active ? 1 : 0.75
  })

  return (
    <div style={{ display: 'flex', marginTop: '0.75rem' }}>
      <button
        className="btn btn-primary"
        style={baseStyle(currentStatus === 'yes')}
        onClick={makeHandler('yes')}
        disabled={loading}
      >
        ✅ Yes
      </button>
      <button
        className="btn btn-secondary"
        style={baseStyle(currentStatus === 'maybe')}
        onClick={makeHandler('maybe')}
        disabled={loading}
      >
        ❔ Maybe
      </button>
      <button
        className="btn btn-danger"
        style={{ flex: 1, opacity: currentStatus === 'no' ? 1 : 0.75 }}
        onClick={makeHandler('no')}
        disabled={loading}
      >
        ❌ No
      </button>
    </div>
  )
}

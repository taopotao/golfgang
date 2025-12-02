import { useState, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { 
  isNotificationsSupported, 
  getNotificationPermission,
  requestNotificationPermission,
  sendTestNotification 
} from '../utils/pushNotifications';

export default function NotificationSettings() {
  const { user } = useAuth();
  const [permission, setPermission] = useState('default');
  const [loading, setLoading] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isNotificationsSupported());
    setPermission(getNotificationPermission());
  }, []);

  const handleEnableNotifications = async () => {
    if (!user) return;
    
    setLoading(true);
    const result = await requestNotificationPermission(user.uid);
    setLoading(false);
    
    if (result.success) {
      setPermission('granted');
      // Show a test notification
      setTimeout(() => {
        sendTestNotification();
      }, 1000);
    } else {
      setPermission(getNotificationPermission());
    }
  };

  if (!supported) {
    return (
      <div style={{
        padding: 16,
        background: 'var(--color-surface-soft)',
        borderRadius: 12,
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>📵</span>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 2 }}>
              Notifications Not Supported
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              Your browser doesn't support push notifications.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (permission === 'granted') {
    return (
      <div style={{
        padding: 16,
        background: 'var(--color-success-soft)',
        borderRadius: 12,
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🔔</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, marginBottom: 2, color: 'var(--color-success)' }}>
              Notifications Enabled
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              You'll receive updates about events and RSVPs.
            </div>
          </div>
          <button 
            className="btn btn-ghost btn-sm"
            onClick={sendTestNotification}
          >
            Test
          </button>
        </div>
      </div>
    );
  }

  if (permission === 'denied') {
    return (
      <div style={{
        padding: 16,
        background: 'var(--color-danger-soft)',
        borderRadius: 12,
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🔕</span>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 2, color: 'var(--color-danger)' }}>
              Notifications Blocked
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              Enable notifications in your browser settings to receive updates.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default state - not yet requested
  return (
    <div style={{
      padding: 16,
      background: 'var(--color-surface-soft)',
      borderRadius: 12,
      marginBottom: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 24 }}>🔔</span>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>
            Enable Push Notifications
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
            Get notified when events are booked or when you're invited.
          </div>
        </div>
        <button 
          className="btn btn-primary"
          onClick={handleEnableNotifications}
          disabled={loading}
        >
          {loading ? 'Enabling...' : 'Enable'}
        </button>
      </div>
    </div>
  );
}

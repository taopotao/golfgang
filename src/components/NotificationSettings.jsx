import { useState, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { doc, updateDoc, arrayRemove, getDoc } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import { db, app } from '../firebase';
import { 
  isNotificationsSupported, 
  getNotificationPermission,
  requestNotificationPermission,
  sendTestNotification 
} from '../utils/pushNotifications';

const VAPID_KEY = 'BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0';

export default function NotificationSettings() {
  const { user } = useAuth();
  const [permission, setPermission] = useState('default');
  const [loading, setLoading] = useState(false);
  const [supported, setSupported] = useState(true);
  const [deviceRegistered, setDeviceRegistered] = useState(false);
  const [checkingDevice, setCheckingDevice] = useState(true);

  // Check if this device's token is registered
  useEffect(() => {
    const checkDeviceToken = async () => {
      if (!user?.uid || !isNotificationsSupported()) {
        setCheckingDevice(false);
        return;
      }

      setSupported(true);
      setPermission(getNotificationPermission());

      // If permission is granted, check if this device's token is in Firestore
      if (getNotificationPermission() === 'granted') {
        try {
          const messaging = getMessaging(app);
          const registration = await navigator.serviceWorker.getRegistration('/golfgang/');
          
          if (registration) {
            const token = await getToken(messaging, {
              vapidKey: VAPID_KEY,
              serviceWorkerRegistration: registration
            });

            if (token) {
              // Check if this token exists in user's fcmTokens
              const userDoc = await getDoc(doc(db, 'users', user.uid));
              if (userDoc.exists()) {
                const userData = userDoc.data();
                const tokens = userData.fcmTokens || [];
                setDeviceRegistered(tokens.includes(token));
              }
            }
          }
        } catch (err) {
          console.log('Error checking device token:', err);
        }
      }
      
      setCheckingDevice(false);
    };

    checkDeviceToken();
  }, [user?.uid]);

  const handleEnableNotifications = async () => {
    if (!user) return;
    
    setLoading(true);
    const result = await requestNotificationPermission(user.uid);
    setLoading(false);
    
    if (result.success) {
      setPermission('granted');
      setDeviceRegistered(true);
      // Show a test notification
      setTimeout(() => {
        sendTestNotification();
      }, 1000);
    } else {
      setPermission(getNotificationPermission());
    }
  };

  const handleDisableNotifications = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const messaging = getMessaging(app);
      const registration = await navigator.serviceWorker.getRegistration('/golfgang/');
      
      if (registration) {
        const token = await getToken(messaging, {
          vapidKey: VAPID_KEY,
          serviceWorkerRegistration: registration
        });

        if (token) {
          // Remove this device's token from Firestore
          await updateDoc(doc(db, 'users', user.uid), {
            fcmTokens: arrayRemove(token)
          });
          console.log('Disabled notifications for this device');
        }
      }
      
      setDeviceRegistered(false);
    } catch (err) {
      console.error('Error disabling notifications:', err);
      alert('Failed to disable notifications');
    } finally {
      setLoading(false);
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

  if (checkingDevice) {
    return (
      <div style={{
        padding: 16,
        background: 'var(--color-surface-soft)',
        borderRadius: 12,
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>🔔</span>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 2 }}>
              Checking notifications...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Permission granted AND this device is registered
  if (permission === 'granted' && deviceRegistered) {
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
            style={{ marginRight: 8 }}
          >
            Test
          </button>
          <button 
            className="btn btn-ghost btn-sm"
            onClick={handleDisableNotifications}
            disabled={loading}
            style={{ color: 'var(--color-danger)' }}
          >
            {loading ? '...' : 'Disable'}
          </button>
        </div>
      </div>
    );
  }

  // Permission granted but this device NOT registered (new device)
  if (permission === 'granted' && !deviceRegistered) {
    return (
      <div style={{
        padding: 16,
        background: 'var(--color-warning-soft)',
        borderRadius: 12,
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 24 }}>🔔</span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 2, color: 'var(--color-warning)' }}>
              Enable for This Device
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
              Notifications aren't set up on this device yet.
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
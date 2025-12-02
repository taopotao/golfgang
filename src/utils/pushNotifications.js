import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase';

// VAPID key for web push (you'll get this from Firebase Console)
// Go to: Project Settings > Cloud Messaging > Web Push certificates
const VAPID_KEY = 'BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0';

let messaging = null;

// Initialize messaging (call this after Firebase is initialized)
export const initializeMessaging = (firebaseApp) => {
  try {
    messaging = getMessaging(firebaseApp);
    return messaging;
  } catch (error) {
    console.error('Failed to initialize messaging:', error);
    return null;
  }
};

// Check if notifications are supported
export const isNotificationsSupported = () => {
  return 'Notification' in window && 
         'serviceWorker' in navigator && 
         'PushManager' in window;
};

// Get current permission status
export const getNotificationPermission = () => {
  if (!isNotificationsSupported()) return 'unsupported';
  return Notification.permission; // 'granted', 'denied', or 'default'
};

// Request notification permission and get FCM token
export const requestNotificationPermission = async (userId) => {
  if (!isNotificationsSupported()) {
    console.log('Push notifications not supported');
    return { success: false, error: 'not_supported' };
  }

  try {
    // Request permission
    const permission = await Notification.requestPermission();
    
    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return { success: false, error: 'permission_denied' };
    }

    // Register service worker
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    console.log('Service worker registered:', registration);

    // Get FCM token
    if (!messaging) {
      return { success: false, error: 'messaging_not_initialized' };
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (token) {
      console.log('FCM Token:', token);
      
      // Save token to user's Firestore document
      await saveTokenToUser(userId, token);
      
      return { success: true, token };
    } else {
      console.log('No registration token available');
      return { success: false, error: 'no_token' };
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return { success: false, error: error.message };
  }
};

// Save FCM token to user's Firestore document
const saveTokenToUser = async (userId, token) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      fcmTokens: arrayUnion(token),
      notificationsEnabled: true,
      lastTokenUpdate: new Date().toISOString()
    });
    console.log('Token saved to user document');
  } catch (error) {
    console.error('Error saving token:', error);
    throw error;
  }
};

// Remove FCM token (when user disables notifications)
export const removeNotificationToken = async (userId, token) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      fcmTokens: arrayRemove(token),
      notificationsEnabled: false
    });
    console.log('Token removed from user document');
  } catch (error) {
    console.error('Error removing token:', error);
    throw error;
  }
};

// Listen for foreground messages
export const onForegroundMessage = (callback) => {
  if (!messaging) return () => {};
  
  return onMessage(messaging, (payload) => {
    console.log('📬 Foreground message received:', payload);
    
    // Show a toast/notification in the app
    if (callback) {
      callback(payload);
    }
    
    // Optionally show browser notification even when app is open
    if (Notification.permission === 'granted') {
      const { title, body } = payload.notification || {};
      new Notification(title || 'GolfGang', {
        body: body || 'You have a new notification',
        icon: '/logo192.png',
        tag: payload.data?.eventId || 'golfgang-foreground'
      });
    }
  });
};

// Test notification (for debugging)
export const sendTestNotification = () => {
  if (Notification.permission === 'granted') {
    new Notification('🏌️ GolfGang Test', {
      body: 'Push notifications are working! 🎉',
      icon: '/logo192.png'
    });
  }
};

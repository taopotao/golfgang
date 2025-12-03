import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db, app } from '../firebase';

const VAPID_KEY = 'BOjFZAtY_oM-ci1cnb3p5sT23gsjbwZo4kINDrd-QFSIMk4zDL89q12PHLyh-_16BWitVjsk9UsNKuUPBuXTrT0';

let messaging = null;

// Get or initialize messaging
const getMessagingInstance = async () => {
  if (messaging) return messaging;
  
  const supported = await isSupported();
  if (supported) {
    messaging = getMessaging(app);
  }
  return messaging;
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
  return Notification.permission;
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

    // Get the base path from Vite's config or default to root
    const basePath = import.meta.env.BASE_URL || '/';
    
    // Register service worker
    const swPath = `${basePath}firebase-messaging-sw.js`.replace('//', '/');
    console.log('Registering service worker at:', swPath);
    
    const registration = await navigator.serviceWorker.register(swPath, { 
      scope: basePath 
    });
    
    console.log('Service worker registered:', registration);

    // Wait for the service worker to be ready
    await navigator.serviceWorker.ready;
    console.log('Service worker ready');

    // Get messaging instance
    const messagingInstance = await getMessagingInstance();
    if (!messagingInstance) {
      console.error('Messaging not supported');
      return { success: false, error: 'messaging_not_supported' };
    }

    const token = await getToken(messagingInstance, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (token) {
      console.log('FCM Token obtained:', token.substring(0, 20) + '...');
      
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
// For data-only messages, we need to manually show the notification
export const onForegroundMessage = async (callback) => {
  const messagingInstance = await getMessagingInstance();
  if (!messagingInstance) return () => {};
  
  return onMessage(messagingInstance, (payload) => {
    console.log('📬 Foreground message received:', payload);
    
    // Call the callback for any in-app UI updates (e.g., showing a toast, updating a badge)
    if (callback) {
      callback(payload);
    }
    
    // For data-only messages (no notification payload), we need to show the notification manually
    // Check if this is a data-only message
    if (!payload.notification && payload.data) {
      showNotificationFromData(payload.data);
    }
    // If payload.notification exists, FCM will auto-show it, so we don't do anything
  });
};

// Helper to show notification from data payload
const showNotificationFromData = async (data) => {
  try {
    const registration = await navigator.serviceWorker.ready;
    
    await registration.showNotification(data.title || 'GolfGang', {
      body: data.body || 'You have a new notification',
      icon: '/logo192.png',
      badge: '/logo192.png',
      tag: data.eventId || 'golfgang-notification-' + Date.now(),
      data: data,
      vibrate: [200, 100, 200],
    });
  } catch (error) {
    console.error('Failed to show notification:', error);
  }
};

// Test notification - this is fine because it's manually triggered and not from FCM
export const sendTestNotification = async () => {
  console.log('sendTestNotification called');
  console.log('Notification.permission:', Notification.permission);
  
  if (Notification.permission !== 'granted') {
    console.log('Notification permission not granted');
    alert('Notification permission not granted. Please enable notifications first.');
    return;
  }

  try {
    if (!('serviceWorker' in navigator)) {
      console.error('Service Worker not supported');
      alert('Service Worker not supported in this browser');
      return;
    }

    console.log('Waiting for service worker to be ready...');
    const registration = await navigator.serviceWorker.ready;
    console.log('Service worker ready:', registration);
    
    if (!registration) {
      console.error('No service worker registration found');
      alert('Service worker not ready. Please refresh and try again.');
      return;
    }

    console.log('Sending notification via service worker...');
    await registration.showNotification('🏌️ GolfGang Test', {
      body: 'Push notifications are working! 🎉',
      icon: '/logo192.png',
      badge: '/logo192.png',
      tag: 'test-notification-' + Date.now(),
      vibrate: [200, 100, 200],
      requireInteraction: false,
    });
    
    console.log('Test notification sent successfully');
  } catch (error) {
    console.error('Failed to send test notification:', error);
    alert(`Failed to send notification: ${error.message}`);
  }
};
// Firebase Cloud Messaging Service Worker
// This runs in the background to receive push notifications

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
// Note: You'll need to replace these with your actual Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",
  authDomain: "golfgang-79922.firebaseapp.com",
  projectId: "golfgang-79922",
  storageBucket: "golfgang-79922.firebasestorage.app",
  messagingSenderId: "223762413770",
  appId: "1:223762413770:web:098607b8f30080df90dc33",
  measurementId: "G-T1FXETH3K0"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('📬 Background message received:', payload);

  const notificationTitle = payload.notification?.title || 'GolfGang';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    tag: payload.data?.eventId || 'golfgang-notification',
    data: payload.data,
    actions: [
      { action: 'view', title: 'View Event' },
      { action: 'dismiss', title: 'Dismiss' }
    ],
    vibrate: [200, 100, 200],
    requireInteraction: true
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  // Open the event page if we have an eventId
  const eventId = event.notification.data?.eventId;
  const urlToOpen = eventId 
    ? `${self.location.origin}/event/${eventId}`
    : self.location.origin;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Check if there's already a window open
        for (const client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // Open new window if none exists
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

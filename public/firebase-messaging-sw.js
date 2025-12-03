// Firebase Messaging Service Worker
// This file MUST be in your public folder (e.g., /public/firebase-messaging-sw.js)

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",
  authDomain: "golfgang-79922.firebaseapp.com",
  projectId: "golfgang-79922",
  storageBucket: "golfgang-79922.appspot.com",
  messagingSenderId: "223762413770",
  appId: "1:223762413770:web:098607b8f30080df90dc33",
  measurementId: "G-T1FXETH3K0"
});

const messaging = firebase.messaging();

// Handle background messages (data-only messages)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // For data-only messages, get title/body from data payload
  const notificationTitle = payload.data?.title || payload.notification?.title || 'GolfGang';
  const notificationBody = payload.data?.body || payload.notification?.body || 'You have a new notification';
  
  const notificationOptions = {
    body: notificationBody,
    icon: '/logo192.png',
    badge: '/logo192.png',
    tag: payload.data?.eventId || 'golfgang-notification-' + Date.now(),
    data: payload.data,
    vibrate: [200, 100, 200],
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: 'View Event'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click:', event);
  
  event.notification.close();

  // Get the event URL from notification data
  const eventId = event.notification.data?.eventId;
  
  // Build absolute URL using the service worker's origin
  const basePath = self.location.pathname.replace('firebase-messaging-sw.js', '');
  const pathToOpen = eventId ? `event/${eventId}` : '';
  const absoluteUrl = new URL(basePath + pathToOpen, self.location.origin).href;
  
  console.log('[firebase-messaging-sw.js] Opening URL:', absoluteUrl);

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Check if there's already a window open with our app
      for (const client of windowClients) {
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          // Focus the existing window
          return client.focus().then((focusedClient) => {
            // Navigate to the event page if we have an eventId
            if (eventId && focusedClient.navigate) {
              return focusedClient.navigate(absoluteUrl);
            }
          });
        }
      }
      // If no window is open, open a new one with the absolute URL
      if (clients.openWindow) {
        return clients.openWindow(absoluteUrl);
      }
    })
  );
});

// Log when service worker is installed
self.addEventListener('install', (event) => {
  console.log('[firebase-messaging-sw.js] Service worker installed');
  self.skipWaiting();
});

// Log when service worker is activated
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service worker activated');
  event.waitUntil(clients.claim());
});
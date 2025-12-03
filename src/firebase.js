import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getMessaging, isSupported } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAUNktXGZeeXlX3LKFolXZRVQZGDohlIF0",
  authDomain: "golfgang-79922.firebaseapp.com",
  projectId: "golfgang-79922",
  storageBucket: "golfgang-79922.appspot.com",
  messagingSenderId: "223762413770",
  appId: "1:223762413770:web:098607b8f30080df90dc33",
  measurementId: "G-T1FXETH3K0"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export { app }

// Initialize messaging only if supported
let messaging = null;

export const getMessagingInstance = async () => {
  if (messaging) return messaging;
  
  const supported = await isSupported();
  if (supported) {
    messaging = getMessaging(app);
  }
  return messaging;
};

export { messaging };
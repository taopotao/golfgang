import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTDtoGl-VnlE33xKZsRocfstdnCSZMyek",
  authDomain: "golfgang-f00e3.firebaseapp.com",
  projectId: "golfgang-f00e3",
  storageBucket: "golfgang-f00e3.firebasestorage.app",
  messagingSenderId: "787603935494",
  appId: "1:787603935494:web:82f634dc12cdd3b42cce87"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export { app }
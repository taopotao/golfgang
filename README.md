# ⛳ GolfGang

A simple golf round coordination app. Players can propose rounds and others can join.

## Quick Start

### 1. Set up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project called "golfgang" (or your preferred name)
3. Enable **Authentication** → Email/Password
4. Enable **Firestore Database** (start in production mode)
5. Add a Web App and copy the config

### 2. Add your Firebase config

Open `src/firebase.js` and replace the placeholder config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Set Firestore rules

In Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    match /events/{eventId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. Install and run

```bash
npm install
npm run dev
```

### 5. Create admin account

1. Sign up through the app
2. Go to Firebase Console → Firestore → users collection
3. Find your user document
4. Add field: `isAdmin` (boolean) = `true`

## Deployment (GitHub Pages)

1. Update `vite.config.js` - change `base` to your repo name
2. Push to GitHub
3. Run: `npm run deploy`

Your site will be at: `https://USERNAME.github.io/REPO-NAME/`

## Features

- ✅ Player signup/login
- ✅ Propose golf rounds
- ✅ Join/decline rounds
- ✅ Admin controls
- ✅ Share events
- ✅ Mobile-friendly design

## Tech Stack

- React 18
- Firebase (Auth + Firestore)
- React Router
- Vite

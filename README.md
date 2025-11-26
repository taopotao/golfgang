# GolfGang – React + Vite + Firebase

A small web app for proposing golf events and letting friends mark their availability
(Yes / No / Maybe) with admin-only event creation and deletion.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add your Firebase config in `src/firebase.js` (from Firebase console).

3. Run locally:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Firebase

Create Firestore collections:

- `users/{uid}` documents with at least:
  - `email: string`
  - `isAdmin: boolean`

- `events/{eventId}` documents with:
  - `title: string`
  - `date: Timestamp`
  - `createdBy: string (uid)`
  - `createdAt: Timestamp`

- `events/{eventId}/responses/{uid}` documents with:
  - `status: "yes" | "no" | "maybe"`
  - `updatedAt: Timestamp`
  - `userEmail: string`

Set Firestore rules similar to:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /events/{eventId} {
      allow read: if request.auth != null;

      allow create, delete, update: if isAdmin();

      match /responses/{uid} {
        allow read: if request.auth != null;
        allow write: if request.auth != null && request.auth.uid == uid;
      }
    }

    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }

    function isAdmin() {
      return request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid))
          .data.isAdmin == true;
    }
  }
}
```

Manually set your own `users/{uid}` document with `isAdmin: true` to enable the
Admin page controls.

import admin from "firebase-admin";

import path from 'path';

const serviceAccount = require(path.resolve(__dirname, '../firebase.json'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();

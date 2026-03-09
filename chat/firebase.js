// chat/firebase.js
// Replace with your Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyCz4PpJvoQekaeqD5KLakwlDtN5vlBQhOk",
  authDomain: "chat-c51d9.firebaseapp.com",
  projectId: "chat-c51d9",
  storageBucket: "chat-c51d9.firebasestorage.app",
  messagingSenderId: "571544571750",
  appId: "1:571544571750:web:eee65ca1c1a3852a0a82a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

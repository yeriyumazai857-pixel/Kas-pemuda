// Import Firebase SDK v9+ (ES Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB0E9H12BK6TaYdewtQc-gPhuFaf_HZ9c",
  authDomain: "kas-pemuda-gereja.firebaseapp.com",
  databaseURL: "https://kas-pemuda-gereja-default-rtdb.firebaseio.com",
  projectId: "kas-pemuda-gereja",
  storageBucket: "kas-pemuda-gereja.firebasestorage.app",
  messagingSenderId: "946271302582",
  appId: "1:946271302582:web:f475674da83287da3a8717",
  measurementId: "G-TNV0Q76TN4"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, ref, set, get, child, push, onValue };

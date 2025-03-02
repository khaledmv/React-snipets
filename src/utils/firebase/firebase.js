import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyClMC3BAPOhBmGAwqN5-6VGD2G4wakQ24I",
    authDomain: "r-auth-158fe.firebaseapp.com",
    projectId: "r-auth-158fe",
    storageBucket: "r-auth-158fe.firebasestorage.app",
    messagingSenderId: "98384428338",
    appId: "1:98384428338:web:1b857afc2bec0851166b2b",
    measurementId: "G-B7LQNZ62RX"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication
const auth = getAuth(app);

// Google Auth provider
const provider = new GoogleAuthProvider();

// Function to handle Google login
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Google Account Info
      const user = result.user;
      console.log('Logged in as:', user.displayName);
      console.log('Email:', user.email);
      console.log('User Photo:', user.photoURL);

      // Redirect or handle the authenticated user
    })
    .catch((error) => {
      // Handle Errors here
      console.error('Error signing in:', error.message);
    });
};

 
  
  
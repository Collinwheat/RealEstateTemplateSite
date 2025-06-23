import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyClaU4rklNS73NBGLWflVKmG2Huk5gvzZ4",
  authDomain: "wheatrealestate-ecf20.firebaseapp.com",
  projectId: "wheatrealestate-ecf20",
  storageBucket: "wheatrealestate-ecf20.firebasestorage.app",
  messagingSenderId: "198385545793",
  appId: "1:198385545793:web:0d13aaf9dcace7832e0cc0"
},
  adminEmails: ["collinwheat@gmail.com", "james@wheatRealestate.com"], // 👈 your admin whitelist
};
const app = initializeApp(environment.firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

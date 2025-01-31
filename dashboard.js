import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase configuration (same as before)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("username").textContent = user.email; // Display username
    } else {
        // Redirect to login page if not logged in
        window.location.href = "login.html";
    }
});

// Logout Function
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login
    }).catch((error) => {
        alert("Error logging out: " + error.message);
    });
});

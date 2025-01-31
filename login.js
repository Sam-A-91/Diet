import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// Firebase configuration (Use the same details from register.js)
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

// Login Function
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to Home Page after login
    } catch (error) {
        alert("Invalid email or password. Please try again.");
    }
});

// Password Reset Function
document.getElementById("resetPassword").addEventListener("click", function() {
    let email = prompt("Enter your registered email to reset your password:");
    
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("A password reset link has been sent to " + email);
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }
});


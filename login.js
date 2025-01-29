document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Simulated login (Replace this with actual authentication)
        if (username === "admin" && password === "12345") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        } else {
            alert("Invalid credentials. Try again.");
        }
    }
});

// Reset Password
document.getElementById("resetPassword").addEventListener("click", function() {
    let email = prompt("Enter your registered email:");
    if (email) {
        alert("A password reset link has been sent to " + email);
    }
});

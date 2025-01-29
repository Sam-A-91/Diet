document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("newUsername").value;
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;

    if (username === "" || email === "" || password === "") {
        alert("All fields are required!");
    } else {
        // Store user details in localStorage (for now)
        let user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created successfully! You can now log in.");
        window.location.href = "login.html"; // Redirect to login page
    }
});

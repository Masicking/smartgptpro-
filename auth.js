// auth.js

// Define correct credentials (change as per your need)
const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "vi96sh91nu";

// Login Function
function loginUser(event) {
  event.preventDefault(); // Stop form submit refresh

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    // Store login info in local storage
    localStorage.setItem("smartgpt_loggedIn", "true");
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    alert("❌ Invalid Username or Password");
  }
}

// Logout Function
function logoutUser() {
  localStorage.removeItem("smartgpt_loggedIn");
  window.location.href = "login.html";
}

// Check if user is logged in (for protected pages)
function checkAuth() {
  const loggedIn = localStorage.getItem("smartgpt_loggedIn");
  if (loggedIn !== "true") {
    window.location.href = "login.html"; // Redirect if not logged in
  }
}
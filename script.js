// Backendless App Configuration
const APP_ID = "096CAD5F-18FE-418C-BE9F-2FF2E5F425D0";
const API_KEY = "DEB56D47-5FB3-4AC1-9DF6-806F79AF23FF";

Backendless.initApp(APP_ID, API_KEY);

// DOM Elements
const loginSection = document.getElementById("login-section");
const homeSection = document.getElementById("home-section");
const profileSection = document.getElementById("profile-section");
const chatSection = document.getElementById("chat-section");
const qrSection = document.getElementById("qr-section");

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const displayUsername = document.getElementById("display-username");

const profileButton = document.getElementById("profile-button");
const chatButton = document.getElementById("chat-button");
const qrButton = document.getElementById("qr-button");

const logoutButton = document.getElementById("logout");
const backToHomeProfile = document.getElementById("back-to-home");
const backToHomeChat = document.getElementById("back-to-home-chat");
const backToHomeQR = document.getElementById("back-to-home-qr");

// Login / Signup
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        displayUsername.textContent = username;
        loginSection.style.display = "none";
        homeSection.style.display = "block";
    } else {
        alert("Please enter a valid username and password.");
    }
});

// Navigation Buttons
profileButton.addEventListener("click", () => {
    homeSection.style.display = "none";
    profileSection.style.display = "block";
});

chatButton.addEventListener("click", () => {
    homeSection.style.display = "none";
    chatSection.style.display = "block";
});

qrButton.addEventListener("click", () => {
    homeSection.style.display = "none";
    qrSection.style.display = "block";
});

// Logout
logoutButton.addEventListener("click", () => {
    homeSection.style.display = "none";
    loginSection.style.display = "block";
    usernameInput.value = "";
    passwordInput.value = "";
});

// Back Buttons
backToHomeProfile.addEventListener("click", () => {
    profileSection.style.display = "none";
    homeSection.style.display = "block";
});

backToHomeChat.addEventListener("click", () => {
    chatSection.style.display = "none";
    homeSection.style.display = "block";
});

backToHomeQR.addEventListener("click", () => {
    qrSection.style.display = "none";
    homeSection.style.display = "block";
});

// Backendless App Configuration
const APP_ID = "096CAD5F-18FE-418C-BE9F-2FF2E5F425D0";
const API_KEY = "DEB56D47-5FB3-4AC1-9DF6-806F79AF23FF";

Backendless.initApp(APP_ID, API_KEY);

// DOM Elements
const loginForm = document.getElementById("login-form");
const messageForm = document.getElementById("message-form");
const chatSection = document.getElementById("chat-section");
const loginSection = document.getElementById("login-section");
const chatBox = document.getElementById("chat-box");
const displayUsername = document.getElementById("display-username");
const logoutBtn = document.getElementById("logout");

// Login or Signup
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        await Backendless.UserService.register({
            username,
            password,
        });
        loginSuccess(username);
    } catch (error) {
        try {
            const user = await Backendless.UserService.login(username, password, true);
            loginSuccess(user.username);
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    }
});

// Handle Login Success
function loginSuccess(username) {
    displayUsername.textContent = username;
    loginSection.style.display = "none";
    chatSection.style.display = "block";
    loadMessages();
}

// Logout
logoutBtn.addEventListener("click", async () => {
    await Backendless.UserService.logout();
    loginSection.style.display = "block";
    chatSection.style.display = "none";
});

// Load Messages
function loadMessages() {
    Backendless.Data.of("Messages").find()
        .then((messages) => {
            chatBox.innerHTML = "";
            messages.forEach((msg) => {
                const messageElement = document.createElement("div");
                messageElement.textContent = `${msg.sender}: ${msg.text}`;
                chatBox.appendChild(messageElement);
            });
        });
}

// Send Messages
messageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value;
    const username = displayUsername.textContent;

    if (messageText.trim() !== "") {
        await Backendless.Data.of("Messages").save({
            text: messageText,
            sender: username,
        });
        messageInput.value = "";
        loadMessages();
    }
});

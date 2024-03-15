const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function handleLogin() {
    // Replace with actual authentication logic (e.g., API call, in-memory storage)
    if (usernameInput.value === 'student' && passwordInput.value === 'password') {
        window.location.href = 'welcome.html'; // Redirect to welcome page on success
    } else {
        alert('Invalid username or password.');
    }
}

// Implement logic for handling register form submission and account creation (if applicable)
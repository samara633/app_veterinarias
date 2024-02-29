document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = isUserLoggedIn();
    if (!isLoggedIn) {
        // Hide or disable elements for unauthenticated users
        document.getElementById('content-container').style.display = 'none';
        document.getElementById('login-link').style.display = 'block';
    } else {
        // Show or enable elements for authenticated users
        document.getElementById('content-container').style.display = 'block';
        document.getElementById('login-link').style.display = 'none';
    }
});


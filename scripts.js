document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Placeholder for authentication logic
        console.log(`Email: ${email}, Username: ${username}, Password: ${password}`);
        
        alert('Logged in successfully!');
    });
});

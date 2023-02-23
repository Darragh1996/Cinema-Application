loginFormObject = document.getElementById('loginForm');

try {
    loginFormObject.removeEventListener();
} catch (error) {
    console.log(error);
}
loginFormObject.addEventListener('submit', (event) => {
    event.preventDefault();

    // Add code to login using data from the database
    
});
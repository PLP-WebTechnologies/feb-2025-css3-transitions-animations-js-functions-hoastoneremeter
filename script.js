
// Toggle between dark mode and light mode
function toggleMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        storeUserPreference('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        storeUserPreference('theme', 'dark-mode');
    }
}

// Store user preferences in localStorage
function storeUserPreference(key, value) {
    localStorage.setItem(key, value);
}

// Retrieve user preferences from localStorage
function getUserPreference(key) {
    return localStorage.getItem(key);
}

// Apply stored theme preference on page load
function applyStoredTheme() {
    const storedTheme = getUserPreference('theme');
    if (storedTheme) {
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(storedTheme);
    }
}

// Add a clicked effect to buttons
function addClickedEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked-effect');
            setTimeout(() => {
                button.classList.remove('clicked-effect');
            }, 300);
        });
    });
}

// Trigger animation on user action
function triggerAnimation() {
    const animatedElement = document.getElementById('animated-box');
    if (animatedElement) {
        animatedElement.addEventListener('click', () => {
            animatedElement.classList.add('animate');
            setTimeout(() => {
                animatedElement.classList.remove('animate');
            }, 1000); // Match the animation duration in CSS
        });
    }
}

// Initialize functionality
function initialize() {
    applyStoredTheme(); // Apply stored theme on load
    const toggleButton = document.getElementById('toggle-mode');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);
    }
    addClickedEffect();
    triggerAnimation(); // Add animation trigger
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);

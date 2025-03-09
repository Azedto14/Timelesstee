// This file contains the main JavaScript functionality for the business website.
// It handles general functionality and event listeners for the site.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners and other functionalities here
    console.log('Business website loaded');

    // Example: Add event listener for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(`Navigating to ${event.target.textContent}`);
        });
    });
});
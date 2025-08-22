// Main application initialization

// Initialize the application
function initApp() {
    loadMedicationData();
    initEventListeners();
    handleMobileKeyboard();
    
    // Add a slight delay to the animation to let the page render first
    setTimeout(() => {
        document.querySelector('.search-section').style.transform = 'translateY(0)';
    }, 100);
}

// Start the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);
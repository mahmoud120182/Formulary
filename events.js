// Event handling functions

// Prevent leading spaces in search input
function preventLeadingSpace(e) {
    const searchInput = document.getElementById('search-input');
    if (e.key === ' ' && searchInput.selectionStart === 0) {
        e.preventDefault();
    }
}

// Handle mobile keyboard appearance
function handleMobileKeyboard() {
    const searchInput = document.getElementById('search-input');
    const container = document.querySelector('.container');
    
    if (window.innerWidth < 768) {
        searchInput.addEventListener('focus', () => {
            container.classList.add('keyboard-active');
            window.scrollTo(0, 0);
        });
        
        searchInput.addEventListener('blur', () => {
            container.classList.remove('keyboard-active');
        });
    }
}

// Initialize event listeners
function initEventListeners() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        filterMedications(searchInput.value);
    });
    
    searchInput.addEventListener('keydown', preventLeadingSpace);
    
    // Add back button event listener
    document.getElementById('back-button').addEventListener('click', goBackToSearch);
}
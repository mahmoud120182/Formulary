// Main application initialization

// Initialize the app
window.onload = function() {
    loadMedicationData();
    initEventListeners();
    // Ensure the correct initial state
    if (window.history.state === null) {
        window.history.replaceState({}, document.title);
    }
};

// Function to load medication data
function loadMedicationData() {
    medications = medicationData;

    // Update placeholder after loading
    document.getElementById('search-input').placeholder = "medication name or active ingredient";

    // Show initial state
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = `
        <div class="no-results fade-in">
            <i class="fas fa-info-circle"></i>
            <p>Type at least 2 characters to search</p>
            <p style="font-size:0.9rem; margin-top:10px;">Try: olanzapine, lithium</p>
        </div>
    `;
}

// Function to go back to the search page
function goBackToSearch() {
    document.querySelector('.search-section').classList.remove('hidden');
    document.querySelector('.results-container').classList.remove('hidden');
    document.getElementById('medication-detail').classList.add('hidden');

    // Update history state
    window.history.pushState({}, document.title);
}

// Function to show medication details
function showMedicationDetails(medName) {
    const medication = medications.find(med => med.name === medName);
    if (!medication) return;

    // Hide search section and search results, show detail page
    document.querySelector('.search-section').classList.add('hidden');
    document.querySelector('.results-container').classList.add('hidden');
    document.getElementById('medication-detail').classList.remove('hidden');

    // Populate detail page
    document.getElementById('detail-med-name').textContent = medication.name;
    document.getElementById('detail-active').textContent = medication.active;
    document.getElementById('detail-category').textContent = medication.category;
    document.getElementById('detail-package').textContent = medication.package;
    document.getElementById('detail-half-life').textContent = medication.halfLife;
    // Add other details as needed...

    // Update history state
    window.history.pushState({}, document.title);
}

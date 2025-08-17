let medications = []; // Will store loaded medications

// DOM elements
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');

// Function to display medications
function displayMedications(meds) {
    resultsList.innerHTML = '';
    
    if (meds.length === 0) {
        resultsList.innerHTML = `
            <div class="no-results fade-in">
                <i class="fas fa-search"></i>
                <p>No medications found. Try a different search term.</p>
            </div>
        `;
        return;
    }
    
    meds.forEach(med => {
        const li = document.createElement('li');
        li.className = 'medication-item fade-in';
        
        li.innerHTML = `
            <div class="medication-info">
                <div class="medication-name">${med.name}</div>
                <div class="active-ingredient">Active ingredient: ${med.active}</div>
            </div>
            <div class="availability ${med.available ? 'available' : 'not-available'}">
                ${med.available ? 'OK' : 'NA'}
            </div>
        `;
        
        resultsList.appendChild(li);
    });
}

// Function to filter medications and find those with same active ingredient
function filterMedications(searchTerm) {
    if (searchTerm.length < 2) {
        resultsList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-info-circle"></i>
                <p>Type at least 2 characters to search</p>
            </div>
        `;
        return;
    }
    
    const term = searchTerm.toLowerCase();
    
    // Find medications that match the search term
    const directMatches = medications.filter(med => 
        med.name.toLowerCase().includes(term) || 
        med.active.toLowerCase().includes(term)
    );
    
    // If no direct matches found, show nothing
    if (directMatches.length === 0) {
        displayMedications([]);
        return;
    }
    
    // Collect active ingredients from direct matches
    const activeIngredients = [...new Set(directMatches.map(med => med.active))];
    
    // Find all medications that have these active ingredients
    const allMatches = medications.filter(med => 
        activeIngredients.includes(med.active)
    );
    
    // Remove duplicates (if any)
    const uniqueMatches = allMatches.filter((med, index, self) =>
        index === self.findIndex(m => 
            m.name === med.name && 
            m.active === med.active &&
            m.available === med.available
        )
    );
    
    displayMedications(uniqueMatches);
}

// Load JSON data
function loadMedicationData() {
    const medicationData = [
        { name: "olapex 10mg tab", active: "olanzapine", available: true },
        { name: "olapex 5mg tab", active: "olanzapine", available: true },
        { name: "zyprexa 10mg velotab", active: "olanzapine", available: false },
        { name: "zyprexa 5mg tab", active: "olanzapine", available: false },
        { name: "zyprexa 10mg tab", active: "olanzapine", available: false },
        { name: "prianil 400mg tab", active: "lithium", available: false },
        { name: "lithiomod 400mg tab", active: "lithium", available: true },
        { name: "depakote 500mg tab", active: "divalproex", available: true },
        { name: "seroquel 100mg tab", active: "quetiapine", available: false },
        { name: "risperdal 2mg tab", active: "risperidone", available: true },
        { name: "abilify 10mg tab", active: "aripiprazole", available: false },
        { name: "prozac 20mg cap", active: "fluoxetine", available: true }
    ];
    
    medications = medicationData;
    
    // Update placeholder after loading
    searchInput.placeholder = "medication name or active ingredient";
    
    // Show initial state
    resultsList.innerHTML = `
        <div class="no-results fade-in">
            <i class="fas fa-info-circle"></i>
            <p>Type at least 2 characters to search</p>
            <p style="font-size:0.9rem; margin-top:10px;">Try: olanzapine, lithium, or depakote</p>
        </div>
    `;
}

// Event listeners
searchInput.addEventListener('input', () => {
    filterMedications(searchInput.value);
});

// Initialize
loadMedicationData();

// Add a slight delay to the animation to let the page render first
setTimeout(() => {
    document.querySelector('.search-section').style.transform = 'translateY(0)';
}, 100);
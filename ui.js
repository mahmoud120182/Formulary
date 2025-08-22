// UI rendering functions

// Function to display medications
function displayMedications(meds) {
    const resultsList = document.getElementById('results-list');
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
        li.dataset.name = med.name;
        
        li.innerHTML = `
            <div class="medication-info">
                <div class="medication-name">${med.name}</div>
                <div class="active-ingredient">Active ingr.: ${med.active}</div>
            </div>
            <div class="availability ${med.available ? 'available' : 'not-available'}">
                ${med.available ? 'OK' : 'NA'}
            </div>
        `;
        
        // Add click event to availability badge only
        const availabilityBadge = li.querySelector('.availability');
        availabilityBadge.addEventListener('click', () => {
            showMedicationDetails(med.name);
        });
        
        resultsList.appendChild(li);
    });
}

// Function to show loading state
function showLoadingState() {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = `
        <div class="no-results">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading medications...</p>
        </div>
    `;
}

// Function to show info message
function showInfoMessage(message, subMessage = '') {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = `
        <div class="no-results fade-in">
            <i class="fas fa-info-circle"></i>
            <p>${message}</p>
            ${subMessage ? `<p style="font-size:0.9rem; margin-top:10px;">${subMessage}</p>` : ''}
        </div>
    `;
}
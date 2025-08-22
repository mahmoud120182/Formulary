// Search functionality

// Function to filter medications and find those with same active ingredient
function filterMedications(searchTerm) {
    // Trim and clean search term
    const term = searchTerm.trim().toLowerCase();
    
    if (term.length < 2) {
        showInfoMessage('Type at least 2 characters to search');
        return;
    }
    
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
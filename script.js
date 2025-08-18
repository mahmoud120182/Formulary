let medications = []; // Will store loaded medications

// DOM elements
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');
const container = document.querySelector('.container');

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
                <div class="active-ingredient">Active ing.: ${med.active}</div>
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
    // Trim and clean search term
    const term = searchTerm.trim().toLowerCase();
    
    if (term.length < 2) {
        resultsList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-info-circle"></i>
                <p>Type at least 2 characters to search</p>
            </div>
        `;
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

// Load JSON data
function loadMedicationData() {
    const medicationData = [
        { name: "INSPAGO 25mg Tab.", active: "Agomelatine", available: false },
        { name: "AGOVALD 25mg Tab.", active: "Agomelatine", available: true },
        { name: "VALDOXANE 25mg Tab.", active: "Agomelatine", available: false },
        { name: "ZOLAM 0.25mg Tab.", active: "Alprazolam", available: true },
        { name: "ZOLAM 0.5mg Tab.", active: "Alprazolam", available: true },
        { name: "XANAX 0.5mg Tab.", active: "Alprazolam", available: false },
        { name: "PK-MERZ INFUSION", active: "Amantadine", available: true },
        { name: "PK-MERZ 100mg Tab.", active: "Amantadine", available: true },
        { name: "AMIPRIDE 200mg Tab.", active: "Amisulpride", available: true },
        { name: "AMIPRIDE 50mg Tab.", active: "Amisulpride", available: true },
        { name: "SOLIAN 200mg Tab.", active: "Amisulpride", available: false },
        { name: "SOLIAN 400mg Tab.", active: "Amisulpride", available: true },
        { name: "TRYTPIZOL 10mg Tab.", active: "Amitriptyline", available: true },
        { name: "TRYTPIZOL 25mg Tab.", active: "Amitriptyline", available: true },
        { name: "ABILIFY MAINTENA 400mg Syring", active: "Aripiprazole", available: true },
        { name: "ABILIFY MAINTENA 300mg Syring", active: "Aripiprazole", available: false },
        { name: "ABILIFY 10mg Tab.", active: "Aripiprazole", available: true },
        { name: "ABILIFY 15mg Tab.", active: "Aripiprazole", available: true },
        { name: "ABILIFY 5mg Tab.", active: "Aripiprazole", available: true },
        { name: "APILIPEX 10mg Tab.", active: "Aripiprazole", available: true },
        { name: "APILIPEX 30mg Tab.", active: "Aripiprazole", available: true },
        { name: "APILIPEX 5mg Tab.", active: "Aripiprazole", available: true },
        { name: "ARMOWAKE 50mg Tab.", active: "Armodafinil", available: true },
        { name: "ASENADIA 10mg Tab.", active: "Asenapine", available: true },
        { name: "ASENAPINE Tab.", active: "Asenapine", available: false },
        { name: "ATOMOX 18mg Cap.", active: "Atomoxetine", available: true },
        { name: "ATOMOX 10mg Cap.", active: "Atomoxetine", available: true },
        { name: "ATOMOX 25mg Cap.", active: "Atomoxetine", available: true },
        { name: "ATOMOX 60mg Cap.", active: "Atomoxetine", available: true },
        { name: "STRATTERA Cap.", active: "Atomoxetine", available: false },
        { name: "COGINTOL 2mg Tab.", active: "Benztropine", available: true },
        { name: "ACHTENON 2mg Tab.", active: "Biperidene", available: true },
        { name: "NEOPRESSION 2mg Tab.", active: "Brexpiprazole", available: true },
        { name: "NEOPRESSION 4mg Tab.", active: "Brexpiprazole", available: true },
        { name: "WELLINTA SR 150mg Tab.", active: "Bupropion", available: true },
        { name: "WELLBUTRIN SR 150mg Tab.", active: "Bupropion", available: false },
        { name: "SINEMET 25/250mg Tab.", active: "Carbidopa/Levodopa", available: true },
        { name: "REAGILA 1.5mg Cap.", active: "Cariprazine", available: true },
        { name: "REAGILA 3mg Cap.", active: "Cariprazine", available: true },
        { name: "REAGILA 4.5mg Cap.", active: "Cariprazine", available: true },
        { name: "REAGILA 6mg Cap.", active: "Cariprazine", available: true },
        { name: "LIBRAX 30 tablets Tab.", active: "Chlordiazepoxide + Clidinium Bromide", available: true },
        { name: "NEURAZINE 100mg Tab.", active: "Chlorpromazine", available: true },
        { name: "DEPRAM 20mg Tab.", active: "Citalopram", available: true },
        { name: "DEPRAM 40mg Tab.", active: "Citalopram", available: false },
        { name: "ANAFRANIL 25mg Tab.", active: "Clomipramine", available: true },
        { name: "ANAFRANIL SR 75mg Tab.", active: "Clomipramine", available: true },
        { name: "APETRYL 0.5mg Tab.", active: "Clonazepam", available: true },
        { name: "APETRYL 2mg Tab.", active: "Clonazepam", available: true },
        { name: "CLOZAPEX 100mg Tab.", active: "Clozapine", available: true },
        { name: "CLOZAPEX 25mg Tab.", active: "Clozapine", available: true },
        { name: "LEPONEX Tab.", active: "Clozapine", available: false },
        { name: "VENLATROPE 50mg Tab.", active: "Desvenlafaxine", available: true },
        { name: "PRISTIQ 50MG Tab", active: "Desvenlafaxine", available: false },
        { name: "DIVAKOTE 500mg ER Tab.", active: "Divalproex", available: true },
        { name: "ARICEPT 10mg Tab.", active: "Donepezil", available: false },
        { name: "ARICEPT 5mg Tab.", active: "Donepezil", available: true },
        { name: "CYMBATEX 30mg Cap.", active: "Duloxetine", available: true },
        { name: "CYMBATEX 60mg Cap.", active: "Duloxetine", available: true },
        { name: "CYMBALTA Cap.", active: "Duloxetine", available: false },
        { name: "CIPRALEX 10mg Tab.", active: "Escitalopram", available: true },
        { name: "CIPRA-PRO 10mg Tab.", active: "Escitalopram", available: true },
        { name: "PHILOZAC 20mg Cap.", active: "Fluoxetine", available: false },
        { name: "PROZAC 20mg Cap.", active: "Fluoxetine", available: false },
        { name: "DEPREBAN 20mg Cap.", active: "Fluoxetine", available: true },
        { name: "FLUANXOL DEPOT 40mg/2ml Amp.", active: "Flupentixol", available: true },
        { name: "FAVERIN 100mg Tab.", active: "Fluvoxamine", available: true },
        { name: "FAVERIN 50mg Tab.", active: "Fluvoxamine", available: true },
        { name: "HALDOL DECANOAS 50mg Amp.", active: "Haloperidol", available: false },
        { name: "HALOPERIDOL RETARD 50mg Amp.", active: "Haloperidol", available: false },
        { name: "HALOPERIDOL 5mg/ml Amp.", active: "Haloperidol", available: true },
        { name: "HALONACE 1.5mg Tab.", active: "Haloperidol", available: true },
        { name: "HALONACE 5mg Tab.", active: "Haloperidol", available: true },
        { name: "LAMICTAL 100mg Tab.", active: "Lamotrigine", available: true },
        { name: "LAMICTAL 25mg Tab.", active: "Lamotrigine", available: true },
        { name: "LAMICTAL 50mg Tab.", active: "Lamotrigine", available: true },
        { name: "PRIANIL 400mg Tab.", active: "Lithium", available: false },
        { name: "LITHIOMOD 400MG Tab", active: "Lithium", available: true },
        { name: "ELBALURAN Tab.", active: "Lurasidone", available: false },
        { name: "TUDASIDONE 40mg Tab.", active: "Lurasidone", available: true },
        { name: "TUDASIDONE 80mg Tab.", active: "Lurasidone", available: true },
        { name: "MELATONIN 5mg Cap.", active: "Melatonin", available: true },
        { name: "EBIXA 10mg Tab.", active: "Memantine", available: false },
        { name: "MEMEXA 10mg Tab.", active: "Memantine", available: true },
        { name: "MIDAZOLAM 15mg Amp.", active: "Midazolam", available: true },
        { name: "MIDAZOLAM 5mg Amp.", active: "Midazolam", available: true },
        { name: "DORMICUM AMP", active: "Midazolam", available: false },
        { name: "MIRTIMASH 30mg Tab.", active: "Mirtazapine", available: true },
        { name: "REMERON 30mg Tab.", active: "Mirtazapine", available: true },
        { name: "BRAVAMAX 200mg Tab.", active: "Modafinil", available: true },
        { name: "ANARCOL 50mg Tab.", active: "Naltrexone", available: false },
        { name: "MORFBLOCK 50mg Tab", active: "Naltrexone", available: false },
        { name: "OLAPEX 10mg Tab.", active: "Olanzapine", available: true },
        { name: "OLAPEX 5mg Tab.", active: "Olanzapine", available: true },
        { name: "ZYPREXA Tab.", active: "Olanzapine", available: false },
        { name: "TRILEPTAL Tab.", active: "Oxcarbazepine", available: false },
        { name: "OXALEPTAL 300mg Tab.", active: "Oxcarbazepine", available: true },
        { name: "OXALEPTAL 600mg Tab.", active: "Oxcarbazepine", available: true },
        { name: "INVEGA SUSTENNA 100mg Syring", active: "Paliperidone", available: true },
        { name: "INVEGA SUSTENNA 150mg Syring", active: "Paliperidone", available: true },
        { name: "INVEGA SUSTENNA 75mg Syring", active: "Paliperidone", available: false },
        { name: "TREVICTA 350mg Syring", active: "Paliperidone", available: true },
        { name: "TREVICTA 525mg Syring", active: "Paliperidone", available: false },
        { name: "INVEGA 3mg Tab.", active: "Paliperidone", available: true },
        { name: "INVEGA 6mg Tab.", active: "Paliperidone", available: false },
        { name: "PAROXETINE 12.5mg CR Tab.", active: "Paroxetine", available: false },
        { name: "PAROXETINE 25mg CR Tab.", active: "Paroxetine", available: true },
        { name: "PAROXETINE 37.5mg CR Tab.", active: "Paroxetine", available: false },
        { name: "SEROXAT CR 12.5mg Tab.", active: "Paroxetine", available: true },
        { name: "SEROXAT CR 25mg Tab.", active: "Paroxetine", available: true },
        { name: "STIMULAN 400mg Cap.", active: "Piracetam", available: true },
        { name: "STIMULAN 800mg Tab.", active: "Piracetam", available: true },
        { name: "STIMULAN Syrup.", active: "Piracetam", available: true },
        { name: "OXITROPIL 1200mg Cap.", active: "Piracetam", available: true },
        { name: "RAMIXOLE 0.25mg Tab.", active: "Pramipexol", available: true },
        { name: "RAMIXOLE 1mg Tab.", active: "Pramipexol", available: false },
        { name: "QUITAPEX 100mg Tab.", active: "Quetiapine", available: true },
        { name: "QUITAPEX 200mg Tab.", active: "Quetiapine", available: true },
        { name: "QUITAPEX 25mg Tab.", active: "Quetiapine", available: true },
        { name: "QUITCOOL 150 XR Tab.", active: "Quetiapine", available: true },
        { name: "QUITCOOL 200 XR Tab.", active: "Quetiapine", available: true },
        { name: "QUETIAZIC 300 XR Tab.", active: "Quetiapine", available: true },
        { name: "QUITAPEX 400 XR Tab.", active: "Quetiapine", available: true },
        { name: "QUITCOOL 50 XR Tab.", active: "Quetiapine", available: true },
        { name: "SEROQUEL 100mg Tab.", active: "Quetiapine", available: true },
        { name: "SEROQUEL 200mg Tab.", active: "Quetiapine", available: true },
        { name: "SEROQUEL 25mg Tab.", active: "Quetiapine", available: true },
        { name: "APEXIDONE 0.5mg Tab.", active: "Risperidone", available: true },
        { name: "APEXIDONE 1mg Tab.", active: "Risperidone", available: true },
        { name: "APEXIDONE 2mg Tab.", active: "Risperidone", available: true },
        { name: "APEXIDONE 3mg Tab.", active: "Risperidone", available: true },
        { name: "APEXIDONE 4mg Tab.", active: "Risperidone", available: true },
        { name: "RISPERDAL 2mg Tab.", active: "Risperidone", available: true },
        { name: "RISPERDAL 4mg Tab.", active: "Risperidone", available: true },
        { name: "RISPERDAL Syrup", active: "Risperidone", available: true },
        { name: "RISPERDAL CONSTA", active: "Risperidone", available: false },
        { name: "LUSTRAL 50mg Tab.", active: "Sertraline", available: true },
        { name: "MOODAPEX 50mg Tab.", active: "Sertraline", available: true },
        { name: "DOGMATIL 50mg Cap.", active: "Sulpiride", available: true },
        { name: "DOGMATIL FORTE 200mg Tab.", active: "Sulpiride", available: true },
        { name: "TOPAMAX Tab.", active: "Topiramate", available: false },
        { name: "TOPIRAMATE 25mg Tab.", active: "Topiramate", available: true },
        { name: "TRITTICO 100mg Tab.", active: "Trazodone", available: true },
        { name: "TRITTICO 50mg Tab.", active: "Trazodone", available: true },
        { name: "STELLASIL 5mg Tab.", active: "Trifluperazine", available: true },
        { name: "STELLASIL 1mg Tab.", active: "Trifluperazine", available: false },
        { name: "DEPAKINE CHRONO 500mg Tab.", active: "Valproic Acid", available: true },
        { name: "EFEXOR XR 150mg Cap.", active: "Venlafaxine", available: true },
        { name: "EFEXOR XR 75mg Cap.", active: "Venlafaxine", available: true },
        { name: "VENLLAMASH 75mg Cap.", active: "Venlafaxine", available: true },
        { name: "VILAZOVER 40mg Tab.", active: "Vilazodone", available: false },
        { name: "VILAPHORIA 40mg Tab.", active: "Vilazodone", available: true },
        { name: "DEPRATIOX 10mg Tab.", active: "Vortioxetine", available: true },
        { name: "BRINTELLIX 10MG Tab.", active: "Vortioxetine", available: false },
        { name: "HYPNOR 7.5mg Tab.", active: "Zopiclone", available: false },
        { name: "CLOPIXOL DEPOT 200mg/ml Amp.", active: "Zuclopenthixol", available: true },
        { name: "ANEXATE 0.5 MG/5ML Amp.", active: "FLUMAZENIL", available: true },
        { name: "CEREBROCETAM 1GM Amp.", active: "Piracetam", available: false },
        { name: "Memoral 1GM Amp.", active: "Piracetam", available: true },
        { name: "Stimulan 1GM Amp.", active: "Piracetam", available: false },
        { name: "Nootropil 1GM Amp.", active: "Piracetam", available: false },
        { name: "Nootropil Cap.", active: "Piracetam", available: false },
        { name: "KEPPRA Tab.", active: "Levetiracetam", available: false },
        { name: "TIRATAM 500MG tab", active: "Levetiracetam", available: true },
        { name: "TEGRETOL 200MG Tab.", active: "Carbamazepine", available: true },
        { name: "TEGRETOL 200MG CR Tab.", active: "Carbamazepine", available: true },
        { name: "TEGRETOL 400MG CR Tab.", active: "Carbamazepine", available: true },
        { name: "SPRAVATO 28MG Spray", active: "Esketamine", available: true },
        { name: "CALMIPAM 1.5MG Tab", active: "Bromazepam", available: true },
        { name: "CALMIPAM 3MG Tab", active: "Bromazepam", available: true },
        { name: "BUSPAR 10MG Tab.", active: "Buspirone", available: true },
        { name: "BUSPAR 15MG Tab.", active: "Buspirone", available: false },
        { name: "ELARPIC 20MG Tab,", active: "Escitalopram", available: true },
        { name: "INDERAL 10MG Tab.", active: "Propranolol", available: true },
        { name: "INDERAL 40MG Tab.", active: "Propranolol", available: true },
        { name: "ORAP FORTE 4MG Tab.", active: "Pimozide", available: true },
        { name: "PROCYKINOL 5MG Tab.", active: "Procyclidine", available: true }
    ];
    
    medications = medicationData;
    
    // Update placeholder after loading
    searchInput.placeholder = "medication name or active ingredient";
    
    // Show initial state
    resultsList.innerHTML = `
        <div class="no-results fade-in">
            <i class="fas fa-info-circle"></i>
            <p>Type at least 2 characters to search (More Characters , More Accurate Results)</p>
            <p style="font-size:0.9rem; margin-top:10px;">Try: olanzapine, lithium</p>
        </div>
    `;
}

// Prevent leading spaces
function preventLeadingSpace(e) {
    if (e.key === ' ' && searchInput.selectionStart === 0) {
        e.preventDefault();
    }
}

// Handle mobile keyboard appearance
function handleMobileKeyboard() {
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

// Event listeners
searchInput.addEventListener('input', () => {
    filterMedications(searchInput.value);
});

searchInput.addEventListener('keydown', preventLeadingSpace);

// Initialize
loadMedicationData();
handleMobileKeyboard();

// Add a slight delay to the animation to let the page render first
setTimeout(() => {
    document.querySelector('.search-section').style.transform = 'translateY(0)';
}, 100);

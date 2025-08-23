// Medication data and related functions
const medicationData = [

    { 
        name: "INSPAGO 25mg Tab.", 
        active: "Agomelatine", 
        category: "Melatonin Receptor Agonist (Antidepressant)",
        available: false,
        package: "14 TAB",
        halfLife: "1-2 hours",
        sideEffects: ["Nausea", "dizziness", "insomnia", "headache", "anxiety", "liver enzyme increases"],
        interactions: ["Strong CYP1A2 inhibitors (e.g., Fluvoxamine)", "Alcohol"],
        monitor: ["Liver function", "mood changes", "sleep patterns"],
        importantInvestigations: ["Liver Function Tests (LFTs) - Baseline and periodic"]
    },
    { 
        name: "AGOVALD 25mg Tab.", 
        active: "Agomelatine", 
        category: "Melatonin Receptor Agonist (Antidepressant)",
        available: true,
        package: "21 TAB",
        halfLife: "1-2 hours",
        sideEffects: ["Nausea", "dizziness", "insomnia", "headache", "anxiety", "liver enzyme increases"],
        interactions: ["Strong CYP1A2 inhibitors (e.g., Fluvoxamine)", "Alcohol"],
        monitor: ["Liver function", "mood changes", "sleep patterns"],
        importantInvestigations: ["Liver Function Tests (LFTs) - Baseline and periodic"]
    },
    { 
        name: "VALDOXANE 25mg Tab.", 
        active: "Agomelatine", 
        category: "Melatonin Receptor Agonist (Antidepressant)",
        available: false,
        package: "14 TAB",
        halfLife: "1-2 hours",
        sideEffects: ["Nausea", "dizziness", "insomnia", "headache", "anxiety", "liver enzyme increases"],
        interactions: ["Strong CYP1A2 inhibitors (e.g., Fluvoxamine)", "Alcohol"],
        monitor: ["Liver function", "mood changes", "sleep patterns"],
        importantInvestigations: ["Liver Function Tests (LFTs) - Baseline and periodic"]
    },
    { 
        name: "ZOLAM 0.25mg Tab.", 
        active: "Alprazolam", 
        category: "Benzodiazepine (Anxiolytic)",
        available: true,
        package: "30 TAB",
        halfLife: "6-12 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "memory impairment", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants", "CYP3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["Sedation", "dizziness", "cognitive impairment", "risk of dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "ZOLAM 0.5mg Tab.", 
        active: "Alprazolam", 
        category: "Benzodiazepine (Anxiolytic)",
        available: true,
        package: "30 TAB",
        halfLife: "6-12 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "memory impairment", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants", "CYP3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["Sedation", "dizziness", "cognitive impairment", "risk of dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "XANAX 0.5mg Tab.", 
        active: "Alprazolam", 
        category: "Benzodiazepine (Anxiolytic)",
        available: false,
        package: "30 TAB",
        halfLife: "6-12 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "memory impairment", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants", "CYP3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["Sedation", "dizziness", "cognitive impairment", "risk of dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "XANAX 0.5mg Tab.", 
        active: "Alprazolam", 
        category: "Benzodiazepine (Anxiolytic)",
        available: false,
        package: "100 TAB",
        halfLife: "6-12 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "memory impairment", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants", "CYP3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["Sedation", "dizziness", "cognitive impairment", "risk of dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "PK-MERZ INFUSION", 
        active: "Amantadine", 
        category: "NMDA Receptor Antagonist (Antiviral, Anti-Parkinson's)",
        available: true,
        package: "1 BOTTLE",
        halfLife: "12-17 hours",
        sideEffects: ["Nausea", "dizziness", "insomnia", "livedo reticularis", "ankle edema", "anticholinergic effects"],
        interactions: ["Anticholinergic drugs", "CNS stimulants", "Memantine"],
        monitor: ["Neuropsychiatric effects (confusion, hallucinations)", "orthostatic hypotension", "livedo reticularis", "edema"],
        importantInvestigations: ["Renal function (dose adjustment needed)", "None routine for CNS use"]
    },
    { 
        name: "PK-MERZ 100mg Tab.", 
        active: "Amantadine", 
        category: "NMDA Receptor Antagonist (Antiviral, Anti-Parkinson's)",
        available: true,
        package: "30 TAB",
        halfLife: "12-17 hours",
        sideEffects: ["Nausea", "dizziness", "insomnia", "livedo reticularis", "ankle edema", "anticholinergic effects"],
        interactions: ["Anticholinergic drugs", "CNS stimulants", "Memantine"],
        monitor: ["Neuropsychiatric effects (confusion, hallucinations)", "orthostatic hypotension", "livedo reticularis", "edema"],
        importantInvestigations: ["Renal function (dose adjustment needed)", "None routine for CNS use"]
    },
    { 
        name: "AMIPRIDE 200mg Tab.", 
        active: "Amisulpride", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "12 hours",
        sideEffects: ["Weight gain", "hyperprolactinemia", "insomnia", "anxiety", "extrapyramidal symptoms (at high doses)"],
        interactions: ["Other CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Erythromycin)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "sedation", "prolactin-related effects (galactorrhea, gynecomastia)"],
        importantInvestigations: ["Prolactin level", "ECG (QTc interval)"]
    },
    { 
        name: "AMIPRIDE 50mg Tab.", 
        active: "Amisulpride", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "12 hours",
        sideEffects: ["Weight gain", "hyperprolactinemia", "insomnia", "anxiety", "extrapyramidal symptoms (at low doses)"],
        interactions: ["Other CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Erythromycin)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "sedation", "prolactin-related effects (galactorrhea, gynecomastia)"],
        importantInvestigations: ["Prolactin level", "ECG (QTc interval)"]
    },
    { 
        name: "SOLIAN 200mg Tab.", 
        active: "Amisulpride", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "30 TAB",
        halfLife: "12 hours",
        sideEffects: ["Weight gain", "hyperprolactinemia", "insomnia", "anxiety", "extrapyramidal symptoms (at high doses)"],
        interactions: ["Other CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Erythromycin)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "sedation", "prolactin-related effects (galactorrhea, gynecomastia)"],
        importantInvestigations: ["Prolactin level", "ECG (QTc interval)"]
    },
    { 
        name: "SOLIAN 400mg Tab.", 
        active: "Amisulpride", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "12 hours",
        sideEffects: ["Weight gain", "hyperprolactinemia", "insomnia", "anxiety", "extrapyramidal symptoms (at high doses)"],
        interactions: ["Other CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Erythromycin)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "sedation", "prolactin-related effects (galactorrhea, gynecomastia)"],
        importantInvestigations: ["Prolactin level", "ECG (QTc interval)"]
    },
    { 
        name: "TRYTPIZOL 10mg Tab.", 
        active: "Amitriptyline", 
        category: "Tricyclic Antidepressant (TCA)",
        available: true,
        package: "60 TAB",
        halfLife: "7-20 hours",
        sideEffects: ["Sedation", "dry mouth", "constipation", "blurred vision", "orthostatic hypotension", "weight gain"],
        interactions: ["MAOIs", "SSRIs", "Anticholinergics", "CNS depressants", "Drugs that prolong QTc"],
        monitor: ["Sedation", "orthostatic hypotension", "anticholinergic effects (dry mouth, constipation, urinary retention)", "cardiac conduction (monitor for QT prolongation clinically)"],
        importantInvestigations: ["ECG (QTc interval at higher doses)", "baseline in cardiac disease"]
    },
    { 
        name: "TRYTPIZOL 25mg Tab.", 
        active: "Amitriptyline", 
        category: "Tricyclic Antidepressant (TCA)",
        available: true,
        package: "30 TAB",
        halfLife: "7-20 hours",
        sideEffects: ["Sedation", "dry mouth", "constipation", "blurred vision", "orthostatic hypotension", "weight gain"],
        interactions: ["MAOIs", "SSRIs", "Anticholinergics", "CNS depressants", "Drugs that prolong QTc"],
        monitor: ["Sedation", "orthostatic hypotension", "anticholinergic effects (dry mouth, constipation, urinary retention)", "cardiac conduction (monitor for QT prolongation clinically)"],
        importantInvestigations: ["ECG (QTc interval at higher doses)", "baseline in cardiac disease"]
    },
    { 
        name: "ABILIFY MAINTENA 400mg Syring", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "1 SYRING",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ABILIFY MAINTENA 300mg Syring", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: false,
        package: "1 SYRING",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ABILIFY 10mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "10 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ABILIFY 15mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "10 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ABILIFY 5mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "10 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "APILIPEX 10mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "APILIPEX 30mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "APILIPEX 5mg Tab.", 
        active: "Aripiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "30 TAB",
        halfLife: "75 hours",
        sideEffects: ["Akathisia", "headache", "insomnia", "weight gain (less than others)", "nausea", "restlessness"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "CYP2D6 inhibitors (e.g., Fluoxetine)"],
        monitor: ["Extrapyramidal symptoms (EPS)", "akathisia", "restlessness", "activation of psychosis", "sedation", "weight gain"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ARMOWAKE 50mg Tab.", 
        active: "Armodafinil", 
        category: "Wakefulness-Promoting Agent",
        available: true,
        package: "20 TAB",
        halfLife: "10-20 hours",
        sideEffects: ["Headache", "nausea", "anxiety", "insomnia", "dizziness", "dry mouth"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., Carbamazepine/Ketoconazole)", "Hormonal Contraceptives (reduced efficacy)"],
        monitor: ["Sleep patterns", "alertness", "psychiatric symptoms (anxiety, agitation, mania)", "skin reactions"],
        importantInvestigations: ["None routine"]
    },
    { 
        name: "ASENADIA 10mg Tab.", 
        active: "Asenapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "10 TAB",
        halfLife: "24 hours",
        sideEffects: ["Sedation", "dizziness", "akathisia", "oral hypoesthesia (numbness)", "weight gain", "EPS"],
        interactions: ["CYP1A2 inhibitors (e.g., Fluvoxamine)", "CNS depressants", "Hypertension drugs"],
        monitor: ["Sedation", "EPS", "weight gain", "oral hypoesthesia (numbness after sublingual use)", "dysphagia"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ASENAPINE 5mg Tab.", 
        active: "Asenapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "30 TAB",
        halfLife: "24 hours",
        sideEffects: ["Sedation", "dizziness", "akathisia", "oral hypoesthesia (numbness)", "weight gain", "EPS"],
        interactions: ["CYP1A2 inhibitors (e.g., Fluvoxamine)", "CNS depressants", "Hypertension drugs"],
        monitor: ["Sedation", "EPS", "weight gain", "oral hypoesthesia (numbness after sublingual use)", "dysphagia"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ASENAPINE 10mg Tab.", 
        active: "Asenapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "30 TAB",
        halfLife: "24 hours",
        sideEffects: ["Sedation", "dizziness", "akathisia", "oral hypoesthesia (numbness)", "weight gain", "EPS"],
        interactions: ["CYP1A2 inhibitors (e.g., Fluvoxamine)", "CNS depressants", "Hypertension drugs"],
        monitor: ["Sedation", "EPS", "weight gain", "oral hypoesthesia (numbness after sublingual use)", "dysphagia"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ATOMOX 18mg Cap.", 
        active: "Atomoxetine", 
        category: "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
        available: true,
        package: "30 CAP",
        halfLife: "5.2 hours",
        sideEffects: ["Decreased appetite", "insomnia", "dry mouth", "nausea", "fatigue", "increased heart rate/BP"],
        interactions: ["MAOIs", "Albuterol", "CYP2D6 inhibitors (e.g., Paroxetine, Fluoxetine)"],
        monitor: ["Symptoms of ADHD", "mood changes (suicidal ideation)", "blood pressure", "heart rate", "liver toxicity signs"],
        importantInvestigations: ["Heart rate and blood pressure (baseline and periodic)"]
    },
    { 
        name: "ATOMOX 10mg Cap.", 
        active: "Atomoxetine", 
        category: "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
        available: true,
        package: "30 CAP",
        halfLife: "5.2 hours",
        sideEffects: ["Decreased appetite", "insomnia", "dry mouth", "nausea", "fatigue", "increased heart rate/BP"],
        interactions: ["MAOIs", "Albuterol", "CYP2D6 inhibitors (e.g., Paroxetine, Fluoxetine)"],
        monitor: ["Symptoms of ADHD", "mood changes (suicidal ideation)", "blood pressure", "heart rate", "liver toxicity signs"],
        importantInvestigations: ["Heart rate and blood pressure (baseline and periodic)"]
    },
    { 
        name: "ATOMOX 25mg Cap.", 
        active: "Atomoxetine", 
        category: "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
        available: true,
        package: "30 CAP",
        halfLife: "5.2 hours",
        sideEffects: ["Decreased appetite", "insomnia", "dry mouth", "nausea", "fatigue", "increased heart rate/BP"],
        interactions: ["MAOIs", "Albuterol", "CYP2D6 inhibitors (e.g., Paroxetine, Fluoxetine)"],
        monitor: ["Symptoms of ADHD", "mood changes (suicidal ideation)", "blood pressure", "heart rate", "liver toxicity signs"],
        importantInvestigations: ["Heart rate and blood pressure (baseline and periodic)"]
    },
    { 
        name: "ATOMOX 60mg Cap.", 
        active: "Atomoxetine", 
        category: "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
        available: true,
        package: "30 CAP",
        halfLife: "5.2 hours",
        sideEffects: ["Decreased appetite", "insomnia", "dry mouth", "nausea", "fatigue", "increased heart rate/BP"],
        interactions: ["MAOIs", "Albuterol", "CYP2D6 inhibitors (e.g., Paroxetine, Fluoxetine)"],
        monitor: ["Symptoms of ADHD", "mood changes (suicidal ideation)", "blood pressure", "heart rate", "liver toxicity signs"],
        importantInvestigations: ["Heart rate and blood pressure (baseline and periodic)"]
    },
    { 
        name: "STRATTERA Cap.", 
        active: "Atomoxetine", 
        category: "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
        available: false,
        package: "28 CAP",
        halfLife: "5.2 hours",
        sideEffects: ["Decreased appetite", "insomnia", "dry mouth", "nausea", "fatigue", "increased heart rate/BP"],
        interactions: ["MAOIs", "Albuterol", "CYP2D6 inhibitors (e.g., Paroxetine, Fluoxetine)"],
        monitor: ["Symptoms of ADHD", "mood changes (suicidal ideation)", "blood pressure", "heart rate", "liver toxicity signs"],
        importantInvestigations: ["Heart rate and blood pressure (baseline and periodic)"]
    },
    { 
        name: "COGINTOL 2mg Tab.", 
        active: "Benztropine", 
        category: "Anticholinergic (Anti-Parkinson's)",
        available: true,
        package: "20 TAB",
        halfLife: "18-36 hours",
        sideEffects: ["Dry mouth", "blurred vision", "constipation", "urinary retention", "confusion (in elderly)"],
        interactions: ["Other anticholinergics", "CNS depressants"],
        monitor: ["Anticholinergic side effects (dry mouth, blurred vision, constipation, urinary retention)", "confusion", "tachycardia"],
        importantInvestigations: ["None routine; caution in glaucoma, prostate issues"]
    },
    { 
        name: "ACHTENON 2mg Tab.", 
        active: "Biperidene", 
        category: "Anticholinergic (Anti-Parkinson's)",
        available: true,
        package: "30 TAB",
        halfLife: "~20 hours",
        sideEffects: ["Dry mouth", "blurred vision", "constipation", "urinary retention", "dizziness", "confusion"],
        interactions: ["Other anticholinergics", "CNS depressants"],
        monitor: ["Anticholinergic effects", "sedation", "confusion", "tachycardia", "EPS improvement"],
        importantInvestigations: ["None routine; caution in glaucoma, prostate issues"]
    },
    { 
        name: "NEOPRESSION 2mg Tab.", 
        active: "Brexpiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "20 TAB",
        halfLife: "91 hours",
        sideEffects: ["Weight gain", "akathisia", "headache", "insomnia", "anxiety"],
        interactions: ["CYP3A4/2D6 inducers/inhibitors (e.g., Carbamazepine/Paroxetine)"],
        monitor: ["EPS", "akathisia", "sedation", "weight gain", "mood stabilization"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "NEOPRESSION 4mg Tab.", 
        active: "Brexpiprazole", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "20 TAB",
        halfLife: "91 hours",
        sideEffects: ["Weight gain", "akathisia", "headache", "insomnia", "anxiety"],
        interactions: ["CYP3A4/2D6 inducers/inhibitors (e.g., Carbamazepine/Paroxetine)"],
        monitor: ["EPS", "akathisia", "sedation", "weight gain", "mood stabilization"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "WELLINTA SR 150mg Tab.", 
        active: "Bupropion", 
        category: "NDRI (Antidepressant, Smoking Cessation)",
        available: true,
        package: "30 TAB",
        halfLife: "10-14 hours",
        sideEffects: ["Insomnia", "dry mouth", "headache", "nausea", "tremor", "anxiety", "lowers seizure threshold"],
        interactions: ["MAOIs", "drugs that lower seizure threshold", "CYP2D6 substrates (e.g., Tamoxifen)"],
        monitor: ["Seizure threshold (seizure activity)", "insomnia", "agitation", "mood changes", "suicidal ideation"],
        importantInvestigations: ["None routine for mental health use"]
    },
    { 
        name: "WELLBUTRIN SR 150mg Tab.", 
        active: "Bupropion", 
        category: "NDRI (Antidepressant, Smoking Cessation)",
        available: false,
        package: "30 TAB",
        halfLife: "10-14 hours",
        sideEffects: ["Insomnia", "dry mouth", "headache", "nausea", "tremor", "anxiety", "lowers seizure threshold"],
        interactions: ["MAOIs", "drugs that lower seizure threshold", "CYP2D6 substrates (e.g., Tamoxifen)"],
        monitor: ["Seizure threshold (seizure activity)", "insomnia", "agitation", "mood changes", "suicidal ideation"],
        importantInvestigations: ["None routine for mental health use"]
    },
    { 
        name: "SINEMET 25/250mg Tab.", 
        active: "Carbidopa/Levodopa", 
        category: "Dopamine Precursor (Anti-Parkinson's)",
        available: true,
        package: "20 TAB",
        halfLife: "1-3 hours",
        sideEffects: ["Nausea", "dizziness", "orthostatic hypotension", "dyskinesias", "confusion"],
        interactions: ["MAOIs", "Antipsychotics", "Iron supplements", "High-protein meals"],
        monitor: ["Motor fluctuations (on/off periods)", "dyskinesias", "hallucinations", "orthostatic hypotension", "impulse control disorders"],
        importantInvestigations: ["None routine; monitor for symptoms of dyskinesia"]
    },
    { 
        name: "REAGILA 1.5mg Cap.", 
        active: "Cariprazine", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "28 CAP",
        halfLife: "2-4 days",
        sideEffects: ["Akathisia", "insomnia", "headache", "constipation", "nausea", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Carbamazepine)"],
        monitor: ["EPS", "akathisia", "sedation", "mood changes", "weight gain", "QT interval (clinical monitoring for arrhythmia symptoms)"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "REAGILA 3mg Cap.", 
        active: "Cariprazine", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "28 CAP",
        halfLife: "2-4 days",
        sideEffects: ["Akathisia", "insomnia", "headache", "constipation", "nausea", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Carbamazepine)"],
        monitor: ["EPS", "akathisia", "sedation", "mood changes", "weight gain", "QT interval (clinical monitoring for arrhythmia symptoms)"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "REAGILA 4.5mg Cap.", 
        active: "Cariprazine", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "28 CAP",
        halfLife: "2-4 days",
        sideEffects: ["Akathisia", "insomnia", "headache", "constipation", "nausea", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Carbamazepine)"],
        monitor: ["EPS", "akathisia", "sedation", "mood changes", "weight gain", "QT interval (clinical monitoring for arrhythmia symptoms)"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "REAGILA 6mg Cap.", 
        active: "Cariprazine", 
        category: "Atypical Antipsychotic (3rd Gen)",
        available: true,
        package: "28 CAP",
        halfLife: "2-4 days",
        sideEffects: ["Akathisia", "insomnia", "headache", "constipation", "nausea", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Carbamazepine)"],
        monitor: ["EPS", "akathisia", "sedation", "mood changes", "weight gain", "QT interval (clinical monitoring for arrhythmia symptoms)"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "LIBRAX 30 tablets Tab.", 
        active: "Chlordiazepoxide + Clidinium Bromide", 
        category: "Benzodiazepine + Anticholinergic (Anxiolytic, GI)",
        available: true,
        package: "30 TAB",
        halfLife: "5-30 hours",
        sideEffects: ["Sedation", "dizziness", "dry mouth", "blurred vision", "constipation", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants", "Other anticholinergics"],
        monitor: ["Sedation", "cognitive impairment", "anticholinergic effects", "dependence risk", "constipation"],
        importantInvestigations: ["None routine; caution in elderly"]
    },
    { 
        name: "NEURAZINE 100mg Tab.", 
        active: "Chlorpromazine", 
        category: "Typical Antipsychotic (1st Gen, Phenothiazine)",
        available: true,
        package: "20 TAB",
        halfLife: "8-30 hours",
        sideEffects: ["Sedation", "orthostatic hypotension", "anticholinergic effects", "EPS", "tardive dyskinesia"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc"],
        monitor: ["EPS", "sedation", "orthostatic hypotension", "photosensitivity", "skin reactions"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "DEPRAM 20mg Tab.", 
        active: "Citalopram", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "20 TAB",
        halfLife: "33 hours",
        sideEffects: ["Nausea", "insomnia", "somnolence", "dry mouth", "diarrhea", "increased sweating"],
        interactions: ["MAOIs", "drugs that prolong QTc (e.g., Pimozide)", "CYP2C19 inhibitors"],
        monitor: ["QT prolongation (symptoms: palpitations, syncope)", "mood changes", "suicidal ideation", "serotonin syndrome"],
        importantInvestigations: ["ECG (QTc interval, esp. with high dose or cardiac risk)"]
    },
    { 
        name: "DEPRAM 40mg Tab.", 
        active: "Citalopram", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "10 TAB",
        halfLife: "33 hours",
        sideEffects: ["Nausea", "insomnia", "somnolence", "dry mouth", "diarrhea", "increased sweating"],
        interactions: ["MAOIs", "drugs that prolong QTc (e.g., Pimozide)", "CYP2C19 inhibitors"],
        monitor: ["QT prolongation (symptoms: palpitations, syncope)", "mood changes", "suicidal ideation", "serotonin syndrome"],
        importantInvestigations: ["ECG (QTc interval, esp. with high dose or cardiac risk)"]
    },
    { 
        name: "ANAFRANIL 25mg Tab.", 
        active: "Clomipramine", 
        category: "Tricyclic Antidepressant (TCA)",
        available: true,
        package: "30 TAB",
        halfLife: "30-60 hours",
        sideEffects: ["Sedation", "dry mouth", "constipation", "blurred vision", "orthostatic hypotension", "weight gain"],
        interactions: ["MAOIs", "SSRIs", "Anticholinergics", "CNS depressants", "Drugs that prolong QTc"],
        monitor: ["Sedation", "anticholinergic effects", "mood changes", "suicidal ideation", "seizure threshold"],
        importantInvestigations: ["ECG (QTc interval at higher doses)", "baseline in cardiac disease"]
    },
    { 
        name: "ANAFRANIL SR 75mg Tab.", 
        active: "Clomipramine", 
        category: "Tricyclic Antidepressant (TCA)",
        available: true,
        package: "20 TAB",
        halfLife: "30-60 hours",
        sideEffects: ["Sedation", "dry mouth", "constipation", "blurred vision", "orthostatic hypotension", "weight gain"],
        interactions: ["MAOIs", "SSRIs", "Anticholinergics", "CNS depressants", "Drugs that prolong QTc"],
        monitor: ["Sedation", "anticholinergic effects", "mood changes", "suicidal ideation", "seizure threshold"],
        importantInvestigations: ["ECG (QTc interval at higher doses)", "baseline in cardiac disease"]
    },
    { 
        name: "APETRYL 0.5mg Tab.", 
        active: "Clonazepam", 
        category: "Benzodiazepine (Anticonvulsant, Anxiolytic)",
        available: true,
        package: "50 TAB",
        halfLife: "18-50 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "coordination problems", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants"],
        monitor: ["Sedation", "ataxia", "cognitive impairment", "dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "APETRYL 2mg Tab.", 
        active: "Clonazepam", 
        category: "Benzodiazepine (Anticonvulsant, Anxiolytic)",
        available: true,
        package: "30 TAB",
        halfLife: "18-50 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "coordination problems", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants"],
        monitor: ["Sedation", "ataxia", "cognitive impairment", "dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "AMOTRIL 0.5mg Tab.", 
        active: "Clonazepam", 
        category: "Benzodiazepine (Anticonvulsant, Anxiolytic)",
        available: false,
        package: "30 TAB",
        halfLife: "18-50 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "coordination problems", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants"],
        monitor: ["Sedation", "ataxia", "cognitive impairment", "dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "AMOTRIL 2mg Tab.", 
        active: "Clonazepam", 
        category: "Benzodiazepine (Anticonvulsant, Anxiolytic)",
        available: true,
        package: "30 TAB",
        halfLife: "18-50 hours",
        sideEffects: ["Sedation", "dizziness", "fatigue", "ataxia", "coordination problems", "dependence"],
        interactions: ["Alcohol", "Opioids", "Other CNS depressants"],
        monitor: ["Sedation", "ataxia", "cognitive impairment", "dependence", "withdrawal symptoms"],
        importantInvestigations: ["None routine; caution in hepatic impairment"]
    },
    { 
        name: "CLOZAPEX 100mg Tab.", 
        active: "Clozapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "50 TAB",
        halfLife: "12 hours",
        sideEffects: ["Sedation", "sialorrhea (excess saliva)", "weight gain", "tachycardia", "constipation", "agranulocytosis"],
        interactions: ["Bone marrow suppressants", "CNS depressants", "CYP1A2/2D6 inhibitors/inducers"],
        monitor: ["Fever", "sore throat", "lethargy (signs of agranulocytosis)", "sedation", "sialorrhea", "seizures", "constipation", "metabolic changes"],
        importantInvestigations: ["Absolute Neutrophil Count (ANC) - Weekly then monthly", "Weight", "ECG", "LFTs"]
    },
    { 
        name: "CLOZAPEX 25mg Tab.", 
        active: "Clozapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "50 TAB",
        halfLife: "12 hours",
        sideEffects: ["Sedation", "sialorrhea (excess saliva)", "weight gain", "tachycardia", "constipation", "agranulocytosis"],
        interactions: ["Bone marrow suppressants", "CNS depressants", "CYP1A2/2D6 inhibitors/inducers"],
        monitor: ["Fever", "sore throat", "lethargy (signs of agranulocytosis)", "sedation", "sialorrhea", "seizures", "constipation", "metabolic changes"],
        importantInvestigations: ["Absolute Neutrophil Count (ANC) - Weekly then monthly", "Weight", "ECG", "LFTs"]
    },
    { 
        name: "LEPONEX 25mg Tab.", 
        active: "Clozapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "50 TAB",
        halfLife: "12 hours",
        sideEffects: ["Sedation", "sialorrhea (excess saliva)", "weight gain", "tachycardia", "constipation", "agranulocytosis"],
        interactions: ["Bone marrow suppressants", "CNS depressants", "CYP1A2/2D6 inhibitors/inducers"],
        monitor: ["Fever", "sore throat", "lethargy (signs of agranulocytosis)", "sedation", "sialorrhea", "seizures", "constipation", "metabolic changes"],
        importantInvestigations: ["Absolute Neutrophil Count (ANC) - Weekly then monthly", "Weight", "ECG", "LFTs"]
    },
    { 
        name: "LEPONEX 100mg Tab.", 
        active: "Clozapine", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "50 TAB",
        halfLife: "12 hours",
        sideEffects: ["Sedation", "sialorrhea (excess saliva)", "weight gain", "tachycardia", "constipation", "agranulocytosis"],
        interactions: ["Bone marrow suppressants", "CNS depressants", "CYP1A2/2D6 inhibitors/inducers"],
        monitor: ["Fever", "sore throat", "lethargy (signs of agranulocytosis)", "sedation", "sialorrhea", "seizures", "constipation", "metabolic changes"],
        importantInvestigations: ["Absolute Neutrophil Count (ANC) - Weekly then monthly", "Weight", "ECG", "LFTs"]
    },
    { 
        name: "VENLATROPE 50mg Tab.", 
        active: "Desvenlafaxine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "11 hours",
        sideEffects: ["Nausea", "headache", "dry mouth", "insomnia", "hyperhidrosis (sweating)", "constipation"],
        interactions: ["MAOIs", "Serotonergic drugs (risk of serotonin syndrome)", "NSAIDs/Aspirin (bleeding risk)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)"]
    },
    { 
        name: "PRISTIQ 50MG Tab", 
        active: "Desvenlafaxine", 
        category: "SNRI (Antidepressant)",
        available: false,
        package: "30 TAB",
        halfLife: "11 hours",
        sideEffects: ["Nausea", "headache", "dry mouth", "insomnia", "hyperhidrosis (sweating)", "constipation"],
        interactions: ["MAOIs", "Serotonergic drugs (risk of serotonin syndrome)", "NSAIDs/Aspirin (bleeding risk)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)"]
    },
    { 
        name: "DIVAKOTE 500mg ER Tab.", 
        active: "Divalproex", 
        category: "Anticonvulsant (Mood Stabilizer)",
        available: true,
        package: "20 tab",
        halfLife: "9-16 hours",
        sideEffects: ["Nausea", "sedation", "tremor", "weight gain", "hair loss", "thrombocytopenia", "liver toxicity"],
        interactions: ["Other CNS depressants", "Lamotrigine", "Aspirin/Warfarin", "CYP2C9/UGT inhibitors"],
        monitor: ["Sedation", "tremor", "weight gain", "hair loss", "pancreatitis symptoms (abdominal pain)", "hepatotoxicity signs"],
        importantInvestigations: ["LFTs", "CBC (platelets)", "Valproic Acid level (trough)"]
    },
    { 
        name: "ARICEPT 10mg Tab.", 
        active: "Donepezil", 
        category: "Acetylcholinesterase Inhibitor (For Alzheimer's)",
        available: false,
        package: "14 tab",
        halfLife: "70 hours",
        sideEffects: ["Nausea", "diarrhea", "insomnia", "vomiting", "muscle cramps", "fatigue"],
        interactions: ["Anticholinergics", "Cholinergic agents", "CYP2D6/3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["GI tolerability (nausea, vomiting)", "bradycardia", "syncope", "sleep disturbances", "muscle cramps"],
        importantInvestigations: ["None routine; monitor for weight loss, bradycardia"]
    },
    { 
        name: "ARICEPT 5mg Tab.", 
        active: "Donepezil", 
        category: "Acetylcholinesterase Inhibitor (For Alzheimer's)",
        available: true,
        package: "14 tab",
        halfLife: "70 hours",
        sideEffects: ["Nausea", "diarrhea", "insomnia", "vomiting", "muscle cramps", "fatigue"],
        interactions: ["Anticholinergics", "Cholinergic agents", "CYP2D6/3A4 inhibitors (e.g., Ketoconazole)"],
        monitor: ["GI tolerability (nausea, vomiting)", "bradycardia", "syncope", "sleep disturbances", "muscle cramps"],
        importantInvestigations: ["None routine; monitor for weight loss, bradycardia"]
    },
    { 
        name: "CYMBATEX 30mg Cap.", 
        active: "Duloxetine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "30 CAP",
        halfLife: "12 hours",
        sideEffects: ["Nausea", "dry mouth", "fatigue", "insomnia", "constipation", "dizziness", "increased sweating"],
        interactions: ["MAOIs", "Serotonergic drugs", "NSAIDs/Aspirin (bleeding risk)", "CYP1A2 inhibitors (e.g., Fluvoxamine)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)", "LFTs"]
    },
    { 
        name: "CYMBATEX 60mg Cap.", 
        active: "Duloxetine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "30 CAP",
        halfLife: "12 hours",
        sideEffects: ["Nausea", "dry mouth", "fatigue", "insomnia", "constipation", "dizziness", "increased sweating"],
        interactions: ["MAOIs", "Serotonergic drugs", "NSAIDs/Aspirin (bleeding risk)", "CYP1A2 inhibitors (e.g., Fluvoxamine)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)", "LFTs"]
    },
    { 
        name: "CYMBALTA 30mg Cap.", 
        active: "Duloxetine", 
        category: "SNRI (Antidepressant)",
        available: false,
        package: "28 CAP",
        halfLife: "12 hours",
        sideEffects: ["Nausea", "dry mouth", "fatigue", "insomnia", "constipation", "dizziness", "increased sweating"],
        interactions: ["MAOIs", "Serotonergic drugs", "NSAIDs/Aspirin (bleeding risk)", "CYP1A2 inhibitors (e.g., Fluvoxamine)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)", "LFTs"]
    },
    { 
        name: "CYMBALTA 60mg Cap.", 
        active: "Duloxetine", 
        category: "SNRI (Antidepressant)",
        available: false,
        package: "28 CAP",
        halfLife: "12 hours",
        sideEffects: ["Nausea", "dry mouth", "fatigue", "insomnia", "constipation", "dizziness", "increased sweating"],
        interactions: ["MAOIs", "Serotonergic drugs", "NSAIDs/Aspirin (bleeding risk)", "CYP1A2 inhibitors (e.g., Fluvoxamine)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "serotonin syndrome", "withdrawal symptoms"],
        importantInvestigations: ["Blood pressure (baseline and periodic)", "LFTs"]
    },
    { 
        name: "CIPRA-PRO 10mg Tab.", 
        active: "Escitalopram", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "27-32 hours",
        sideEffects: ["Nausea", "insomnia", "somnolence", "increased sweating", "fatigue", "ejaculation disorder"],
        interactions: ["MAOIs", "drugs that prolong QTc (e.g., Pimozide)", "Serotonergic drugs"],
        monitor: ["Mood changes", "suicidal ideation", "QT prolongation (palpitations, dizziness)", "serotonin syndrome"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "PHILOZAC 20mg Cap.", 
        active: "Fluoxetine", 
        category: "SSRI (Antidepressant)",
        available: false,
        package: "30 CAP",
        halfLife: "1-3 days",
        sideEffects: ["Nausea", "headache", "insomnia", "anxiety", "nervousness", "sexual dysfunction", "fatigue"],
        interactions: ["MAOIs", "Serotonergic drugs", "CYP2D6 substrates (e.g., Tamoxifen, Codeine)", "Triptans"],
        monitor: ["Mood changes", "suicidal ideation", "activation (insomnia, agitation)", "serotonin syndrome", "weight changes"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "PROZAC 20mg Cap.", 
        active: "Fluoxetine", 
        category: "SSRI (Antidepressant)",
        available: false,
        package: "14 cap",
        halfLife: "1-3 days",
        sideEffects: ["Nausea", "headache", "insomnia", "anxiety", "nervousness", "sexual dysfunction", "fatigue"],
        interactions: ["MAOIs", "Serotonergic drugs", "CYP2D6 substrates (e.g., Tamoxifen, Codeine)", "Triptans"],
        monitor: ["Mood changes", "suicidal ideation", "activation (insomnia, agitation)", "serotonin syndrome", "weight changes"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "DEPREBAN 20mg Cap.", 
        active: "Fluoxetine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "10 cap",
        halfLife: "1-3 days",
        sideEffects: ["Nausea", "headache", "insomnia", "anxiety", "nervousness", "sexual dysfunction", "fatigue"],
        interactions: ["MAOIs", "Serotonergic drugs", "CYP2D6 substrates (e.g., Tamoxifen, Codeine)", "Triptans"],
        monitor: ["Mood changes", "suicidal ideation", "activation (insomnia, agitation)", "serotonin syndrome", "weight changes"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "FLUANXOL DEPOT 40mg/2ml Amp.", 
        active: "Flupentixol", 
        category: "Typical Antipsychotic (1st Gen, Thioxanthene)",
        available: true,
        package: "10 AMP",
        halfLife: "30 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "akathisia", "insomnia", "sedation", "anticholinergic effects"],
        interactions: ["Levodopa", "CNS depressants", "Drugs that prolong QTc"],
        monitor: ["EPS", "akathisia", "sedation", "depression activation", "withdrawal symptoms"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "FAVERIN 100mg Tab.", 
        active: "Fluvoxamine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "15 hours",
        sideEffects: ["Nausea", "somnolence", "headache", "insomnia", "dizziness", "sexual dysfunction", "asthenia"],
        interactions: ["MAOIs", "Serotonergic drugs", "Strong CYP1A2/2C19/3A4 inhibitor (many interactions: Theophylline, Clozapine, Warfarin)"],
        monitor: ["Sedation", "GI upset", "insomnia", "mood changes", "serotonin syndrome"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "FAVERIN 50mg Tab.", 
        active: "Fluvoxamine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "60 tab",
        halfLife: "15 hours",
        sideEffects: ["Nausea", "somnolence", "headache", "insomnia", "dizziness", "sexual dysfunction", "asthenia"],
        interactions: ["MAOIs", "Serotonergic drugs", "Strong CYP1A2/2C19/3A4 inhibitor (many interactions: Theophylline, Clozapine, Warfarin)"],
        monitor: ["Sedation", "GI upset", "insomnia", "mood changes", "serotonin syndrome"],
        importantInvestigations: ["None routine for standard doses"]
    },
    { 
        name: "HALDOL DECANOAS 50mg Amp.", 
        active: "Haloperidol", 
        category: "Typical Antipsychotic (1st Gen, Butyrophenone)",
        available: false,
        package: "1 AMP",
        halfLife: "18-52 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "sedation", "restlessness (akathisia)", "hyperprolactinemia", "QTc prolongation"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Amiodarone)", "CYP3A4/2D6 inhibitors"],
        monitor: ["EPS", "sedation", "QT prolongation (palpitations, syncope)", "neuroleptic malignant syndrome (NMS)"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "HALOPERIDOL RETARD 50mg Amp.", 
        active: "Haloperidol", 
        category: "Typical Antipsychotic (1st Gen, Butyrophenone)",
        available: false,
        package: "1 AMP",
        halfLife: "18-52 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "sedation", "restlessness (akathisia)", "hyperprolactinemia", "QTc prolongation"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Amiodarone)", "CYP3A4/2D6 inhibitors"],
        monitor: ["EPS", "sedation", "QT prolongation (palpitations, syncope)", "neuroleptic malignant syndrome (NMS)"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "HALOPERIDOL 5mg/ml Amp.", 
        active: "Haloperidol", 
        category: "Typical Antipsychotic (1st Gen, Butyrophenone)",
        available: true,
        package: "5 AMP",
        halfLife: "18-52 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "sedation", "restlessness (akathisia)", "hyperprolactinemia", "QTc prolongation"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Amiodarone)", "CYP3A4/2D6 inhibitors"],
        monitor: ["EPS", "sedation", "QT prolongation (palpitations, syncope)", "neuroleptic malignant syndrome (NMS)"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "HALONACE 1.5mg Tab.", 
        active: "Haloperidol", 
        category: "Typical Antipsychotic (1st Gen, Butyrophenone)",
        available: true,
        package: "10 TAB",
        halfLife: "18-52 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "sedation", "restlessness (akathisia)", "hyperprolactinemia", "QTc prolongation"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Amiodarone)", "CYP3A4/2D6 inhibitors"],
        monitor: ["EPS", "sedation", "QT prolongation (palpitations, syncope)", "neuroleptic malignant syndrome (NMS)"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "HALONACE 5mg Tab.", 
        active: "Haloperidol", 
        category: "Typical Antipsychotic (1st Gen, Butyrophenone)",
        available: true,
        package: "10 TAB",
        halfLife: "18-52 hours",
        sideEffects: ["Extrapyramidal symptoms (EPS)", "sedation", "restlessness (akathisia)", "hyperprolactinemia", "QTc prolongation"],
        interactions: ["CNS depressants", "Levodopa", "Drugs that prolong QTc (e.g., Amiodarone)", "CYP3A4/2D6 inhibitors"],
        monitor: ["EPS", "sedation", "QT prolongation (palpitations, syncope)", "neuroleptic malignant syndrome (NMS)"],
        importantInvestigations: ["ECG (QTc interval)", "Prolactin level (if symptomatic)"]
    },
    { 
        name: "LAMICTAL 100mg Tab.", 
        active: "Lamotrigine", 
        category: "Anticonvulsant (Mood Stabilizer)",
        available: true,
        package: "30 TAB",
        halfLife: "14-18 hours",
        sideEffects: ["Dizziness", "headache", "diplopia (double vision)", "ataxia", "nausea", "rash (SJS/TEN risk)"],
        interactions: ["Valproate (increases lamotrigine level)", "Carbamazepine/Phenytoin (decrease level)", "Hormonal Contraceptives (may decrease level)"],
        monitor: ["Rash (especially early signs of SJS/TEN)", "mood changes", "coordination"],
        importantInvestigations: ["None routine; monitor for rash meticulously"]
    },
    { 
        name: "LAMICTAL 25mg Tab.", 
        active: "Lamotrigine", 
        category: "Anticonvulsant (Mood Stabilizer)",
        available: true,
        package: "30 TAB",
        halfLife: "14-18 hours",
        sideEffects: ["Dizziness", "headache", "diplopia (double vision)", "ataxia", "nausea", "rash (SJS/TEN risk)"],
        interactions: ["Valproate (increases lamotrigine level)", "Carbamazepine/Phenytoin (decrease level)", "Hormonal Contraceptives (may decrease level)"],
        monitor: ["Rash (especially early signs of SJS/TEN)", "mood changes", "coordination"],
        importantInvestigations: ["None routine; monitor for rash meticulously"]
    },
    { 
        name: "LAMICTAL 50mg Tab.", 
        active: "Lamotrigine", 
        category: "Anticonvulsant (Mood Stabilizer)",
        available: true,
        package: "30 TAB",
        halfLife: "14-18 hours",
        sideEffects: ["Dizziness", "headache", "diplopia (double vision)", "ataxia", "nausea", "rash (SJS/TEN risk)"],
        interactions: ["Valproate (increases lamotrigine level)", "Carbamazepine/Phenytoin (decrease level)", "Hormonal Contraceptives (may decrease level)"],
        monitor: ["Rash (especially early signs of SJS/TEN)", "mood changes", "coordination"],
        importantInvestigations: ["None routine; monitor for rash meticulously"]
    },
    { 
        name: "PRIANIL 400mg Tab.", 
        active: "Lithium", 
        category: "Mood Stabilizer",
        available: false,
        package: "30 TAB",
        halfLife: "18-30 hours",
        sideEffects: ["Nausea", "diarrhea", "tremor", "polyuria", "polydipsia", "weight gain", "hypothyroidism"],
        interactions: ["NSAIDs", "ACEi/ARBs", "Diuretics (can increase levels and toxicity)", "Theophylline", "Caffeine (can decrease levels)"],
        monitor: ["Thirst", "polyuria", "tremor", "weight gain", "cognitive dulling", "diarrhea", "vomiting"],
        importantInvestigations: ["Lithium level", "Renal function (Cr)", "Thyroid Function Tests (TSH)", "Electrolytes", "ECG (if indicated)"]
    },
    { 
        name: "LITHIOMOD 400MG Tab", 
        active: "Lithium", 
        category: "Mood Stabilizer",
        available: true,
        package: "30 TAB",
        halfLife: "18-30 hours",
        sideEffects: ["Nausea", "diarrhea", "tremor", "polyuria", "polydipsia", "weight gain", "hypothyroidism"],
        interactions: ["NSAIDs", "ACEi/ARBs", "Diuretics (can increase levels and toxicity)", "Theophylline", "Caffeine (can decrease levels)"],
        monitor: ["Thirst", "polyuria", "tremor", "weight gain", "cognitive dulling", "diarrhea", "vomiting"],
        importantInvestigations: ["Lithium level", "Renal function (Cr)", "Thyroid Function Tests (TSH)", "Electrolytes", "ECG (if indicated)"]
    },
    { 
        name: "ELBALURAN 20mg Tab.", 
        active: "Lurasidone", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "30 TAB",
        halfLife: "18 hours",
        sideEffects: ["Somnolence (sleepiness)", "akathisia", "nausea", "parkinsonism", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Rifampin)", "Grapefruit juice"],
        monitor: ["Sedation", "EPS", "weight gain", "mood changes", "QT prolongation symptoms"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "ELBALURAN 60mg Tab.", 
        active: "Lurasidone", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: false,
        package: "30 TAB",
        halfLife: "18 hours",
        sideEffects: ["Somnolence (sleepiness)", "akathisia", "nausea", "parkinsonism", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Rifampin)", "Grapefruit juice"],
        monitor: ["Sedation", "EPS", "weight gain", "mood changes", "QT prolongation symptoms"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "TUDASIDONE 40mg Tab.", 
        active: "Lurasidone", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "20 TAB",
        halfLife: "18 hours",
        sideEffects: ["Somnolence (sleepiness)", "akathisia", "nausea", "parkinsonism", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Rifampin)", "Grapefruit juice"],
        monitor: ["Sedation", "EPS", "weight gain", "mood changes", "QT prolongation symptoms"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "TUDASIDONE 80mg Tab.", 
        active: "Lurasidone", 
        category: "Atypical Antipsychotic (2nd Gen)",
        available: true,
        package: "20 TAB",
        halfLife: "18 hours",
        sideEffects: ["Somnolence (sleepiness)", "akathisia", "nausea", "parkinsonism", "restlessness"],
        interactions: ["Strong CYP3A4 inhibitors/inducers (e.g., Ketoconazole/Rifampin)", "Grapefruit juice"],
        monitor: ["Sedation", "EPS", "weight gain", "mood changes", "QT prolongation symptoms"],
        importantInvestigations: ["Fasting Blood Glucose", "Lipids (baseline and periodic)"]
    },
    { 
        name: "MELATONIN 5mg Cap.", 
        active: "Melatonin", 
        category: "Hormone (For Sleep)",
        available: true,
        package: "30 TAB",
        halfLife: "20-50 min",
        sideEffects: ["Headache", "dizziness", "nausea", "drowsiness"],
        interactions: ["Anticoagulants (e.g., Warfarin)", "CNS depressants", "Fluvoxamine (increases levels)", "Nifedipine"],
        monitor: ["Drowsiness", "sleep quality", "morning grogginess", "dream changes"],
        importantInvestigations: ["None routine"]
    },
    { 
        name: "EBIXA 10mg Tab.", 
        active: "Memantine", 
        category: "NMDA Receptor Antagonist (For Alzheimer's)",
        available: false,
        package: "28 TAB",
        halfLife: "60-80 hours",
        sideEffects: ["Dizziness", "headache", "constipation", "confusion", "hypertension", "vomiting"],
        interactions: ["Urinary alkalinizers (e.g., Carbonic Anhydrase Inhibitors)", "NMDA antagonists (e.g., Amantadine, Dextromethorphan)"],
        monitor: ["Cognitive function", "behavioral changes", "dizziness", "headache"],
        importantInvestigations: ["None routine; caution in severe renal impairment"]
    },
    { 
        name: "MEMEXA 10mg Tab.", 
        active: "Memantine", 
        category: "NMDA Receptor Antagonist (For Alzheimer's)",
        available: true,
        package: "30 TAB",
        halfLife: "60-80 hours",
        sideEffects: ["Dizziness", "headache", "constipation", "confusion", "hypertension", "vomiting"],
        interactions: ["Urinary alkalinizers (e.g., Carbonic Anhydrase Inhibitors)", "NMDA antagonists (e.g., Amantadine, Dextromethorphan)"],
        monitor: ["Cognitive function", "behavioral changes", "dizziness", "headache"],
        importantInvestigations: ["None routine; caution in severe renal impairment"]
    },
    { 
        name: "MIDAZOLAM 15mg Amp.", 
        active: "Midazolam", 
        category: "Benzodiazepine (Sedative-Hypnotic)",
        available: true,
        package: "1 AMP",
        halfLife: "1.5-2.5 hours",
        sideEffects: ["Respiratory depression", "sedation", "hypotension", "paradoxical reactions (agitation)"],
        interactions: ["CNS depressants (alcohol, opioids, other sedatives)", "CYP3A4 inhibitors (e.g., ketoconazole)"],
        monitor: ["Sedation level", "respiratory depression", "airway patency", "recovery time"],
        importantInvestigations: ["Monitor for respiratory depression, especially with IV use."]
    },
    { 
        name: "MIDAZOLAM 5mg Amp.", 
        active: "Midazolam", 
        category: "Benzodiazepine (Sedative-Hypnotic)",
        available: true,
        package: "1 AMP",
        halfLife: "1.5-2.5 hours",
        sideEffects: ["Respiratory depression", "sedation", "hypotension", "paradoxical reactions (agitation)"],
        interactions: ["CNS depressants (alcohol, opioids, other sedatives)", "CYP3A4 inhibitors (e.g., ketoconazole)"],
        monitor: ["Sedation level", "respiratory depression", "airway patency", "recovery time"],
        importantInvestigations: ["Monitor for respiratory depression, especially with IV use."]
    },
    { 
        name: "DORMICUM AMP", 
        active: "Midazolam", 
        category: "Benzodiazepine (Sedative-Hypnotic)",
        available: false,
        package: "1 AMP",
        halfLife: "1.5-2.5 hours",
        sideEffects: ["Respiratory depression", "sedation", "hypotension", "paradoxical reactions (agitation)"],
        interactions: ["CNS depressants (alcohol, opioids, other sedatives)", "CYP3A4 inhibitors (e.g., ketoconazole)"],
        monitor: ["Sedation level", "respiratory depression", "airway patency", "recovery time"],
        importantInvestigations: ["Monitor for respiratory depression, especially with IV use."]
    },
    { 
        name: "MIRTIMASH 30mg Tab.", 
        active: "Mirtazapine", 
        category: "NaSSA (Atypical Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "20-40 hours",
        sideEffects: ["Sedation", "weight gain", "increased appetite", "dry mouth", "dizziness"],
        interactions: ["CNS depressants (alcohol, benzodiazepines)", "MAOIs (contraindicated)"],
        monitor: ["Sedation", "weight gain", "appetite", "mood changes", "suicidal ideation"],
        importantInvestigations: ["Monitor weight and cholesterol. Sedation is often dose-limiting."]
    },
    { 
        name: "REMERON 30mg Tab.", 
        active: "Mirtazapine", 
        category: "NaSSA (Atypical Antidepressant)",
        available: true,
        package: "10 TAB",
        halfLife: "20-40 hours",
        sideEffects: ["Sedation", "weight gain", "increased appetite", "dry mouth", "dizziness"],
        interactions: ["CNS depressants (alcohol, benzodiazepines)", "MAOIs (contraindicated)"],
        monitor: ["Sedation", "weight gain", "appetite", "mood changes", "suicidal ideation"],
        importantInvestigations: ["Monitor weight and cholesterol. Sedation is often dose-limiting."]
    },
    { 
        name: "BRAVAMAX 200mg Tab.", 
        active: "Modafinil", 
        category: "Wakefulness-Promoting Agent",
        available: true,
        package: "10 TAB",
        halfLife: "12-15 hours",
        sideEffects: ["Headache", "nausea", "nervousness", "insomnia", "anxiety"],
        interactions: ["CYP3A4 inducers/inhibitors (e.g., carbamazepine, ketoconazole)", "hormonal contraceptives (reduced efficacy)"],
        monitor: ["Sleep patterns", "blood pressure", "psychiatric symptoms (anxiety, mania)", "rash"],
        importantInvestigations: ["Monitor for signs of misuse or abuse. Reduces efficacy of birth control."]
    },
    { 
        name: "ANARCOL 50mg Tab.", 
        active: "Naltrexone", 
        category: "Opioid Antagonist",
        available: false,
        package: "30 TAB",
        halfLife: "4 hours",
        sideEffects: ["Nausea", "headache", "dizziness", "insomnia", "anxiety"],
        interactions: ["Opioid analgesics (will block effect)", "hepatotoxic drugs"],
        monitor: ["Psychosocial functioning", "craving reduction", "opioid withdrawal if used in detox"],
        importantInvestigations: ["Patient must be opioid-free before initiation to avoid precipitated withdrawal."]
    },
    { 
        name: "MORFBLOCK 50mg Tab", 
        active: "Naltrexone", 
        category: "Opioid Antagonist",
        available: false,
        package: "10 TAB",
        halfLife: "4 hours",
        sideEffects: ["Nausea", "headache", "dizziness", "insomnia", "anxiety"],
        interactions: ["Opioid analgesics (will block effect)", "hepatotoxic drugs"],
        monitor: ["Psychosocial functioning", "craving reduction", "opioid withdrawal if used in detox"],
        importantInvestigations: ["Patient must be opioid-free before initiation to avoid precipitated withdrawal."]
    },
    { 
        name: "OLAPEX 10mg Tab.", 
        active: "Olanzapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "21-54 hours",
        sideEffects: ["Weight gain", "sedation", "hyperlipidemia", "hyperglycemia", "dizziness"],
        interactions: ["CNS depressants", "antihypertensives (risk of hypotension)", "CYP1A2 inhibitors (e.g., fluvoxamine)"],
        monitor: ["Sedation", "weight gain", "EPS", "metabolic changes", "orthostatic hypotension"],
        importantInvestigations: ["Monitor weight, blood glucose, and lipids regularly."]
    },
    { 
        name: "OLAPEX 5mg Tab.", 
        active: "Olanzapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "21-54 hours",
        sideEffects: ["Weight gain", "sedation", "hyperlipidemia", "hyperglycemia", "dizziness"],
        interactions: ["CNS depressants", "antihypertensives (risk of hypotension)", "CYP1A2 inhibitors (e.g., fluvoxamine)"],
        monitor: ["Sedation", "weight gain", "EPS", "metabolic changes", "orthostatic hypotension"],
        importantInvestigations: ["Monitor weight, blood glucose, and lipids regularly."]
    },
    { 
        name: "ZYPREXA Tab.", 
        active: "Olanzapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: false,
        package: "NA",
        halfLife: "21-54 hours",
        sideEffects: ["Weight gain", "sedation", "hyperlipidemia", "hyperglycemia", "dizziness"],
        interactions: ["CNS depressants", "antihypertensives (risk of hypotension)", "CYP1A2 inhibitors (e.g., fluvoxamine)"],
        monitor: ["Sedation", "weight gain", "EPS", "metabolic changes", "orthostatic hypotension"],
        importantInvestigations: ["Monitor weight, blood glucose, and lipids regularly."]
    },
    { 
        name: "TRILEPTAL 300mg Tab.", 
        active: "Oxcarbazepine", 
        category: "Anticonvulsant",
        available: false,
        package: "50 TAB",
        halfLife: "8-10 hours",
        sideEffects: ["Dizziness", "drowsiness", "diplopia", "fatigue", "hyponatremia", "headache"],
        interactions: ["CYP3A4 substrates (e.g., hormonal contraceptives - reduced efficacy)", "other CNS depressants"],
        monitor: ["Dizziness", "ataxia", "hyponatremia symptoms (headache, confusion)", "rash"],
        importantInvestigations: ["Monitor serum sodium levels, especially early in therapy."]
    },
    { 
        name: "TRILEPTAL 600mg Tab.", 
        active: "Oxcarbazepine", 
        category: "Anticonvulsant",
        available: false,
        package: "50 TAB",
        halfLife: "8-10 hours",
        sideEffects: ["Dizziness", "drowsiness", "diplopia", "fatigue", "hyponatremia", "headache"],
        interactions: ["CYP3A4 substrates (e.g., hormonal contraceptives - reduced efficacy)", "other CNS depressants"],
        monitor: ["Dizziness", "ataxia", "hyponatremia symptoms (headache, confusion)", "rash"],
        importantInvestigations: ["Monitor serum sodium levels, especially early in therapy."]
    },
    { 
        name: "OXALEPTAL 300mg Tab.", 
        active: "Oxcarbazepine", 
        category: "Anticonvulsant",
        available: true,
        package: "30 TAB",
        halfLife: "8-10 hours",
        sideEffects: ["Dizziness", "drowsiness", "diplopia", "fatigue", "hyponatremia", "headache"],
        interactions: ["CYP3A4 substrates (e.g., hormonal contraceptives - reduced efficacy)", "other CNS depressants"],
        monitor: ["Dizziness", "ataxia", "hyponatremia symptoms (headache, confusion)", "rash"],
        importantInvestigations: ["Monitor serum sodium levels, especially early in therapy."]
    },
    { 
        name: "OXALEPTAL 600mg Tab.", 
        active: "Oxcarbazepine", 
        category: "Anticonvulsant",
        available: true,
        package: "30 TAB",
        halfLife: "8-10 hours",
        sideEffects: ["Dizziness", "drowsiness", "diplopia", "fatigue", "hyponatremia", "headache"],
        interactions: ["CYP3A4 substrates (e.g., hormonal contraceptives - reduced efficacy)", "other CNS depressants"],
        monitor: ["Dizziness", "ataxia", "hyponatremia symptoms (headache, confusion)", "rash"],
        importantInvestigations: ["Monitor serum sodium levels, especially early in therapy."]
    },
    { 
        name: "INVEGA SUSTENNA 100mg Syring", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "1 SYRING",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Monitor for EPS and akathisia. Administer by deep IM gluteal injection."]
    },
    { 
        name: "INVEGA SUSTENNA 150mg Syring", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "1 SYRING",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Monitor for EPS and akathisia. Administer by deep IM gluteal injection."]
    },
    { 
        name: "INVEGA SUSTENNA 75mg Syring", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: false,
        package: "1 SYRING",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Monitor for EPS and akathisia. Administer by deep IM gluteal injection."]
    },
    { 
        name: "TREVICTA 350mg Syring", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "1 SYRING",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Monitor for EPS and akathisia. 3-month formulation. Administer by deep IM gluteal injection."]
    },
    { 
        name: "TREVICTA 525mg Syring", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: false,
        package: "1 SYRING",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Monitor for EPS and akathisia. 3-month formulation. Administer by deep IM gluteal injection."]
    },
    { 
        name: "INVEGA 3mg Tab.", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "7 TAB",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Do not crush or chew tablet (ER formulation). Monitor for EPS."]
    },
    { 
        name: "INVEGA 6mg Tab.", 
        active: "Paliperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: false,
        package: "7 TAB",
        halfLife: "23 hours",
        sideEffects: ["Extrapyramidal symptoms", "tachycardia", "weight gain", "hyperprolactinemia", "sedation"],
        interactions: ["Other CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "mood stabilization"],
        importantInvestigations: ["Do not crush or chew tablet (ER formulation). Monitor for EPS."]
    },
    { 
        name: "PAROXETINE 12.5mg CR Tab.", 
        active: "Paroxetine", 
        category: "SSRI (Antidepressant)",
        available: false,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Nausea", "somnolence", "sweating", "sexual dysfunction", "asthenia", "insomnia"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Sedation", "mood changes", "suicidal ideation", "sexual dysfunction", "withdrawal symptoms"],
        importantInvestigations: ["Strong CYP2D6 inhibitor. Has more anticholinergic effects than other SSRIs."]
    },
    { 
        name: "PAROXETINE 25mg CR Tab.", 
        active: "Paroxetine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Nausea", "somnolence", "sweating", "sexual dysfunction", "asthenia", "insomnia"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Sedation", "mood changes", "suicidal ideation", "sexual dysfunction", "withdrawal symptoms"],
        importantInvestigations: ["Strong CYP2D6 inhibitor. Has more anticholinergic effects than other SSRIs."]
    },
    { 
        name: "PAROXETINE 37.5mg CR Tab.", 
        active: "Paroxetine", 
        category: "SSRI (Antidepressant)",
        available: false,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Nausea", "somnolence", "sweating", "sexual dysfunction", "asthenia", "insomnia"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Sedation", "mood changes", "suicidal ideation", "sexual dysfunction", "withdrawal symptoms"],
        importantInvestigations: ["Strong CYP2D6 inhibitor. Has more anticholinergic effects than other SSRIs."]
    },
    { 
        name: "SEROXAT CR 12.5mg Tab.", 
        active: "Paroxetine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Nausea", "somnolence", "sweating", "sexual dysfunction", "asthenia", "insomnia"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Sedation", "mood changes", "suicidal ideation", "sexual dysfunction", "withdrawal symptoms"],
        importantInvestigations: ["Strong CYP2D6 inhibitor. Has more anticholinergic effects than other SSRIs."]
    },
    { 
        name: "SEROXAT CR 25mg Tab.", 
        active: "Paroxetine", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Nausea", "somnolence", "sweating", "sexual dysfunction", "asthenia", "insomnia"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Sedation", "mood changes", "suicidal ideation", "sexual dysfunction", "withdrawal symptoms"],
        importantInvestigations: ["Strong CYP2D6 inhibitor. Has more anticholinergic effects than other SSRIs."]
    },
    { 
        name: "PHENYTIN 100mg/2ml Amp.", 
        active: "Phenytoin", 
        category: "Hydantoin (Anticonvulsant)",
        available: true,
        package: "1 AMP",
        halfLife: "6-24 hours",
        sideEffects: ["Nystagmus", "ataxia", "slurred speech", "diplopia", "gingival hyperplasia", "rash"],
        interactions: ["CYP450 inducers (affects many drugs)", "warfarin", "oral contraceptives (reduced efficacy)", "CNS depressants"],
        monitor: ["Nystagmus", "ataxia", "gingival hyperplasia", "rash", "coarsening of facial features"],
        importantInvestigations: ["Therapeutic drug monitoring required. Highly protein-bound."]
    },
    { 
        name: "PHENYTIN 250mg/5ml Amp.", 
        active: "Phenytoin", 
        category: "Hydantoin (Anticonvulsant)",
        available: true,
        package: "10 AMP",
        halfLife: "6-24 hours",
        sideEffects: ["Nystagmus", "ataxia", "slurred speech", "diplopia", "gingival hyperplasia", "rash"],
        interactions: ["CYP450 inducers (affects many drugs)", "warfarin", "oral contraceptives (reduced efficacy)", "CNS depressants"],
        monitor: ["Nystagmus", "ataxia", "gingival hyperplasia", "rash", "coarsening of facial features"],
        importantInvestigations: ["Therapeutic drug monitoring required. Highly protein-bound."]
    },
    { 
        name: "PHENYTIN 100mg Cap.", 
        active: "Phenytoin", 
        category: "Hydantoin (Anticonvulsant)",
        available: true,
        package: "50 CAP",
        halfLife: "6-24 hours",
        sideEffects: ["Nystagmus", "ataxia", "slurred speech", "diplopia", "gingival hyperplasia", "rash"],
        interactions: ["CYP450 inducers (affects many drugs)", "warfarin", "oral contraceptives (reduced efficacy)", "CNS depressants"],
        monitor: ["Nystagmus", "ataxia", "gingival hyperplasia", "rash", "coarsening of facial features"],
        importantInvestigations: ["Therapeutic drug monitoring required. Highly protein-bound."]
    },
    { 
        name: "PHENYTIN 50mg Cap.", 
        active: "Phenytoin", 
        category: "Hydantoin (Anticonvulsant)",
        available: true,
        package: "50 CAP",
        halfLife: "6-24 hours",
        sideEffects: ["Nystagmus", "ataxia", "slurred speech", "diplopia", "gingival hyperplasia", "rash"],
        interactions: ["CYP450 inducers (affects many drugs)", "warfarin", "oral contraceptives (reduced efficacy)", "CNS depressants"],
        monitor: ["Nystagmus", "ataxia", "gingival hyperplasia", "rash", "coarsening of facial features"],
        importantInvestigations: ["Therapeutic drug monitoring required. Highly protein-bound."]
    },
    { 
        name: "STIMULAN 400mg Cap.", 
        active: "Piracetam", 
        category: "Nootropic",
        available: true,
        package: "30 CAP",
        halfLife: "5-6 hours",
        sideEffects: ["Nervousness", "insomnia", "weight gain", "depression", "hyperkinesia", "drowsiness"],
        interactions: ["Anticoagulants/antiplatelets (increased risk of bleeding)", "thyroid hormones"],
        monitor: ["Neurocognitive function", "agitation", "nervousness", "insomnia"],
        importantInvestigations: ["Monitor for CNS side effects. Use with caution in those with bleeding risk."]
    },
    { 
        name: "STIMULAN 800mg Tab.", 
        active: "Piracetam", 
        category: "Nootropic",
        available: true,
        package: "30 TAB",
        halfLife: "5-6 hours",
        sideEffects: ["Nervousness", "insomnia", "weight gain", "depression", "hyperkinesia", "drowsiness"],
        interactions: ["Anticoagulants/antiplatelets (increased risk of bleeding)", "thyroid hormones"],
        monitor: ["Neurocognitive function", "agitation", "nervousness", "insomnia"],
        importantInvestigations: ["Monitor for CNS side effects. Use with caution in those with bleeding risk."]
    },
    { 
        name: "OXITROPIL 1200mg Tab.", 
        active: "Piracetam", 
        category: "Nootropic",
        available: true,
        package: "60 TAB",
        halfLife: "5-6 hours",
        sideEffects: ["Nervousness", "insomnia", "weight gain", "depression", "hyperkinesia", "drowsiness"],
        interactions: ["Anticoagulants/antiplatelets (increased risk of bleeding)", "thyroid hormones"],
        monitor: ["Neurocognitive function", "agitation", "nervousness", "insomnia"],
        importantInvestigations: ["Monitor for CNS side effects. Use with caution in those with bleeding risk."]
    },
    { 
        name: "RAMIXOLE 0.25mg Tab.", 
        active: "Pramipexol", 
        category: "Dopamine Agonist",
        available: true,
        package: "30 TAB",
        halfLife: "8-12 hours",
        sideEffects: ["Nausea", "dizziness", "somnolence", "insomnia", "constipation", "impulse control disorders"],
        interactions: ["Antipsychotics (may diminish effect)", "other CNS depressants", "drugs excreted renally"],
        monitor: ["Sleep attacks", "impulse control disorders (gambling, hypersexuality)", "orthostatic hypotension", "nausea"],
        importantInvestigations: ["Warn about potential for impulsive behaviors (gambling, shopping, etc.). Titrate slowly."]
    },
    { 
        name: "RAMIXOLE 1mg Tab.", 
        active: "Pramipexol", 
        category: "Dopamine Agonist",
        available: false,
        package: "30 TAB",
        halfLife: "8-12 hours",
        sideEffects: ["Nausea", "dizziness", "somnolence", "insomnia", "constipation", "impulse control disorders"],
        interactions: ["Antipsychotics (may diminish effect)", "other CNS depressants", "drugs excreted renally"],
        monitor: ["Sleep attacks", "impulse control disorders (gambling, hypersexuality)", "orthostatic hypotension", "nausea"],
        importantInvestigations: ["Warn about potential for impulsive behaviors (gambling, shopping, etc.). Titrate slowly."]
    },
    { 
        name: "QUITAPEX 100mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "QUITAPEX 200mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "QUITAPEX 25mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "QUITCOOL 150 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    { 
        name: "QUITCOOL 200 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    { 
        name: "QUETIAZIC 300 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    {
        name: "QUITCOOL 300 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: false,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    { 
        name: "QUITCOOL 400 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    { 
        name: "QUITCOOL 50 XR Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Do not crush or chew. Monitor weight, blood glucose, lipids. Higher QTc risk than IR."]
    },
    { 
        name: "SEROQUEL 100mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "SEROQUEL 200mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "SEROQUEL 25mg Tab.", 
        active: "Quetiapine", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "6 hours",
        sideEffects: ["Sedation", "dry mouth", "dizziness", "weight gain", "constipation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["Sedation", "orthostatic hypotension", "weight gain", "metabolic changes", "cataracts (long-term)"],
        importantInvestigations: ["Monitor weight, blood glucose, lipids, and blood pressure. Risk of cataract (monitor eye exams)."]
    },
    { 
        name: "APEXIDONE 0.5mg Tab.", 
        active: "Risperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "3-20 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "sedation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)", "CYP2D6 inhibitors"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "prolactin elevation symptoms"],
        importantInvestigations: ["Monitor for EPS and akathisia. Dose-dependent EPS risk."]
    },
    { 
        name: "APEXIDONE 1mg Tab.", 
        active: "Risperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "20 TAB",
        halfLife: "3-20 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "sedation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)", "CYP2D6 inhibitors"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "prolactin elevation symptoms"],
        importantInvestigations: ["Monitor for EPS and akathisia. Dose-dependent EPS risk."]
    },
    { 
        name: "APEXIDONE 2mg Tab.", 
        active: "Risperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "20 TAB",
        halfLife: "3-20 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "sedation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)", "CYP2D6 inhibitors"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "prolactin elevation symptoms"],
        importantInvestigations: ["Monitor for EPS and akathisia. Dose-dependent EPS risk."]
    },
    { 
        name: "APEXIDONE 3mg Tab.", 
        active: "Risperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "3-20 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "sedation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)", "CYP2D6 inhibitors"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "prolactin elevation symptoms"],
        importantInvestigations: ["Monitor for EPS and akathisia. Dose-dependent EPS risk."]
    },
    { 
        name: "APEXIDONE 4mg Tab.", 
        active: "Risperidone", 
        category: "Atypical Antipsychotic (Second Generation)",
        available: true,
        package: "30 TAB",
        halfLife: "3-20 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "sedation", "orthostatic hypotension"],
        interactions: ["CNS depressants", "drugs that prolong QT interval", "levodopa (antagonizes effect)", "CYP2D6 inhibitors"],
        monitor: ["Sedation", "EPS", "akathisia", "weight gain", "prolactin elevation symptoms"],
        importantInvestigations: ["Monitor for EPS and akathisia. Dose-dependent EPS risk."]
    },
    { 
        name: "LUSTRAL 50mg Tab.", 
        active: "Sertraline", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "20 TAB",
        halfLife: "26 hours",
        sideEffects: ["Nausea", "diarrhea", "insomnia", "sexual dysfunction", "headache", "dry mouth"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Mood changes", "suicidal ideation", "GI symptoms", "activation", "withdrawal"],
        importantInvestigations: ["Can be more activating than other SSRIs. Usually taken in the morning."]
    },
    { 
        name: "MOODAPEX 50mg Tab.", 
        active: "Sertraline", 
        category: "SSRI (Antidepressant)",
        available: true,
        package: "30 TAB",
        halfLife: "26 hours",
        sideEffects: ["Nausea", "diarrhea", "insomnia", "sexual dysfunction", "headache", "dry mouth"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)", "CYP2D6 substrates"],
        monitor: ["Mood changes", "suicidal ideation", "GI symptoms", "activation", "withdrawal"],
        importantInvestigations: ["Can be more activating than other SSRIs. Usually taken in the morning."]
    },
    { 
        name: "DOGMATIL 50mg Cap.", 
        active: "Sulpiride", 
        category: "Typical Antipsychotic (First Generation)",
        available: true,
        package: "30 CAP",
        halfLife: "6-15 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "insomnia", "agitation"],
        interactions: ["Other CNS depressants", "levodopa (antagonizes effect)", "antihypertensives"],
        monitor: ["EPS", "akathisia", "sedation", "prolactin-related effects"],
        importantInvestigations: ["Monitor for EPS. Higher risk of hyperprolactinemia compared to some other antipsychotics."]
    },
    { 
        name: "DOGMATIL FORTE 200mg Tab.", 
        active: "Sulpiride", 
        category: "Typical Antipsychotic (First Generation)",
        available: true,
        package: "10 TAB",
        halfLife: "6-15 hours",
        sideEffects: ["Extrapyramidal symptoms", "hyperprolactinemia", "weight gain", "insomnia", "agitation"],
        interactions: ["Other CNS depressants", "levodopa (antagonizes effect)", "antihypertensives"],
        monitor: ["EPS", "akathisia", "sedation", "prolactin-related effects"],
        importantInvestigations: ["Monitor for EPS. Higher risk of hyperprolactinemia compared to some other antipsychotics."]
    },
    { 
        name: "TOPAMAX 100mg Tab.", 
        active: "Topiramate", 
        category: "Anticonvulsant",
        available: false,
        package: "60 TAB",
        halfLife: "21 hours",
        sideEffects: ["Paresthesia", "weight loss", "cognitive impairment", "fatigue", "nausea", "taste alteration"],
        interactions: ["Other CNS depressants", "carbonic anhydrase inhibitors (increased kidney stone risk)", "oral contraceptives (reduced efficacy)"],
        monitor: ["Cognitive effects (word-finding difficulty)", "paresthesia", "weight loss", "glaucoma symptoms (eye pain, vision changes)"],
        importantInvestigations: ["Monitor for cognitive slowing and word-finding difficulty. Encourage hydration."]
    },
    { 
        name: "TOPAMAX 25mg Tab.", 
        active: "Topiramate", 
        category: "Anticonvulsant",
        available: false,
        package: "60 TAB",
        halfLife: "21 hours",
        sideEffects: ["Paresthesia", "weight loss", "cognitive impairment", "fatigue", "nausea", "taste alteration"],
        interactions: ["Other CNS depressants", "carbonic anhydrase inhibitors (increased kidney stone risk)", "oral contraceptives (reduced efficacy)"],
        monitor: ["Cognitive effects (word-finding difficulty)", "paresthesia", "weight loss", "glaucoma symptoms (eye pain, vision changes)"],
        importantInvestigations: ["Monitor for cognitive slowing and word-finding difficulty. Encourage hydration."]
    },
    { 
        name: "TOPIRAMATE 25mg Tab", 
        active: "Topiramate", 
        category: "Anticonvulsant",
        available: true,
        package: "30 TAB",
        halfLife: "21 hours",
        sideEffects: ["Paresthesia", "weight loss", "cognitive impairment", "fatigue", "nausea", "taste alteration"],
        interactions: ["Other CNS depressants", "carbonic anhydrase inhibitors (increased kidney stone risk)", "oral contraceptives (reduced efficacy)"],
        monitor: ["Cognitive effects (word-finding difficulty)", "paresthesia", "weight loss", "glaucoma symptoms (eye pain, vision changes)"],
        importantInvestigations: ["Monitor for cognitive slowing and word-finding difficulty. Encourage hydration."]
    },
    { 
        name: "TOPIRAMATE 100mg Tab", 
        active: "Topiramate", 
        category: "Anticonvulsant",
        available: true,
        package: "10 TAB",
        halfLife: "21 hours",
        sideEffects: ["Paresthesia", "weight loss", "cognitive impairment", "fatigue", "nausea", "taste alteration"],
        interactions: ["Other CNS depressants", "carbonic anhydrase inhibitors (increased kidney stone risk)", "oral contraceptives (reduced efficacy)"],
        monitor: ["Cognitive effects (word-finding difficulty)", "paresthesia", "weight loss", "glaucoma symptoms (eye pain, vision changes)"],
        importantInvestigations: ["Monitor for cognitive slowing and word-finding difficulty. Encourage hydration."]
    },
    { 
        name: "TRITTICO 100mg Tab.", 
        active: "Trazodone", 
        category: "SARI (Antidepressant)",
        available: true,
        package: "20 TAB",
        halfLife: "5-9 hours",
        sideEffects: ["Sedation", "dizziness", "orthostatic hypotension", "dry mouth", "nausea", "headache"],
        interactions: ["CNS depressants", "MAOIs (contraindicated)", "CYP3A4 inhibitors (e.g., ketoconazole)"],
        monitor: ["Sedation", "orthostatic hypotension", "priapism (rare)", "dizziness"],
        importantInvestigations: ["Risk of priapism (rare but serious). Often used off-label for insomnia at lower doses."]
    },
    { 
        name: "TRITTICO 50mg Tab.", 
        active: "Trazodone", 
        category: "SARI (Antidepressant)",
        available: true,
        package: "20 TAB",
        halfLife: "5-9 hours",
        sideEffects: ["Sedation", "dizziness", "orthostatic hypotension", "dry mouth", "nausea", "headache"],
        interactions: ["CNS depressants", "MAOIs (contraindicated)", "CYP3A4 inhibitors (e.g., ketoconazole)"],
        monitor: ["Sedation", "orthostatic hypotension", "priapism (rare)", "dizziness"],
        importantInvestigations: ["Risk of priapism (rare but serious). Often used off-label for insomnia at lower doses."]
    },
    { 
        name: "STELLASIL 5mg Tab.", 
        active: "Trifluperazine", 
        category: "Typical Antipsychotic (First Generation, Phenothiazine)",
        available: true,
        package: "30 TAB",
        halfLife: "8 hours",
        sideEffects: ["Extrapyramidal symptoms", "sedation", "anticholinergic effects (dry mouth, blurred vision)", "orthostatic hypotension"],
        interactions: ["CNS depressants", "anticholinergics", "levodopa (antagonizes effect)"],
        monitor: ["EPS", "akathisia", "sedation", "tardive dyskinesia", "photosensitivity"],
        importantInvestigations: ["Higher potency typical antipsychotic. Monitor closely for EPS and akathisia."]
    },
    { 
        name: "STELLASIL 1mg Tab.", 
        active: "Trifluperazine", 
        category: "Typical Antipsychotic (First Generation, Phenothiazine)",
        available: false,
        package: "30 TAB",
        halfLife: "8 hours",
        sideEffects: ["Extrapyramidal symptoms", "sedation", "anticholinergic effects (dry mouth, blurred vision)", "orthostatic hypotension"],
        interactions: ["CNS depressants", "anticholinergics", "levodopa (antagonizes effect)"],
        monitor: ["EPS", "akathisia", "sedation", "tardive dyskinesia", "photosensitivity"],
        importantInvestigations: ["Higher potency typical antipsychotic. Monitor closely for EPS and akathisia."]
    },
    { 
        name: "DEPAKINE CHRONO 500mg Tab.", 
        active: "Valproic Acid", 
        category: "Anticonvulsant / Mood Stabilizer",
        available: true,
        package: "30 TAB",
        halfLife: "9-16 hours",
        sideEffects: ["Nausea", "sedation", "tremor", "weight gain", "hair loss", "thrombocytopenia", "hepatotoxicity"],
        interactions: ["Other CNS depressants", "lamotrigine (increases risk of SJS)", "aspirin/warfarin (increased bleeding risk)"],
        monitor: ["Tremor", "weight gain", "hair loss", "encephalopathy signs (lethargy, confusion)"],
        importantInvestigations: ["Monitor CBC, LFTs, and valproic acid levels. High risk of neural tube defects in pregnancy."]
    },
    { 
        name: "EFEXOR XR 150mg Cap.", 
        active: "Venlafaxine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "14 CAP",
        halfLife: "5 hours",
        sideEffects: ["Nausea", "headache", "insomnia", "hypertension", "sweating", "sexual dysfunction", "dizziness"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "withdrawal symptoms", "serotonin syndrome"],
        importantInvestigations: ["Monitor blood pressure, especially at higher doses (>150mg/day). Can be difficult to discontinue."]
    },
    { 
        name: "EFEXOR XR 75mg Cap.", 
        active: "Venlafaxine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "14 CAP",
        halfLife: "5 hours",
        sideEffects: ["Nausea", "headache", "insomnia", "hypertension", "sweating", "sexual dysfunction", "dizziness"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "withdrawal symptoms", "serotonin syndrome"],
        importantInvestigations: ["Monitor blood pressure. Withdrawal syndrome common if stopped abruptly."]
    },
    { 
        name: "VENLLAMASH 75mg Cap.", 
        active: "Venlafaxine", 
        category: "SNRI (Antidepressant)",
        available: true,
        package: "30 CAP",
        halfLife: "5 hours",
        sideEffects: ["Nausea", "headache", "insomnia", "hypertension", "sweating", "sexual dysfunction", "dizziness"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["Blood pressure", "mood changes", "suicidal ideation", "withdrawal symptoms", "serotonin syndrome"],
        importantInvestigations: ["Monitor blood pressure, especially at higher doses. Withdrawal syndrome common."]
    },
    { 
        name: "VILAZOVER 40mg Tab.", 
        active: "Vilazodone", 
        category: "SSRI & 5-HT1A Receptor Partial Agonist",
        available: false,
        package: "30 TAB",
        halfLife: "25 hours",
        sideEffects: ["Diarrhea", "nausea", "insomnia", "vomiting", "dizziness"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["GI symptoms (diarrhea, nausea)", "mood changes", "sexual dysfunction", "activation"],
        importantInvestigations: ["Must be taken with food to ensure adequate absorption."]
    },
    { 
        name: "VILAPHORIA 40mg Tab", 
        active: "Vilazodone", 
        category: "SSRI & 5-HT1A Receptor Partial Agonist",
        available: true,
        package: "30 TAB",
        halfLife: "25 hours",
        sideEffects: ["Diarrhea", "nausea", "insomnia", "vomiting", "dizziness"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["GI symptoms (diarrhea, nausea)", "mood changes", "sexual dysfunction", "activation"],
        importantInvestigations: ["Must be taken with food to ensure adequate absorption."]
    },
    { 
        name: "DEPRATIOX 10mg Tab.", 
        active: "Vortioxetine", 
        category: "Multimodal Antidepressant",
        available: true,
        package: "20 TAB",
        halfLife: "66 hours",
        sideEffects: ["Nausea", "constipation", "vomiting", "sexual dysfunction", "dizziness", "flushing"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["GI symptoms", "mood changes", "cognitive function", "sexual dysfunction"],
        importantInvestigations: ["May have a lower incidence of sexual dysfunction compared to some SSRIs/SNRIs."]
    },
    { 
        name: "BRINTELLIX 10MG Tab.", 
        active: "Vortioxetine", 
        category: "Multimodal Antidepressant",
        available: false,
        package: "14 TAB",
        halfLife: "66 hours",
        sideEffects: ["Nausea", "constipation", "vomiting", "sexual dysfunction", "dizziness", "flushing"],
        interactions: ["MAOIs (contraindicated)", "serotonergic drugs", "NSAIDs/aspirin (increased bleed risk)"],
        monitor: ["GI symptoms", "mood changes", "cognitive function", "sexual dysfunction"],
        importantInvestigations: ["May have a lower incidence of sexual dysfunction compared to some SSRIs/SNRIs."]
    },
    { 
        name: "HYPNOR 7.5mg Tab.", 
        active: "Zopiclone", 
        category: "Non-Benzodiazepine (Z-Drug)",
        available: false,
        package: "10 TAB",
        halfLife: "5 hours",
        sideEffects: ["Bitter metallic taste", "dry mouth", "drowsiness", "headache", "dizziness", "rebound insomnia"],
        interactions: ["CNS depressants (alcohol, opioids, other sedatives)"],
        monitor: ["Sedation", "confusion", "ataxia", "dependence", "withdrawal"],
        importantInvestigations: ["Risk of tolerance and dependence. Avoid alcohol. Can cause complex sleep behaviors."]
    },
    {
        name: "GAPTIN 100mg Cap.", 
        active: "Gabapentin", 
        category: "Anticonvulsant / Neuropathic pain agent (GABA analog, though not acting directly on GABA receptors)",
        available: true,
        package: "30 CAP",
        halfLife: "5–7 hours",
        sideEffects: ["Dizziness", "Somnolence (drowsiness)", "Fatigue", "Ataxia (loss of coordination)", "Peripheral edema", "Nystagmus", "Weight gain", "Headache"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["CNS depression (drowsiness, dizziness, impaired coordination) – especially when initiating or increasing dose", "Mood changes (depression, anxiety, suicidal ideation) – per FDA black box warning for antiepileptics", "Signs of hypersensitivity (rash, fever, lymphadenopathy)", "Peripheral edema – monitor for swelling in extremities", "Respiratory depression – especially when combined with CNS depressants (opioids, benzodiazepines)", "Weight gain and appetite changes", "Withdrawal symptoms (insomnia, nausea, headache, anxiety) – avoid abrupt discontinuation."],
        importantInvestigations: ["Renal function tests (serum creatinine, eGFR) – Gabapentin is renally excreted; dose adjustment needed in renal impairment", "Liver function tests (LFTs) – Rare hepatotoxicity; baseline and periodic monitoring in long-term use", "Electrolytes – Occasionally monitored due to edema or fluid retention."]
    },
        {
        name: "GAPTIN 300mg Cap.", 
        active: "Gabapentin", 
        category: "Anticonvulsant / Neuropathic pain agent (GABA analog, though not acting directly on GABA receptors)",
        available: true,
        package: "30 CAP",
        halfLife: "5–7 hours",
        sideEffects: ["Dizziness", "Somnolence (drowsiness)", "Fatigue", "Ataxia (loss of coordination)", "Peripheral edema", "Nystagmus", "Weight gain", "Headache"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["CNS depression (drowsiness, dizziness, impaired coordination) – especially when initiating or increasing dose", "Mood changes (depression, anxiety, suicidal ideation) – per FDA black box warning for antiepileptics", "Signs of hypersensitivity (rash, fever, lymphadenopathy)", "Peripheral edema – monitor for swelling in extremities", "Respiratory depression – especially when combined with CNS depressants (opioids, benzodiazepines)", "Weight gain and appetite changes", "Withdrawal symptoms (insomnia, nausea, headache, anxiety) – avoid abrupt discontinuation."],
        importantInvestigations: ["Renal function tests (serum creatinine, eGFR) – Gabapentin is renally excreted; dose adjustment needed in renal impairment", "Liver function tests (LFTs) – Rare hepatotoxicity; baseline and periodic monitoring in long-term use", "Electrolytes – Occasionally monitored due to edema or fluid retention."]
    },
    {
        name: "GAPTIN 400mg Cap.", 
        active: "Gabapentin", 
        category: "Anticonvulsant / Neuropathic pain agent (GABA analog, though not acting directly on GABA receptors)",
        available: true,
        package: "30 CAP",
        halfLife: "5–7 hours",
        sideEffects: ["Dizziness", "Somnolence (drowsiness)", "Fatigue", "Ataxia (loss of coordination)", "Peripheral edema", "Nystagmus", "Weight gain", "Headache"],
        interactions: ["CNS depressants", "CYP3A4 inhibitors/inducers (e.g., ketoconazole, carbamazepine)", "antihypertensives"],
        monitor: ["CNS depression (drowsiness, dizziness, impaired coordination) – especially when initiating or increasing dose", "Mood changes (depression, anxiety, suicidal ideation) – per FDA black box warning for antiepileptics", "Signs of hypersensitivity (rash, fever, lymphadenopathy)", "Peripheral edema – monitor for swelling in extremities", "Respiratory depression – especially when combined with CNS depressants (opioids, benzodiazepines)", "Weight gain and appetite changes", "Withdrawal symptoms (insomnia, nausea, headache, anxiety) – avoid abrupt discontinuation."],
        importantInvestigations: ["Renal function tests (serum creatinine, eGFR) – Gabapentin is renally excreted; dose adjustment needed in renal impairment", "Liver function tests (LFTs) – Rare hepatotoxicity; baseline and periodic monitoring in long-term use", "Electrolytes – Occasionally monitored due to edema or fluid retention."]
    },
    { 
        name: "CLOPIXOL DEPOT 200mg/ml Amp.", 
        active: "Zuclopenthixol Decanoate", 
        category: "Typical Antipsychotic (Depot)",
        available: true,
        package: "10 AMP",
        halfLife: "3-4 weeks",
        sideEffects: ["Extrapyramidal symptoms", "sedation", "weight gain", "hyperprolactinemia", "anticholinergic effects"],
        interactions: ["CNS depressants", "levodopa (antagonizes effect)", "guanethidine"],
        monitor: ["EPS", "sedation", "akathisia", "injection site reactions", "clinical stability"],
        importantInvestigations: ["Deep IM injection. Long-acting formulation. Monitor for EPS and akathisia."]
    },
    { 
        name: "CLOPIXOL ACUPHASE 100MG/ml Amp.", 
        active: "Zuclopenthixol Decanoate", 
        category: "Typical Antipsychotic (Depot)",
        available: false,
        package: "10 AMP",
        halfLife: "3-4 weeks",
        sideEffects: ["Extrapyramidal symptoms", "sedation", "dizziness", "orthostatic hypotension"],
        interactions: ["CNS depressants", "levodopa (antagonizes effect)", "guanethidine"],
        monitor: ["EPS", "sedation", "akathisia", "injection site reactions", "clinical stability"],
        importantInvestigations: ["Used for rapid tranquilization in acute agitation. Short-acting depot formulation."]
    }
];

let medications = []; // Will store loaded medications

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
    
    const availabilityEl = document.getElementById('detail-availability');
    availabilityEl.textContent = medication.available ? 'Available' : 'Not Available';
    availabilityEl.className = medication.available ? 'available-badge' : 'not-available-badge';
    
    // Populate side effects
    const sideEffectsList = document.getElementById('detail-side-effects');
    sideEffectsList.innerHTML = '';
    medication.sideEffects.forEach(effect => {
        const li = document.createElement('li');
        li.textContent = effect;
        sideEffectsList.appendChild(li);
    });
    
    // Populate interactions
    const interactionsList = document.getElementById('detail-interactions');
    interactionsList.innerHTML = '';
    medication.interactions.forEach(interaction => {
        const li = document.createElement('li');
        li.textContent = interaction;
        interactionsList.appendChild(li);
    });
    
    // Populate monitor
    const monitorList = document.getElementById('detail-monitor');
    monitorList.innerHTML = '';
    medication.monitor.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        monitorList.appendChild(li);
    });
    
    // Populate important investigations
    const investigationsList = document.getElementById('detail-investigations');
    investigationsList.innerHTML = '';
    medication.importantInvestigations.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        investigationsList.appendChild(li);
    });
}

// Function to go back to search results
function goBackToSearch() {
    document.getElementById('medication-detail').classList.add('hidden');
    document.querySelector('.search-section').classList.remove('hidden');
    document.querySelector('.results-container').classList.remove('hidden');
}
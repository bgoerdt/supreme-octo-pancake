var naloxone = {
    startDate: new Date(),
    endDate: new Date(),
    numDoses: {
        min: 0,
        max: 1
    },
    administrationType: [
        'Intermuscular Injection',
        'Nasal Spray',
        'Auto-Injector'
    ],
    drugType: [
        'methamphetamine',
        'heroin',
        'opioids-prescription-pills',
        'crack-cocaine',
        'other-not-listed'
    ],
    source: [
        'IHRC',
        'Emergency Medical Provider',
        'Law Enforcement',
        'Substance Use Disorder Treatment',
        'Pharmacy',
        'Other'       
    ],
    // need over/under 30
};

var fentanyl = {
    startDate: new Date(),
    endDate: new Date(),
    drugType: [
        'Choose Drug', // probably shouldn't be here
        'Opioids',
        'Methamphetamine',
        'Opioids',
        'Heroin',
        'Crack\/Cocaine',
        'Other not on the list'
    ],
    beforeOrAfter: [
        'Before drug use',
        'After drug use'
    ],
    result: [
        'choose-result', // probably shouldn't be here
        'Positive',
        'Negative',
        'Didn\u00e2\u0080\u0099t work' // is this encoding a problem?
    ],
    actions: [
        'i-used-the-same-amount-of-drugs-as-i-planned',
        'i-used-less-amount-of-drugs-than-i-planned',
        'i-pushed-plunger-more-slowly-than-usual',
        'i-pushed-plunger-partway-to-feel-how-strong-the-drug-was',
        'i-sniffed-it-instead-of-shooting',
        'i-threw-the-drugs-away',
        'i-got-someone-to-look-after-me',
        'i-shared-the-test-results-with-other-people-who-use-the-same-drug',
        'other-not-on-the-list'
    ],
    method: [
        'Choose Method', // probably shouldn't be here
        'i-injected-it',
        'i-snorted-or-sniffed-it',
        'i-smoked-it',
        'I didn\u00e2\u0080\u0099t use it',
        'other-not-listed'
    ],
    under30: [
        'yes',
        'no'
    ]
};

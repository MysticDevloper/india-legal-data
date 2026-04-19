// India Legal Portal - Interactive JavaScript

// Load all legal data
let bnsData = [];
let ipcData = [];
let constitutionData = [];
let currentTab = 'bns';

// Sample data (in production, load from JSON files)
const sampleBNS = [
    {section: 1, title: "Short title, extent and commencement", chapter: 1, punishment: null},
    {section: 4, title: "Punishments", chapter: 2, punishment: "Death/Imprisonment/Fine"},
    {section: 14, title: "Act done by a person bound by law", chapter: 3, punishment: null},
    {section: 45, title: "Abetment of a thing", chapter: 4, punishment: "Various"},
    {section: 64, title: "Punishment for murder of child", chapter: 5, punishment: "Death/Life"},
    {section: 80, title: "Dowry death", chapter: 5, punishment: "Life/7 years"},
    {section: 85, title: "Sexual intercourse by husband during separation", chapter: 5, punishment: "2 years"},
    {section: 87, title: "Sexual harassment", chapter: 5, punishment: "3 years"},
    {section: 89, title: "Voyeurism", chapter: 5, punishment: "3 years"},
    {section: 90, title: "Stalking", chapter: 5, punishment: "3 years"},
    {section: 92, title: "Punishment for rape", chapter: 5, punishment: "Life/10 years"},
    {section: 95, title: "Gang rape", chapter: 5, punishment: "Death/Life"},
    {section: 100, title: "Murder", chapter: 6, punishment: "Death/Life"},
    {section: 101, title: "Culpable homicide amounting to murder", chapter: 6, punishment: "Death/Life"},
    {section: 103, title: "Culpable homicide not amounting to murder", chapter: 6, punishment: "Life/10 years"},
    {section: 104, title: "Causing death by negligence", chapter: 6, punishment: "5 years"},
    {section: 105, title: "Dowry death", chapter: 6, punishment: "Life/7 years"},
    {section: 106, title: "Abetting suicide of minor", chapter: 6, punishment: "Life/7 years"},
    {section: 107, title: "Attempt to commit murder", chapter: 6, punishment: "10 years"},
    {section: 115, title: "Hurt", chapter: 6, punishment: null},
    {section: 116, title: "Grievous hurt", chapter: 6, punishment: null},
    {section: 117, title: "Voluntarily causing hurt", chapter: 6, punishment: "3 years"},
    {section: 118, title: "Voluntarily causing grievous hurt", chapter: 6, punishment: "7 years"},
    {section: 121, title: "Voluntarily causing hurt by acid attack", chapter: 6, punishment: "Life"},
    {section: 125, title: "Kidnapping or abducting", chapter: 7, punishment: "7 years"},
    {section: 138, title: "Theft", chapter: 8, punishment: "3 years"},
    {section: 143, title: "Extortion", chapter: 8, punishment: "3 years"},
    {section: 147, title: "Robbery", chapter: 8, punishment: "10 years"},
    {section: 150, title: "Dacoity", chapter: 8, punishment: "Life/10 years"},
    {section: 155, title: "Criminal breach of trust", chapter: 8, punishment: "3 years"},
    {section: 160, title: "Cheating", chapter: 8, punishment: "3 years"},
    {section: 164, title: "Mischief", chapter: 8, punishment: "3 months"},
    {section: 177, title: "Forgery", chapter: 8, punishment: "2 years"},
    {section: 189, title: "Cruelty by husband or relatives", chapter: 11, punishment: "3 years"},
    {section: 191, title: "Bigamy", chapter: 11, punishment: "7 years"},
    {section: 193, title: "Adultery", chapter: 11, punishment: "5 years"},
    {section: 223, title: "False evidence", chapter: 14, punishment: "7 years"},
    {section: 287, title: "Destroying object of historic importance", chapter: 16, punishment: "2 years"},
    {section: 289, title: "Defamation", chapter: 17, punishment: "2 years"},
    {section: 292, title: "Criminal intimidation", chapter: 18, punishment: "2 years"},
    {section: 299, title: "Waging war against Government of India", chapter: 7, punishment: "Death/Life"},
    {section: 304, title: "Sedition", chapter: 7, punishment: "Life/3 years"},
    {section: 318, title: "Unlawful assembly", chapter: 9, punishment: null},
    {section: 347, title: "Counterfeiting coin", chapter: 10, punishment: "Death/Life"},
    {section: 354, title: "Counterfeiting currency note", chapter: 10, punishment: "Death/Life"},
];

const sampleIPC = [
    {section: 1, title: "Title and extent", chapter: 1, punishment: null},
    {section: 53, title: "Punishments", chapter: 3, punishment: "Death/Imprisonment/Fine"},
    {section: 299, title: "Voluntarily causing hurt", chapter: 16, punishment: "3 years"},
    {section: 300, title: "Culpable homicide", chapter: 16, punishment: "Death/Life"},
    {section: 302, title: "Murder", chapter: 16, punishment: "Death/Life"},
    {section: 304, title: "Culpable homicide not murder", chapter: 16, punishment: "Life/10 years"},
    {section: 304A, title: "Death by negligence", chapter: 16, punishment: "2 years"},
    {section: 304B, title: "Dowry death", chapter: 16, punishment: "Life/7 years"},
    {section: 306, title: "Abetting suicide", chapter: 16, punishment: "7 years"},
    {section: 307, title: "Attempt to murder", chapter: 16, punishment: "10 years"},
    {section: 319, title: "Hurt", chapter: 16, punishment: "1 year"},
    {section: 320, title: "Grievous hurt", chapter: 16, punishment: null},
    {section: 323, title: "Voluntarily causing hurt", chapter: 16, punishment: "3 years"},
    {section: 326, title: " Voluntarily causing grievous hurt", chapter: 16, punishment: "7 years"},
    {section: 326A, title: "Acid attack", chapter: 16, punishment: "Life"},
    {section: 363, title: "Kidnapping", chapter: 17, punishment: "7 years"},
    {section: 375, title: "Rape", chapter: 16, punishment: "Life/7 years"},
    {section: 376, title: "Punishment for rape", chapter: 16, punishment: "Life/10 years"},
    {section: 377, title: "Unnatural offences", chapter: 16, punishment: "Life/10 years"},
    {section: 379, title: "Theft", chapter: 17, punishment: "3 years"},
    {section: 384, title: "Extortion", chapter: 17, punishment: "3 years"},
    {section: 392, title: "Robbery", chapter: 17, punishment: "10 years"},
    {section: 395, title: "Dacoity", chapter: 17, punishment: "Life/10 years"},
    {section: 406, title: "Criminal breach of trust", chapter: 17, punishment: "3 years"},
    {section: 415, title: "Cheating", chapter: 17, punishment: null},
    {section: 420, title: "Cheating and dishonestly inducing delivery", chapter: 17, punishment: "7 years"},
    {section: 425, title: "Mischief", chapter: 17, punishment: null},
    {section: 463, title: "Forgery", chapter: 18, punishment: "2 years"},
    {section: 498A, title: "Cruelty by husband/relative", chapter: 20, punishment: "3 years"},
    {section: 499, title: "Defamation", chapter: 21, punishment: null},
    {section: 500, title: "Punishment for defamation", chapter: 21, punishment: "2 years"},
];

const sampleConstitution = [
    {article: 1, title: "Name and territory of the Union", part: 1, category: "Union"},
    {article: 14, title: "Equality before law", part: 3, category: "Fundamental Rights"},
    {article: 15, title: "Prohibition of discrimination", part: 3, category: "Fundamental Rights"},
    {article: 19, title: "Protection of freedom of speech", part: 3, category: "Freedom"},
    {article: 21, title: "Protection of life and personal liberty", part: 3, category: "Freedom"},
    {article: 21A, title: "Right to education", part: 3, category: "Freedom"},
    {article: 32, title: "Remedies for enforcement of Fundamental Rights", part: 3, category: "Fundamental Rights"},
    {article: 226, title: "Power of High Courts to issue writs", part: 6, category: "Judiciary"},
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadSampleData();
});

// Load sample data into variables
function loadSampleData() {
    bnsData = sampleBNS;
    ipcData = sampleIPC;
    constitutionData = sampleConstitution;
}

// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Quick search from tags
function quickSearch(query) {
    document.getElementById('mainSearch').value = query;
    searchAll(query);
}

// Search across all laws
function searchAll(query) {
    if (!query || query.length < 2) {
        document.getElementById('results').style.display = 'none';
        return;
    }
    
    query = query.toLowerCase();
    let resultsHTML = '';
    let found = false;
    
    // Search BNS
    const bnsResults = bnsData.filter(law => 
        law.title.toLowerCase().includes(query) || 
        law.section.toString().includes(query)
    );
    
    // Search IPC
    const ipcResults = ipcData.filter(law => 
        law.title.toLowerCase().includes(query) || 
        law.section.toString().includes(query)
    );
    
    // Search Constitution
    const constitutionResults = constitutionData.filter(law => 
        law.title.toLowerCase().includes(query) || 
        law.article.toString().includes(query)
    );
    
    if (bnsResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 BNS Results</h3>';
        bnsResults.slice(0, 10).forEach(law => {
            resultsHTML += createResultCard(law, 'BNS');
        });
    }
    
    if (ipcResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 IPC Results</h3>';
        ipcResults.slice(0, 10).forEach(law => {
            resultsHTML += createResultCard(law, 'IPC');
        });
    }
    
    if (constitutionResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 Constitution Results</h3>';
        constitutionResults.slice(0, 5).forEach(law => {
            resultsHTML += createResultCard(law, 'Constitution');
        });
    }
    
    if (found) {
        document.getElementById('resultsContent').innerHTML = resultsHTML;
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').scrollIntoView({behavior: 'smooth'});
    } else {
        document.getElementById('resultsContent').innerHTML = '<p style="text-align:center; color:#666;">No results found. Try different keywords.</p>';
        document.getElementById('results').style.display = 'block';
    }
}

// Create result card HTML
function createResultCard(law, type) {
    const numberLabel = type === 'Constitution' ? 'Article ' : 'Section ';
    const id = type === 'Constitution' ? law.article : law.section;
    
    return `
        <div class="result-card">
            <h3>${law.title}</h3>
            <span class="section-number">${type} ${numberLabel}${id}</span>
            ${law.punishment ? `<span class="punishment">Punishment: ${law.punishment}</span>` : ''}
            ${law.category ? `<span class="category">${law.category}</span>` : ''}
        </div>
    `;
}

// Switch between tabs
function switchTab(tab) {
    currentTab = tab;
    
    // Update tab styling
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
    
    // Clear search
    document.getElementById('lawResults').innerHTML = '';
}

// Search by section number and keyword
function searchByKeyword(keyword) {
    if (!keyword || keyword.length < 1) {
        document.getElementById('lawResults').innerHTML = '';
        return;
    }
    
    let resultsHTML = '';
    let data;
    
    if (currentTab === 'bns') {
        data = bnsData;
    } else if (currentTab === 'ipc') {
        data = ipcData;
    } else {
        data = constitutionData;
    }
    
    const keywordNum = parseInt(keyword);
    const results = isNaN(keywordNum) 
        ? data.filter(law => law.title.toLowerCase().includes(keyword.toLowerCase()))
        : data.filter(law => law.section === keywordNum || law.article === keywordNum);
    
    if (results.length > 0) {
        results.forEach(law => {
            const label = currentTab === 'constitution' ? 'Article' : 'Section';
            const id = currentTab === 'constitution' ? law.article : law.section;
            
            resultsHTML += `
                <div class="result-card">
                    <h3>${law.title}</h3>
                    <span class="section-number">${label} ${id}</span>
                    ${law.punishment ? `<span class="punishment">${law.punishment}</span>` : ''}
                    ${law.chapter ? `<span class="category">Chapter ${law.chapter}</span>` : ''}
                    ${law.part ? `<span class="category">Part ${law.part}</span>` : ''}
                </div>
            `;
        });
    } else {
        resultsHTML = '<p style="text-align:center; color:#666;">No results found</p>';
    }
    
    document.getElementById('lawResults').innerHTML = resultsHTML;
}

// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({behavior: 'smooth'});
        
        // Update active state
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Handle section number input
document.getElementById('sectionNumber').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchBySection(this.value);
    }
});

function searchBySection(sectionNum) {
    if (!sectionNum) return;
    
    let resultsHTML = '';
    let data = currentTab === 'bns' ? bnsData : currentTab === 'ipc' ? ipcData : constitutionData;
    let section = parseInt(sectionNum);
    
    if (currentTab === 'constitution') {
        section = parseInt(sectionNum);
    }
    
    const results = data.filter(law => 
        law.section === section || law.article === section
    );
    
    if (results.length > 0) {
        results.forEach(law => {
            const label = currentTab === 'constitution' ? 'Article' : 'Section';
            const id = currentTab === 'constitution' ? law.article : law.section;
            
            resultsHTML += `
                <div class="result-card">
                    <h3>${law.title}</h3>
                    <span class="section-number">${label} ${id}</span>
                    ${law.punishment ? `<span class="punishment">${law.punishment}</span>` : ''}
                </div>
            `;
        });
    } else {
        resultsHTML = '<p style="text-align:center; color:#666;">Section not found</p>';
    }
    
    document.getElementById('lawResults').innerHTML = resultsHTML;
}
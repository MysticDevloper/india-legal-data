// India Legal Portal - Simple and Reliable JavaScript

// Global data
let bnsData = [];
let ipcData = [];
let constitutionData = [];

// Simple fallback data - works immediately
const fallbackBNS = [
    {section:92,title:"Punishment for rape",chapter:5,punishment:"Life/10 years"},
    {section:95,title:"Gang rape",chapter:5,punishment:"Death/Life"},
    {section:100,title:"Murder",chapter:6,punishment:"Death/Life"},
    {section:101,title:"Culpable homicide amounting to murder",chapter:6,punishment:"Death/Life"},
    {section:103,title:"Culpable homicide not amounting to murder",chapter:6,punishment:"Life/10 years"},
    {section:107,title:"Attempt to commit murder",chapter:6,punishment:"10 years"},
    {section:302,title:"Punishment for murder",chapter:16,punishment:"Death/Life"},
    {section:304,title:"Culpable homicide not amounting to murder",chapter:16,punishment:"Life/10 years"},
    {section:376,title:"Punishment for rape",chapter:16,punishment:"Life/10 years"},
    {section:420,title:"Cheating and dishonestly inducing delivery of property",chapter:18,punishment:"7 years"},
    {section:498,title:"Enticing or detaining a married woman",chapter:20,punishment:"2 years"},
    {section:306,title:"Abetment of suicide",chapter:16,punishment:"7 years"},
    {section:304A,title:"Causing death by negligence",chapter:16,punishment:"2 years"},
    {section:323,title:"Voluntarily causing hurt",chapter:16,punishment:"1 year"},
    {section:325,title:"Voluntarily causing grievous hurt",chapter:16,punishment:"7 years"},
    {section:326,title:"Voluntarily causing grievous hurt by dangerous weapons",chapter:16,punishment:"Life/10 years"},
    {section:354,title:"Assault or criminal force to woman with intent to outrage her modesty",chapter:16,punishment:"2 years"},
    {section:509,title:"Word, gesture or act intended to insult the modesty of a woman",chapter:21,punishment:"1 year"},
    {section:124,title:"Uttering words, etc with deliberate intent to wound religious feelings",chapter:6,punishment:"3 years"},
    {section:269,title:"Negligent act likely to spread infection of disease dangerous to life",chapter:14,punishment:"6 months"},
    {section:270,title:"Malignant act likely to spread infection",chapter:14,punishment:"2 years"},
];

const fallbackIPC = [
    {section:302,title:"Punishment for murder",chapter:16,punishment:"Death/Life"},
    {section:304,title:"Culpable homicide not amounting to murder",chapter:16,punishment:"Life/10 years"},
    {section:376,title:"Punishment for rape",chapter:16,punishment:"Life/10 years"},
    {section:420,title:"Cheating and dishonestly inducing delivery of property",chapter:18,punishment:"7 years"},
    {section:323,title:"Voluntarily causing hurt",chapter:16,punishment:"1 year"},
    {section:325,title:"Voluntarily causing grievous hurt",chapter:16,punishment:"7 years"},
    {section:354,title:"Assault or criminal force to woman with intent to outrage her modesty",chapter:16,punishment:"2 years"},
];

const fallbackConst = [
    {article:14,title:"Equality before law",part:1},
    {article:19,title:"Protection of certain rights regarding freedom of speech",part:3},
    {article:20,title:"Protection in respect of conviction for offences",part:3},
    {article:21,title:"Protection of life and personal liberty",part:3},
    {article:21A,title:"Right to privacy",part:3},
    {article:22,title:"Protection against arrest and detention",part:3},
    {article:32,title:"Remedies for enforcement of fundamental rights",part:3},
    {article:226,title:"Power of High Courts to issue writs",part:6},
];

// Initialize with fallback data immediately
bnsData = fallbackBNS;
ipcData = fallbackIPC;
constitutionData = fallbackConst;

// Try to load JSON data (but don't wait for it)
async function loadExternalData() {
    try {
        const bnsRes = await fetch('data/bns.json');
        if (bnsRes.ok) {
            const bnsJson = await bnsRes.json();
            if (bnsJson.sections && bnsJson.sections.length > 0) {
                bnsData = bnsJson.sections;
                console.log('Loaded BNS data:', bnsData.length, 'sections');
            }
        }
    } catch(e) { console.log('Using fallback BNS data'); }
    
    try {
        const ipcRes = await fetch('data/ipc.json');
        if (ipcRes.ok) {
            const ipcJson = await ipcRes.json();
            if (ipcJson.sections && ipcJson.sections.length > 0) {
                ipcData = ipcJson.sections;
                console.log('Loaded IPC data:', ipcData.length, 'sections');
            }
        }
    } catch(e) { console.log('Using fallback IPC data'); }
    
    try {
        const constRes = await fetch('data/constitution.json');
        if (constRes.ok) {
            const constJson = await constRes.json();
            if (constJson.articles && constJson.articles.length > 0) {
                constitutionData = constJson.articles;
                console.log('Loaded Constitution data:', constitutionData.length, 'articles');
            }
        }
    } catch(e) { console.log('Using fallback Constitution data'); }
}

// Load external data on page load
loadExternalData();

// Toggle mobile menu
function toggleMenu() {
    document.querySelector('nav').classList.toggle('show');
}

// Handle search button click
function handleSearch() {
    const query = document.getElementById('mainSearch').value;
    searchAll(query);
}

// Quick search from tags
function quickSearch(query) {
    document.getElementById('mainSearch').value = query;
    searchAll(query);
}

// Main search function
function searchAll(query) {
    const resultsSection = document.getElementById('results');
    const resultsContent = document.getElementById('resultsContent');
    
    if (!query || query.trim().length < 1) {
        resultsSection.style.display = 'none';
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    let resultsHTML = '';
    let hasResults = false;
    
    // Search BNS
    const bnsResults = bnsData.filter(law => 
        law.title && law.title.toLowerCase().includes(searchTerm)
    );
    
    if (bnsResults.length > 0) {
        hasResults = true;
        resultsHTML += '<h3>📜 BNS Results (' + bnsResults.length + ')</h3>';
        bnsResults.slice(0, 10).forEach(law => {
            resultsHTML += createResultCard(law, 'BNS');
        });
    }
    
    // Search IPC
    const ipcResults = ipcData.filter(law => 
        law.title && law.title.toLowerCase().includes(searchTerm)
    );
    
    if (ipcResults.length > 0) {
        hasResults = true;
        resultsHTML += '<h3>📜 IPC Results (' + ipcResults.length + ')</h3>';
        ipcResults.slice(0, 10).forEach(law => {
            resultsHTML += createResultCard(law, 'IPC');
        });
    }
    
    // Search Constitution
    const constResults = constitutionData.filter(law => 
        law.title && law.title.toLowerCase().includes(searchTerm)
    );
    
    if (constResults.length > 0) {
        hasResults = true;
        resultsHTML += '<h3>📜 Constitution Results (' + constResults.length + ')</h3>';
        constResults.slice(0, 10).forEach(law => {
            resultsHTML += createResultCard(law, 'Constitution');
        });
    }
    
    if (hasResults) {
        resultsContent.innerHTML = resultsHTML;
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({behavior: 'smooth'});
    } else {
        resultsContent.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">No results found for "' + query + '"</p>';
        resultsSection.style.display = 'block';
    }
}

// Create result card HTML
function createResultCard(law, type) {
    const id = law.section || law.article;
    const label = type === 'Constitution' ? 'Article' : 'Section';
    const punishmentText = law.punishment ? '<br><span class="punishment">Punishment: ' + law.punishment + '</span>' : '';
    
    return '<div class="result-card" onclick="showDetail(\'' + type + '\', ' + id + ')">' +
        '<h3>' + law.title + '</h3>' +
        '<span class="section-number">' + type + ' ' + label + ' ' + id + '</span>' +
        punishmentText +
        '<span class="click-hint">Click for details →</span>' +
        '</div>';
}

// Show detail modal
function showDetail(type, id) {
    const data = type === 'BNS' ? bnsData : (type === 'IPC' ? ipcData : constitutionData);
    const law = data.find(l => (l.section === id) || (l.article === id));
    
    if (!law) return;
    
    const label = type === 'Constitution' ? 'Article' : 'Section';
    const detailHTML = '<div class="modal-overlay" onclick="closeModal(event)">' +
        '<div class="modal-content">' +
        '<span class="modal-close" onclick="closeModal(event)">&times;</span>' +
        '<h2>' + law.title + '</h2>' +
        '<div class="modal-details">' +
        '<p><strong>Type:</strong> ' + type + '</p>' +
        '<p><strong>' + label + ':</strong> ' + id + '</p>' +
        (law.chapter ? '<p><strong>Chapter:</strong> ' + law.chapter + '</p>' : '') +
        (law.part ? '<p><strong>Part:</strong> ' + law.part + '</p>' : '') +
        (law.punishment ? '<p><strong>Punishment:</strong> ' + law.punishment + '</p>' : '') +
        '</div></div></div>';
    
    document.body.insertAdjacentHTML('beforeend', detailHTML);
}

// Close modal
function closeModal(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('modal-close')) {
        document.querySelector('.modal-overlay')?.remove();
    }
}

// Current tab
let currentTab = 'bns';

// Switch tabs
function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
    document.getElementById('lawResults').innerHTML = '';
}

// Search by keyword in section browser
function searchByKeyword(keyword) {
    if (!keyword || keyword.trim().length < 1) {
        document.getElementById('lawResults').innerHTML = '';
        return;
    }
    
    const searchTerm = keyword.toLowerCase().trim();
    let data = currentTab === 'bns' ? bnsData : (currentTab === 'ipc' ? ipcData : constitutionData);
    
    const results = data.filter(law => law.title && law.title.toLowerCase().includes(searchTerm));
    
    let resultsHTML = '';
    if (results.length > 0) {
        resultsHTML = '<h3>' + (currentTab === 'constitution' ? 'Articles' : 'Sections') + '</h3>';
        results.slice(0, 20).forEach(law => {
            resultsHTML += createResultCard(law, currentTab === 'constitution' ? 'Constitution' : (currentTab === 'bns' ? 'BNS' : 'IPC'));
        });
    } else {
        resultsHTML = '<p style="text-align:center; color:#666;">No results found</p>';
    }
    
    document.getElementById('lawResults').innerHTML = resultsHTML;
}

// Search by section number
function searchBySection() {
    const sectionNum = parseInt(document.getElementById('sectionNumber').value);
    if (!sectionNum) {
        document.getElementById('lawResults').innerHTML = '';
        return;
    }
    
    let data = currentTab === 'bns' ? bnsData : (currentTab === 'ipc' ? ipcData : constitutionData);
    
    let law = data.find(l => l.section === sectionNum || l.article === sectionNum);
    
    if (law) {
        const resultsHTML = createResultCard(law, currentTab === 'constitution' ? 'Constitution' : (currentTab === 'bns' ? 'BNS' : 'IPC'));
        document.getElementById('lawResults').innerHTML = resultsHTML;
    } else {
        document.getElementById('lawResults').innerHTML = '<p style="text-align:center; color:#666;">Section ' + sectionNum + ' not found</p>';
    }
}
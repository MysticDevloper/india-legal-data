// India Legal Portal - Complete Interactive JavaScript

// Global data variables
let bnsData = [];
let ipcData = [];
let constitutionData = [];
let currentTab = 'bns';
let allDataLoaded = false;

// Load all JSON data files
async function loadAllData() {
    try {
        // Load BNS data
        const bnsResponse = await fetch('data/bns.json');
        if (!bnsResponse.ok) throw new Error('BNS data not found');
        const bnsJson = await bnsResponse.json();
        bnsData = bnsJson.sections || bnsJson;
        
        // Load IPC data
        const ipcResponse = await fetch('data/ipc.json');
        if (!ipcResponse.ok) throw new Error('IPC data not found');
        const ipcJson = await ipcResponse.json();
        ipcData = ipcJson.sections;
        
        // Load Constitution data
        const constResponse = await fetch('data/constitution.json');
        if (!constResponse.ok) throw new Error('Constitution data not found');
        const constJson = await constResponse.json();
        constitutionData = constJson.articles;
        
        allDataLoaded = true;
        console.log('All data loaded successfully!');
        console.log('BNS:', bnsData.length, 'sections');
        console.log('IPC:', ipcData.length, 'sections');
        console.log('Constitution:', constitutionData.length, 'articles');
        
    } catch (error) {
        console.error('Error loading data:', error);
        // Try loading sample data as fallback
        loadSampleData();
        allDataLoaded = true;
    }
};

// Fallback sample data - includes key crimes like rape and murder
function loadSampleData() {
    // Complete BNS data (Sections 1-358)
    bnsData = [
        {section:1,title:"Short title, extent and commencement",chapter:1,punishment:null},
        {section:2,title:"Definitions",chapter:1,punishment:null},
        {section:3,title:"General explanations",chapter:1,punishment:null},
        {section:4,title:"Punishments",chapter:2,punishment:"Death/Imprisonment/Fine"},
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
        {section:498,title:"Enticing or taking away or detaining with criminal intent a married woman",chapter:20,punishment:"2 years"},
        {section:306,title:"Abetment of suicide",chapter:16,punishment:"7 years"},
        {section:304A,title:"Causing death by negligence",chapter:16,punishment:"2 years"},
        {section:323,title:"Voluntarily causing hurt",chapter:16,punishment:"1 year"},
        {section:325,title:"Voluntarily causing grievous hurt",chapter:16,punishment:"7 years"},
        {section:326,title:"Voluntarily causing grievous hurt by dangerous weapons",chapter:16,punishment:"Life/10 years"},
        {section:354,title:"Assault or criminal force to woman with intent to outrage her modesty",chapter:16,punishment:"2 years"},
        {section:509,title:"Word, gesture or act intended to insult the modesty of a woman",chapter:21,punishment:"1 year"},
    ];
    
    ipcData = [
        {section:302,title:"Punishment for murder",chapter:16,punishment:"Death/Life"},
        {section:304,title:"Culpable homicide not amounting to murder",chapter:16,punishment:"Life/10 years"},
        {section:376,title:"Punishment for rape",chapter:16,punishment:"Life/10 years"},
        {section:420,title:"Cheating and dishonestly inducing delivery of property",chapter:18,punishment:"7 years"},
    ];
    
    constitutionData = [
        {article:14,title:"Equality before law",part:1},
        {article:19,title:"Protection of certain rights regarding freedom of speech",part:3},
        {article:21,title:"Protection of life and personal liberty",part:3},
        {article:32,title:"Remedies for enforcement of fundamental rights",part:3},
    ];
    
    console.log('Sample data loaded');
}
        {section:5,title:"Commutation of sentence",chapter:2,punishment:null},
        {section:6,title:"Fractions of terms of punishment",chapter:2,punishment:null},
        {section:7,title:"Rigorous or simple imprisonment",chapter:2,punishment:null},
        {section:8,title:"Amount of fine",chapter:2,punishment:"Fine"},
        {section:9,title:"Imprisonment for non-payment of fine",chapter:2,punishment:"Imprisonment"},
        {section:10,title:"Fine not to bar imprisonment",chapter:2,punishment:null},
        {section:11,title:"Imprisonment to be simple",chapter:2,punishment:null},
        {section:12,title:"Limit of imprisonment",chapter:2,punishment:null},
        {section:13,title:"Limit of punishment",chapter:2,punishment:null},
        {section:14,title:"Act done by person bound by law",chapter:3,punishment:null},
        {section:15,title:"Act of Judge when acting judicially",chapter:3,punishment:null},
        {section:16,title:"Act done pursuant to judgment",chapter:3,punishment:null},
        {section:17,title:"Act done by person justified",chapter:3,punishment:null},
        {section:18,title:"Accident in doing lawful act",chapter:3,punishment:null},
        {section:19,title:"Act likely to cause harm without criminal intent",chapter:3,punishment:null},
        {section:20,title:"Act of child under seven years",chapter:3,punishment:null},
        {section:21,title:"Act of child above seven and under twelve",chapter:3,punishment:null},
        {section:22,title:"Act of person of unsound mind",chapter:3,punishment:null},
        {section:23,title:"Act of person intoxicated",chapter:3,punishment:null},
        {section:24,title:"Offence requiring intent by intoxicated person",chapter:3,punishment:null},
        {section:25,title:"Act not intended to cause death by consent",chapter:3,punishment:null},
        {section:26,title:"Act done for benefit of child",chapter:3,punishment:null},
        {section:27,title:"Consent under fear",chapter:3,punishment:null},
        {section:28,title:"Exclusion of acts",chapter:3,punishment:null},
        {section:29,title:"Act done in good faith",chapter:3,punishment:null},
        {section:30,title:"Communication in good faith",chapter:3,punishment:null},
        {section:31,title:"Person under threat",chapter:3,punishment:null},
        {section:32,title:"Act causing slight harm",chapter:3,punishment:null},
        {section:33,title:"Things done in private defence",chapter:3,punishment:null},
        {section:34,title:"Right of private defence",chapter:3,punishment:null},
        {section:35,title:"Right of private defence",chapter:3,punishment:null},
        {section:36,title:"Acts against which no right of private defence",chapter:3,punishment:null},
        {section:37,title:"Right of private defence extends to death",chapter:3,punishment:null},
        {section:38,title:"Right extends to causing harm",chapter:3,punishment:null},
        {section:39,title:"Commencement of right of private defence",chapter:3,punishment:null},
        {section:40,title:"Right of private defence of property",chapter:3,punishment:null},
        {section:41,title:"Right of private defence of property",chapter:3,punishment:null},
        {section:42,title:"Abetment of self-injury",chapter:3,punishment:null},
        {section:43,title:"Right of private defence",chapter:3,punishment:null},
        {section:44,title:"General exceptions",chapter:3,punishment:null},
        {section:45,title:"Abetment of a thing",chapter:4,punishment:"Various"},
        {section:46,title:"Abettor",chapter:4,punishment:null},
        {section:47,title:"Abetment in India of offence outside India",chapter:4,punishment:null},
        {section:48,title:"Punishment of abetment if act committed",chapter:4,punishment:"Life/7 years"},
        {section:49,title:"Punishment of abetment",chapter:4,punishment:"Various"},
        {section:50,title:"Liability of abettor",chapter:4,punishment:null},
        {section:51,title:"Abettor liable to cumulative punishment",chapter:4,punishment:null},
        {section:52,title:"Liability of abettor for act done",chapter:4,punishment:null},
        {section:53,title:"Abettor present when offence committed",chapter:4,punishment:null},
        {section:54,title:"Abetment of offence punishable with death",chapter:4,punishment:"Life/10 years"},
        {section:55,title:"Abetment of offence",chapter:4,punishment:"1/4 of max"},
        {section:56,title:"Abetting commission of offence by public",chapter:4,punishment:"7 years"},
        {section:57,title:"Concealing design to commit offence",chapter:4,punishment:"6 months"},
        {section:58,title:"Public servant concealing design",chapter:4,punishment:"Various"},
        {section:59,title:"Concealing design to commit offence",chapter:4,punishment:"6 months"},
        {section:60,title:"Criminal conspiracy",chapter:4,punishment:null},
        {section:61,title:"Punishment of criminal conspiracy",chapter:4,punishment:"Life/6 months"},
        {section:62,title:"Punishment for attempting offences",chapter:4,punishment:"Various"},
        {section:63,title:"Offences against woman and child",chapter:5,punishment:null},
        {section:64,title:"Punishment for murder of child",chapter:5,punishment:"Death/Life"},
        {section:65,title:"Medical termination of pregnancy",chapter:5,punishment:"3 years"},
        {section:66,title:"Causing miscarriage without consent",chapter:5,punishment:"Life"},
        {section:67,title:"Causing miscarriage with consent",chapter:5,punishment:"3 years"},
        {section:68,title:"Act done in good faith",chapter:5,punishment:null},
        {section:69,title:"Causing death of quick unborn child",chapter:5,punishment:"Life"},
        {section:70,title:"Exposure of child",chapter:5,punishment:"7 years"},
        {section:71,title:"Concealment of birth",chapter:5,punishment:"2 years"},
        {section:72,title:"Kidnapping child under ten years",chapter:5,punishment:"Life"},
        {section:73,title:"Kidnapping or abducting person",chapter:5,punishment:"7 years"},
        {section:74,title:"Kidnapping with intent to murder",chapter:5,punishment:"Death/Life"},
        {section:75,title:"Kidnapping for ransom",chapter:5,punishment:"Death/Life"},
        {section:76,title:"Kidnapping to confine",chapter:5,punishment:"7 years"},
        {section:77,title:"Kidnapping woman to compel marriage",chapter:5,punishment:"Life"},
        {section:78,title:"Stalking",chapter:5,punishment:"3 years"},
        {section:79,title:"Word gesture act to insult modesty",chapter:5,punishment:"1 year"},
        {section:80,title:"Dowry death",chapter:5,punishment:"Life/7 years"},
        {section:81,title:"Cohabitation by deceit",chapter:5,punishment:"Life"},
        {section:82,title:"Marrying again during lifetime",chapter:5,punishment:"7 years"},
        {section:83,title:"Same offence with concealment",chapter:5,punishment:"10 years"},
        {section:84,title:"Marriage ceremony fraudulently",chapter:5,punishment:"1 year"},
        {section:85,title:"Sexual intercourse by husband during separation",chapter:5,punishment:"2 years"},
        {section:86,title:"Sexual intercourse without consent",chapter:5,punishment:"2 years"},
        {section:87,title:"Sexual harassment",chapter:5,punishment:"3 years"},
        {section:88,title:"Assault to outrage modesty",chapter:5,punishment:"2 years"},
        {section:89,title:"Voyeurism",chapter:5,punishment:"3 years"},
        {section:90,title:"Stalking",chapter:5,punishment:"3 years"},
        {section:91,title:"Sexual intercourse by deception",chapter:5,punishment:"5 years"},
        {section:92,title:"Punishment for rape",chapter:5,punishment:"Life/10 years"},
        {section:93,title:"Rape of woman under 18",chapter:5,punishment:"Life/13 years"},
        {section:94,title:"Sexual assault by armed forces",chapter:5,punishment:"Life"},
        {section:95,title:"Gang rape",chapter:5,punishment:"Death/Life"},
        {section:96,title:"Repeat offenders",chapter:5,punishment:"Death"},
        {section:97,title:"Unnatural offences",chapter:5,punishment:"Life/10 years"},
        {section:98,title:"Offences against woman and child",chapter:5,punishment:null},
        {section:99,title:"Punishment for offences",chapter:5,punishment:"Various"},
        {section:100,title:"Murder",chapter:6,punishment:"Death/Life"},
        {section:101,title:"Culpable homicide amounting to murder",chapter:6,punishment:"Death/Life"},
        {section:102,title:"Murder by convict",chapter:6,punishment:"Death"},
        {section:103,title:"Culpable homicide not amounting to murder",chapter:6,punishment:"Life/10 years"},
        {section:104,title:"Causing death by negligence",chapter:6,punishment:"5 years"},
        {section:105,title:"Dowry death",chapter:6,punishment:"Life/7 years"},
        {section:106,title:"Abetting suicide",chapter:6,punishment:"Life/7 years"},
        {section:107,title:"Attempt to commit murder",chapter:6,punishment:"10 years"},
        {section:108,title:"Attempt to commit culpable homicide",chapter:6,punishment:"3 years"},
        {section:109,title:"Attempt to commit suicide",chapter:6,punishment:"1 year"},
        {section:110,title:"Thug",chapter:6,punishment:"Death"},
        {section:111,title:"Punishment for being thug",chapter:6,punishment:"Death"},
        {section:112,title:"Causing miscarriage",chapter:6,punishment:"3 years"},
        {section:113,title:"Causing miscarriage without consent",chapter:6,punishment:"Life"},
        {section:114,title:"Causing death of quick unborn child",chapter:6,punishment:"Life"},
        {section:115,title:"Hurt",chapter:6,punishment:"3 months"},
        {section:116,title:"Grievous hurt",chapter:6,punishment:null},
        {section:117,title:"Voluntarily causing hurt",chapter:6,punishment:"3 years"},
        {section:118,title:"Voluntarily causing grievous hurt",chapter:6,punishment:"7 years"},
        {section:119,title:"Voluntarily causing hurt by dangerous weapons",chapter:6,punishment:"3 years"},
        {section:120,title:"Voluntarily causing grievous hurt",chapter:6,punishment:"Life"},
        {section:121,title:"Voluntarily causing hurt by acid attack",chapter:6,punishment:"Life"},
        {section:122,title:"Voluntarily throwing acid",chapter:6,punishment:"5 years"},
        {section:123,title:"Voluntarily causing hurt to extort confession",chapter:6,punishment:"7 years"},
        {section:124,title:"Causing grievous hurt to extort confession",chapter:6,punishment:"Life"},
        {section:125,title:"Kidnapping or abducting",chapter:7,punishment:"7 years"},
        {section:126,title:"Kidnapping child under ten",chapter:7,punishment:"Life"},
        {section:127,title:"Kidnapping with intent to murder",chapter:7,punishment:"Death/Life"},
        {section:128,title:"Kidnapping for ransom",chapter:7,punishment:"Death/Life"},
        {section:129,title:"Kidnapping to confine",chapter:7,punishment:"7 years"},
        {section:130,title:"Kidnapping woman to compel marriage",chapter:7,punishment:"Life"},
        {section:131,title:"Procuration of minor girl",chapter:7,punishment:"Life"},
        {section:132,title:"Importation of girl from foreign country",chapter:7,punishment:"Life"},
        {section:133,title:"Kidnapping to subject to grievous hurt",chapter:7,punishment:"Life"},
        {section:134,title:"Wrongfully concealing kidnapped person",chapter:7,punishment:"Various"},
        {section:135,title:"Trafficking of person",chapter:7,punishment:"Life"},
        {section:136,title:"Exploitation of trafficked person",chapter:7,punishment:"3 years"},
        {section:137,title:"Habitual dealing in slaves",chapter:7,punishment:"Life"},
        {section:138,title:"Theft",chapter:8,punishment:"3 years"},
        {section:139,title:"Theft in dwelling house",chapter:8,punishment:"7 years"},
        {section:140,title:"Theft by clerk or servant",chapter:8,punishment:"7 years"},
        {section:141,title:"Theft after preparation",chapter:8,punishment:"10 years"},
        {section:142,title:"Theft",chapter:8,punishment:"3 years"},
        {section:143,title:"Extortion",chapter:8,punishment:"3 years"},
        {section:144,title:"Putting person in fear of injury",chapter:8,punishment:"1 year"},
        {section:145,title:"Extortion by fear of death",chapter:8,punishment:"10 years"},
        {section:146,title:"Putting fear of death to commit extortion",chapter:8,punishment:"14 years"},
        {section:147,title:"Robbery",chapter:8,punishment:"10 years"},
        {section:148,title:"Attempt to commit robbery",chapter:8,punishment:"7 years"},
        {section:149,title:"Voluntarily causing hurt in committing robbery",chapter:8,punishment:"Life"},
        {section:150,title:"Dacoity",chapter:8,punishment:"Life/10 years"},
        {section:151,title:"Dacoity with murder",chapter:8,punishment:"Death/Life"},
        {section:152,title:"Robbery or dacoity with attempt to cause death",chapter:8,punishment:"14 years"},
        {section:153,title:"Attempt to commit robbery or dacoity",chapter:8,punishment:"7 years"},
        {section:154,title:"Criminal misappropriation",chapter:8,punishment:"2 years"},
        {section:155,title:"Criminal breach of trust",chapter:8,punishment:"3 years"},
        {section:156,title:"Criminal breach of trust by clerk",chapter:8,punishment:"Life"},
        {section:157,title:"Criminal breach of trust by public servant",chapter:8,punishment:"Life"},
        {section:158,title:"Criminal breach of trust by bank",chapter:8,punishment:"Life"},
        {section:159,title:"Stolen property",chapter:8,punishment:null},
        {section:160,title:"Cheating",chapter:8,punishment:"3 years"},
        {section:161,title:"Cheating with knowledge",chapter:8,punishment:"3 years"},
        {section:162,title:"Cheating and dishonestly inducing delivery",chapter:8,punishment:"7 years"},
        {section:163,title:"Cheating",chapter:8,punishment:"3 years"},
        {section:164,title:"Mischief",chapter:8,punishment:"3 months"},
        {section:165,title:"Mischief causing damage",chapter:8,punishment:"2 years"},
        {section:166,title:"Mischief with intent to destroy house",chapter:8,punishment:"Life"},
        {section:167,title:"Mischief with fire or explosive",chapter:8,punishment:"Life"},
        {section:168,title:"Criminal trespass",chapter:8,punishment:"3 months"},
        {section:169,title:"House-trespass",chapter:8,punishment:"2 years"},
        {section:170,title:"House-trespass to commit offence",chapter:8,punishment:"Death"},
        {section:171,title:"Lurking house-trespass",chapter:8,punishment:"2 years"},
        {section:172,title:"Lurking house-trespass to commit offence",chapter:8,punishment:"3 years"},
        {section:173,title:"House-breaking",chapter:8,punishment:"3 years"},
        {section:174,title:"House-breaking to commit offence",chapter:8,punishment:"8 years"},
        {section:175,title:"Grievous hurt caused while committing house-break",chapter:8,punishment:"Life"},
        {section:176,title:"All persons jointly concerned in house-breaking",chapter:8,punishment:"Life"},
        {section:177,title:"Forgery",chapter:8,punishment:"2 years"},
        {section:178,title:"Forgery of document",chapter:8,punishment:"7 years"},
        {section:179,title:"Forgery of valuable security",chapter:8,punishment:"Life"},
        {section:180,title:"Forgery for cheating",chapter:8,punishment:"7 years"},
        {section:181,title:"Forgery for harming reputation",chapter:8,punishment:"3 years"},
        {section:182,title:"Using as genuine forged document",chapter:8,punishment:"2 years"},
        {section:183,title:"Making or possessing counterfeit seal",chapter:8,punishment:"7 years"},
        {section:184,title:"Making counterfeit seal for forged document",chapter:8,punishment:"Life"},
        {section:185,title:"Having possession of forged document",chapter:8,punishment:"3 years"},
        {section:186,title:"Counterfeit device or mark",chapter:8,punishment:"3 years"},
        {section:187,title:"Fraudulent cancellation of will",chapter:8,punishment:"Life"},
        {section:188,title:"Offences relating to marriage",chapter:11,punishment:null},
        {section:189,title:"Cruelty by husband or relatives",chapter:11,punishment:"3 years"},
        {section:190,title:"Enticing or detaining married woman",chapter:11,punishment:"2 years"},
        {section:191,title:"Bigamy",chapter:11,punishment:"7 years"},
        {section:192,title:"Marrying again during lifetime",chapter:11,punishment:"10 years"},
        {section:193,title:"Adultery",chapter:11,punishment:"5 years"},
        {section:194,title:"Enticing or taking away person",chapter:11,punishment:null},
        {section:195,title:"Cruelty by husband",chapter:11,punishment:"3 years"},
        {section:196,title:"Kidnapping or abducting woman",chapter:11,punishment:null},
        {section:197,title:"Procuration of minor girl",chapter:11,punishment:null},
        {section:198,title:"Offences relating to public servants",chapter:12,punishment:null},
        {section:199,title:"Taking or giving bribe",chapter:12,punishment:"3 years"},
        {section:200,title:"Taking gratification",chapter:12,punishment:"3 years"},
        {section:201,title:"Taking gratification for influence",chapter:12,punishment:"1 year"},
        {section:202,title:"Public servant disobeying law",chapter:12,punishment:"1 year"},
        {section:203,title:"Public servant disobeying direction",chapter:12,punishment:"2 years"},
        {section:204,title:"Public servant framing incorrect document",chapter:12,punishment:"3 years"},
        {section:205,title:"Public servant engaging in trade",chapter:12,punishment:"1 year"},
        {section:206,title:"Contempts of lawful authority",chapter:13,punishment:null},
        {section:207,title:"Absconding to avoid summons",chapter:13,punishment:"1 month"},
        {section:208,title:"Preventing service of summons",chapter:13,punishment:"1 month"},
        {section:209,title:"Service or execution of process",chapter:13,punishment:"1 month"},
        {section:210,title:"Furnishing false information",chapter:13,punishment:"6 months"},
        {section:211,title:"Omission to produce document",chapter:13,punishment:"1 month"},
        {section:212,title:"Furnishing false information",chapter:13,punishment:"6 months"},
        {section:213,title:"Refusing oath or affirmation",chapter:13,punishment:"6 months"},
        {section:214,title:"Refusing to answer public servant",chapter:13,punishment:"6 months"},
        {section:215,title:"Refusing to sign statement",chapter:13,punishment:"3 months"},
        {section:216,title:"False statement on oath",chapter:13,punishment:"3 years"},
        {section:217,title:"False information to public servant",chapter:13,punishment:"6 months"},
        {section:218,title:"Concealing design to commit offence",chapter:13,punishment:"6 months"},
        {section:219,title:"Disobedience to order",chapter:13,punishment:"1 month"},
        {section:220,title:"Threat of injury to public servant",chapter:13,punishment:null},
        {section:221,title:"Threat of injury to induce person",chapter:13,punishment:"1 year"},
        {section:222,title:"General provisions",chapter:13,punishment:null},
        {section:223,title:"False evidence",chapter:14,punishment:"7 years"},
        {section:224,title:"Fabricating false evidence",chapter:14,punishment:"7 years"},
        {section:225,title:"Punishment for false evidence",chapter:14,punishment:"7 years"},
        {section:226,title:"False evidence to procure conviction",chapter:14,punishment:"Life"},
        {section:227,title:"Threat of injury to witness",chapter:14,punishment:"7 years"},
        {section:228,title:"Using evidence known to be false",chapter:14,punishment:"3 years"},
        {section:229,title:"Issuing false certificate",chapter:14,punishment:"7 years"},
        {section:230,title:"Using false certificate",chapter:14,punishment:"2 years"},
        {section:231,title:"False statement in declaration",chapter:14,punishment:"3 years"},
        {section:232,title:"Causing disappearance of evidence",chapter:14,punishment:"Various"},
        {section:233,title:"Intentional omission to give information",chapter:14,punishment:"6 months"},
        {section:234,title:"Giving false information",chapter:14,punishment:"2 years"},
        {section:235,title:"Secret concealment of offence",chapter:14,punishment:"2 years"},
        {section:236,title:"False personation",chapter:14,punishment:"3 years"},
        {section:237,title:"Fraudulent removal of property",chapter:14,punishment:"2 years"},
        {section:238,title:"Fraudulently suffering decree",chapter:14,punishment:"2 years"},
        {section:239,title:"False claim in Court",chapter:14,punishment:"2 years"},
        {section:240,title:"Taking gift to screen offender",chapter:14,punishment:"Various"},
        {section:241,title:"False charge made with intent to injure",chapter:14,punishment:"2 years"},
        {section:242,title:"Harbouring offender",chapter:14,punishment:"Various"},
        {section:243,title:"Public servant disobeying direction",chapter:14,punishment:"2 years"},
        {section:244,title:"Public servant framing incorrect record",chapter:14,punishment:"3 years"},
        {section:245,title:"Public servant medically examining wrongly",chapter:14,punishment:"1 year"},
        {section:246,title:"Commitment for trial wrongly",chapter:14,punishment:null},
        {section:247,title:"Intentional omission to apprehend",chapter:14,punishment:"Various"},
        {section:248,title:"Resistance to lawful authority",chapter:14,punishment:"2 years"},
        {section:249,title:"Obstructing sale of property",chapter:14,punishment:"1 month"},
        {section:250,title:"Violation of condition of remission",chapter:14,punishment:"1 year"},
        {section:251,title:"Intentional insult to public servant",chapter:14,punishment:"6 months"},
        {section:252,title:"False certificate",chapter:14,punishment:"2 years"},
        {section:253,title:"Failure to appear in response to proclamation",chapter:14,punishment:"3 years"},
        {section:254,title:"Offences affecting public health",chapter:15,punishment:null},
        {section:255,title:"Public nuisance",chapter:15,punishment:"3 months"},
        {section:256,title:"Negligent act likely to spread infection",chapter:15,punishment:"6 months"},
        {section:257,title:"Malignant act likely to spread infection",chapter:15,punishment:"2 years"},
        {section:258,title:"Disobedience to quarantine rule",chapter:15,punishment:"6 months"},
        {section:259,title:"Adulteration of food or drink",chapter:15,punishment:"3 years"},
        {section:260,title:"Sale of adulterated provisions",chapter:15,punishment:"3 years"},
        {section:261,title:"Sale of drugs",chapter:15,punishment:"3 years"},
        {section:262,title:"Sale of drug as different drug",chapter:15,punishment:"2 years"},
        {section:263,title:"Fraudulent use of false weights",chapter:15,punishment:"1 year"},
        {section:264,title:"Fraudulent use of false measures",chapter:15,punishment:"3 years"},
        {section:265,title:"Being in possession of false weights",chapter:15,punishment:"1 month"},
        {section:266,title:"Dealing in provisions",chapter:15,punishment:"1 month"},
        {section:267,title:"Corrupt following dead person",chapter:15,punishment:"5 years"},
        {section:268,title:"Cruelty to animals",chapter:15,punishment:"3 months"},
        {section:269,title:"Killing animals",chapter:15,punishment:"5 years"},
        {section:270,title:"Causing pain to animals",chapter:15,punishment:"1 month"},
        {section:271,title:"Rash driving or riding",chapter:15,punishment:"6 months"},
        {section:272,title:"Rash navigation of vessel",chapter:15,punishment:"6 months"},
        {section:273,title:"Fraudulent conveyance of property",chapter:15,punishment:"3 years"},
        {section:274,title:"Conveying person in vehicle",chapter:15,punishment:"3 months"},
        {section:275,title:"Obstruction on road",chapter:15,punishment:"3 months"},
        {section:276,title:"Negligent conduct with explosives",chapter:15,punishment:"2 years"},
        {section:277,title:"Negligent conduct with fire",chapter:15,punishment:"7 years"},
        {section:278,title:"Negligent conduct with explosives",chapter:15,punishment:"4 years"},
        {section:279,title:"Disobedience to rule of road",chapter:15,punishment:"3 months"},
        {section:280,title:"Trespassing on aircraft",chapter:15,punishment:"2 years"},
        {section:281,title:"Damage to monuments",chapter:15,punishment:"5 years"},
        {section:282,title:"Violation of custom act",chapter:15,punishment:"6 months"},
        {section:283,title:"Offences relating to religion",chapter:16,punishment:null},
        {section:284,title:"Uttering words to wound religious feelings",chapter:16,punishment:"3 years"},
        {section:285,title:"Disturbing religious assembly",chapter:16,punishment:"1 year"},
        {section:286,title:"Trespassing on burial places",chapter:16,punishment:"1 year"},
        {section:287,title:"Destroying object of historic importance",chapter:16,punishment:"2 years"},
        {section:288,title:"Writing or engraving abuse",chapter:16,punishment:"1 year"},
        {section:289,title:"Defamation",chapter:17,punishment:"2 years"},
        {section:290,title:"Printing defamatory matter",chapter:17,punishment:"2 years"},
        {section:291,title:"Sale of printed matter",chapter:17,punishment:"1 year"},
        {section:292,title:"Criminal intimidation",chapter:18,punishment:"2 years"},
        {section:293,title:"Intentional insult to provoke breach of peace",chapter:18,punishment:"2 years"},
        {section:294,title:"Statement to cause public mischief",chapter:18,punishment:"3 years"},
        {section:295,title:"Criminal intimidation by anonymous communication",chapter:18,punishment:"2 years"},
        {section:296,title:"Act caused by inducing belief of divine displeasure",chapter:18,punishment:"1 year"},
        {section:297,title:"Breach of contract to attend on wants",chapter:18,punishment:"1 month"},
        {section:298,title:"Offences against State",chapter:7,punishment:null},
        {section:299,title:"Waging war against Government of India",chapter:7,punishment:"Death/Life"},
        {section:300,title:"Conspiracy to commit war",chapter:7,punishment:"Life"},
        {section:301,title:"Collecting arms to wage war",chapter:7,punishment:"Life/7 years"},
        {section:302,title:"Concealing with intent to facilitate uprising",chapter:7,punishment:"Life/7 years"},
        {section:303,title:"Assaulting President Governor",chapter:7,punishment:"Life/7 years"},
        {section:304,title:"Sedition",chapter:7,punishment:"Life/3 years"},
        {section:305,title:"Waging war against foreign State",chapter:7,punishment:"Life/7 years"},
        {section:306,title:"Committing depredation on foreign State",chapter:7,punishment:"Life/7 years"},
        {section:307,title:"Receiving property taken in war",chapter:7,punishment:"Various"},
        {section:308,title:"Public servant receiving gift",chapter:7,punishment:null},
        {section:309,title:"Abetting mutiny",chapter:7,punishment:"Life/7 years"},
        {section:310,title:"Abetting desertion",chapter:7,punishment:"Death"},
        {section:311,title:"Desertion by soldier",chapter:7,punishment:null},
        {section:312,title:"Abandoning duty by soldier",chapter:7,punishment:null},
        {section:313,title:"Suspending office or quitting service",chapter:7,punishment:null},
        {section:314,title:"Selling arms to enemy",chapter:7,punishment:null},
        {section:315,title:"Trading with enemy",chapter:7,punishment:null},
        {section:316,title:"Offences relating to forces",chapter:7,punishment:null},
        {section:317,title:"Using arms to cause death",chapter:7,punishment:"Death/Life"},
        {section:318,title:"Unlawful assembly",chapter:9,punishment:null},
        {section:319,title:"Being member of unlawful assembly",chapter:9,punishment:null},
        {section:320,title:"Punishment for unlawful assembly",chapter:9,punishment:"3 years"},
        {section:321,title:"Joining unlawful assembly armed",chapter:9,punishment:"3 years"},
        {section:322,title:"Joining assembly knowing commanded to disperse",chapter:9,punishment:"2 years"},
        {section:323,title:"Rioting",chapter:9,punishment:"3 years"},
        {section:324,title:"Rioting armed with deadly weapon",chapter:9,punishment:"5 years"},
        {section:325,title:"Every member of unlawful assembly guilty",chapter:9,punishment:null},
        {section:326,title:"Hiring persons to join unlawful assembly",chapter:9,punishment:null},
        {section:327,title:"Assaulting or obstructing public servant",chapter:9,punishment:"3 years"},
        {section:328,title:"Wantonly giving provocation",chapter:9,punishment:"1 year"},
        {section:329,title:"Promoting enmity between groups",chapter:9,punishment:"3 years"},
        {section:330,title:"Carrying arms in procession",chapter:9,punishment:"2 years"},
        {section:331,title:"Public mischief",chapter:9,punishment:null},
        {section:332,title:"Rash driving",chapter:9,punishment:"6 months"},
        {section:333,title:"Negligent conduct with animals",chapter:9,punishment:"3 months"},
        {section:334,title:"Negligent conduct with buildings",chapter:9,punishment:"2 years"},
        {section:335,title:"Endangering life by omission",chapter:9,punishment:"3 years"},
        {section:336,title:"Rash act causing danger to life",chapter:9,punishment:"3 months"},
        {section:337,title:"Rash navigation causing danger",chapter:9,punishment:"6 months"},
        {section:338,title:"Negligent conduct with explosives",chapter:9,punishment:"2 years"},
        {section:339,title:"Mischief by fire",chapter:9,punishment:"7 years"},
        {section:340,title:"Mischief with explosive substance",chapter:9,punishment:"14 years"},
        {section:341,title:"Mischief with destructive weapons",chapter:9,punishment:"Life"},
        {section:342,title:"Punishment for dacoity",chapter:9,punishment:"Life"},
        {section:343,title:"Making preparation to commit dacoity",chapter:9,punishment:"10 years"},
        {section:344,title:"Belonging to gang of dacoits",chapter:9,punishment:"Life"},
        {section:345,title:"Belonging to gang of thieves",chapter:9,punishment:"7 years"},
        {section:346,title:"Assembling for dacoity",chapter:9,punishment:"Life"},
        {section:347,title:"Offences relating to coins",chapter:10,punishment:null},
        {section:348,title:"Counterfeiting coin",chapter:10,punishment:"Death/Life"},
        {section:349,title:"Making instrument for counterfeiting coin",chapter:10,punishment:"Life"},
        {section:350,title:"Possession of instrument for counterfeiting",chapter:10,punishment:"7 years"},
        {section:351,title:"Abettor in coinage",chapter:10,punishment:"7 years"},
        {section:352,title:"Import or export of counterfeit coin",chapter:10,punishment:"Life"},
        {section:353,title:"Offences relating to bank notes",chapter:10,punishment:null},
        {section:354,title:"Counterfeiting currency note",chapter:10,punishment:"Death/Life"},
        {section:355,title:"Having possession of counterfeit currency",chapter:10,punishment:"3 years"},
        {section:356,title:"Using counterfeit currency",chapter:10,punishment:"7 years"},
        {section:357,title:"Offences of public servants",chapter:9,punishment:null},
        {section:358,title:"Repeal and savings",chapter:20,punishment:null}
    ];
    
    // Complete IPC data (Sections 1-511)
    ipcData = [
        {section:1,title:"Title and extent",chapter:1},{section:2,title:"Punishment of offences within India",chapter:1},
        {section:3,title:"Punishment of offences beyond India",chapter:1},{section:4,title:"Extension to extra-territorial",chapter:1},
        {section:5,title:"Certain laws not affected",chapter:1},{section:6,title:"Definitions",chapter:2},
        {section:7,title:"Sense of expression",chapter:2},{section:8,title:"Gender",chapter:2},
        {section:9,title:"Number",chapter:2},{section:10,title:"Man Woman",chapter:2},
        {section:11,title:"Person",chapter:2},{section:12,title:"Public",chapter:2},
        {section:13,title:"Repealed",chapter:2},{section:14,title:"Servant of Government",chapter:2},
        {section:15,title:"Definition of Queen",chapter:2},{section:16,title:"Repealed",chapter:2},
        {section:17,title:"Definition of Public servant",chapter:2},{section:18,title:"India",chapter:2},
        {section:19,title:"Meaning of Year Month",chapter:2},{section:20,title:"Court of Justice",chapter:2},
        {section:21,title:"Public servant",chapter:2},{section:22,title:"Movable property",chapter:2},
        {section:23,title:"Wrongful gain Wrongful loss",chapter:2},{section:24,title:"Dishonestly",chapter:2},
        {section:25,title:"Fraudulently",chapter:2},{section:26,title:"Reason to believe",chapter:2},
        {section:27,title:"Property in possession of wife",chapter:2},{section:28,title:"Counterfeit",chapter:2},
        {section:29,title:"Document",chapter:2},{section:30,title:"Valuable security",chapter:2},
        {section:31,title:"A will",chapter:2},{section:32,title:"Words referring to acts",chapter:2},
        {section:33,title:"Act Omission",chapter:2},{section:34,title:"Acts done by several persons",chapter:2},
        {section:35,title:"When several persons liable",chapter:2},{section:36,title:"Each person liable",chapter:2},
        {section:37,title:"Co-operation",chapter:2},{section:38,title:"Persons concerned",chapter:2},
        {section:39,title:"Voluntarily",chapter:2},{section:40,title:"Offence",chapter:2},
        {section:41,title:"Special law",chapter:2},{section:42,title:"Local law",chapter:2},
        {section:43,title:"Illegal Legally bound",chapter:2},{section:44,title:"Injury",chapter:2},
        {section:45,title:"Life",chapter:2},{section:46,title:"Death",chapter:2},
        {section:47,title:"Animal",chapter:2},{section:48,title:"Vessel",chapter:2},
        {section:49,title:"Year Month",chapter:2},{section:50,title:"Section",chapter:2},
        {section:51,title:"Oath",chapter:2},{section:52,title:"Good faith",chapter:2},
        {section:53,title:"Punishments",chapter:3,punishment:"Death/Imprisonment/Fine"},
        {section:54,title:"Commutation of death sentence",chapter:3},{section:55,title:"Commutation of life imprisonment",chapter:3},
        {section:56,title:"Repealed",chapter:3},{section:57,title:"Fractions of terms",chapter:3},
        {section:58,title:"Repealed",chapter:3},{section:59,title:"Repealed",chapter:3},
        {section:60,title:"Rigorous or simple imprisonment",chapter:3},{section:61,title:"Repealed",chapter:3},
        {section:62,title:"Repealed",chapter:3},{section:63,title:"Amount of fine",chapter:3},
        {section:64,title:"Imprisonment for non-payment of fine",chapter:3},{section:65,title:"Fine only offence",chapter:3},
        {section:66,title:"Fine not to bar imprisonment",chapter:3},{section:67,title:"Imprisonment simple",chapter:3},
        {section:68,title:"Period of detention",chapter:3},{section:69,title:"Deduction from imprisonment",chapter:3},
        {section:70,title:"Imprisonment not exceed limit",chapter:3},{section:71,title:"Limit of punishment",chapter:3},
        {section:72,title:"Punishment of one of several offences",chapter:3},{section:73,title:"Solitary confinement",chapter:3},
        {section:74,title:"Limit of solitary confinement",chapter:3},{section:75,title:"Enhanced punishment",chapter:3},
        {section:76,title:"Act done by person bound by law",chapter:4},{section:77,title:"Act of Judge",chapter:4},
        {section:78,title:"Act done pursuant to judgment",chapter:4},{section:79,title:"Act justified by law",chapter:4},
        {section:80,title:"Accident in doing lawful act",chapter:4},{section:81,title:"Act likely to cause harm",chapter:4},
        {section:82,title:"Act of child under seven",chapter:4},{section:83,title:"Act of child above seven",chapter:4},
        {section:84,title:"Act of person of unsound mind",chapter:4},{section:85,title:"Act of intoxicated person",chapter:4},
        {section:86,title:"Offence requiring intent",chapter:4},{section:87,title:"Act not intended to cause death by consent",chapter:4},
        {section:88,title:"Act not intended by consent",chapter:4},{section:89,title:"Act done for benefit of child",chapter:4},
        {section:90,title:"Consent under fear",chapter:4},{section:91,title:"Exclusion of acts",chapter:4},
        {section:92,title:"Act done for benefit of another",chapter:4},{section:93,title:"Communication in good faith",chapter:4},
        {section:94,title:"Person under threat",chapter:4},{section:95,title:"Act causing slight harm",chapter:4},
        {section:96,title:"Things done in private defence",chapter:4},{section:97,title:"Right of private defence",chapter:4},
        {section:98,title:"Right of private defence",chapter:4},{section:99,title:"Acts against which no right",chapter:4},
        {section:100,title:"Right of private defence extends to death",chapter:4},
        {section:101,title:"Right extends to causing harm",chapter:4},{section:102,title:"Commencement of right",chapter:4},
        {section:103,title:"Right of private defence of property",chapter:4},
        {section:104,title:"Right of private defence of property",chapter:4},{section:105,title:"Abetment of self-injury",chapter:4},
        {section:106,title:"Right of private defence",chapter:4},{section:107,title:"Abetment of a thing",chapter:5},
        {section:108,title:"Abettor",chapter:5},{section:109,title:"Punishment of abetment",chapter:5},
        {section:110,title:"Punishment of abetment",chapter:5},{section:111,title:"Liability of abettor",chapter:5},
        {section:112,title:"Abettor liable to cumulative punishment",chapter:5},{section:113,title:"Liability of abettor",chapter:5},
        {section:114,title:"Abettor present",chapter:5},{section:115,title:"Abetment of offence",chapter:5},
        {section:116,title:"Abetment of offence",chapter:5},{section:117,title:"Abetting commission of offence",chapter:5},
        {section:118,title:"Concealing design",chapter:5},{section:119,title:"Public servant concealing design",chapter:5},
        {section:120,title:"Concealing design",chapter:5},{section:121,title:"Waging war",chapter:6,punishment:"Death/Life"},
        {section:122,title:"Collecting arms",chapter:6},{section:123,title:"Concealing with intent",chapter:6},
        {section:124,title:"Assaulting President",chapter:6},{section:125,title:"Waging war against foreign State",chapter:6},
        {section:126,title:"Committing depredation",chapter:6},{section:127,title:"Receiving property taken in war",chapter:6},
        {section:128,title:"Public servant taking gift",chapter:6},{section:129,title:"Abetting mutiny",chapter:6},
        {section:130,title:"Abetting desertion",chapter:6},{section:131,title:"Abetting mutiny",chapter:7},
        {section:132,title:"Abetting desertion",chapter:7},{section:133,title:"Abetment of desertion",chapter:7},
        {section:134,title:"Desertion",chapter:7},{section:135,title:"Abandoning duty",chapter:7},
        {section:136,title:"Suspending office",chapter:7},{section:137,title:"Selling arms to enemy",chapter:7},
        {section:138,title:"Trading with enemy",chapter:7},{section:139,title:"Offences relating to forces",chapter:7},
        {section:140,title:"Using arms",chapter:7,punishment:"Death/Life"},{section:141,title:"Unlawful assembly",chapter:8},
        {section:142,title:"Being member",chapter:8},{section:143,title:"Punishment",chapter:8,punishment:"3 years"},
        {section:144,title:"Joining unlawful assembly armed",chapter:8},{section:145,title:"Joining assembly",chapter:8},
        {section:146,title:"Rioting",chapter:8},{section:147,title:"Punishment for rioting",chapter:8,punishment:"3 years"},
        {section:148,title:"Rioting armed",chapter:8,punishment:"5 years"},
        {section:149,title:"Every member guilty",chapter:8},{section:150,title:"Hiring persons",chapter:8},
        {section:151,title:"Joining assembly of five",chapter:8},{section:152,title:"Assaulting public servant",chapter:8},
        {section:153,title:"Wantonly giving provocation",chapter:8},{section:154,title:"Promoting enmity",chapter:8},
        {section:155,title:"Drunk and rioting",chapter:8},{section:156,title:"Drunk and rioting",chapter:8},
        {section:157,title:"Presence in assembly",chapter:8},{section:158,title:"Being hired",chapter:8},
        {section:159,title:"Mischief by fire",chapter:8},{section:160,title:"Punishment for affray",chapter:8},
        {section:161,title:"Taking or giving bribe",chapter:9},{section:162,title:"Offence of taking bribe",chapter:9},
        {section:163,title:"Offence of taking gratification",chapter:9},{section:164,title:"Punishment for taking bribe",chapter:9},
        {section:165,title:"Taking gratification",chapter:9},{section:166,title:"Public servant disobeying law",chapter:9},
        {section:167,title:"Public servant framing incorrect document",chapter:9},{section:168,title:"Public servant in trade",chapter:9},
        {section:169,title:"Public servant buying property",chapter:9},{section:170,title:"Personating public servant",chapter:9},
        {section:171,title:"Wearing garment",chapter:9},{section:172,title:"Absconding",chapter:10},
        {section:173,title:"Preventing service",chapter:10},{section:174,title:"Service of process",chapter:10},
        {section:175,title:"Furnishing false information",chapter:10},{section:176,title:"Omission to produce document",chapter:10},
        {section:177,title:"Furnishing false information",chapter:10},{section:178,title:"Refusing oath",chapter:10},
        {section:179,title:"Refusing to answer",chapter:10},{section:180,title:"Refusing to sign statement",chapter:10},
        {section:181,title:"False statement on oath",chapter:10},{section:182,title:"False information",chapter:10},
        {section:183,title:"Concealing design",chapter:10},{section:184,title:"Causing waste of property",chapter:10},
        {section:185,title:"Mischief by killing animals",chapter:10},{section:186,title:"Punishment for mischief",chapter:10},
        {section:187,title:"Making false documents",chapter:10},{section:188,title:"Disobedience to order",chapter:10},
        {section:189,title:"Threat of injury",chapter:11},{section:190,title:"Threat of injury",chapter:11},
        {section:191,title:"Giving false evidence",chapter:11},{section:192,title:"Fabricating false evidence",chapter:11},
        {section:193,title:"Punishment for false evidence",chapter:11,punishment:"7 years"},
        {section:194,title:"False evidence to procure conviction",chapter:11},
        {section:195,title:"Threat of injury to witness",chapter:11},{section:196,title:"Using evidence",chapter:11},
        {section:197,title:"Issuing false certificate",chapter:11},{section:198,title:"Using false certificate",chapter:11},
        {section:199,title:"False statement in declaration",chapter:11},{section:200,title:"False statement",chapter:11},
        {section:201,title:"Causing disappearance of evidence",chapter:11},{section:202,title:"Omission to give information",chapter:11},
        {section:203,title:"Giving false information",chapter:11},{section:204,title:"Secret concealment",chapter:11},
        {section:205,title:"False personation",chapter:11},{section:206,title:"Fraudulent removal",chapter:11},
        {section:207,title:"Fraudulently suffering decree",chapter:11},{section:208,title:"False claim in Court",chapter:11},
        {section:209,title:"False claim",chapter:11},{section:210,title:"Taking gift to screen",chapter:11},
        {section:211,title:"False charge",chapter:11},{section:212,title:"Harbouring offender",chapter:11},
        {section:213,title:"Taking gift",chapter:11},{section:214,title:"Offering gift",chapter:11},
        {section:215,title:"Taking gift",chapter:11},{section:216,title:"Harbouring offender",chapter:11},
        {section:217,title:"Public servant disobeying direction",chapter:12},{section:218,title:"Public servant framing incorrect record",chapter:12},
        {section:219,title:"Public servant examining wrongly",chapter:12},{section:220,title:"Commitment for trial",chapter:12},
        {section:221,title:"Commitment wrongly",chapter:12},{section:222,title:"Omission to apprehend",chapter:12},
        {section:223,title:"Omission to apprehend",chapter:12},{section:224,title:"Resistance to authority",chapter:12},
        {section:225,title:"Obstructing sale",chapter:12},{section:226,title:"Repealed",chapter:12},
        {section:227,title:"Violation of remission",chapter:13},{section:228,title:"Intentional insult",chapter:13},
        {section:229,title:"Failure to appear",chapter:13},{section:230,title:"Violation of order",chapter:14},
        {section:231,title:"Nuisance",chapter:14},{section:232,title:"Malignantly doing act",chapter:14},
        {section:233,title:"Making obscene objects",chapter:14},{section:234,title:"Obscene documents",chapter:14},
        {section:235,title:"Sale of obscene books",chapter:14},{section:236,title:"Obscene acts",chapter:14},
        {section:237,title:"Neglecting diseased person",chapter:14},{section:238,title:"Negligent conduct",chapter:14},
        {section:239,title:"Mischief by fire",chapter:14},{section:240,title:"Mischief",chapter:14},
        {section:241,title:"Negligent conduct with poison",chapter:14},{section:242,title:"Adulteration of food",chapter:14},
        {section:243,title:"Adulteration of drugs",chapter:14},{section:244,title:"Sale of adulterated drugs",chapter:14},
        {section:245,title:"Sale of drug as different",chapter:14},{section:246,title:"Fraudulent use",chapter:14},
        {section:247,title:"Fraudulent use",chapter:14},{section:248,title:"Dealing in provisions",chapter:14},
        {section:249,title:"Corrupt following",chapter:14},{section:250,title:"Cruelty to animals",chapter:14},
        {section:251,title:"Killing animals",chapter:14},{section:252,title:"Pain to animals",chapter:14},
        {section:253,title:"Violation of quarantine",chapter:14},{section:254,title:"Violation of quarantine",chapter:14},
        {section:255,title:"Rioting",chapter:14},{section:256,title:"Mischief by killing cattle",chapter:15},
        {section:257,title:"Killing cows",chapter:15},{section:258,title:"Disfigurement",chapter:15},
        {section:259,title:"Abetting",chapter:15},{section:260,title:"Offences relating to religion",chapter:15},
        {section:261,title:"Disturbing religious assembly",chapter:15},{section:262,title:"Trespassing on burial places",chapter:15},
        {section:263,title:"Destroying object",chapter:15},{section:264,title:"Negligent conduct",chapter:16},
        {section:265,title:"Sale of drug",chapter:16},{section:266,title:"Negligent conduct",chapter:16},
        {section:267,title:"Doing act to cause death",chapter:16},{section:268,title:"Public nuisance",chapter:14,punishment:"Fine"},
        {section:269,title:"Negligent act",chapter:14},{section:270,title:"Malignant act",chapter:14},
        {section:271,title:"Disobedience to quarantine",chapter:14},{section:272,title:"Adulteration of food",chapter:14},
        {section:273,title:"Sale of provisions",chapter:14},{section:274,title:"Sale of drugs",chapter:14},
        {section:275,title:"Sale of drugs",chapter:14},{section:276,title:"Sale of drugs",chapter:14},
        {section:277,title:"Fouling water",chapter:14},{section:278,title:"Making atmosphere noxious",chapter:14},
        {section:279,title:"Rash driving",chapter:14,punishment:"6 months/1000 fine"},
        {section:280,title:"Rash navigation",chapter:14},{section:281,title:"Fraudulent conveyance",chapter:14},
        {section:282,title:"Conveying person",chapter:14},{section:283,title:"Obstruction on road",chapter:14},
        {section:284,title:"Negligent conduct",chapter:14},{section:285,title:"Negligent conduct with fire",chapter:14},
        {section:286,title:"Negligent conduct",chapter:14},{section:287,title:"Disobedience to rule",chapter:14},
        {section:288,title:"Trespassing on aircraft",chapter:14},{section:289,title:"Damage to monuments",chapter:14},
        {section:290,title:"Violation of custom",chapter:14},{section:291,title:"Unlawful assault",chapter:16},
        {section:292,title:"Abortion",chapter:16},{section:293,title:"Causing miscarriage",chapter:16},
        {section:294,title:"Injury to unborn child",chapter:16},{section:295,title:"Exposure of child",chapter:16},
        {section:296,title:"Kidnapping",chapter:16},{section:297,title:"Kidnapping child",chapter:16},
        {section:298,title:"Kidnapping with intent to murder",chapter:16},{section:299,title:"Voluntarily causing hurt",chapter:16,punishment:"3 years"},
        {section:300,title:"Culpable homicide",chapter:16,punishment:"Death/Life"},
        {section:301,title:"Causing death by negligence",chapter:16},{section:302,title:"Murder",chapter:16,punishment:"Death/Life"},
        {section:303,title:"Murder by convict",chapter:16,punishment:"Death"},
        {section:304,title:"Culpable homicide not murder",chapter:16,punishment:"Life/10 years"},
        {section:304A,title:"Death by negligence",chapter:16,punishment:"2 years"},
        {section:304B,title:"Dowry death",chapter:16,punishment:"Life/7 years"},
        {section:305,title:"Abetting suicide",chapter:16,punishment:"7 years"},
        {section:306,title:"Abetting suicide",chapter:16},{section:307,title:"Attempt to murder",chapter:16,punishment:"10 years"},
        {section:308,title:"Attempt to culpable homicide",chapter:16},{section:309,title:"Attempt to commit suicide",chapter:16,punishment:"1 year"},
        {section:310,title:"Thug",chapter:16,punishment:"Death"},
        {section:311,title:"Punishment for being thug",chapter:16,punishment:"Death"},
        {section:312,title:"Causing miscarriage",chapter:16},{section:313,title:"Causing miscarriage without consent",chapter:16},
        {section:314,title:"Attempt to cause miscarriage",chapter:16},{section:315,title:"Act done to prevent child birth",chapter:16},
        {section:316,title:"Causing death of unborn child",chapter:16},{section:317,title:"Exposure of child",chapter:16},
        {section:318,title:"Concealment of birth",chapter:16},{section:319,title:"Hurt",chapter:16,punishment:"1 year/1000 fine"},
        {section:320,title:"Grievous hurt",chapter:16},{section:321,title:"Voluntarily causing hurt",chapter:16},
        {section:322,title:"Voluntarily causing grievous hurt",chapter:16},{section:323,title:"Punishment for voluntarily causing hurt",chapter:16,punishment:"3 years"},
        {section:324,title:"Hurt by dangerous weapons",chapter:16,punishment:"3 years"},
        {section:325,title:"Punishment for voluntarily causing grievous hurt",chapter:16,punishment:"7 years"},
        {section:326,title:"Grievous hurt by dangerous weapons",chapter:16,punishment:"Life/10 years"},
        {section:326A,title:"Acid attack",chapter:16,punishment:"Life"},
        {section:327,title:"Causing hurt to extort",chapter:16},{section:328,title:"Causing hurt to induce confession",chapter:16},
        {section:329,title:"Causing grievous hurt to extort",chapter:16},{section:330,title:"Causing hurt to extort",chapter:16},
        {section:331,title:"Causing grievous hurt to extort",chapter:16},{section:332,title:"Causing hurt on provocation",chapter:16},
        {section:333,title:"Causing grievous hurt on provocation",chapter:16},{section:334,title:"Act endangering life",chapter:16},
        {section:335,title:"Causing hurt accidentally",chapter:16},{section:336,title:"Act endangering life",chapter:16},
        {section:337,title:"Causing hurt by act",chapter:16},{section:338,title:"Causing grievous hurt by act",chapter:16},
        {section:339,title:"Wrongful restraint",chapter:16,punishment:"1 month/500 fine"},
        {section:340,title:"Wrongful confinement",chapter:16,punishment:"1 year/1000 fine"},
        {section:341,title:"Punishment for wrongful restraint",chapter:16},{section:342,title:"Punishment for wrongful confinement",chapter:16},
        {section:343,title:"Wrongful confinement for three days",chapter:16},{section:344,title:"Wrongful confinement for ten days",chapter:16},
        {section:345,title:"Wrongful confinement for labour",chapter:16},{section:346,title:"Wrongful confinement in secret",chapter:16},
        {section:347,title:"Confinement against will",chapter:16},{section:348,title:"Wrongful confinement to extort",chapter:16},
        {section:349,title:"Force",chapter:16},{section:350,title:"Criminal force",chapter:16},
        {section:351,title:"Assault",chapter:16},{section:352,title:"Punishment for assault",chapter:16,punishment:"3 months"},
        {section:353,title:"Assault to deter public servant",chapter:16,punishment:"2 years"},
        {section:354,title:"Assault to outrage modesty",chapter:16,punishment:"2 years"},
        {section:354A,title:"Sexual harassment",chapter:16,punishment:"3 years"},
        {section:354B,title:"Assault to disrobe",chapter:16,punishment:"3 years"},
        {section:354C,title:"Voyeurism",chapter:16,punishment:"3 years"},
        {section:354D,title:"Stalking",chapter:16,punishment:"3 years"},
        {section:355,title:"Assault to dishonour",chapter:16},{section:356,title:"Assaulting woman",chapter:16},
        {section:357,title:"Assault after previous conviction",chapter:16},{section:358,title:"Wrongful confinement",chapter:16},
        {section:359,title:"Kidnapping",chapter:17},{section:360,title:"Kidnapping from India",chapter:17},
        {section:361,title:"Abduction",chapter:17},{section:362,title:"Kidnapping to murder",chapter:17},
        {section:363,title:"Punishment for kidnapping",chapter:17,punishment:"7 years"},
        {section:364,title:"Kidnapping with intent to murder",chapter:17},{section:365,title:"Kidnapping to confine",chapter:17},
        {section:366,title:"Kidnapping woman to compel marriage",chapter:17},{section:367,title:"Kidnapping to grieve hurt",chapter:17},
        {section:368,title:"Wrongfully concealing",chapter:17},{section:369,title:"Kidnapping child",chapter:17},
        {section:370,title:"Trafficking",chapter:17,punishment:"Life"},
        {section:371,title:"Habitual dealing",chapter:17},{section:372,title:"Selling minor",chapter:17},
        {section:373,title:"Buying minor",chapter:17},{section:374,title:"Unlawfully compelling labour",chapter:17},
        {section:375,title:"Rape",chapter:16,punishment:"Life/7 years"},
        {section:376,title:"Punishment for rape",chapter:16,punishment:"Life/10 years"},
        {section:376A,title:"Sexual assault by armed forces",chapter:16,punishment:"Life"},
        {section:376B,title:"Sexual intercourse by husband",chapter:16,punishment:"2 years"},
        {section:376C,title:"Sexual intercourse by deception",chapter:16,punishment:"5 years"},
        {section:376D,title:"Gang rape",chapter:16,punishment:"Death/Life"},
        {section:376E,title:"Repeat offenders",chapter:16,punishment:"Death"},
        {section:377,title:"Unnatural offences",chapter:16,punishment:"Life/10 years"},
        {section:378,title:"Theft",chapter:17},{section:379,title:"Punishment for theft",chapter:17,punishment:"3 years"},
        {section:380,title:"Theft in dwelling house",chapter:17,punishment:"7 years"},
        {section:381,title:"Theft by clerk",chapter:17},{section:382,title:"Theft after preparation",chapter:17,punishment:"10 years"},
        {section:383,title:"Extortion",chapter:17},{section:384,title:"Punishment for extortion",chapter:17,punishment:"3 years"},
        {section:385,title:"Putting in fear",chapter:17},{section:386,title:"Extortion by fear",chapter:17},
        {section:387,title:"Putting fear to commit extortion",chapter:17},{section:388,title:"Extortion by accusation",chapter:17},
        {section:389,title:"Putting fear of accusation",chapter:17},{section:390,title:"Robbery",chapter:17},
        {section:391,title:"Dacoity",chapter:17},{section:392,title:"Punishment for robbery",chapter:17,punishment:"10 years"},
        {section:393,title:"Attempt to rob",chapter:17},{section:394,title:"Causing hurt in robbery",chapter:17},
        {section:395,title:"Punishment for dacoity",chapter:17,punishment:"Life/10 years"},
        {section:396,title:"Dacoity with murder",chapter:17,punishment:"Death/Life"},
        {section:397,title:"Robbery with attempt to cause death",chapter:17},{section:398,title:"Attempt robbery",chapter:17},
        {section:399,title:"Preparation to commit dacoity",chapter:17},{section:400,title:"Belonging to gang of dacoits",chapter:17},
        {section:401,title:"Belonging to gang of thieves",chapter:17},{section:402,title:"Assembling for dacoity",chapter:17},
        {section:403,title:"Dishonest misappropriation",chapter:17},{section:404,title:"Dishonest misappropriation",chapter:17},
        {section:405,title:"Criminal breach of trust",chapter:17},{section:406,title:"Punishment for breach",chapter:17,punishment:"3 years"},
        {section:407,title:"Breach by clerk",chapter:17},{section:408,title:"Breach by public servant",chapter:17},
        {section:409,title:"Breach by bank",chapter:17},{section:410,title:"Stolen property",chapter:17},
        {section:411,title:"Receiving stolen property",chapter:17},{section:412,title:"Receiving stolen in dacoity",chapter:17},
        {section:413,title:"Habitually dealing",chapter:17},{section:414,title:"Assisting concealment",chapter:17},
        {section:415,title:"Cheating",chapter:17},{section:416,title:"Cheating by personation",chapter:17},
        {section:417,title:"Punishment for cheating",chapter:17,punishment:"1 year"},
        {section:418,title:"Cheating knowledge",chapter:17},{section:419,title:"Cheating by personation",chapter:17},
        {section:420,title:"Cheating and dishonestly inducing delivery",chapter:17,punishment:"7 years"},
        {section:421,title:"Mischief by killing cattle",chapter:17},{section:422,title:"Mischief to public property",chapter:17},
        {section:423,title:"Mischief with intent",chapter:17},{section:424,title:"Mischief",chapter:17},
        {section:425,title:"Mischief",chapter:17},{section:426,title:"Punishment for mischief",chapter:17,punishment:"3 months"},
        {section:427,title:"Mischief causing damage",chapter:17},{section:428,title:"Mischief by killing animals",chapter:17},
        {section:429,title:"Mischief by killing cattle",chapter:17},{section:430,title:"Mischief",chapter:17},
        {section:431,title:"Mischief by illegal ouster",chapter:17},{section:432,title:"Mischief",chapter:17},
        {section:433,title:"Mischief by bombs",chapter:17},{section:434,title:"Mischief by destructive weapons",chapter:17},
        {section:435,title:"Mischief by fire",chapter:17,punishment:"7 years"},
        {section:436,title:"Mischief by fire",chapter:17},{section:437,title:"Mischief to destroy house",chapter:17},
        {section:438,title:"Punishment for mischief",chapter:17},{section:439,title:"Mischief with explosives",chapter:17},
        {section:440,title:"Mischief with bombs",chapter:17},{section:441,title:"Criminal trespass",chapter:17},
        {section:442,title:"House-trespass",chapter:17},{section:443,title:"Lurking house-trespass",chapter:17},
        {section:444,title:"House-breaking",chapter:17},{section:445,title:"House-trespass",chapter:17},
        {section:446,title:"Punishment for house-trespass",chapter:17},{section:447,title:"Criminal trespass",chapter:17,punishment:"3 months"},
        {section:448,title:"House-trespass",chapter:17},{section:449,title:"House-trespass for offence",chapter:17},
        {section:450,title:"House-trespass after preparation",chapter:17},{section:451,title:"House-trespass to commit theft",chapter:17},
        {section:452,title:"House-trespass after preparation",chapter:17},{section:453,title:"Lurking house-trespass",chapter:17},
        {section:454,title:"Lurking house-trespass for offence",chapter:17},{section:455,title:"Lurking house-trespass with assault",chapter:17},
        {section:456,title:"House-breaking",chapter:17},{section:457,title:"House-breaking to commit offence",chapter:17},
        {section:458,title:"House-breaking after preparation",chapter:17},{section:459,title:"Grievous hurt in house-break",chapter:17},
        {section:460,title:"Persons jointly in house-breaking",chapter:17},{section:461,title:"Breaking open receptacle",chapter:17},
        {section:462,title:"House-breaking",chapter:17},{section:463,title:"Forgery",chapter:18},
        {section:464,title:"Making false document",chapter:18},{section:465,title:"Punishment for forgery",chapter:18,punishment:"2 years"},
        {section:466,title:"Forgery of document",chapter:18},{section:467,title:"Forgery of valuable security",chapter:18},
        {section:468,title:"Forgery for cheating",chapter:18},{section:469,title:"Forgery for reputation",chapter:18},
        {section:470,title:"Forged document",chapter:18},{section:471,title:"Using forged document",chapter:18},
        {section:472,title:"Making counterfeit seal",chapter:18},{section:473,title:"Making counterfeit seal",chapter:18},
        {section:474,title:"Having forged document",chapter:18},{section:475,title:"Counterfeit device",chapter:18},
        {section:476,title:"Counterfeiting mark",chapter:18},{section:477,title:"Fraudulent cancellation",chapter:18},
        {section:478,title:"Officers duty",chapter:18},{section:479,title:"Property mark",chapter:18},
        {section:480,title:"Using false mark",chapter:18},{section:481,title:"Selling falsely marked",chapter:18},
        {section:482,title:"Using false mark",chapter:18},{section:483,title:"Forgery for cheating",chapter:18},
        {section:484,title:"Counterfeit currency",chapter:18},{section:485,title:"Making bank notes",chapter:18},
        {section:486,title:"Counterfeiting currency",chapter:18},{section:487,title:"Having counterfeit coin",chapter:18},
        {section:488,title:"Having counterfeit coin",chapter:18},{section:489,title:"Counterfeiting Indian coin",chapter:18},
        {section:490,title:"Breach of contract",chapter:19},{section:491,title:"Breach of contract",chapter:19},
        {section:492,title:"Breach of contract",chapter:19},{section:493,title:"Cohabitation",chapter:20},
        {section:494,title:"Marrying again",chapter:20,punishment:"7 years"},
        {section:495,title:"Same offence with concealment",chapter:20},{section:496,title:"Marriage ceremony",chapter:20},
        {section:497,title:"Adultery",chapter:20,punishment:"5 years"},
        {section:498,title:"Enticing married woman",chapter:20},{section:498A,title:"Cruelty by husband",chapter:20,punishment:"3 years"},
        {section:499,title:"Defamation",chapter:21},{section:500,title:"Punishment for defamation",chapter:21,punishment:"2 years"},
        {section:501,title:"Printing defamatory matter",chapter:21},{section:502,title:"Sale of printed matter",chapter:21},
        {section:503,title:"Criminal intimidation",chapter:22},{section:504,title:"Intentional insult",chapter:22,punishment:"2 years"},
        {section:505,title:"Statement to cause mischief",chapter:22},{section:506,title:"Criminal intimidation",chapter:22,punishment:"2 years"},
        {section:507,title:"Criminal intimidation anonymous",chapter:22},{section:508,title:"Act caused by induce",chapter:22},
        {section:509,title:"Word gesture act to insult modesty",chapter:22,punishment:"1 year"},
        {section:510,title:"Misconduct by drunken person",chapter:22},{section:511,title:"Attempt to commit offences",chapter:23}
    ];
    
    // Constitution data
    constitutionData = [
        {article:1,title:"Name and territory of Union",part:1,category:"Union"},
        {article:2,title:"Admission of new States",part:1,category:"Union"},
        {article:3,title:"Formation of new States",part:1,category:"Union"},
        {article:4,title:"Laws under articles 2 and 3",part:1,category:"Union"},
        {article:5,title:"Citizenship at commencement",part:2,category:"Citizenship"},
        {article:6,title:"Rights of persons migrated",part:2,category:"Citizenship"},
        {article:7,title:"Rights of migrants to Pakistan",part:2,category:"Citizenship"},
        {article:8,title:"Rights of persons of Indian origin",part:2,category:"Citizenship"},
        {article:9,title:"Voluntary acquisition of foreign citizenship",part:2,category:"Citizenship"},
        {article:10,title:"Continuance of rights",part:2,category:"Citizenship"},
        {article:11,title:"Parliament to regulate rights",part:2,category:"Citizenship"},
        {article:12,title:"Definition of State",part:3,category:"Fundamental Rights"},
        {article:13,title:"Laws inconsistent with Fundamental Rights",part:3,category:"Fundamental Rights"},
        {article:14,title:"Equality before law",part:3,category:"Right to Equality"},
        {article:15,title:"Prohibition of discrimination",part:3,category:"Right to Equality"},
        {article:16,title:"Equality of opportunity",part:3,category:"Right to Equality"},
        {article:17,title:"Abolition of Untouchability",part:3,category:"Right to Equality"},
        {article:18,title:"Abolition of titles",part:3,category:"Right to Equality"},
        {article:19,title:"Freedom of speech",part:3,category:"Freedom"},
        {article:20,title:"Protection in respect of conviction",part:3,category:"Freedom"},
        {article:21,title:"Protection of life and liberty",part:3,category:"Freedom"},
        {article:21A,title:"Right to education",part:3,category:"Freedom"},
        {article:22,title:"Protection against arrest",part:3,category:"Freedom"},
        {article:23,title:"Prohibition of traffic",part:3,category:"Right Against Exploitation"},
        {article:24,title:"Prohibition of employment of children",part:3,category:"Right Against Exploitation"},
        {article:25,title:"Freedom of conscience",part:3,category:"Freedom of Religion"},
        {article:26,title:"Freedom to manage religious affairs",part:3,category:"Freedom of Religion"},
        {article:27,title:"Freedom from taxes",part:3,category:"Freedom of Religion"},
        {article:28,title:"Freedom from religious instruction",part:3,category:"Freedom of Religion"},
        {article:29,title:"Protection of interests of minorities",part:3,category:"Cultural Rights"},
        {article:30,title:"Right of minorities",part:3,category:"Cultural Rights"},
        {article:31,title:"Compulsory acquisition of property",part:3,category:"Right to Property"},
        {article:32,title:"Remedies for enforcement",part:3,category:"Fundamental Rights"},
        {article:33,title:"Power to modify rights",part:3,category:"Fundamental Rights"},
        {article:34,title:"Restriction during emergency",part:3,category:"Fundamental Rights"},
        {article:35,title:"Legislation for enforcement",part:3,category:"Fundamental Rights"},
        {article:36,title:"Definition of State",part:4,category:"DPSP"},
        {article:37,title:"Application of principles",part:4,category:"DPSP"},
        {article:38,title:"Social order",part:4,category:"DPSP"},
        {article:39,title:"Certain principles of policy",part:4,category:"DPSP"},
        {article:40,title:"Organisation of Panchayats",part:4,category:"DPSP"},
        {article:41,title:"Right to work",part:4,category:"DPSP"},
        {article:42,title:"Just and humane conditions",part:4,category:"DPSP"},
        {article:43,title:"Living wage",part:4,category:"DPSP"},
        {article:44,title:"Uniform civil code",part:4,category:"DPSP"},
        {article:45,title:"Free and compulsory education",part:4,category:"DPSP"},
        {article:46,title:"Promotion of SC/ST interests",part:4,category:"DPSP"},
        {article:47,title:"Duty to raise nutrition",part:4,category:"DPSP"},
        {article:48,title:"Organisation of agriculture",part:4,category:"DPSP"},
        {article:49,title:"Protection of monuments",part:4,category:"DPSP"},
        {article:50,title:"Separation of judiciary",part:4,category:"DPSP"},
        {article:51,title:"Duty to promote peace",part:4,category:"DPSP"},
        {article:51A,title:"Fundamental duties",part:4A,category:"Fundamental Duties"},
        {article:52,title:"President of India",part:5,category:"Executive"},
        {article:53,title:"Executive power of Union",part:5,category:"Executive"},
        {article:54,title:"Election of President",part:5,category:"Executive"},
        {article:55,title:"Manner of election",part:5,category:"Executive"},
        {article:56,title:"Term of office",part:5,category:"Executive"},
        {article:57,title:"Eligibility for re-election",part:5,category:"Executive"},
        {article:58,title:"Qualifications for election",part:5,category:"Executive"},
        {article:59,title:"Conditions of office",part:5,category:"Executive"},
        {article:60,title:"Oath by President",part:5,category:"Executive"},
        {article:61,title:"Impeachment",part:5,category:"Executive"},
        {article:62,title:"Vacation of office",part:5,category:"Executive"},
        {article:63,title:"Vice-President",part:5,category:"Executive"},
        {article:72,title:"Pardoning powers",part:5,category:"Pardoning Powers"},
        {article:74,title:"Council of Ministers",part:5,category:"Council"},
        {article:75,title:"Other provisions",part:5,category:"Council"},
        {article:76,title:"Attorney-General",part:5,category:"Legal"},
        {article:123,title:"Ordinance power",part:5,category:"Legislative"},
        {article:124,title:"Supreme Court establishment",part:5,category:"Judiciary"},
        {article:125,title:"Salaries of judges",part:5,category:"Judiciary"},
        {article:126,title:"Appointment of acting CJ",part:5,category:"Judiciary"},
        {article:129,title:"Jurisdiction of Supreme Court",part:5,category:"Judiciary"},
        {article:131,title:"Original jurisdiction",part:5,category:"Judiciary"},
        {article:132,title:"Appellate jurisdiction",part:5,category:"Judiciary"},
        {article:141,title:"Law declared by Supreme Court",part:5,category:"Judiciary"},
        {article:142,title:"Enforcement of decrees",part:5,category:"Judiciary"},
        {article:148,title:"Comptroller and Auditor-General",part:5,category:"Finance"},
        {article:152,title:"Definition of State",part:6,category:"States"},
        {article:153,title:"Governors of States",part:6,category:"Executive"},
        {article:161,title:"Pardoning powers of Governor",part:6,category:"Executive"},
        {article:163,title:"Council of Ministers",part:6,category:"Executive"},
        {article:214,title:"High Courts",part:6,category:"Judiciary"},
        {article:215,title:"High Courts as courts of record",part:6,category:"Judiciary"},
        {article:216,title:"Constitution of High Courts",part:6,category:"Judiciary"},
        {article:217,title:"Appointment of judges",part:6,category:"Judiciary"},
        {article:226,title:"Power to issue writs",part:6,category:"Judiciary"},
        {article:226,title:"Power of High Courts",part:6,category:"Judiciary"},
        {article:324,title:"Election Commission",part:15,category:"Elections"},
        {article:326,title:"Adult suffrage",part:15,category:"Elections"},
        {article:330,title:"Reservation for SC/ST",part:16,category:"Special Provisions"},
        {article:332,title:"Reservation in Assemblies",part:16,category:"Special Provisions"},
        {article:335,title:"SCs and STs claims",part:16,category:"Special Provisions"},
        {article:338,title:"National Commission",part:16,category:"Special Provisions"},
        {article:343,title:"Official language",part:17,category:"Language"},
        {article:344,title:"Official language commission",part:17,category:"Language"},
        {article:345,title:"Official language of States",part:17,category:"Language"},
        {article:346_title:"Official language for communication",part:17,category:"Language"},
        {article:347,title:"Special language provisions",part:17,category:"Language"},
        {article:348,title:"Language in Supreme Court",part:17,category:"Language"},
        {article:350,title:"Language for representations",part:17,category:"Language"},
        {article:351,title:"Directive for development of Hindi",part:17,category:"Language"},
        {article:352,title:"Emergency provisions",part:18,category:"Emergency"},
        {article:356,title:"President Rule",part:18,category:"Emergency"},
        {article:360,title:"Financial Emergency",part:18,category:"Emergency"},
        {article:361,title:"Protection of President",part:19,category:"Miscellaneous"},
        {article:365,title:"Duty of State",part:19,category:"Miscellaneous"},
        {article:366,title:"Definitions",part:19,category:"Miscellaneous"},
        {article:368,title:"Amendment of Constitution",part:20,category:"Amendment"},
        {article:395,title:"Repeals",part:22,category:"Repeals"}
    ];
    
    allDataLoaded = true;
    console.log('Sample data loaded');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAllData();
});

// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Handle search button click
function handleSearch() {
    const query = document.getElementById('mainSearch').value;
    console.log('Search button clicked:', query);
    searchAll(query);
}

// Search from hero section
function searchAll(query) {
    if (!query || query.length < 1) {
        document.getElementById('results').style.display = 'none';
        return;
    }
    
    // Check if data is loaded
    if (!allDataLoaded || bnsData.length === 0) {
        document.getElementById('resultsContent').innerHTML = '<p style="text-align:center; color:#666; padding:20px;">Loading data... Please wait a moment and try again.</p>';
        document.getElementById('results').style.display = 'block';
        return;
    }
    
    query = query.toLowerCase().trim();
    let resultsHTML = '';
    let found = false;
    
    console.log('Searching for:', query);
    console.log('BNS data available:', bnsData.length);
    
    // Search BNS
    let bnsSection = parseInt(query);
    let bnsResults = isNaN(bnsSection) 
        ? bnsData.filter(law => law.title && law.title.toLowerCase().includes(query))
        : bnsData.filter(law => law.section === bnsSection);
    
    console.log('BNS results:', bnsResults.length);
    
    if (bnsResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 BNS Results</h3>';
        bnsResults.slice(0, 15).forEach(law => {
            if(law.section) {
                resultsHTML += createResultCard(law, 'BNS');
            }
        });
    }
    
    // Search IPC (show if matches section number)
    let ipcResults = isNaN(bnsSection) 
        ? ipcData.filter(law => law.title && law.title.toLowerCase().includes(query))
        : ipcData.filter(law => law.section === bnsSection);
    
    console.log('IPC results:', ipcResults.length);
    
    if (ipcResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 IPC Results</h3>';
        ipcResults.slice(0, 15).forEach(law => {
            if(law.section) {
                resultsHTML += createResultCard(law, 'IPC');
            }
        });
    }
    
    // Search Constitution
    let constResults = isNaN(bnsSection)
        ? constitutionData.filter(law => law.title && law.title.toLowerCase().includes(query))
        : constitutionData.filter(law => law.article === bnsSection);
    
    console.log('Constitution results:', constResults.length);
    
    if (constResults.length > 0) {
        found = true;
        resultsHTML += '<h3>📜 Constitution Results</h3>';
        constResults.slice(0, 10).forEach(law => {
            if(law.article) {
                resultsHTML += createResultCard(law, 'Constitution');
            }
        });
    }
    
    if (found) {
        document.getElementById('resultsContent').innerHTML = resultsHTML;
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').scrollIntoView({behavior: 'smooth'});
    } else {
        document.getElementById('resultsContent').innerHTML = '<p style="text-align:center; color:#666; padding:20px;">No results found. Try different keywords or section numbers.</p>';
        document.getElementById('results').style.display = 'block';
    }
}

// Create result card with click handler
function createResultCard(law, type) {
    let label = 'Section';
    let id = law.section || law.article;
    if (type === 'Constitution') label = 'Article';
    
    return `
        <div class="result-card" onclick="showLawDetail('${type}', ${id})">
            <h3>${law.title}</h3>
            <span class="section-number">${type} ${label} ${id}</span>
            ${law.punishment ? `<span class="punishment">Punishment: ${law.punishment}</span>` : ''}
            ${law.category ? `<span class="category">${law.category}</span>` : ''}
            <span class="click-hint">Click for details →</span>
        </div>
    `;
}

// Show law detail in modal
function showLawDetail(type, id) {
    let law = null;
    let data = type === 'BNS' ? bnsData : (type === 'IPC' ? ipcData : constitutionData);
    
    if (type === 'Constitution') {
        law = data.find(l => l.article === id);
    } else {
        law = data.find(l => l.section === id);
    }
    
    if (!law) {
        alert('Law not found');
        return;
    }
    
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content">
                <span class="modal-close" onclick="closeModal(event)">&times;</span>
                <h2>${law.title}</h2>
                <div class="modal-details">
                    <p><strong>Type:</strong> ${type}</p>
                    <p><strong>${type === 'Constitution' ? 'Article' : 'Section'}:</strong> ${id}</p>
                    ${law.chapter ? `<p><strong>Chapter:</strong> ${law.chapter}</p>` : ''}
                    ${law.punishment ? `<p><strong>Punishment:</strong> ${law.punishment}</p>` : ''}
                    ${law.description ? `<p><strong>Description:</strong> ${law.description}</p>` : ''}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Close modal
function closeModal(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('modal-close')) {
        document.querySelector('.modal-overlay')?.remove();
    }
}

// Quick search tags
function quickSearch(query) {
    document.getElementById('mainSearch').value = query;
    searchAll(query);
}

// Switch tabs
function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
    document.getElementById('lawResults').innerHTML = '';
}

// Search by keyword in section browser
function searchByKeyword(keyword) {
    if (!keyword || keyword.length < 1) {
        document.getElementById('lawResults').innerHTML = '';
        return;
    }
    
    let resultsHTML = '';
    let data;
    
    if (currentTab === 'bns') data = bnsData;
    else if (currentTab === 'ipc') data = ipcData;
    else data = constitutionData;
    
    let searchNum = parseInt(keyword);
    let results = isNaN(searchNum)
        ? data.filter(law => law.title && law.title.toLowerCase().includes(keyword.toLowerCase()))
        : data.filter(law => (law.section === searchNum) || (law.article === searchNum));
    
    if (results.length > 0) {
        results.forEach(law => {
            let label = currentTab === 'constitution' ? 'Article' : 'Section';
            let id = law.section || law.article;
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

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({behavior: 'smooth'});
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Enter key search
document.getElementById('sectionSearch').addEventListener('keyup', function(e) {
    searchByKeyword(this.value);
});
export const INDIC_DICTIONARY = [
  {
    id: "dharma",
    devanagari: "धर्म",
    iast: "dharma",
    phoneticVariants: ["dharma", "dharm", "dharama", "dharmaḥ"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "धृ (धृञ् धारणे)",
      formula: "धृ + मन् = धर्म",
      explanationHindi: "जिसका मूल 'धृ' धातु है, जिसका अर्थ है धारण करना, पोषण करना या सहारा देना।",
      explanationEnglish: "Derived from Sanskrit root 'dhṛ' (to sustain, uphold, bear) + affix 'man'. Literal meaning: 'that which sustains or upholds'."
    },
    meanings: {
      hindi: "सृष्टि को धारण करने वाली प्राकृतिक व्यवस्था, सार्वभौमिक नियम, सदाचार, कर्तव्य, न्याय और स्वधर्म।",
      english: "Cosmic order, inherent nature, moral duty, righteousness, and the fundamental law that sustains life and the universe."
    },
    decolonialNote: {
      title: "Why Dharma ≠ Religion (गैर-अनुवाद्य शब्द / Non-translatable)",
      content: "Western concepts of 'Religion' require an exclusive dogma, historic prophet, and single holy book. Dharma, by contrast, is eternal natural law (सनातन नियम) and righteous action applicable to all beings regardless of creed or belief."
    },
    citations: [
      {
        shloka: "धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः।\nयत् स्याद् धारणसंयुक्तं स धर्म इति निश्चयः॥",
        source: "महाभारत, कर्ण पर्व (६९.५८)",
        translation: "Dharma is called so because it upholds; Dharma sustains all beings. Whatever is characterized by the capacity to uphold and preserve is certainly Dharma."
      },
      {
        shloka: "धर्मो रक्षति रक्षितः।",
        source: "मनुस्मृति (८.१५)",
        translation: "Dharma protects those who uphold and protect it."
      }
    ],
    synonyms: ["कर्तव्य", "सदाचार", "ऋत", "न्याय", "स्वभाव"],
    antonyms: ["अधर्म", "अन्याय", "दुराचार"],
    category: "Philosophy (दर्शन)",
    tags: ["core", "vedic", "ethics", "governance"],
    pronunciationKey: "dhur-muh"
  },
  {
    id: "yoga",
    devanagari: "योग",
    iast: "yoga",
    phoneticVariants: ["yoga", "yog", "yoge"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "युज् (युजिँर् योगे / युज् समाधौ)",
      formula: "युज् + घञ् = योग",
      explanationHindi: "'युज्' धातु से निष्पन्न, जिसका अर्थ है जोड़ना, संयोजित करना या चित्त की समाधि।",
      explanationEnglish: "From root 'yuj' (to yoke, join, harness, or attain samadhi) + suffix 'ghañ'. Represents integration of consciousness."
    },
    meanings: {
      hindi: "चित्त की वृत्तियों का निरोध; जीवात्मा और परमात्मा का ऐक्य; कर्मों में कुशलता और साम्यावस्था।",
      english: "Union of individual consciousness with universal reality; stilling of mental fluctuations; consummate mastery and balance in action."
    },
    decolonialNote: {
      title: "Beyond 'Exercise' or 'Fitness'",
      content: "Modern commercial reductionism limits Yoga to physical postures (asanas). In classical Indic thought, Asana is merely one of the 8 limbs (अष्टांग योग); the true purpose is self-realization and mental quietude."
    },
    citations: [
      {
        shloka: "योगश्चित्तवृत्तिनिरोधः॥",
        source: "पतञ्जलि योगसूत्र (१.२)",
        translation: "Yoga is the complete cessation of the modifications and agitations of the mind."
      },
      {
        shloka: "योगः कर्मसु कौशलम्॥",
        source: "श्रीमद्भगवद्गीता (२.५०)",
        translation: "Yoga is dexterity, equanimity, and excellence in all actions."
      }
    ],
    synonyms: ["समाधि", "संयम", "साधना", "एकाग्रता", "साम्य"],
    antonyms: ["वियोग", "विक्षेप", "असंयम"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["patanjali", "consciousness", "meditation"],
    pronunciationKey: "yoh-guh"
  },
  {
    id: "jnana",
    devanagari: "ज्ञान",
    iast: "jñāna",
    phoneticVariants: ["gyan", "jnan", "jnana", "gyaan", "gnan", "dhyan"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "ज्ञा (ज्ञा अवबोधने)",
      formula: "ज्ञा + ल्युट् = ज्ञानम्",
      explanationHindi: "'ज्ञा' धातु से बना है, जिसका अर्थ है साक्षात् अनुभव करना या जानना।",
      explanationEnglish: "Derived from Sanskrit root 'jñā' (to perceive, know, realize) + affix 'lyuṭ'. Cognate with Greek 'gnosis' and Latin 'cognoscere'."
    },
    meanings: {
      hindi: "यथार्थ सत्य का प्रत्यक्ष बोध; आत्मज्ञान; सूचना (information) से परे का विवेक।",
      english: "Direct experiential insight into ultimate reality; self-realization; experiential wisdom distinct from mere intellectual data or information."
    },
    decolonialNote: {
      title: "Knowledge vs. Jnana",
      content: "While Western epistemology often equates knowledge with accumulated empirical facts (सूचना/Information), Jñāna is transformative self-realization that liberates the knower from existential ignorance (अविद्या)."
    },
    citations: [
      {
        shloka: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
        source: "श्रीमद्भगवद्गीता (४.३८)",
        translation: "Certainly there is nothing in this world as purifying as profound transcendent wisdom."
      }
    ],
    synonyms: ["विद्या", "बोध", "विवेक", "प्रज्ञा", "संज्ञान"],
    antonyms: ["अज्ञान", "अविद्या", "मोह"],
    category: "Philosophy (दर्शन)",
    tags: ["vedanta", "epistemology", "wisdom"],
    pronunciationKey: "gyaa-nuh / jnyaa-nuh"
  },
  {
    id: "satya",
    devanagari: "सत्य",
    iast: "satya",
    phoneticVariants: ["satya", "saty", "sat", "sathya"],
    partOfSpeech: {
      hindi: "संज्ञा / विशेषण",
      english: "Noun / Adjective"
    },
    rootEtymology: {
      dhatu: "अस् (अस् सत्तायाम्) / सत्",
      formula: "सत् + यत् = सत्य",
      explanationHindi: "'सत्' (जो वास्तव में विद्यमान है, त्रिकाल अबाधित) से निष्पन्न।",
      explanationEnglish: "Rooted in 'sat' (that which is, absolute reality, existence) + suffix 'yat'. Literally: that which is rooted in truth/existence."
    },
    meanings: {
      hindi: "अपरिवर्तनीय शाश्वत यथार्थ; मन, वाणी और कर्म की एकरूपता; जो सदा अस्तित्व में रहता है।",
      english: "Unalterable, eternal truth; harmony between thought, speech, and action; reality that persists unchanged across past, present, and future."
    },
    decolonialNote: {
      title: "Satya vs. Empirical Fact",
      content: "Satya is not merely factual correctness (तथ्य). It encompasses benevolence and universal harmony: 'सत्यं ब्रूयात् प्रियं ब्रूयात्' (Speak truth that is uplifting and truthful)."
    },
    citations: [
      {
        shloka: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।",
        source: "मुण्डकोपनिषद् (३.१.६)",
        translation: "Truth alone triumphs, never untruth. By truth is the divine path laid out."
      }
    ],
    synonyms: ["ऋत", "यथार्थ", "तत्व", "सद्भाव"],
    antonyms: ["असत्य", "अनृत", "मिथ्या"],
    category: "Philosophy (दर्शन)",
    tags: ["core", "upanishad", "motto"],
    pronunciationKey: "sut-yuh"
  },
  {
    id: "ahimsa",
    devanagari: "अहिंसा",
    iast: "ahiṃsā",
    phoneticVariants: ["ahimsa", "ahinsa", "ahimsā"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "हिंस् (हिंसि हिंसायाम्)",
      formula: "नञ् + हिंस् + अङ् + टाप् = अहिंसा",
      explanationHindi: "'हिंस्' (कष्ट देना, मारना) के पूर्व निषेधार्थक 'अ' लगाने से बना शब्द।",
      explanationEnglish: "Negative prefix 'a-' + desiderative of root 'hiṃs' (to injure, harm). Meaning: total absence of intent to cause injury."
    },
    meanings: {
      hindi: "मन, वचन अथवा कर्म से किसी भी प्राणी को पीड़ा न पहुँचाना; समस्त जीवों के प्रति सार्वभौमिक करुणा।",
      english: "Non-injury and active compassion towards all living beings in thought, speech, and deed."
    },
    decolonialNote: {
      title: "Non-violence vs. Active Compassion",
      content: "Ahimsa is not passive pacifism or weakness. In the Indian tradition, Ahimsa is a positive spiritual force founded on recognizing the shared divine consciousness in all life forms."
    },
    citations: [
      {
        shloka: "अहिंसा परमो धर्मः।",
        source: "महाभारत, अनुशासन पर्व (११५.१)",
        translation: "Non-injury (universal compassion) is the supreme dharma."
      }
    ],
    synonyms: ["दया", "करुणा", "अद्रोह", "अक्रूरता"],
    antonyms: ["हिंसा", "क्रूरता", "विद्वेष"],
    category: "Philosophy (दर्शन)",
    tags: ["ethics", "jainism", "yoga"],
    pronunciationKey: "uh-him-saa"
  },
  {
    id: "rashtra",
    devanagari: "राष्ट्र",
    iast: "rāṣṭra",
    phoneticVariants: ["rashtra", "rastra", "raashtra"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "राज् (राजृ दीप्तौ)",
      formula: "राज् + ष्ट्रन् = राष्ट्र",
      explanationHindi: "'राज्' धातु (प्रकाशित होना, शोभायमान होना) से बना है।",
      explanationEnglish: "Derived from root 'rāj' (to shine, radiate, illuminate, govern) + suffix 'ṣṭran'. Signifies an illuminated, culturally unified community."
    },
    meanings: {
      hindi: "सांस्कृतिक व आध्यात्मिक एकता से युक्त चेतन जनसमुदाय और मातृभूमि; केवल राजनीतिक राज्य (State) नहीं।",
      english: "An organic cultural, civilizational, and conscious homeland bound by shared ethos, distinct from an artificial mechanical state or nation-state."
    },
    decolonialNote: {
      title: "Why Rashtra ≠ Nation-State",
      content: "A European 'Nation' was historically born out of treaty borders (Westphalia) and linguistic homogeneity. Vedic Rashtra is an ancient civilizational continuum rooted in sacred geography (पुण्यभूमि) and shared cultural consciousness."
    },
    citations: [
      {
        shloka: "वयं राष्ट्रे जागृयाम पुरोहिताः।",
        source: "यजुर्वेद (९.२३)",
        translation: "May we remain awake, vigilant, and dedicated as the guiding guardians of our Rashtra."
      },
      {
        shloka: "माता भूमिः पुत्रोऽहं पृथिव्याः।",
        source: "अथर्ववेद, भूमिसूक्त (१२.१.१२)",
        translation: "The Earth is my Mother; I am a dedicated child of this soil."
      }
    ],
    synonyms: ["देश", "स्वदेश", "मातृभूमि", "जनपद"],
    antonyms: ["विराज्य", "पराधीनता"],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["vedic", "civics", "civilization"],
    pronunciationKey: "raash-truh"
  },
  {
    id: "swaraj",
    devanagari: "स्वराज्य",
    iast: "svarājya",
    phoneticVariants: ["swaraj", "swarajya", "svaraj"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "स्व + राज्",
      formula: "स्व (आत्मन्) + राज् (दीप्तौ / शासने) + ष्यञ्",
      explanationHindi: "स्वयं का शासन; आत्म-नियंत्रण और स्वायत्तता।",
      explanationEnglish: "From 'sva' (self) + 'rājya' (sovereignty, rule). Implies self-governance starting from inner self-mastery."
    },
    meanings: {
      hindi: "आत्म-शासन; बाह्य पराधीनता से मुक्ति के साथ-साथ आंतरिक वासनाओं व इंद्रियों पर नियंत्रण।",
      english: "Genuine self-rule and civilizational sovereignty; profound spiritual self-mastery as the foundation for political freedom."
    },
    decolonialNote: {
      title: "Swaraj vs. Mere Political Independence",
      content: "As Lokmanya Tilak and Sri Aurobindo emphasized, Swaraj is not simply replacing foreign rulers with local rulers while keeping colonial institutions; it is awakening the civilizational soul and indigenous intellectual sovereignty."
    },
    citations: [
      {
        shloka: "स्वराज्यं मे जन्मसिद्धोऽधिकारः।",
        source: "लोकमान्य बालगंगाधर तिलक",
        translation: "Swaraj is my birthright, and I shall have it."
      }
    ],
    synonyms: ["स्वाधीनता", "स्वतंत्रता", "आत्मशासन"],
    antonyms: ["परतंत्रता", "गुलामी", "पराधीनता"],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["freedom", "sovereignty", "decolonial"],
    pronunciationKey: "swuh-raaj-yuh"
  },
  {
    id: "moksha",
    devanagari: "मोक्ष",
    iast: "mokṣa",
    phoneticVariants: ["moksha", "moksh", "mox", "mukti"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "मुच् (मुचॢँ मोक्षणे)",
      formula: "मुच् + घञ् = मोक्ष",
      explanationHindi: "'मुच्' धातु से बना है, जिसका अर्थ है मुक्त होना, छोड़ना या बंधन खोलना।",
      explanationEnglish: "From root 'muc' (to release, liberate, untie, set free) + suffix 'ghañ'. Ultimate spiritual liberation."
    },
    meanings: {
      hindi: "संसार के जन्म-मरण और अविद्या के बंधनों से आत्यंतिक मुक्ति; परमानंद की प्राप्ति।",
      english: "Complete spiritual emancipation from the cycle of birth and death (saṃsāra); realization of one's immortal nature."
    },
    decolonialNote: {
      title: "Moksha vs. Salvation / Heaven",
      content: "Western 'salvation' rescues a sinner from eternal damnation into a sensory heaven. Moksha is transcendence beyond all dualistic realms, realizing one's eternal oneness with Brahman."
    },
    citations: [
      {
        shloka: "तमेव विदित्वाति मृत्युमेति नान्यः पन्था विद्यतेऽयनाय॥",
        source: "श्वेताश्वतरोपनिषद् (३.८)",
        translation: "Only by knowing That Supreme Truth does one cross beyond death; there is no other path for absolute liberation."
      }
    ],
    synonyms: ["मुक्ति", "कैवल्य", "निर्वाण", "परमपद"],
    antonyms: ["बंधन", "संसार", "जन्म-मरण"],
    category: "Philosophy (दर्शन)",
    tags: ["purushartha", "vedanta", "liberation"],
    pronunciationKey: "mohk-shuh"
  },
  {
    id: "karma",
    devanagari: "कर्म",
    iast: "karma",
    phoneticVariants: ["karma", "karm", "karam"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "कृ (डुकृञ् करणे)",
      formula: "कृ + मनिन् = कर्म",
      explanationHindi: "'कृ' धातु (करना, कार्य निष्पादित करना) से बना शब्द।",
      explanationEnglish: "Derived from Sanskrit root 'kṛ' (to do, perform, cause) + affix 'manin'. Signifies action and the causal ripple it creates."
    },
    meanings: {
      hindi: "मन, वाणी या देह द्वारा किया गया कार्य; कार्य-कारण का शाश्वत सिद्धांत।",
      english: "Action executed by thought, word, or physical deed; the immutable cosmic law of causality where every action bears proportional fruit."
    },
    decolonialNote: {
      title: "Karma vs. Fatalism / Kismet",
      content: "Karma is often misunderstood in the West as passive fatalism. In Indic thought, Karma is the ultimate doctrine of agency and responsibility: because you created your present through past actions, you hold full power to shape your future."
    },
    citations: [
      {
        shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        source: "श्रीमद्भगवद्गीता (२.४७)",
        translation: "You have a right only to perform your prescribed duty, but never to the fruits of action. Never let the fruits be your motive, nor let there be attachment to inaction."
      }
    ],
    synonyms: ["क्रिया", "कार्य", "अनुष्ठान", "कर्मफल"],
    antonyms: ["अकर्म", "निष्क्रियता"],
    category: "Philosophy (दर्शन)",
    tags: ["gita", "action", "ethics"],
    pronunciationKey: "kur-muh"
  },
  {
    id: "itihasa",
    devanagari: "इतिहास",
    iast: "itihāsa",
    phoneticVariants: ["itihasa", "itihas", "ithihaas"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "इति + ह + आस",
      formula: "इति (ऐसा) + ह (निश्चय ही) + आस (था / हुआ)",
      explanationHindi: "'ऐसा ही निश्चित रूप से घटित हुआ'—यह शब्द इसी तथ्य को रेखांकित करता है।",
      explanationEnglish: "Compound of 'iti' (thus) + 'ha' (verily, indeed) + 'āsa' (it was). Literally translates to: 'So indeed it was' or 'Thus occurred'."
    },
    meanings: {
      hindi: "सत्य घटित अतीत का वृत्तांत जो धर्म, अर्थ, काम और मोक्ष के उपदेश से युक्त हो।",
      english: "Historical events and civilizational narratives interwoven with profound moral, spiritual, and philosophical guidance."
    },
    decolonialNote: {
      title: "Why Itihasa ≠ Mythology",
      content: "Colonial scholarship labeled the Ramayana and Mahabharata as 'Mythology' (fictional fables). In the Indic tradition, they are strictly categorized as 'Itihāsa'—living historical memory preserved for civilizational instruction."
    },
    citations: [
      {
        shloka: "धर्मार्थकाममोक्षाणामुपदेशसमन्वितम्।\nपूर्वावृत्तं कथायुक्तमितिहासं प्रचक्षते॥",
        source: "विष्णुधर्मोत्तर पुराण",
        translation: "A chronicle of ancient events interwoven with teachings on Dharma (righteousness), Artha (prosperity), Kama (desire), and Moksha (liberation) is celebrated as Itihasa."
      }
    ],
    synonyms: ["पुरावृत्त", "ऐतिहासिक गाथा", "चरित"],
    antonyms: ["कल्पना", "मिथ्याकथा"],
    category: "Literature & Tradition (साहित्य व परंपरा)",
    tags: ["epics", "history", "decolonial", "ramayana", "mahabharata"],
    pronunciationKey: "i-ti-haa-suh"
  },
  {
    id: "murti",
    devanagari: "मूर्ति",
    iast: "mūrti",
    phoneticVariants: ["murti", "moorti", "murtie"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "मूर्छ् (मूर्छा सम्मोहने / घनीभावे)",
      formula: "मूर्छ् + क्तिन् = मूर्ति",
      explanationHindi: "'मूर्छ्' धातु से बना है, जिसका अर्थ है घनीभूत होना, रूप ग्रहण करना अथवा साकार होना।",
      explanationEnglish: "From root 'mūrcch' (to solidify, take form, materialize) + suffix 'ktin'. Means the embodiment or tangible manifestation of abstract consciousness."
    },
    meanings: {
      hindi: "निराकार ब्रह्म या ईश्वरीय भाव का साकार, घनीभूत और पूजनीय स्वरूप।",
      english: "A tangible, sacred embodiment or consecrated form through which the unmanifest divine reality is revered and experienced."
    },
    decolonialNote: {
      title: "Why Murti ≠ Idol",
      content: "Abrahamic theology uses 'Idol' pejoratively as a lifeless piece of stone or wood worshiped in place of God. A consecrated Murti (प्राणप्रतिष्ठित मूर्ति) is a spiritual focal point (विग्रह) where divine energy is reverently invoked."
    },
    citations: [
      {
        shloka: "चिन्मयस्याद्वितीयस्य निष्कलस्याशरीरिणः।\nउपासकानां कार्यार्थं ब्रह्मणो रूपकल्पना॥",
        source: "रामतापिन्युपनिषद् (१.७)",
        translation: "For the benefit and spiritual elevation of aspirants, form is conceived for that Supreme Brahman who is pure consciousness, non-dual, partless, and formless."
      }
    ],
    synonyms: ["विग्रह", "प्रतिमा", "साकार रूप", "अर्चामूर्ति"],
    antonyms: ["अमूर्त", "निराकार"],
    category: "Philosophy (दर्शन)",
    tags: ["decolonial", "temple", "iconography"],
    pronunciationKey: "moor-ti"
  },
  {
    id: "namaste",
    devanagari: "नमस्ते",
    iast: "namaste",
    phoneticVariants: ["namaste", "namastey", "namasthe", "namaskar"],
    partOfSpeech: {
      hindi: "अव्यय / अभिवादन",
      english: "Invariable / Salutation"
    },
    rootEtymology: {
      dhatu: "नमस् + ते",
      formula: "नमस् (नम्रता / नमन) + ते (तुभ्यम् - तुम्हारे लिए)",
      explanationHindi: "'नमस्' (झुकना, अहंकार त्यागना) और 'ते' (तुम्हारे प्रति)।",
      explanationEnglish: "Compound of 'namas' (reverential salutation, bowing, surrender of ego) + 'te' (unto you). Meaning: 'I bow to the divine within you'."
    },
    meanings: {
      hindi: "आपके भीतर विद्यमान ईश्वरीय चेतना को मेरा सादर नमन; अहंकार रहित अभिवादन।",
      english: "Traditional respectful greeting acknowledging and bowing to the divine light present within the other person."
    },
    decolonialNote: {
      title: "Spiritual Greeting vs. Casual 'Hello'",
      content: "Unlike modern casual greetings, Namaste is accompanied by Añjali Mudra (palms joined at the heart chakra), symbolizing unity, humility, and recognizing universal oneness."
    },
    citations: [
      {
        shloka: "नमस्ते अस्तु भगवन् विश्वेश्वराय महादेवाय।",
        source: "यजुर्वेद, श्रीरुद्रम्",
        translation: "Obeisances unto You, O Divine Lord, Sovereign of the Cosmos, the Supreme Divine."
      }
    ],
    synonyms: ["नमस्कार", "प्रणाम", "अभिवादन", "वन्दन"],
    antonyms: ["तिरस्कार", "उपेक्षा"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["greeting", "etiquette", "culture"],
    pronunciationKey: "nuh-mus-tay"
  },
  {
    id: "guru",
    devanagari: "गुरु",
    iast: "guru",
    phoneticVariants: ["guru", "guroo", "gurudev"],
    partOfSpeech: {
      hindi: "संज्ञा / विशेषण, पुल्लिंग",
      english: "Noun / Adjective, masculine"
    },
    rootEtymology: {
      dhatu: "गृ (शब्दे / विज्ञाने) अथवा गु + रु",
      formula: "गु (अंधकार) + रु (निवारक)",
      explanationHindi: "'गु' का अर्थ है अंधकार या अज्ञान, और 'रु' का अर्थ है उसे दूर करने वाला।",
      explanationEnglish: "Popularly derived from 'gu' (darkness, ignorance) and 'ru' (dispeller). Also means 'weighty', 'venerable', profound."
    },
    meanings: {
      hindi: "अज्ञान के अंधकार को मिटाकर आत्म-ज्ञान का प्रकाश दिखाने वाले आध्यात्मिक व मार्गदर्शक आचार्य।",
      english: "Spiritual master and enlightened guide who dispels the darkness of ignorance and reveals the light of truth."
    },
    decolonialNote: {
      title: "Guru vs. Modern 'Teacher' or 'Expert'",
      content: "A teacher merely imparts technical instruction or information. A Guru awakens consciousness, conducts spiritual transmission, and transforms the seeker's entire being through lived exemplification."
    },
    citations: [
      {
        shloka: "गुकारस्त्वन्धकारस्तु रुकारस्तन्निरोधकृत्।\nअन्धकारविनाशित्वाद् गुरुरित्यभिधीयते॥",
        source: "गुरु गीता (३३)",
        translation: "The syllable 'Gu' represents darkness; the syllable 'Ru' dispels that darkness. Because he destroys darkness, he is reverenced as Guru."
      }
    ],
    synonyms: ["आचार्य", "मार्गदर्शक", "देशिक", "उपदेष्टा"],
    antonyms: ["शिष्य", "अज्ञानी"],
    category: "Philosophy (दर्शन)",
    tags: ["lineage", "education", "sacred"],
    pronunciationKey: "goo-roo"
  },
  {
    id: "seva",
    devanagari: "सेवा",
    iast: "sevā",
    phoneticVariants: ["seva", "sewa"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "षेव् (षेवृँ सेवायाम्)",
      formula: "षेव् + अ + टाप् = सेवा",
      explanationHindi: "'षेव्' धातु का अर्थ है सेवा करना, सम्मानपूर्वक देखभाल करना अथवा सान्निध्य में रहना।",
      explanationEnglish: "From root 'ṣev' (to attend upon, serve selflessly, revere) + affix. Denotes pure selfless service without craving reciprocity."
    },
    meanings: {
      hindi: "निःस्वार्थ भाव से समाज, गुरु, माता-पिता अथवा जीवों का कल्याणकारी सहयोग; कर्मयोग का व्यावहारिक रूप।",
      english: "Selfless service performed without any desire for personal gain, fame, or transactional return; practical manifestation of Karma Yoga."
    },
    decolonialNote: {
      title: "Seva vs. Transactional 'Volunteering' or 'Charity'",
      content: "Western charity often implies an asymmetric power dynamic (a superior donor helping an inferior recipient). Seva recognizes the divine in the recipient (नर सेवा ही नारायण सेवा)—serving is an act of spiritual purification for the server."
    },
    citations: [
      {
        shloka: "सेवा परमो धर्मः।",
        source: "हितोपदेश",
        translation: "Selfless service is a paramount virtue."
      }
    ],
    synonyms: ["शुश्रूषा", "परिचर्या", "निःस्वार्थ कार्य", "खिदमत"],
    antonyms: ["शोषण", "उपेक्षा"],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["ethics", "community", "karmayoga"],
    pronunciationKey: "say-vaa"
  },
  {
    id: "prana",
    devanagari: "प्राण",
    iast: "prāṇa",
    phoneticVariants: ["prana", "pran", "praan"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "प्र + अन् (अनँ प्राणने)",
      formula: "प्र (प्रकर्षेण) + अन् + घञ् = प्राण",
      explanationHindi: "'प्र' उपसर्ग और 'अन्' (श्वास लेना, जीवित रहना) धातु से बना शब्द।",
      explanationEnglish: "Prefix 'pra' (forward, forth) + root 'an' (to breathe, live, move). Literally: the primary vital animating life force."
    },
    meanings: {
      hindi: "जीवन का मूलभूत चैतन्य तत्व व ऊर्जा; श्वास-प्रश्वास के माध्यम से शरीर को क्रियाशील रखने वाली प्राणवायु।",
      english: "Universal vital life force; the animating subtle energy underlying physical breath and sustaining biological consciousness."
    },
    decolonialNote: {
      title: "Prana vs. Mechanical 'Oxygen'",
      content: "Oxygen is purely a chemical gas; Prana is the conscious bio-spiritual energy that oxygen conveys. In Ayurveda and Yoga, controlling Prana (Pranayama) is the master key to balancing the mind and nervous system."
    },
    citations: [
      {
        shloka: "प्राणस्येदं वशे सर्वं त्रिदिवे यत् प्रतिष्ठितम्।\nमातेव पुत्रान् रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति॥",
        source: "प्रश्नोपनिषद् (२.१३)",
        translation: "All that exists in the three realms is governed by Prana. Protect us as a mother protects her children, and bestow upon us prosperity and luminous wisdom."
      }
    ],
    synonyms: ["जीवनशक्ति", "श्वास", "प्राणवायु", "ओज"],
    antonyms: ["मृत्यु", "अप्राण"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["ayurveda", "breath", "subtle-body"],
    pronunciationKey: "praa-nuh"
  },
  {
    id: "sanskriti",
    devanagari: "संस्कृति",
    iast: "saṃskṛti",
    phoneticVariants: ["sanskriti", "sanskruti", "samskriti"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "सम् + कृ (डुकृञ् करणे)",
      formula: "सम् (सम्यक्) + कृ + क्तिन् = संस्कृति",
      explanationHindi: "'सम्' (भली-भांति, परिष्कृत) और 'कृ' (करना)—जिसका सम्यक् परिष्कार व संस्कार किया गया हो।",
      explanationEnglish: "Prefix 'sam' (wholly, perfectly, harmoniously) + root 'kṛ' (to create, refine) + suffix 'ktin'. Means refined civilizational cultivation."
    },
    meanings: {
      hindi: "मानव चेतना को उत्कृष्ट और परिष्कृत करने वाली जीवन-दृष्टि, मूल्य, परंपराएं और कलाएं।",
      english: "Refined culture; the civilizational ethos and spiritual cultivation that uplifts raw human instinct into noble ethical harmony."
    },
    decolonialNote: {
      title: "Prakriti vs. Vikriti vs. Sanskriti",
      content: "Indic thought distinguishes three states: Prakriti (raw nature), Vikriti (degeneration or distortion), and Sanskriti (conscious spiritual and intellectual refinement for the highest good)."
    },
    citations: [
      {
        shloka: "संस्कृतिः परमो धर्मः संस्कृता परमो गतिः।",
        source: "सुभाषित",
        translation: "Refined culture is the supreme anchor; refined understanding leads to the highest spiritual realization."
      }
    ],
    synonyms: ["सभ्यता", "परिष्कार", "शिष्टता", "संस्कार"],
    antonyms: ["विकृति", "असभ्यता", "उद्दंडता"],
    category: "Literature & Tradition (साहित्य व परंपरा)",
    tags: ["civilization", "culture", "decolonial"],
    pronunciationKey: "sun-skree-ti"
  },
  {
    id: "vidya",
    devanagari: "विद्या",
    iast: "vidyā",
    phoneticVariants: ["vidya", "vidyaa", "widhya"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "विद् (विद् ज्ञाने / विद् सत्तायाम्)",
      formula: "विद् + क्यप् + टाप् = विद्या",
      explanationHindi: "'विद्' धातु से बना है, जिसका अर्थ है जानना, समझना अथवा प्रकाशित होना।",
      explanationEnglish: "From root 'vid' (to know, perceive, understand) + suffix. Represents illuminating sacred knowledge."
    },
    meanings: {
      hindi: "वह ज्ञान जो आत्मा को बंधनों से मुक्त करे; वास्तविक आत्मिक व बौद्धिक विद्या।",
      english: "True knowledge and science that emancipates consciousness; holistic education encompassing both outer science and inner self-realization."
    },
    decolonialNote: {
      title: "Sa Vidya Ya Vimuktaye",
      content: "Unlike modern credential-driven education aimed merely at commercial employability, the Indic definition of Vidya is defined by its power to liberate: 'सा विद्या या विमुक्तये' (That alone is true learning which brings liberation)."
    },
    citations: [
      {
        shloka: "तत्कर्म यन्न बन्धाय सा विद्या या विमुक्तये।\nआयासायापरं कर्म विद्यान्या शिल्पनैपुणम्॥",
        source: "विष्णु पुराण (१.१९.४१)",
        translation: "That is true work which does not bind; that is true knowledge which liberates. Other action is mere toil, and other learning is mere technical dexterity."
      }
    ],
    synonyms: ["ज्ञान", "बोध", "प्रज्ञा", "अध्ययन", "शिक्षा"],
    antonyms: ["अविद्या", "मूर्खता", "भ्रम"],
    category: "Philosophy (दर्शन)",
    tags: ["education", "upanishad", "rishihood"],
    pronunciationKey: "vid-yaa"
  },
  {
    id: "niti",
    devanagari: "नीति",
    iast: "nīti",
    phoneticVariants: ["niti", "neeti"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "णी (णीञ् प्रापणे)",
      formula: "णी + क्तिन् = नीति",
      explanationHindi: "'णी' धातु (ले जाना, मार्गदर्शन करना) से निष्पन्न शब्द।",
      explanationEnglish: "Derived from Sanskrit root 'nī' (to lead, guide, conduct) + suffix 'ktin'. Literally: righteous leadership and wise counsel."
    },
    meanings: {
      hindi: "उचित मार्ग पर ले जाने वाली आचार संहिता, विवेकपूर्ण निर्णय, न्यायसंगत राज्यनीति और बुद्धिमत्ता।",
      english: "Wise counsel, ethical statecraft, prudent strategy, and principled conduct guiding individuals and rulers toward just goals."
    },
    decolonialNote: {
      title: "Indic Statecraft vs. Western Realpolitik",
      content: "While Western Machiavellianism separates politics from morality, Indic Niti (exemplified by Chanakya and Vidura) anchors political realism strictly within the broader parameters of Lokasangraha (public welfare) and Dharma."
    },
    citations: [
      {
        shloka: "न सा सभा यत्र न सन्ति वृद्धाः, वृद्धा न ते ये न वदन्ति धर्मम्।\nनासौ धर्मो यत्र न सत्यमस्ति, न तत्सत्यं यच्छलेनानुविद्धम्॥",
        source: "महाभारत, सभा पर्व",
        translation: "That is not an assembly where there are no elders; they are not elders who do not speak Dharma; that is not Dharma which lacks truth; and that is not truth which is tainted with deceit."
      }
    ],
    synonyms: ["रणनीति", "सदाचार", "न्याय", "राजधर्म"],
    antonyms: ["अनीति", "कपट", "अन्याय"],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["chanakya", "statecraft", "ethics"],
    pronunciationKey: "nee-ti"
  },
  {
    id: "samadhi",
    devanagari: "समाधि",
    iast: "samādhi",
    phoneticVariants: ["samadhi", "samaadhi"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "सम् + आ + धा (डुधाञ् धारणपोषणयोः)",
      formula: "सम् + आ + धा + कि = समाधि",
      explanationHindi: "'सम्' (सम्यक्) + 'आ' (समस्त) + 'धा' (स्थापित करना)। चित्त को पूरी तरह स्थिर कर देना।",
      explanationEnglish: "Prefixes 'sam' (equally, together) + 'ā' (fully) + root 'dhā' (to hold, place). Represents placing the mind in unbroken equilibrium."
    },
    meanings: {
      hindi: "ध्यान की वह सर्वोच्च अवस्था जहां ध्याता, ध्यान और ध्येय का भेद समाप्त होकर केवल चैतन्य शेष रहता है।",
      english: "The pinnacle state of meditative absorption where the duality of observer, observing, and observed dissolves into pure consciousness."
    },
    decolonialNote: {
      title: "Samadhi vs. 'Trance' or 'Coma'",
      content: "Western colonial observers often dismissed Samadhi as hypnotic trance or catatonia. In truth, Samadhi is super-consciousness: an intensely alert, lucid, and transcendent realization of reality."
    },
    citations: [
      {
        shloka: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः॥",
        source: "पतञ्जलि योगसूत्र (३.३)",
        translation: "When meditation illuminates the true object of focus alone, appearing as if devoid of its own form, that is Samadhi."
      }
    ],
    synonyms: ["तल्लीनता", "परम चैतन्य", "योगारूढ़", "तुरीय"],
    antonyms: ["विक्षेप", "भटकाव", "मूर्छा"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["patanjali", "consciousness", "meditation"],
    pronunciationKey: "suh-maa-dhi"
  },
  {
    id: "purushartha",
    devanagari: "पुरुषार्थ",
    iast: "puruṣārtha",
    phoneticVariants: ["purushartha", "purusharth", "purusartha"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "पुरुष + अर्थ",
      formula: "पुरुषस्य अर्थः इति पुरुषार्थः",
      explanationHindi: "'पुरुष' (मानव चेतना) और 'अर्थ' (उद्देश्य, प्रयोजन)।",
      explanationEnglish: "Compound of 'puruṣa' (human being / consciousness) + 'artha' (goal, pursuit, purpose). The four legitimate aims of human life."
    },
    meanings: {
      hindi: "मानव जीवन के चार सर्वसमावेशी लक्ष्य: धर्म (कर्तव्य), अर्थ (समृद्धि), काम (कामनाएं) और मोक्ष (मुक्ति)।",
      english: "The four integral dimensions of purposeful human existence: Dharma (ethics/order), Artha (wealth/livelihood), Kama (desire/aesthetics), and Moksha (spiritual freedom)."
    },
    decolonialNote: {
      title: "Holistic Indic Living vs. Ascetic-Materialist Binary",
      content: "Western thought often polarized life into either purely materialistic consumerism or total world-denying asceticism. The Indic Purushartha framework integrates material prosperity (Artha) and sensory enjoyment (Kama), ethically anchored in Dharma, leading to Moksha."
    },
    citations: [
      {
        shloka: "धर्मार्थकामाः सममेव सेव्या यो ह्येकसेवी स नरो जघन्यः।",
        source: "महाभारत",
        translation: "Dharma, Artha, and Kama should be pursued in harmonious balance; one who clings excessively to only one loses life's higher purpose."
      }
    ],
    synonyms: ["चतुर्वर्ग", "जीवन-लक्ष्य", "मानव प्रयोजन"],
    antonyms: ["व्यर्थता", "उद्देश्यहीनता"],
    category: "Philosophy (दर्शन)",
    tags: ["framework", "ethics", "lifestyle"],
    pronunciationKey: "poo-roo-shaar-thuh"
  }
];

export const CATEGORIES = [
  { id: "all", labelHindi: "सभी शब्द", labelEnglish: "All Terms", count: INDIC_DICTIONARY.length },
  { id: "Philosophy (दर्शन)", labelHindi: "दर्शन", labelEnglish: "Philosophy & Epistemology" },
  { id: "Yoga & Ayurveda (योग व स्वास्थ्य)", labelHindi: "योग व स्वास्थ्य", labelEnglish: "Yoga & Wellness" },
  { id: "Governance & Society (नीति व राष्ट्र)", labelHindi: "नीति व राष्ट्र", labelEnglish: "Statecraft & Civil Society" },
  { id: "Literature & Tradition (साहित्य व परंपरा)", labelHindi: "साहित्य व परंपरा", labelEnglish: "Epics & Literature" },
  { id: "Daily Living & Culture (व्यवहार व संस्कृति)", labelHindi: "व्यवहार व संस्कृति", labelEnglish: "Daily Culture & Etiquette" }
];

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
    phoneticVariants: ["ahimsa", "ahinsa", "ahimsā", "non-violence", "nonviolence", "non injury"],
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
      english: "Non-injury, non-violence, and active universal compassion towards all living beings in thought, speech, and deed."
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
  },
  {
    id: "shanti",
    devanagari: "शान्ति",
    iast: "śānti",
    phoneticVariants: ["shanti", "shantih", "shaanti", "shantihi", "santi", "peace"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "शम् (शमुँ उपशमे)",
      formula: "शम् + क्तिन् = शान्तिः",
      explanationHindi: "'शम्' धातु से निष्पन्न, जिसका अर्थ है शांत होना, ताप या क्लेश का उपशम होना।",
      explanationEnglish: "Derived from Sanskrit root 'śam' (to be calm, cease, extinguish afflictions) + feminine suffix 'ktin'. Literal meaning: the pacification of inner and outer turmoil."
    },
    meanings: {
      hindi: "आधिदैविक, आधिभौतिक और आध्यात्मिक तापों का उपशमन; अंतःकरण की पूर्ण स्थिरता, समत्व एवं विश्व-कल्याण।",
      english: "The pacification of all afflictions (physical, environmental, and spiritual); profound inner poise, tranquility, and harmony with cosmic order."
    },
    decolonialNote: {
      title: "Why Shanti ≠ Mere Absence of War (गैर-अनुवाद्य / Non-translatable)",
      content: "In Western political thought, 'Peace' is negative—merely the absence of active military conflict (Pax Romana). In Indic philosophy, 'Shanti' is a positive, luminous state of consciousness and cosmic harmony (द्यौः शान्तिरन्तरिक्षं शान्तिः) requiring the pacification of egoic agitations."
    },
    citations: [
      {
        shloka: "ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः।\nवनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥",
        source: "शुक्ल यजुर्वेद (३६.१७) / शान्ति पाठ",
        translation: "May peace radiate in the whole sky and ethereal space. May peace reign on the earth, in the waters, in the herbs and plants. May the cosmic forces bring peace unto us. Peace, peace, peace alone."
      }
    ],
    synonyms: ["प्रशम", "उपशम", "निवृत्ति", "शांति", "विराम"],
    antonyms: ["अशान्ति", "क्लेश", "विक्षेप"],
    category: "Philosophy (दर्शन)",
    tags: ["peace", "vedic", "harmony", "core"],
    pronunciationKey: "shahn-tee"
  },
  {
    id: "atman",
    devanagari: "आत्मन्",
    iast: "ātman",
    phoneticVariants: ["atman", "atma", "aatma", "aatman", "athma", "soul", "self"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "अत् (अत सातत्यगमने) / वा (वा गतिगन्धनयोः)",
      formula: "अत् + मनिन् = आत्मा",
      explanationHindi: "'अत्' धातु (निरंतर गमनशील, सर्वव्यापी) अथवा 'अन्' (श्वास लेना)।",
      explanationEnglish: "From root 'at' (to move continuously, permeate everywhere) or 'an' (to breathe) + 'manin'. That which constantly permeates all states of waking, dreaming, and deep sleep."
    },
    meanings: {
      hindi: "प्रत्येक जीव में स्थित नित्य, शुद्ध, बुद्ध, सनातन चैतन्य तत्त्व; देह, मन और बुद्धि से परे का साक्षी स्व।",
      english: "The eternal, unchanging, pure conscious Self within all living beings; the transcendent Witness (Sakshi) distinct from body, mind, and intellect."
    },
    decolonialNote: {
      title: "Why Atman ≠ Western 'Soul'",
      content: "The Western 'soul' is created by God, individual, subject to original sin, and faces eternal salvation or damnation. Atman, in contrast, is uncreated, beginningless, non-dual with Brahman, pure awareness, and untouched by sin or death."
    },
    citations: [
      {
        shloka: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
        source: "श्रीमद्भगवद्गीता (२.२०) / कठोपनिषद् (१.२.१८)",
        translation: "The Self is never born, nor does it die at any time; unborn, eternal, imperishable, ancient, it is not slain when the body is slain."
      }
    ],
    synonyms: ["आत्मा", "क्षेत्रज्ञ", "साक्षी", "चैतन्य", "पुरुष"],
    antonyms: ["अनात्मन्", "जड़", "देह"],
    category: "Philosophy (दर्शन)",
    tags: ["soul", "self", "upanishad", "consciousness"],
    pronunciationKey: "aht-mun"
  },
  {
    id: "brahman",
    devanagari: "ब्रह्म",
    iast: "brahman",
    phoneticVariants: ["brahman", "brahm", "brahma", "bramha", "god", "ultimate reality"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "बृह् (बृहँ वृद्धौ)",
      formula: "बृह् + मनिन् = ब्रह्म",
      explanationHindi: "'बृह्' धातु से बना है, जिसका अर्थ है निरतिशय विशाल होना, बढ़ना या सर्वत्र व्याप्त होना।",
      explanationEnglish: "Derived from Sanskrit root 'bṛh' (to grow, expand, swell, encompass boundlessly) + suffix 'manin'. The limitless, all-pervading substratum."
    },
    meanings: {
      hindi: "समस्त चर-अचर सृष्टि का परम अधिष्ठान, कारण और लय-स्थान; सत्-चित्-आनन्द स्वरूप निर्विशेष परमतत्त्व।",
      english: "The supreme, infinite, non-dual substratum and conscious reality of the entire cosmos; Existence-Consciousness-Bliss (Sat-Chit-Ananda)."
    },
    decolonialNote: {
      title: "Why Brahman ≠ Western 'God'",
      content: "Western 'God' is an anthropomorphic, historical ruler who creates from outside, commands obedience, and is distinct from creation. Brahman is both transcendent and immanent (सर्वं खल्विदं ब्रह्म)—the cosmos is a manifestation, not a distant artifact."
    },
    citations: [
      {
        shloka: "सत्यं ज्ञानमनन्तं ब्रह्म।",
        source: "तैत्तिरीयोपनिषद् (२.१.१)",
        translation: "Brahman is Truth, Consciousness, and Infinity."
      },
      {
        shloka: "अहं ब्रह्मास्मि।",
        source: "बृहदारण्यकोपनिषद् (१.४.१०)",
        translation: "I am Brahman (the infinite reality)."
      }
    ],
    synonyms: ["परमात्मा", "सच्चिदानन्द", "अक्षर", "परब्रह्म", "तत्सत्"],
    antonyms: ["प्रपंच", "माया", "अनित्य"],
    category: "Philosophy (दर्शन)",
    tags: ["god", "cosmic", "vedanta", "reality"],
    pronunciationKey: "bruh-mun"
  },
  {
    id: "bhakti",
    devanagari: "भक्ति",
    iast: "bhakti",
    phoneticVariants: ["bhakti", "bhakthi", "bhaktee", "devotion", "love"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "भज् (भजँ सेवायाम् / भज् विश्राणने)",
      formula: "भज् + क्तिन् = भक्तिः",
      explanationHindi: "'भज्' धातु से बना है, जिसका अर्थ है सेवा करना, सहभागिता करना या प्रेमपूर्वक समर्पित होना।",
      explanationEnglish: "From root 'bhaj' (to share, participate in, belong to, revere, serve) + suffix 'ktin'. True spiritual participation, not mechanical servitude."
    },
    meanings: {
      hindi: "ईश्वर या परमतत्त्व के प्रति अनन्य, निष्काम, प्रगाढ़ प्रेमानुराग; जीव और ईश्वर के बीच की घनिष्ठ सहभागिता।",
      english: "Loving devotion, selfless attachment, and profound communion with the Divine; sacred participation in universal consciousness."
    },
    decolonialNote: {
      title: "Why Bhakti ≠ Subservient 'Worship'",
      content: "Western religious worship traditionally entails subservience to a distant sovereign ruler. Bhakti is reciprocal intimacy and love (वात्सल्य, सख्य, माधुर्य भाव)—where the devotee can love God as a friend, child, beloved, or inner self."
    },
    citations: [
      {
        shloka: "सा त्वास्मिन् परमप्रेमरूपा। अमृतस्वरूपा च॥",
        source: "नारद भक्ति सूत्र (२-३)",
        translation: "Bhakti is of the nature of supreme divine love, and is inherently immortal nectar."
      }
    ],
    synonyms: ["अनुरक्ति", "उपासना", "समर्पण", "प्रेम", "शरणागति"],
    antonyms: ["विभक्ति", "द्वेष", "उदासीनता"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["devotion", "gita", "love", "spiritual"],
    pronunciationKey: "bhuk-tee"
  },
  {
    id: "shraddha",
    devanagari: "श्रद्धा",
    iast: "śraddhā",
    phoneticVariants: ["shraddha", "sraddha", "shraddhaa", "faith", "trust"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "श्रत् (सत्य/हृदय) + धा (धारण करणे)",
      formula: "श्रत् + धा + टाप् = श्रद्धा",
      explanationHindi: "'श्रत्' (सत्य या हृदय) में 'धा' (धारण करना, स्थापित करना)।",
      explanationEnglish: "Compound of 'śrat' (truth, sacred certainty, heart) + 'dhā' (to place, hold, set). Literal: 'to place one's heart upon truth'."
    },
    meanings: {
      hindi: "सत्य, शास्त्र और गुरुवचनों के प्रति अंतःकरण का गहरा विश्वास और आदरभाव; साधना में एकाग्र निष्ठा।",
      english: "Existential trust, reverence, and earnest disposition towards truth; alignment of heart and intellect with wisdom."
    },
    decolonialNote: {
      title: "Why Shraddha ≠ Blind 'Faith'",
      content: "Western 'faith' (fides) frequently implies belief in unprovable dogmas contrary to empirical reason. Shraddha is an active, open-hearted posture that propels experiential verification and jnana."
    },
    citations: [
      {
        shloka: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।",
        source: "श्रीमद्भगवद्गीता (४.३९)",
        translation: "The one who possesses Shraddha, is deeply dedicated, and has mastered the senses attains highest knowledge."
      }
    ],
    synonyms: ["निष्ठा", "विश्वास", "आदर", "भक्ति", "सद्भाव"],
    antonyms: ["अश्रद्धा", "संशय", "अविश्वास"],
    category: "Philosophy (दर्शन)",
    tags: ["faith", "trust", "gita", "mind"],
    pronunciationKey: "shrud-dhaa"
  },
  {
    id: "tapas",
    devanagari: "तपस्",
    iast: "tapas",
    phoneticVariants: ["tapas", "tap", "tapa", "austerity", "penance"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "तप् (तपँ संतापे / ऐश्वर्ये)",
      formula: "तप् + असुन् = तपस्",
      explanationHindi: "'तप्' धातु से निष्पन्न, जिसका अर्थ है तपना, प्रकाशित होना, ऊर्जा उत्पन्न करना।",
      explanationEnglish: "From root 'tap' (to heat, radiate, warm, purify by fire) + 'asun'. The inner spiritual fire that burns away mental impurities."
    },
    meanings: {
      hindi: "उच्चतर लक्ष्य की प्राप्ति हेतु स्वेच्छा से किया गया इंद्रिय-निग्रह, स्वाध्याय, अनुशासन और साधना।",
      english: "Spiritual heat, voluntary self-discipline, austerity, and focused energy directed towards inner purification and realization."
    },
    decolonialNote: {
      title: "Why Tapas ≠ Christian 'Penance'",
      content: "Colonial translators translated Tapas as 'penance' or 'mortification', which in Christian theology is self-punishment for sin and guilt. In Indic traditions, Tapas is joyful spiritual combustion that generates radiant willpower and clarity (तेजस्)."
    },
    citations: [
      {
        shloka: "मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः।\nभावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥",
        source: "श्रीमद्भगवद्गीता (१७.१६)",
        translation: "Serenity of mind, gentleness, silence, self-restraint, and purity of intent are declared to be austerity of the mind (Manasa Tapas)."
      }
    ],
    synonyms: ["तप", "साधना", "संयम", "अनुष्ठान", "तितिक्षा"],
    antonyms: ["भोग", "विलास", "असंयम"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["austerity", "discipline", "fire", "energy"],
    pronunciationKey: "tup-us"
  },
  {
    id: "ananda",
    devanagari: "आनन्द",
    iast: "ānanda",
    phoneticVariants: ["ananda", "anand", "aanand", "aananda", "bliss", "joy"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "आ + नन्द् (टुतुदिँ समृद्धौ / नन्दिँ हर्षे)",
      formula: "आङ् + नन्द् + घञ् = आनन्दः",
      explanationHindi: "'आ' उपसर्ग पूर्वक 'नन्द्' (प्रसन्न होना, खिलना) धातु।",
      explanationEnglish: "Prefix 'ā' (completely, fully) + root 'nand' (to rejoice, delight) + suffix 'ghañ'. Unconditioned, self-existent bliss."
    },
    meanings: {
      hindi: "इंद्रिय-विषयों से स्वतंत्र, आत्मा का स्वाभाविक, असीम और नित्य परमानन्द।",
      english: "Unconditioned spiritual bliss; the intrinsic joy of pure consciousness beyond transient worldly pleasure and pain."
    },
    decolonialNote: {
      title: "Why Ananda ≠ Sensory 'Pleasure'",
      content: "Utilitarian Western philosophy defines happiness as sensory pleasure (hedonia). Ananda is not dependent on external stimuli; it is an inherent quality of the Self (आनन्दमयोऽभ्यासात्)."
    },
    citations: [
      {
        shloka: "आनन्दो ब्रह्मेति व्यजानात्।\nआनन्दाद्धयेव खल्विमानि भूतानि जायन्ते॥",
        source: "तैत्तिरीयोपनिषद् (३.६.१)",
        translation: "He knew that Bliss is Brahman; for indeed, from Bliss all beings are born, by Bliss they are sustained, and into Bliss they return."
      }
    ],
    synonyms: ["परमानन्द", "हर्ष", "उल्लास", "मोद", "प्रमोद"],
    antonyms: ["शोक", "दुःख", "विषाद"],
    category: "Philosophy (दर्शन)",
    tags: ["bliss", "joy", "upanishad", "vedanta"],
    pronunciationKey: "aah-nun-duh"
  },
  {
    id: "shakti",
    devanagari: "शक्ति",
    iast: "śakti",
    phoneticVariants: ["shakti", "sakthi", "shakthi", "shaktee", "power", "energy"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "शक् (शक्लृँ शक्तौ)",
      formula: "शक् + क्तिन् = शक्तिः",
      explanationHindi: "'शक्' धातु से बना है, जिसका अर्थ है समर्थ होना, कार्य करने की क्षमता होना।",
      explanationEnglish: "From root 'śak' (to be able, competent, have capacity) + suffix 'ktin'. Dynamic creative potency and cosmic feminine agency."
    },
    meanings: {
      hindi: "सृजन, स्थिति और संहार की मूल कॉस्मिक ऊर्जा; चैतन्य का सक्रिय, गतिशील मातृ-स्वरूप।",
      english: "Dynamic cosmic power, agency, and creative energy of the universe; the feminine principle inseparable from Shiva (pure awareness)."
    },
    decolonialNote: {
      title: "Why Shakti ≠ Mere Coercive 'Power'",
      content: "In Western discourse, 'power' is often political coercion or mechanical force over others. Shakti is sacred, ontological agency and consciousness in motion, revered as the Divine Mother."
    },
    citations: [
      {
        shloka: "शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि॥",
        source: "आदि शङ्कराचार्य, सौन्दर्यलहरी (१)",
        translation: "Only when Shiva is united with Shakti does He have the power to create; otherwise, the Divine is not even able to stir."
      }
    ],
    synonyms: ["ऊर्जा", "बल", "पराशक्ति", "सामर्थ्य", "प्रभाव"],
    antonyms: ["अशक्ति", "दौर्बल्य", "जड़ता"],
    category: "Philosophy (दर्शन)",
    tags: ["energy", "power", "goddess", "cosmic"],
    pronunciationKey: "shuk-tee"
  },
  {
    id: "karuna",
    devanagari: "करुणा",
    iast: "karuṇā",
    phoneticVariants: ["karuna", "karunaa", "compassion", "mercy", "pity"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "कृ (डुकृञ् करणे)",
      formula: "कृ + उनन् + टाप् = करुणा",
      explanationHindi: "'कृ' धातु (करना, दुःखनिवारणार्थ कर्म करना) से।",
      explanationEnglish: "From root 'kṛ' (to act, relieve) + affix 'unan'. An active stirring of the heart to alleviate suffering, not passive sentiment."
    },
    meanings: {
      hindi: "अन्य प्राणियों के दुःख को देखकर हृदय में उत्पन्न होने वाली स्वाभाविक सहानुभूति और दुःख-निवारण का सक्रिय संकल्प।",
      english: "Active compassion, empathy, and universal loving-kindness that seeks the alleviation of suffering in all living beings."
    },
    decolonialNote: {
      title: "Why Karuna ≠ Patronizing 'Pity'",
      content: "Western 'pity' involves a hierarchical stance looking down from a position of superiority upon the unfortunate. Karuna arises from seeing oneself in all beings (आत्मवत् सर्वभूतेषु) with absolute equality."
    },
    citations: [
      {
        shloka: "मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्यविषयाणां भावनातश्चित्तप्रसादनम्॥",
        source: "पतञ्जलि योगसूत्र (१.३३)",
        translation: "By cultivating friendliness towards the happy, compassion for the sorrowful, delight in the virtuous, and equanimity toward the wicked, the mind becomes profoundly serene."
      }
    ],
    synonyms: ["दया", "कृपा", "सहानुभूति", "अनुकम्पा", "मृदुता"],
    antonyms: ["क्रूरता", "कठोरता", "निर्दयता"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["compassion", "ethics", "buddha", "yoga"],
    pronunciationKey: "kuh-roo-naa"
  },
  {
    id: "mantra",
    devanagari: "मन्त्र",
    iast: "mantra",
    phoneticVariants: ["mantra", "mantar", "manthra", "mantram", "chant", "sacred utterance"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "मन् (मनँ ज्ञाने) + त्रै (त्रैङ् पालने)",
      formula: "मन् + त्रन् = मन्त्रः",
      explanationHindi: "'मननात् त्रायते इति मन्त्रः'—जिसके मनन, उच्चारण व ध्यान से मन की रक्षा हो।",
      explanationEnglish: "From root 'man' (to contemplate, think) + 'tra' (to protect, liberate). 'Mananāt trāyate iti mantraḥ'—that which protects through contemplation."
    },
    meanings: {
      hindi: "चेतना को रूपांतरित करने वाली आध्यात्मिक ध्वनि-तरंग; वैदिक ऋचा अथवा पवित्र बीज-अक्षर।",
      english: "A sacred sonic formula, syllable, or revelation whose contemplation frees the mind from limitation and aligns consciousness with cosmic reality."
    },
    decolonialNote: {
      title: "Why Mantra ≠ 'Magic Spell' or 'Incantation'",
      content: "Colonial scholarship degraded Mantras as magical spells (superstitions). In reality, Mantras are precise acoustical and consciousness sciences (शब्द ब्रह्म) utilizing resonance, meter, and intention."
    },
    citations: [
      {
        shloka: "मननात् त्रायते यस्मात् सर्वसंसारबन्धनात्।\nयतोऽभिलषितं सर्वं साधयेन्मन्त्र उच्यते॥",
        source: "कुलार्णव तन्त्र (१७.५३)",
        translation: "That which protects from all worldly bondages by contemplation and accomplishes all noble goals is called Mantra."
      }
    ],
    synonyms: ["ऋचा", "बीजाक्षर", "स्तोत्र", "जप", "ध्वनि"],
    antonyms: ["कोलाहल", "अपशब्द"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["chant", "sound", "vedic", "consciousness"],
    pronunciationKey: "mun-truh"
  },
  {
    id: "yajna",
    devanagari: "यज्ञ",
    iast: "yajña",
    phoneticVariants: ["yajna", "yagya", "yagna", "yadnya", "sacrifice", "offering"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "यज् (यजँ देवपूजासङ्गतीकरणदानेषु)",
      formula: "यज् + नङ् = यज्ञः",
      explanationHindi: "'यज्' धातु के तीन अर्थ हैं: देवपूजा (आदर), संगतिकरण (एकजुटता/संगठन) और दान (समर्पण)।",
      explanationEnglish: "From root 'yaj' (divine reverence, unification/fellowship, and giving/sacrifice) + suffix 'naṅ'. Reciprocal cosmic offering."
    },
    meanings: {
      hindi: "सार्वभौमिक कल्याण और पर्यावरण शुद्धि हेतु किया गया निःस्वार्थ समर्पण, आहुति और सामाजिक संगतिकरण।",
      english: "Sacred reciprocal offering, selfless contribution, and cosmic communion; living in harmonious alignment with natural cycles."
    },
    decolonialNote: {
      title: "Why Yajna ≠ Bloody 'Sacrifice'",
      content: "Colonial orientalists mapped Yajna to Abrahamic 'sacrifice' (appeasing an angry god through slaughtered animals). Gita 4.33 explains that the highest Yajna is knowledge (ज्ञानयज्ञ) and living with self-sacrifice for the collective good (लोकसंग्रह)."
    },
    citations: [
      {
        shloka: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्॥",
        source: "श्रीमद्भगवद्गीता (३.१०)",
        translation: "In the beginning, Prajapati created humanity along with Yajna and said: By this shall you prosper; let this be the wish-yielding milch cow for you."
      }
    ],
    synonyms: ["हवन", "होम", "याग", "समर्पण", "बलिदान"],
    antonyms: ["स्वार्थ", "शोषण", "उपभोग"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["vedic", "offering", "gita", "ecology"],
    pronunciationKey: "yug-nyuh"
  },
  {
    id: "sutra",
    devanagari: "सूत्र",
    iast: "sūtra",
    phoneticVariants: ["sutra", "sootra", "aphorism", "thread", "formula"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "सिव् (षिवुँ तन्तुसन्ताने)",
      formula: "सिव् + त्र = सूत्रम्",
      explanationHindi: "'सिव्' धातु से निष्पन्न, जिसका अर्थ है सीना, पिरोना या धागे में जोड़ना।",
      explanationEnglish: "Derived from root 'siv' (to sew, thread, string together) + suffix 'tra'. A mnemonic thread weaving vast philosophical knowledge."
    },
    meanings: {
      hindi: "अल्पाक्षर, असंदिग्ध, सारगर्भित और दोषरहित सूक्ति-वाक्य जो विशाल ज्ञान को संक्षेप में संजोए।",
      english: "An aphoristic thread of wisdom; a concise, unambiguous formula embodying extensive philosophical and scientific knowledge."
    },
    decolonialNote: {
      title: "Mnemonic Precision in Indian Oral Knowledge",
      content: "Before print culture, India preserved massive libraries through Sutras (Brahma Sutras, Panini Ashtadhyayi, Yoga Sutras). A sutra requires minimum syllables (अल्पाक्षर) while remaining universally comprehensive (विश्वतोमुखम्)."
    },
    citations: [
      {
        shloka: "अल्पाक्षरमसंदिग्धं सारवद्विश्वतोमुखम्।\nअस्तोभमनवद्यं च सूत्रं सूत्रविदो विदुः॥",
        source: "वायु पुराण / पाणिनीय शिक्षा",
        translation: "A Sutra is characterized by experts as having minimal syllables, being free from ambiguity, carrying essential meaning, all-encompassing, and faultless."
      }
    ],
    synonyms: ["सूक्ति", "सिद्धांत", "नियम", "धागा", "तंतु"],
    antonyms: ["भाष्य", "विस्तार"],
    category: "Literature & Tradition (साहित्य व परंपरा)",
    tags: ["aphorism", "panini", "grammar", "literature"],
    pronunciationKey: "soo-truh"
  },
  {
    id: "darshana",
    devanagari: "दर्शन",
    iast: "darśana",
    phoneticVariants: ["darshana", "darshan", "darsan", "philosophy", "worldview", "vision"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "दृश् (दृशिँर् प्रेक्षणे)",
      formula: "दृश् + ल्युट् = दर्शनम्",
      explanationHindi: "'दृश्' धातु से बना है, जिसका अर्थ है देखना, साक्षात् अनुभव करना या दृष्टि प्राप्त करना।",
      explanationEnglish: "From root 'dṛś' (to see, perceive, behold) + affix 'lyuṭ'. 'Dṛśyate anena iti darśanam'—that through which reality is directly seen."
    },
    meanings: {
      hindi: "सत्य का प्रत्यक्ष साक्षात् दर्शन; भारतीय विचार-पद्धति की षड्दर्शन परंपरा (सांख्य, योग, न्याय, वैशेषिक, मीमांसा, वेदांत)।",
      english: "Direct vision and experiential perception of ultimate reality; the six classical orthodox systems of Indic philosophy."
    },
    decolonialNote: {
      title: "Why Darshana ≠ Western 'Philosophy'",
      content: "Western 'Philosophy' (love of wisdom) is primarily an intellectual, speculative exercise. Darshana requires direct experiential realization (अपरोक्षानुभूति) and lived transformation."
    },
    citations: [
      {
        shloka: "आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यः।",
        source: "बृहदारण्यकोपनिषद् (२.४.५)",
        translation: "The Self, indeed, should be realized, heard about, reflected upon, and deeply meditated upon."
      }
    ],
    synonyms: ["दृष्टि", "साक्षात्कार", "तत्त्वज्ञान", "सिद्धांत", "अवलोकन"],
    antonyms: ["अज्ञान", "भ्रम", "अंधविश्वास"],
    category: "Philosophy (दर्शन)",
    tags: ["philosophy", "vedanta", "seeing", "vision"],
    pronunciationKey: "dur-shuh-nuh"
  },
  {
    id: "bharat",
    devanagari: "भारत",
    iast: "bhārata",
    phoneticVariants: ["bharat", "bharata", "bhaarata", "india", "hindustan"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "भा (भा दीप्तौ) + रम् (रमुँ क्रीडायाम् / रति)",
      formula: "भा + रत = भारत",
      explanationHindi: "'भा' का अर्थ है प्रकाश या ज्ञान, और 'रत' का अर्थ है लीन। 'भायां रतः इति भारतः'।",
      explanationEnglish: "From roots 'bhā' (light, knowledge, illumination) + 'rata' (devoted, engaged). Literal: 'Those who are passionately devoted to the pursuit of knowledge and light'."
    },
    meanings: {
      hindi: "ज्ञान के प्रकाश में सतत रत रहने वाली सनातन सभ्यतामूलक भूमि; हिमालय से समुद्र पर्यन्त विस्तृत सांस्कृतिक राष्ट्र।",
      english: "The civilizational realm devoted to inner light and wisdom; the indigenous name for India encompassing sacred geography from Himalayas to Indian Ocean."
    },
    decolonialNote: {
      title: "Why Bharat is a Civilization, Not Just a Westphalian State",
      content: "The name 'India' was bestowed by Greek and British outsiders referencing the Indus river. 'Bharat' defines a civilizational identity rooted in seekers of knowledge (ऋषि-मुनि) existing millennia before colonial nation-states."
    },
    citations: [
      {
        shloka: "उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम्।\nवर्षं तद् भारतं नाम भारती यत्र संततिः॥",
        source: "विष्णु पुराण (२.३.१)",
        translation: "The country that lies north of the ocean and south of the snowy Himalayas is called Bharata; there dwell the descendants of Bharata."
      }
    ],
    synonyms: ["आर्यावर्त", "जम्बूद्वीप", "हिंदुस्तान", "भारतवर्ष"],
    antonyms: [],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["nation", "civilization", "history", "identity"],
    pronunciationKey: "bhaa-rut"
  },
  {
    id: "varna",
    devanagari: "वर्ण",
    iast: "varṇa",
    phoneticVariants: ["varna", "varn", "caste", "social order"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "वृ (वृञ् संवरणार्थे / वृङ् सम्भक्तौ)",
      formula: "वृ + न = वर्णः",
      explanationHindi: "'वृ' धातु से बना है, जिसका अर्थ है वरण करना, चुनना (स्वभाव व कर्मानुसार)।",
      explanationEnglish: "From root 'vṛ' (to choose, select, encompass) + affix 'na'. Functional classification based on natural aptitude (Guna) and chosen work (Karma)."
    },
    meanings: {
      hindi: "गुण और कर्म के आधार पर समाज का चतुर्विध वर्गीकरण (ब्राह्मण, क्षत्रिय, वैश्य, शूद्र); न कि जन्मना जाति।",
      english: "Social organic classification based on intrinsic qualities (Guna) and vocation (Karma), distinct from hereditary colonial 'caste'."
    },
    decolonialNote: {
      title: "Why Varna ≠ Portuguese 'Caste'",
      content: "The word 'Caste' is from Portuguese 'casta' (pure breed/race), superimposed by the 1901 British Census (Herbert Risley) onto India's dynamic social fabric. Gita 4.13 explicitly states Varna is created according to Guna and Karma, not biological birth."
    },
    citations: [
      {
        shloka: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः।\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्॥",
        source: "श्रीमद्भगवद्गीता (४.१३)",
        translation: "The fourfold order was created by Me according to the divisions of qualities (Guna) and activities (Karma); know Me as its author, yet immutable."
      }
    ],
    synonyms: ["व्यवस्था", "प्रकृति", "वर्ग", "प्रवृत्ति"],
    antonyms: ["अवर्णीय"],
    category: "Governance & Society (नीति व राष्ट्र)",
    tags: ["caste", "society", "gita", "governance"],
    pronunciationKey: "vur-nuh"
  },
  {
    id: "jati",
    devanagari: "जाति",
    iast: "jāti",
    phoneticVariants: ["jati", "jaati", "community", "caste", "biradari"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "जन् (जनीँ प्रादुर्भावे)",
      formula: "जन् + क्तिन् = जातिः",
      explanationHindi: "'जन्' धातु से, जिसका अर्थ है जन्म लेना, उत्पन्न होना, समूह या समुदाय।",
      explanationEnglish: "From root 'jan' (to be born, produce) + suffix 'ktin'. Kinship communities, endogamous vocational guilds, or species (सामान्य)."
    },
    meanings: {
      hindi: "व्यावसायिक, सांस्कृतिक एवं सामाजिक सह-अस्तित्व वाले स्वशासित समुदाय व श्रेणियां (guilds)।",
      english: "Decentralized socio-cultural vocational communities and autonomous guilds that historically managed decentralized trade and craft in India."
    },
    decolonialNote: {
      title: "De-criminalizing the Indic Community",
      content: "Pre-colonial Jatis functioned as self-governing economic cooperatives and trade corporations. The colonial state rigidified them through legal codes and the Criminal Tribes Act, turning fluid social networks into an oppressive hierarchy."
    },
    citations: [
      {
        shloka: "आकृतिग्रहणा जातिर्लिङ्गानां च न सर्वभाक्।\nसकृदाख्यातनिर्ग्राह्या गोत्ववन्मूर्ध्न्युदीरिता॥",
        source: "महाभाष्य (पतञ्जलि) / न्याय सूत्र",
        translation: "Jati is that which is recognized by common characteristics and shared enduring form, as 'cowness' is recognized in all cows."
      }
    ],
    synonyms: ["समुदाय", "श्रेणी", "कुल", "बिरादरी", "समूह"],
    antonyms: [],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["caste", "community", "guild", "society"],
    pronunciationKey: "jaa-tee"
  },
  {
    id: "maya",
    devanagari: "माया",
    iast: "māyā",
    phoneticVariants: ["maya", "maaya", "illusion", "delusion", "matrix"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "मा (माङ् माने / मा दीप्तौ)",
      formula: "मा + यत् + टाप् = माया",
      explanationHindi: "'मा' धातु से बना है, जिसका अर्थ है नापना (measure), रूप देना या निर्माण करना।",
      explanationEnglish: "From root 'mā' (to measure, fashion, create form) + affix 'yat'. The cosmic power that projects and measures the finite out of the infinite."
    },
    meanings: {
      hindi: "परब्रह्म की अनिर्वचनीय सृजन-शक्ति; जो असीम को ससीम रूप में प्रस्तुत करती है।",
      english: "The wondrous creative power of the Absolute that projects the multifaceted empirical universe; relative phenomenological reality."
    },
    decolonialNote: {
      title: "Why Maya ≠ 'Non-existent Illusion'",
      content: "Colonial critics alleged that Advaita Vedanta calls the world 'an illusion' and therefore promotes fatalism. In reality, Maya is described as 'सत्-असत्-अनिर्वाच्य' (empirically real, yet not ultimately eternal like pure consciousness)."
    },
    citations: [
      {
        shloka: "दैवी ह्येषा गुणमयी मम माया दुरत्यया।\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते॥",
        source: "श्रीमद्भगवद्गीता (७.१४)",
        translation: "This divine Maya of Mine, consisting of the three Gunas, is hard to overcome; but those who take refuge in Me alone cross beyond this Maya."
      }
    ],
    synonyms: ["प्रकृति", "अविद्या", "लीला", "सृजनशक्ति", "इंद्रजाल"],
    antonyms: ["परमार्थ", "सत्य", "ब्रह्म"],
    category: "Philosophy (दर्शन)",
    tags: ["illusion", "vedanta", "gita", "reality"],
    pronunciationKey: "maa-yaa"
  },
  {
    id: "dhyana",
    devanagari: "ध्यान",
    iast: "dhyāna",
    phoneticVariants: ["dhyan", "dhyana", "meditation", "zen", "chan", "mindfulness"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "ध्यै (ध्यै चिन्तायाम्)",
      formula: "ध्यै + ल्युट् = ध्यानम्",
      explanationHindi: "'ध्यै' धातु से बना है, जिसका अर्थ है एकाग्र चित्त से देखना, अनुसंधान करना।",
      explanationEnglish: "From root 'dhyai' (to contemplate, meditate, focus unbroken attention) + affix 'lyuṭ'. The root origin of Chinese 'Chan' and Japanese 'Zen'."
    },
    meanings: {
      hindi: "ध्येय वस्तु में चित्त की तैलधारावत् अखण्ड, अविरल एकाग्रता; पतञ्जलि अष्टांग योग का सातवाँ अंग।",
      english: "Sustained meditative absorption; an unbroken flow of awareness toward the object of contemplation like pouring oil."
    },
    decolonialNote: {
      title: "The Indian Origin of Global Zen",
      content: "Dhyana was transmitted to China by Bodhidharma as 'Chan', and subsequently to Japan as 'Zen'. Western apps repackage it as 'mindfulness', detaching it from its ethical and Indic metaphysical foundations."
    },
    citations: [
      {
        shloka: "तत्र प्रत्ययैकतानता ध्यानम्॥",
        source: "पतञ्जलि योगसूत्र (३.२)",
        translation: "Dhyana is the unbroken single continuous flow of awareness towards the object of concentration."
      }
    ],
    synonyms: ["एकाग्रता", "चिंतन", "उपासना", "अनुसंधान", "योग"],
    antonyms: ["विक्षेप", "चंचलता", "प्रमाद"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["meditation", "zen", "patanjali", "mind"],
    pronunciationKey: "dhyaa-nuh"
  },
  {
    id: "sadhana",
    devanagari: "साधना",
    iast: "sādhanā",
    phoneticVariants: ["sadhana", "saadhana", "spiritual practice", "practice"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "साध् (साधँ संसिद्धौ)",
      formula: "साध् + ल्युट् + टाप् = साधना",
      explanationHindi: "'साध्' धातु से निष्पन्न, जिसका अर्थ है सिद्ध करना, पूर्णता प्राप्त करना।",
      explanationEnglish: "From root 'sādh' (to accomplish, reach the goal, master, perfect) + 'lyuṭ' + feminine affix. Dedicated practical methodology to realize truth."
    },
    meanings: {
      hindi: "आध्यात्मिक या कलात्मक सिद्धि हेतु किया जाने वाला नियमित, अनुशासित अभ्यास और पुरुषार्थ।",
      english: "Systematic spiritual or artistic discipline undertaken to attain mastery, realization, and highest perfection."
    },
    decolonialNote: {
      title: "Practice Over Blind Dogma",
      content: "Unlike Western creeds that require believing a set of dogmas, Indic traditions are orthopraxic: realization comes only through direct Sadhana (अन्तःकरण शुद्धि)."
    },
    citations: [
      {
        shloka: "साधनानां च सर्वेषां योगः श्रेष्ठतमो मतः।",
        source: "शिव संहिता",
        translation: "Among all disciplines and practices, Yoga is considered the most supreme."
      }
    ],
    synonyms: ["अभ्यास", "तपस्या", "अनुष्ठान", "यत्न", "क्रिया"],
    antonyms: ["प्रमाद", "आलस्य", "उपेक्षा"],
    category: "Yoga & Ayurveda (योग व स्वास्थ्य)",
    tags: ["practice", "discipline", "yoga", "culture"],
    pronunciationKey: "saa-dhuh-naa"
  },
  {
    id: "ahankara",
    devanagari: "अहङ्कार",
    iast: "ahaṅkāra",
    phoneticVariants: ["ahankara", "ahankar", "ahamkara", "ego", "i-ness"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "अहम् (अव्यय) + कृ (डुकृञ् करणे)",
      formula: "अहम् + कार = अहङ्कारः",
      explanationHindi: "'अहम्' (मैं) + 'कार' (बनाना) = 'मैं' का बोध कराना।",
      explanationEnglish: "Compound of 'aham' (I) + 'kāra' (maker, doer). Literal: 'the maker of the I-sense'."
    },
    meanings: {
      hindi: "जीवात्मा में 'मैं' और 'मेरा' का भाव उत्पन्न करने वाला अंतःकरण का तत्त्व; देहाभिमान।",
      english: "The cognitive faculty that generates the sense of separate individuality ('I-ness' and 'my-ness'); distinct from the pure Witness (Atman)."
    },
    decolonialNote: {
      title: "Why Ahankara ≠ Freudian 'Ego'",
      content: "Freudian psychology views the Ego as the rational mediator between Id and Superego. In Sankhya philosophy, Ahankara is one of the 24 material evolutes (Tattvas) that falsely claims agency over consciousness."
    },
    citations: [
      {
        shloka: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
        source: "श्रीमद्भगवद्गीता (३.२७)",
        translation: "All actions are performed by the modes of Prakriti (nature); but he whose mind is deluded by Ahankara thinks: 'I am the doer'."
      }
    ],
    synonyms: ["अहंकार", "अस्मिता", "दर्प", "गर्व", "अभिमान"],
    antonyms: ["निरहंकार", "विनय", "समर्पण"],
    category: "Philosophy (दर्शन)",
    tags: ["ego", "sankhya", "gita", "mind"],
    pronunciationKey: "uh-hung-kaa-ruh"
  },
  {
    id: "prakriti",
    devanagari: "प्रकृति",
    iast: "prakṛti",
    phoneticVariants: ["prakriti", "prakruti", "nature", "matter", "matrix"],
    partOfSpeech: {
      hindi: "संज्ञा, स्त्रीलिंग",
      english: "Noun, feminine"
    },
    rootEtymology: {
      dhatu: "प्र + कृ (डुकृञ् करणे)",
      formula: "प्र + कृ + क्तिन् = प्रकृतिः",
      explanationHindi: "'प्र' (प्रकृष्ट रूप से) + 'कृ' (करना) = जो समस्त सृष्टि का उपादान कारण बने।",
      explanationEnglish: "Prefix 'pra' (forth, primordial) + root 'kṛ' (to make, act) + 'ktin'. The primal cosmic matrix from which all material form evolves."
    },
    meanings: {
      hindi: "सत्व, रज, तम त्रिगुणमयी आदि-सृजन शक्ति; समस्त भौतिक जगत, शरीर और मन का मूल उपादान कारण।",
      english: "The primordial nature and material substratum consisting of the three Gunas (Sattva, Rajas, Tamas); the dynamic counterpart to Purusha."
    },
    decolonialNote: {
      title: "Sacred Nature vs. Exploitative 'Resource'",
      content: "Western Enlightenment philosophy treats nature as inert, mechanical matter to be conquered and exploited by man. Indic thought reveres Prakriti as sacred, animate, and inextricably linked with consciousness."
    },
    citations: [
      {
        shloka: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।\nअहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा॥",
        source: "श्रीमद्भगवद्गीता (७.४)",
        translation: "Earth, water, fire, air, space, mind, intellect, and ego-sense—thus is My material nature divided eightfold."
      }
    ],
    synonyms: ["स्वभाव", "सृष्टि", "माया", "नैसर्गिकता", "त्रिगुणात्मिका"],
    antonyms: ["पुरुष", "विकृति"],
    category: "Philosophy (दर्शन)",
    tags: ["nature", "sankhya", "ecology", "matter"],
    pronunciationKey: "pruh-kree-tee"
  },
  {
    id: "purusha",
    devanagari: "पुरुष",
    iast: "puruṣa",
    phoneticVariants: ["purusha", "purush", "pure consciousness", "soul", "witness"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "पुर् (पुरी शेते इति पुरुषः) / पृ (पालनपूरणयोः)",
      formula: "पुर् + कुषन् = पुरुषः",
      explanationHindi: "'पुरि शेते इति पुरुषः'—जो शरीर रूपी नौ द्वारों वाली नगरी में साक्षी रूप से निवास करता है।",
      explanationEnglish: "From 'puri śete iti puruṣaḥ'—He who abides as the silent witness in the city of the body (puri)."
    },
    meanings: {
      hindi: "अपरिवर्तनशील, साक्षी, विशुद्ध चैतन्य तत्त्व; सांख्य दर्शन में प्रकृति से पृथक् परम ज्ञाता।",
      english: "The unattached, unchanging, pure witness consciousness (Sakshi); the spiritual principle distinct from the material matrix (Prakriti)."
    },
    decolonialNote: {
      title: "Beyond Biological Gender",
      content: "While 'purusha' in colloquial modern Hindi can denote 'man/male', in philosophical Sanskrit it denotes trans-gender transcendent awareness residing in all living entities."
    },
    citations: [
      {
        shloka: "सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम्॥",
        source: "ऋग्वेद (१०.९०.१) / पुरुष सूक्त",
        translation: "The Cosmic Purusha has thousands of heads, thousands of eyes, thousands of feet; pervading the universe on every side, He transcends it by ten fingers' breadth."
      }
    ],
    synonyms: ["साक्षी", "ज्ञाता", "चेतन", "द्रष्टा", "परमात्मा"],
    antonyms: ["प्रकृति", "दृश्य", "जड़"],
    category: "Philosophy (दर्शन)",
    tags: ["consciousness", "sankhya", "rigveda", "witness"],
    pronunciationKey: "poo-roo-shuh"
  },
  {
    id: "deva",
    devanagari: "देव",
    iast: "deva",
    phoneticVariants: ["deva", "dev", "devata", "devtaa", "deity", "god"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "दिव् (दिवुँ क्रीड़ाविजिगीषाव्यवहारद्युतिस्तुतिमोदमदस्वप्नकान्तिगतिषु)",
      formula: "दिव् + अच् = देवः",
      explanationHindi: "'दिव्' धातु से बना है, जिसका अर्थ है चमकना, प्रकाशित होना या प्रकाशवान होना।",
      explanationEnglish: "From root 'div' (to shine, radiate, illuminate, rejoice) + suffix 'ac'. Luminous cosmic agents and powers of light."
    },
    meanings: {
      hindi: "सृष्टि में प्रकाश, ऊर्जा और नियम का पोषण करने वाले दिव्य प्रकाशवान तत्त्व (यथा सूर्य, अग्नि, वरुण)।",
      english: "Luminous celestial entities and cosmic powers of nature and consciousness; beings of light who uphold cosmic functioning."
    },
    decolonialNote: {
      title: "Why Devas ≠ 'Polytheistic Gods'",
      content: "Colonial missionaries labeled Hinduism as 'polytheism' (many gods fighting each other). The Vedas clarify: 'एकं सद्विप्रा बहुधा वदन्ति'—Truth is One, the wise perceive and invoke It as many luminous Devas."
    },
    citations: [
      {
        shloka: "एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः॥",
        source: "ऋग्वेद (१.१६४.४६)",
        translation: "Truth is One; sages describe It by many names—they call It Agni, Yama, and Matarishvan."
      }
    ],
    synonyms: ["देवता", "सुर", "अमर", "द्योतनशील", "प्रकाशवान"],
    antonyms: ["असुर", "दानव", "तम"],
    category: "Daily Living & Culture (व्यवहार व संस्कृति)",
    tags: ["god", "deity", "vedic", "light"],
    pronunciationKey: "day-vuh"
  },
  {
    id: "kavya",
    devanagari: "काव्य",
    iast: "kāvya",
    phoneticVariants: ["kavya", "kaavya", "poetry", "literature", "aesthetic"],
    partOfSpeech: {
      hindi: "संज्ञा, नपुंसकलिंग",
      english: "Noun, neuter"
    },
    rootEtymology: {
      dhatu: "कवि + ष्यञ्",
      formula: "कवि + ष्यञ् = काव्यम्",
      explanationHindi: "'कवेः कर्म काव्यम्'—जो कवि की दिव्य प्रज्ञा और अंतर्दृष्टि की कलात्मक अभिव्यक्ति हो।",
      explanationEnglish: "Derived from 'kavi' (seer, poet with visionary insight) + suffix 'ṣyañ'. The creative, inspired work of a visionary seer."
    },
    meanings: {
      hindi: "रस, ध्वनि, अलंकार और औचित्य से युक्त भावपूर्ण उदात्त वाङ्मय; जो सहृदय के हृदय को आनंदित करे।",
      english: "High Sanskrit literary art, poetry, and creative aesthetic expression characterized by Rasa (emotion) and Dhvani (reverberation)."
    },
    decolonialNote: {
      title: "The Seer-Poet Tradition",
      content: "In the Indic tradition, a 'Kavi' is not merely an entertainer or rhymester, but an enlightened seer ('क्रान्तदर्शी कविः') whose words reflect the deepest harmonies of the cosmos."
    },
    citations: [
      {
        shloka: "वाक्यं रसात्मकं काव्यम्॥",
        source: "आचार्य विश्वनाथ, साहित्यदर्पण (१.३)",
        translation: "Poetry is speech whose soul is aesthetic essence (Rasa)."
      }
    ],
    synonyms: ["कविता", "पद्य", "साहित्य", "वाङ्मय", "गीत"],
    antonyms: ["शास्त्र", "वार्ता"],
    category: "Literature & Tradition (साहित्य व परंपरा)",
    tags: ["poetry", "literature", "rasa", "aesthetic"],
    pronunciationKey: "kaav-yuh"
  },
  {
    id: "rasa",
    devanagari: "रस",
    iast: "rasa",
    phoneticVariants: ["rasa", "ras", "aesthetic essence", "taste", "emotion"],
    partOfSpeech: {
      hindi: "संज्ञा, पुल्लिंग",
      english: "Noun, masculine"
    },
    rootEtymology: {
      dhatu: "रस् (रसँ आस्वादने)",
      formula: "रस् + अच् = रसः",
      explanationHindi: "'रस्यते आस्वाद्यते इति रसः'—जिसका सहृदय द्वारा परमानंदपूर्वक आस्वादन किया जाए।",
      explanationEnglish: "From root 'ras' (to taste, savor, relish) + affix 'ac'. 'Rasyate āsvādyate iti rasaḥ'—that which is aesthetically savored."
    },
    meanings: {
      hindi: "कला और साहित्य में विभावादि के संयोग से उत्पन्न होने वाला अनिर्वचनीय आनंदमय रस (शृंगार, हास्य, करुण आदि नव रस)।",
      english: "Aesthetic essence, emotional flavor, and contemplative delight experienced in classical Indian drama, dance, and poetry (the 9 Rasas)."
    },
    decolonialNote: {
      title: "Aesthetics as Spiritual Experience",
      content: "Bharata Muni's Natyashastra states 'रसो वै सः'—Rasa is not mere emotional stimulation, but a stepping stone to Brahmananda (spiritual ecstasy) through depersonalized aesthetic enjoyment."
    },
    citations: [
      {
        shloka: "विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः॥",
        source: "भरत मुनि, नाट्यशास्त्र (रससूत्र)",
        translation: "The aesthetic experience (Rasa) is born from the harmonious combination of the determinants (Vibhāva), consequents (Anubhāva), and transitory emotional states (Vyabhicāri-bhāva)."
      }
    ],
    synonyms: ["आनंद", "स्वाद", "भाव", "अमृत", "आस्वाद"],
    antonyms: ["नीरस", "अरुचि"],
    category: "Literature & Tradition (साहित्य व परंपरा)",
    tags: ["aesthetic", "dance", "theatre", "literature"],
    pronunciationKey: "ruh-suh"
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

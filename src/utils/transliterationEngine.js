/**
 * Indic Transliteration & Phonetic Search Engine
 * Engineered for Garuda Prakashan Indic Lexicon Project
 * 
 * Features:
 * 1. Live Roman to Devanagari transliteration (phonetic, ITRANS, and Hinglish)
 * 2. Phonetic normalization (handling schwa deletion, vowel length, sibilants, aspiration)
 * 3. Bidirectional search (Devanagari, Romanized/Hinglish, and Reverse English semantic search)
 * 4. Fuzzy typo tolerance (Levenshtein distance & sound-alike ranking)
 */

// Devanagari Unicode Range: \u0900-\u097F
export function isDevanagari(text) {
  return /[\u0900-\u097F]/.test(text);
}

// Consonant mappings with inherent 'a'
const CONSONANTS = {
  ksh: "क्ष", chh: "छ", shh: "ष", jn: "ज्ञ", gy: "ज्ञ", shr: "श्र",
  kh: "ख", gh: "घ", ch: "च", jh: "झ", th: "थ", dh: "ध",
  ph: "फ", bh: "भ", sh: "श", tr: "त्र",
  k: "क", g: "ग", c: "च", j: "ज", t: "त", d: "द", n: "न",
  p: "प", f: "फ", b: "ब", m: "म", y: "य", r: "र", l: "ल",
  v: "व", w: "व", s: "स", h: "ह"
};

// Independent vowels (start of word or after another vowel)
const INDEPENDENT_VOWELS = {
  aa: "आ", ai: "ऐ", au: "औ", ee: "ई", oo: "ऊ", ou: "औ", ri: "ऋ",
  a: "अ", i: "इ", u: "उ", e: "ए", o: "ओ"
};

// Vowel matras (dependent signs attached to consonants)
const MATRAS = {
  aa: "ा", ai: "ै", au: "ौ", ee: "ी", oo: "ू", ou: "ौ", ri: "ृ",
  a: "", // inherent vowel
  i: "ि", u: "ु", e: "े", o: "ो"
};

// High-frequency curated Indic terms map for instantaneous, exact 1:1 transliteration
const COMMON_EXACT_MAP = {
  namaste: "नमस्ते",
  namaskar: "नमस्कार",
  dharma: "धर्म",
  dharm: "धर्म",
  dharama: "धर्म",
  yoga: "योग",
  yog: "योग",
  gyan: "ज्ञान",
  jnan: "ज्ञान",
  jnana: "ज्ञान",
  gyaan: "ज्ञान",
  satya: "सत्य",
  saty: "सत्य",
  ahimsa: "अहिंसा",
  ahinsa: "अहिंसा",
  rashtra: "राष्ट्र",
  rashtr: "राष्ट्र",
  swaraj: "स्वराज्य",
  swarajya: "स्वराज्य",
  moksha: "मोक्ष",
  moksh: "मोक्ष",
  karma: "कर्म",
  karm: "कर्म",
  itihasa: "इतिहास",
  itihas: "इतिहास",
  murti: "मूर्ति",
  moorti: "मूर्ति",
  guru: "गुरु",
  seva: "सेवा",
  prana: "प्राण",
  pran: "प्राण",
  sanskriti: "संस्कृति",
  sanskruti: "संस्कृति",
  vidya: "विद्या",
  niti: "नीति",
  samadhi: "समाधि",
  purushartha: "पुरुषार्थ",
  purusharth: "पुरुषार्थ",
  // Classical Vedic and Indic additions
  shanti: "शान्ति",
  shantih: "शान्ति",
  shaanti: "शान्ति",
  santi: "शान्ति",
  atman: "आत्मन्",
  atma: "आत्मा",
  aatma: "आत्मा",
  aatman: "आत्मन्",
  brahman: "ब्रह्म",
  brahm: "ब्रह्म",
  brahma: "ब्रह्म",
  bramha: "ब्रह्म",
  bhakti: "भक्ति",
  bhakthi: "भक्ति",
  shraddha: "श्रद्धा",
  sraddha: "श्रद्धा",
  tapas: "तपस्",
  tap: "तपस्",
  tapa: "तपस्",
  ananda: "आनन्द",
  anand: "आनन्द",
  aananda: "आनन्द",
  shakti: "शक्ति",
  sakthi: "शक्ति",
  shakthi: "शक्ति",
  karuna: "करुणा",
  karunaa: "करुणा",
  mantra: "मन्त्र",
  mantar: "मन्त्र",
  manthra: "मन्त्र",
  yajna: "यज्ञ",
  yagya: "यज्ञ",
  yagna: "यज्ञ",
  sutra: "सूत्र",
  sootra: "सूत्र",
  darshan: "दर्शन",
  darshana: "दर्शन",
  bharat: "भारत",
  bharata: "भारत",
  varna: "वर्ण",
  varn: "वर्ण",
  jati: "जाति",
  jaati: "जाति",
  maya: "माया",
  maaya: "माया",
  dhyan: "ध्यान",
  dhyana: "ध्यान",
  sadhana: "साधना",
  saadhana: "साधना",
  ahankar: "अहङ्कार",
  ahankara: "अहङ्कार",
  prakriti: "प्रकृति",
  prakruti: "प्रकृति",
  purush: "पुरुष",
  purusha: "पुरुष",
  deva: "देव",
  dev: "देव",
  devata: "देवता",
  kavya: "काव्य",
  kaavya: "काव्य",
  rasa: "रस",
  ras: "रस"
};

/**
 * Phonetically transliterates a Romanized string to Devanagari.
 * Employs curated exact dictionary lookup first, with a smart conjunct/matra tokenizer fallback.
 */
export function romanToDevanagari(input) {
  if (!input) return "";
  const str = input.toLowerCase().trim();

  // 1. Direct High-Frequency Map
  if (COMMON_EXACT_MAP[str]) {
    return COMMON_EXACT_MAP[str];
  }

  // 2. Multi-word transliteration
  if (str.includes(" ")) {
    return str.split(/\s+/).map(w => romanToDevanagari(w)).join(" ");
  }

  // 3. Smart Syllable Tokenizer
  let result = "";
  let i = 0;
  let lastWasConsonant = false;

  while (i < str.length) {
    const sub3 = str.slice(i, i + 3);
    const sub2 = str.slice(i, i + 2);
    const sub1 = str.slice(i, i + 1);

    // Consonant check
    let consMatch = null;
    let consLen = 0;
    if (CONSONANTS[sub3]) { consMatch = CONSONANTS[sub3]; consLen = 3; }
    else if (CONSONANTS[sub2]) { consMatch = CONSONANTS[sub2]; consLen = 2; }
    else if (CONSONANTS[sub1]) { consMatch = CONSONANTS[sub1]; consLen = 1; }

    if (consMatch) {
      if (lastWasConsonant) {
        result += "्"; // insert halanta for conjuncts
      }
      result += consMatch;
      i += consLen;
      lastWasConsonant = true;
      continue;
    }

    // Vowel check
    let vowMatch = null;
    let vowLen = 0;
    if (MATRAS[sub2] !== undefined) { vowMatch = sub2; vowLen = 2; }
    else if (MATRAS[sub1] !== undefined) { vowMatch = sub1; vowLen = 1; }

    if (vowMatch) {
      if (lastWasConsonant) {
        result += MATRAS[vowMatch];
      } else {
        result += INDEPENDENT_VOWELS[vowMatch] || vowMatch;
      }
      i += vowLen;
      lastWasConsonant = false;
      continue;
    }

    // Space or other punctuation
    result += str[i];
    i++;
    lastWasConsonant = false;
  }

  return result;
}

/**
 * Normalizes phonetic spelling to allow flexible matching
 * (e.g. collapsing long vowels, equating 'sh' and 's', equating 'v' and 'w', stripping trailing 'a' / schwa)
 */
export function normalizePhonetic(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/aa/g, "a")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/ou/g, "au")
    .replace(/w/g, "v")
    .replace(/shh/g, "sh")
    .replace(/sh/g, "s")
    .replace(/jñ/g, "jn")
    .replace(/gy/g, "jn")
    .replace(/h/g, "")    // optional aspiration for fuzzy matching
    .replace(/a$/, "");   // schwa deletion at word end (dharm == dharma)
}

/**
 * Levenshtein distance calculation for typo tolerance
 */
export function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

/**
 * Search the dictionary using multi-criteria ranking:
 * 1. Exact Devanagari match
 * 2. Prefix / Substring Devanagari match
 * 3. Transliterated Devanagari match
 * 4. Romanized / IAST exact & variant match
 * 5. Normalized phonetic match (handles schwa deletion e.g. dharm -> dharma, yog -> yoga)
 * 6. Reverse English semantic search (matching keywords in English definition, tags, and decolonial notes)
 * 7. Fuzzy sound-alike / Levenshtein fallback (typographical error tolerance)
 */
export function searchDictionary(query, dictionary) {
  if (!query || query.trim() === "") {
    return dictionary;
  }

  const rawQuery = query.trim();
  const lowerQuery = rawQuery.toLowerCase();
  const queryIsDev = isDevanagari(rawQuery);
  const transliteratedQuery = queryIsDev ? rawQuery : romanToDevanagari(lowerQuery);
  const normalizedQuery = normalizePhonetic(lowerQuery);

  const scoredResults = [];

  for (const entry of dictionary) {
    let score = 0;
    let matchType = null;

    // 1. Devanagari Direct Match
    if (queryIsDev) {
      if (entry.devanagari === rawQuery) {
        score += 100;
        matchType = "Exact Devanagari";
      } else if (entry.devanagari.startsWith(rawQuery)) {
        score += 80;
        matchType = "Devanagari Prefix";
      } else if (entry.devanagari.includes(rawQuery)) {
        score += 60;
        matchType = "Devanagari Substring";
      } else if (entry.meanings.hindi.includes(rawQuery) || entry.rootEtymology.dhatu.includes(rawQuery)) {
        score += 40;
        matchType = "Hindi Definition / Dhatu";
      } else if (entry.synonyms.some(s => s.includes(rawQuery))) {
        score += 35;
        matchType = "Devanagari Synonym";
      }
    } else {
      // 2. Romanized / IAST exact match
      if (entry.iast.toLowerCase() === lowerQuery || entry.id === lowerQuery) {
        score += 100;
        matchType = "Exact Romanized / IAST";
      } else if (entry.phoneticVariants && entry.phoneticVariants.some(v => v.toLowerCase() === lowerQuery)) {
        score += 95;
        matchType = "Phonetic Variant Match";
      } else if (entry.iast.toLowerCase().startsWith(lowerQuery)) {
        score += 75;
        matchType = "Romanized Prefix";
      }

      // 3. Transliterated Devanagari match
      if (transliteratedQuery) {
        if (entry.devanagari === transliteratedQuery) {
          score += 90;
          matchType = matchType || "Transliterated Devanagari";
        } else if (entry.devanagari.startsWith(transliteratedQuery)) {
          score += 70;
          matchType = matchType || "Transliterated Prefix";
        }
      }

      // 4. Normalized Phonetic match (handles schwa deletion e.g. dharm -> dharma)
      if (score === 0) {
        const normIast = normalizePhonetic(entry.iast);
        if (normIast === normalizedQuery) {
          score += 85;
          matchType = "Phonetic Normalization (Schwa)";
        } else if (entry.phoneticVariants && entry.phoneticVariants.some(v => normalizePhonetic(v) === normalizedQuery)) {
          score += 80;
          matchType = "Fuzzy Phonetic Match";
        }
      }

      // 5. English Semantic / Reverse Search
      const engMeaning = entry.meanings.english.toLowerCase();
      const decolonialTitle = entry.decolonialNote ? entry.decolonialNote.title.toLowerCase() : "";
      const decolonialText = entry.decolonialNote ? entry.decolonialNote.content.toLowerCase() : "";
      const fullDecolonial = `${decolonialTitle} ${decolonialText}`;
      const posEng = entry.partOfSpeech.english.toLowerCase();

      // Normalize hyphenated searches (e.g. non-violence -> nonviolence)
      const cleanLower = lowerQuery.replace(/[-_]/g, "");
      const spaceLower = lowerQuery.replace(/[-_]/g, " ");

      const matchesText = (text) => {
        return text.includes(lowerQuery) || text.includes(cleanLower) || text.includes(spaceLower);
      };

      if (matchesText(engMeaning)) {
        score += 65;
        matchType = matchType || "English Definition Translation";
      } else if (entry.tags && entry.tags.some(t => matchesText(t.toLowerCase()))) {
        score += 55;
        matchType = matchType || "English Tag Translation";
      } else if (matchesText(fullDecolonial)) {
        score += 45;
        matchType = matchType || "Decolonial Notes Translation";
      }

      // 6. Fuzzy Levenshtein Distance (for typos like 'namstey', 'dharmaa')
      if (score === 0 && lowerQuery.length >= 3) {
        const dist = levenshteinDistance(lowerQuery, entry.iast.toLowerCase());
        if (dist <= 2) {
          score += (30 - dist * 10);
          matchType = "Did you mean? (Typo tolerance)";
        }
      }
    }

    if (score > 0) {
      scoredResults.push({
        entry,
        score,
        matchType,
        transliteratedPreview: transliteratedQuery
      });
    }
  }

  // Sort by highest score first
  scoredResults.sort((a, b) => b.score - a.score);

  return scoredResults.map(r => ({
    ...r.entry,
    _matchMeta: {
      score: r.score,
      matchType: r.matchType,
      transliteratedPreview: r.transliteratedPreview
    }
  }));
}

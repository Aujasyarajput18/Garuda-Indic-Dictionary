/**
 * Indic Transliteration & Phonetic Search Engine
 * Engineered for Garuda Prakashan Indic Lexicon Project
 * 
 * Features:
 * 1. Live Roman to Devanagari transliteration (phonetic & ITRANS)
 * 2. Phonetic normalization (handling schwa deletion, vowel length, sibilants)
 * 3. Bidirectional search (Devanagari, Romanized/Hinglish, and Reverse English semantic search)
 * 4. Fuzzy typo tolerance (Levenshtein distance & sound-alike ranking)
 */

// Devanagari Unicode Range: \u0900-\u097F
export function isDevanagari(text) {
  return /[\u0900-\u097F]/.test(text);
}

// Consonant mappings with inherent 'a'
const CONSONANTS = {
  k: "क", kh: "ख", g: "ग", gh: "घ", ng: "ङ",
  c: "च", ch: "च", chh: "छ", j: "ज", jh: "झ", ny: "ञ", jn: "ज्ञ", gy: "ज्ञ",
  t: "त", th: "थ", d: "द", dh: "ध", n: "न",
  T: "ट", Th: "ठ", D: "ड", Dh: "ढ", N: "ण",
  p: "प", ph: "फ", f: "फ", b: "ब", bh: "भ", m: "म",
  y: "य", r: "र", l: "ल", v: "व", w: "व",
  sh: "श", shh: "ष", s: "स", h: "ह",
  ksh: "क्ष", x: "क्ष", tr: "त्र", shr: "श्र"
};

// Independent vowels (start of word or after another vowel)
const INDEPENDENT_VOWELS = {
  a: "अ", aa: "आ", A: "आ",
  i: "इ", ee: "ई", I: "ई",
  u: "उ", oo: "ऊ", U: "ऊ",
  ri: "ऋ", R: "ऋ",
  e: "ए", ai: "ऐ",
  o: "ओ", au: "औ", ou: "औ"
};

// Vowel matras (dependent signs attached to consonants)
const MATRAS = {
  a: "", // inherent vowel
  aa: "ा", A: "ा",
  i: "ि", ee: "ी", I: "ी",
  u: "ु", oo: "ू", U: "ू",
  ri: "ृ", R: "ृ",
  e: "े", ai: "ै",
  o: "ो", au: "ौ", ou: "ौ"
};

/**
 * Phonetically transliterates a Romanized string to Devanagari.
 * Handles greedy longest-prefix matching for multi-character sounds (e.g. 'ksh', 'chh', 'shh').
 */
export function romanToDevanagari(input) {
  if (!input) return "";
  const str = input.toLowerCase().trim();
  let result = "";
  let i = 0;

  // Custom high-frequency words shortcut dictionary
  const commonExactMap = {
    namaste: "नमस्ते",
    namaskar: "नमस्कार",
    dharma: "धर्म",
    dharm: "धर्म",
    yoga: "योग",
    yog: "योग",
    gyan: "ज्ञान",
    jnan: "ज्ञान",
    jnana: "ज्ञान",
    satya: "सत्य",
    ahimsa: "अहिंसा",
    ahinsa: "अहिंसा",
    rashtra: "राष्ट्र",
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
    vidya: "विद्या",
    niti: "नीति",
    samadhi: "समाधि",
    purushartha: "पुरुषार्थ"
  };

  if (commonExactMap[str]) {
    return commonExactMap[str];
  }

  while (i < str.length) {
    // Check 3-char prefixes (ksh, chh, shh, etc.)
    const sub3 = str.slice(i, i + 3);
    const sub2 = str.slice(i, i + 2);
    const sub1 = str.slice(i, i + 1);

    if (CONSONANTS[sub3]) {
      result += CONSONANTS[sub3];
      i += 3;
    } else if (CONSONANTS[sub2]) {
      result += CONSONANTS[sub2];
      i += 2;
    } else if (CONSONANTS[sub1]) {
      result += CONSONANTS[sub1];
      i += 1;
    } else if (INDEPENDENT_VOWELS[sub2] && (i === 0 || !CONSONANTS[str[i - 1]])) {
      result += INDEPENDENT_VOWELS[sub2];
      i += 2;
    } else if (INDEPENDENT_VOWELS[sub1] && (i === 0 || !CONSONANTS[str[i - 1]])) {
      result += INDEPENDENT_VOWELS[sub1];
      i += 1;
    } else if (MATRAS[sub2] !== undefined) {
      result += MATRAS[sub2];
      i += 2;
    } else if (MATRAS[sub1] !== undefined) {
      result += MATRAS[sub1];
      i += 1;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

/**
 * Normalizes phonetic spelling to allow flexible matching
 * (e.g. collapsing long vowels, equating 'sh' and 's', equating 'v' and 'w', stripping trailing 'a')
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
    .replace(/jñ/g, "jn")
    .replace(/gy/g, "jn") // equate gyan and jnan
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
 * 3. Phonetic Romanized match (e.g. 'dharma', 'dharama', 'gyan', 'jnan')
 * 4. English semantic / meaning reverse search (e.g. 'duty', 'liberation', 'truth')
 * 5. Fuzzy sound-alike / Levenshtein fallback
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
      } else if (entry.phoneticVariants.some(v => v.toLowerCase() === lowerQuery)) {
        score += 95;
        matchType = "Phonetic Variant Match";
      } else if (entry.iast.toLowerCase().startsWith(lowerQuery)) {
        score += 75;
        matchType = "Romanized Prefix";
      }

      // 3. Normalized Phonetic match (handles schwa deletion e.g. dharm -> dharma)
      if (score === 0) {
        const normIast = normalizePhonetic(entry.iast);
        if (normIast === normalizedQuery) {
          score += 85;
          matchType = "Phonetic Normalization (Schwa)";
        } else if (entry.phoneticVariants.some(v => normalizePhonetic(v) === normalizedQuery)) {
          score += 80;
          matchType = "Fuzzy Phonetic Match";
        }
      }

      // 4. Transliterated Devanagari match
      if (transliteratedQuery) {
        if (entry.devanagari === transliteratedQuery) {
          score += 90;
          matchType = "Transliterated Devanagari";
        } else if (entry.devanagari.startsWith(transliteratedQuery)) {
          score += 70;
          matchType = "Transliterated Prefix";
        }
      }

      // 5. English Semantic / Reverse Search
      const engMeaning = entry.meanings.english.toLowerCase();
      const decolonialText = entry.decolonialNote ? entry.decolonialNote.content.toLowerCase() : "";
      const posEng = entry.partOfSpeech.english.toLowerCase();

      if (engMeaning.includes(lowerQuery)) {
        score += 55;
        matchType = matchType || "English Definition";
      } else if (decolonialText.includes(lowerQuery)) {
        score += 40;
        matchType = matchType || "Decolonial Notes";
      } else if (entry.tags.some(t => t.includes(lowerQuery))) {
        score += 45;
        matchType = matchType || "Tag Match";
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

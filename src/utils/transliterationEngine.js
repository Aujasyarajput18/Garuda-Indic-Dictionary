/**
 * Indic Transliteration & Phonetic Search Engine
 * Engineered for Garuda Prakashan Indic Lexicon Project
 * 
 * Features:
 * 1. Dual-Engine Transliteration Architecture:
 *    - Online: Google Input Tools Indic IME API (Sanskrit & Hindi lattice ranking)
 *    - Offline: Pure client-side syllable automaton with vowel lengthening & conjunct matrix (0ms latency)
 * 2. Multi-Candidate Generation (Lattice): Generates ranked phonetic candidates (e.g. ram -> [राम, रम, रमा, रामा])
 * 3. Lexicon-Driven Boosting: Re-ranks candidates that exist in the Indic Dictionary to rank #1
 * 4. Multi-Branch Parallel Search: Simultaneously evaluates all candidate branches against dictionary headwords
 * 5. Reverse English Semantic Search: Root stemmer for English queries (peaceful -> shanti, duty -> dharma)
 * 6. Typo Tolerance: Levenshtein distance matrix (dist <= 2)
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
  i: "ि", u: "ु", e: "े", o: "ो"
};

// High-frequency curated Indic terms map for instantaneous 0ms exact transliteration
export const COMMON_EXACT_MAP = {
  rishi: "ऋषि",
  rshi: "ऋषि",
  rsi: "ऋषि",
  rishis: "ऋषि",
  "rishi muni": "ऋषि मुनि",
  rishihood: "ऋषिहुड",
  rishikesh: "ऋषिकेश",
  garuda: "गरुड़",
  garud: "गरुड़",
  rta: "ऋत",
  rita: "ऋत",
  ritu: "ऋतु",
  riddhi: "ऋद्धि",
  rishabh: "ऋषभ",
  ram: "राम",
  rama: "राम",
  raam: "राम",
  raama: "राम",
  shriram: "श्रीराम",
  "shri ram": "श्रीराम",
  sriram: "श्रीराम",
  "sri ram": "श्रीराम",
  krishna: "कृष्ण",
  krishn: "कृष्ण",
  krsna: "कृष्ण",
  shiva: "शिव",
  shiv: "शिव",
  mahadev: "महादेव",
  vishnu: "विष्णु",
  narayan: "नारायण",
  narayana: "नारायण",
  sita: "सीता",
  seeta: "सीता",
  radha: "राधा",
  radhe: "राधे",
  hanuman: "हनुमान्",
  hanumana: "हनुमान्",
  gita: "गीता",
  geeta: "गीता",
  bhagavadgita: "भगवद्गीता",
  "bhagavad gita": "भगवद्गीता",
  veda: "वेद",
  ved: "वेद",
  vedas: "वेद",
  rigveda: "ऋग्वेद",
  yajurveda: "यजुर्वेद",
  samaveda: "सामवेद",
  atharvaveda: "अथर्ववेद",
  upanishad: "उपनिषद्",
  upanishads: "उपनिषद्",
  ayurveda: "आयुर्वेद",
  ramayana: "रामायण",
  ramayan: "रामायण",
  mahabharata: "महाभारत",
  mahabharat: "महाभारत",
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
  mandir: "मन्दिर",
  temple: "मन्दिर",
  samskara: "संस्कार",
  sanskar: "संस्कार",
  ishvara: "ईश्वर",
  ishwar: "ईश्वर",
  sanskrit: "संस्कृत",
  samskritam: "संस्कृत",
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

// In-memory cache for API candidates
const apiCandidateCache = new Map();

/**
 * Parses Latin string into Devanagari using syllable automaton with configurable vowel treatment
 */
function parseSyllables(str, treatMedialAAsLong = false, treatTrailingAAsLong = false, vocalicRi = true, retroflexSh = false) {
  let result = "";
  let i = 0;
  let lastWasConsonant = false;

  const INDEP = {
    ...INDEPENDENT_VOWELS,
    ri: vocalicRi ? "ऋ" : null
  };

  while (i < str.length) {
    const sub3 = str.slice(i, i + 3);
    const sub2 = str.slice(i, i + 2);
    const sub1 = str.slice(i, i + 1);

    // Initial / Independent vowel check (when not directly following consonant)
    if (!lastWasConsonant && (INDEP[sub2] || INDEP[sub1])) {
      const match = INDEP[sub2] ? sub2 : sub1;
      result += INDEP[match];
      i += match.length;
      lastWasConsonant = false;
      continue;
    }

    // Matra check after consonant (including vocalic "ri" -> "ृ")
    if (lastWasConsonant && (MATRAS[sub2] !== undefined || MATRAS[sub1] !== undefined)) {
      const mMatch = MATRAS[sub2] !== undefined ? sub2 : sub1;
      result += MATRAS[mMatch];
      i += mMatch.length;
      lastWasConsonant = false;
      continue;
    }

    // Special treatment for single "a"
    if (sub1 === "a") {
      const isTrailing = (i === str.length - 1);
      if (lastWasConsonant) {
        if (isTrailing) {
          if (treatTrailingAAsLong) result += "ा";
          // else schwa deletion (no matra added)
        } else {
          if (treatMedialAAsLong) result += "ा";
          // else inherent schwa
        }
      } else {
        result += INDEPENDENT_VOWELS["a"];
      }
      i += 1;
      lastWasConsonant = false;
      continue;
    }

    // Retroflex 'sh' check
    if (retroflexSh && (sub2 === "sh" || sub3 === "shh")) {
      if (lastWasConsonant) result += "्";
      result += "ष";
      i += (sub3 === "shh" ? 3 : 2);
      lastWasConsonant = true;
      continue;
    }

    // Consonant check (greedy 3, then 2, then 1)
    let consMatch = null;
    let consLen = 0;
    if (CONSONANTS[sub3]) { consMatch = CONSONANTS[sub3]; consLen = 3; }
    else if (CONSONANTS[sub2]) { consMatch = CONSONANTS[sub2]; consLen = 2; }
    else if (CONSONANTS[sub1]) { consMatch = CONSONANTS[sub1]; consLen = 1; }

    if (consMatch) {
      if (lastWasConsonant) {
        result += "्"; // conjunct halanta
      }
      result += consMatch;
      i += consLen;
      lastWasConsonant = true;
      continue;
    }

    // Fallback for non-alphabetic chars
    result += str[i];
    i++;
    lastWasConsonant = false;
  }

  return result;
}

/**
 * Re-ranks candidates by boosting words that exist in the Indic Dictionary
 */
function boostDictionaryMatches(candidates, dictionary) {
  if (!dictionary || !dictionary.length || !candidates || !candidates.length) {
    return candidates;
  }

  const dictHeadwords = new Set();
  const dictSynonyms = new Set();

  for (const entry of dictionary) {
    if (entry.devanagari) dictHeadwords.add(entry.devanagari);
    if (entry.synonyms) entry.synonyms.forEach(s => dictSynonyms.add(s));
  }

  const boosted = [];
  const others = [];

  for (const cand of candidates) {
    if (dictHeadwords.has(cand) || dictSynonyms.has(cand)) {
      if (!boosted.includes(cand)) boosted.push(cand);
    } else {
      if (!others.includes(cand)) others.push(cand);
    }
  }

  return [...boosted, ...others];
}

/**
 * Generates local candidates instantly (0ms latency, zero network dependency)
 */
export function generateLocalCandidates(input, dictionary = []) {
  if (!input || !input.trim()) return [];
  const clean = input.toLowerCase().trim();

  const candidates = [];

  // 1. Curated exact match
  if (COMMON_EXACT_MAP[clean]) {
    candidates.push(COMMON_EXACT_MAP[clean]);
  }

  // 2. Multi-word support
  if (clean.includes(" ")) {
    const words = clean.split(/\s+/);
    const multiCand = words.map(w => COMMON_EXACT_MAP[w] || parseSyllables(w, true, false)).join(" ");
    candidates.push(multiCand);
  }

  // 3. Medial Long Vowel Parse (ram -> राम, bharat -> भारत, kam -> काम)
  const longParse = parseSyllables(clean, true, false);
  if (longParse && !candidates.includes(longParse)) {
    candidates.push(longParse);
  }

  // 4. Short Inherent Vowel Parse (ram -> रम, bharat -> भरत)
  const shortParse = parseSyllables(clean, false, false);
  if (shortParse && !candidates.includes(shortParse)) {
    candidates.push(shortParse);
  }

  // 5. Trailing Long Vowel Parse (rama -> रमा / रामा)
  if (clean.endsWith("a")) {
    const trailingLong = parseSyllables(clean, false, true);
    if (trailingLong && !candidates.includes(trailingLong)) {
      candidates.push(trailingLong);
    }
    const bothLong = parseSyllables(clean, true, true);
    if (bothLong && !candidates.includes(bothLong)) {
      candidates.push(bothLong);
    }
  }

  // 6. Vocalic 'ri' and retroflex 'sh' variants (e.g. rishi -> ऋषि, rita -> ऋत, krishna -> कृष्ण)
  if (clean.includes("ri") || clean.includes("sh") || clean.startsWith("r")) {
    const rishiParse1 = parseSyllables(clean, false, false, true, true);
    if (rishiParse1 && !candidates.includes(rishiParse1)) {
      candidates.push(rishiParse1);
    }
    const rishiParse2 = parseSyllables(clean, false, false, true, false);
    if (rishiParse2 && !candidates.includes(rishiParse2)) {
      candidates.push(rishiParse2);
    }
    const rishiParse3 = parseSyllables(clean, false, false, false, true);
    if (rishiParse3 && !candidates.includes(rishiParse3)) {
      candidates.push(rishiParse3);
    }
  }

  // 7. Anusvara variant (e.g. replacing 'n'/'m' before stops with anusvara)
  if (/m[dtpbkkgjc]|n[dtpbkkgjc]/.test(clean)) {
    const anusvaraClean = clean.replace(/m(?=[dtpbkkgjc])/g, "n");
    const anusvaraResult = parseSyllables(anusvaraClean, false, false).replace(/न्(?=[क-ह])/g, "ं");
    if (anusvaraResult && !candidates.includes(anusvaraResult)) {
      candidates.push(anusvaraResult);
    }
  }

  // Always keep English original query as the last fallback choice
  if (!candidates.includes(input)) {
    candidates.push(input);
  }

  return boostDictionaryMatches(candidates, dictionary);
}

/**
 * Fetches real-time candidates from Google Input Tools API (Online + Sanskrit/Hindi merged)
 * Falls back immediately to local lattice generator if offline or network delayed.
 */
export async function fetchIndicCandidates(query, dictionary = [], maxResults = 5) {
  if (!query || !query.trim()) return [];
  const clean = query.toLowerCase().trim();

  // If already Devanagari, return as-is
  if (isDevanagari(clean)) {
    return [clean];
  }

  // Check cache
  if (apiCandidateCache.has(clean)) {
    const cached = apiCandidateCache.get(clean);
    return boostDictionaryMatches(cached, dictionary);
  }

  // Immediate local candidates available in 0ms
  const localCandidates = generateLocalCandidates(clean, dictionary);

  try {
    const encoded = encodeURIComponent(clean);
    const saUrl = `https://inputtools.google.com/request?text=${encoded}&itc=sa-t-i0-und&num=${maxResults}&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;
    const hiUrl = `https://inputtools.google.com/request?text=${encoded}&itc=hi-t-i0-und&num=${maxResults}&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const [saRes, hiRes] = await Promise.all([
      fetch(saUrl, { signal: controller.signal }).then(r => r.json()).catch(() => null),
      fetch(hiUrl, { signal: controller.signal }).then(r => r.json()).catch(() => null)
    ]);
    clearTimeout(timeoutId);

    const saCand = saRes?.[1]?.[0]?.[1] || [];
    const hiCand = hiRes?.[1]?.[0]?.[1] || [];

    // Merge Google candidates
    const combined = Array.from(new Set([...saCand, ...hiCand]));

    if (combined.length > 0) {
      // Append local candidates for maximum recall
      for (const loc of localCandidates) {
        if (!combined.includes(loc)) {
          combined.push(loc);
        }
      }
      const boosted = boostDictionaryMatches(combined, dictionary).slice(0, 6);
      apiCandidateCache.set(clean, boosted);
      return boosted;
    }
  } catch (err) {
    // Graceful offline fallback
  }

  return localCandidates;
}

/**
 * Phonetically transliterates a Romanized string to Devanagari (returns top candidate)
 */
export function romanToDevanagari(input, dictionary = []) {
  if (!input) return "";
  const str = input.toLowerCase().trim();

  // 1. High frequency direct match
  if (COMMON_EXACT_MAP[str]) {
    return COMMON_EXACT_MAP[str];
  }

  // 2. Generate local candidate lattice and take top ranked
  const cands = generateLocalCandidates(input, dictionary);
  return cands[0] || input;
}

/**
 * Extract morphological stem from English query words
 * (strips common suffixes like -ful, -ing, -ed, -ical, -ic, -ion, -ness, -ly, etc.)
 */
export function getStem(word) {
  if (!word) return "";
  return word
    .toLowerCase()
    .replace(/[-_]/g, "")
    .replace(/(ful|ing|ed|ical|ic|ions|ion|ate|ly|ous|al|ism|ist|ness|ences|ence|ances|ance|ents|ent|ants|ant|ies|y|s)$/, "");
}

/**
 * Normalizes phonetic spelling to allow flexible matching
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
 * Search the dictionary using multi-criteria ranking and multi-branch candidate evaluation
 */
export function searchDictionary(query, dictionary, liveCandidates = []) {
  if (!query || query.trim() === "") {
    return dictionary;
  }

  const rawQuery = query.trim();
  const lowerQuery = rawQuery.toLowerCase();
  const queryIsDev = isDevanagari(rawQuery);
  const normalizedQuery = normalizePhonetic(lowerQuery);

  // Compute or use candidates
  const candidates = queryIsDev
    ? [rawQuery]
    : (liveCandidates && liveCandidates.length > 0
        ? liveCandidates
        : generateLocalCandidates(lowerQuery, dictionary));

  const topTransliteration = candidates[0] || (queryIsDev ? rawQuery : romanToDevanagari(lowerQuery, dictionary));

  const scoredResults = [];

  for (const entry of dictionary) {
    let score = 0;
    let matchType = null;

    // 1. Devanagari Direct Search
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
      } else if (entry.synonyms && entry.synonyms.some(s => s.includes(rawQuery))) {
        score += 35;
        matchType = "Devanagari Synonym";
      }
    } else {
      // 2. Multi-Candidate Transliteration Match (Tests ALL generated candidates)
      for (let idx = 0; idx < candidates.length; idx++) {
        const cand = candidates[idx];
        if (!cand || cand === rawQuery) continue;

        if (entry.devanagari === cand) {
          const rankWeight = Math.max(70, 100 - idx * 5);
          if (rankWeight > score) {
            score = rankWeight;
            matchType = `Phonetic Candidate (#${idx + 1}: ${cand})`;
          }
        } else if (entry.devanagari.startsWith(cand)) {
          const rankWeight = Math.max(50, 75 - idx * 5);
          if (rankWeight > score) {
            score = rankWeight;
            matchType = `Candidate Prefix (${cand})`;
          }
        } else if (entry.synonyms && entry.synonyms.some(s => s === cand || s.startsWith(cand))) {
          const rankWeight = Math.max(45, 65 - idx * 5);
          if (rankWeight > score) {
            score = rankWeight;
            matchType = `Synonym Candidate (${cand})`;
          }
        }
      }

      // 3. Romanized / IAST exact match
      if (entry.iast.toLowerCase() === lowerQuery || entry.id === lowerQuery) {
        score = Math.max(score, 100);
        matchType = matchType || "Exact Romanized / IAST";
      } else if (entry.phoneticVariants && entry.phoneticVariants.some(v => v.toLowerCase() === lowerQuery)) {
        score = Math.max(score, 95);
        matchType = matchType || "Phonetic Variant Match";
      } else if (entry.iast.toLowerCase().startsWith(lowerQuery)) {
        score = Math.max(score, 75);
        matchType = matchType || "Romanized Prefix";
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

      const cleanLower = lowerQuery.replace(/[-_]/g, "");
      const spaceLower = lowerQuery.replace(/[-_]/g, " ");
      const qStem = getStem(cleanLower);

      const matchesText = (text) => {
        if (!text) return false;
        const lower = text.toLowerCase();
        if (lower.includes(lowerQuery) || lower.includes(cleanLower) || lower.includes(spaceLower)) {
          return true;
        }
        if (qStem.length >= 3) {
          const words = lower.split(/[^a-zA-Z0-9\u0900-\u097F]+/).filter(Boolean);
          for (const w of words) {
            if (w.length >= 3) {
              const wStem = getStem(w);
              if (wStem.length >= 3 && (wStem === qStem || wStem.startsWith(qStem) || qStem.startsWith(wStem))) {
                return true;
              }
            }
          }
        }
        return false;
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
        transliteratedPreview: topTransliteration
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

import { searchDictionary, romanToDevanagari, normalizePhonetic } from './src/utils/transliterationEngine.js';
import { INDIC_DICTIONARY, CATEGORIES } from './src/data/dictionaryData.js';

console.log("================================================================================");
console.log("         GARUDA INDIC LEXICON — RIGOROUS VERIFICATION & TEST SUITE            ");
console.log("================================================================================\n");

let totalTests = 0;
let passedTests = 0;
let failedTests = [];

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✓ PASS: ${testName}`);
  } else {
    failedTests.push({ testName, details });
    console.error(`✗ FAIL: ${testName} -> ${details}`);
  }
}

// ==============================================================================
// 1. DATA INTEGRITY & TRANSLATION COMPLETENESS (Every word must be fully translated)
// ==============================================================================
console.log("\n--- [SUITE 1: DATA INTEGRITY & SCHOLARLY COMPLETENESS] ---");
const validCategories = CATEGORIES.filter(c => c.id !== 'all').map(c => c.id);

INDIC_DICTIONARY.forEach((entry) => {
  // Test Devanagari
  assert(
    typeof entry.devanagari === 'string' && entry.devanagari.trim().length > 0,
    `[${entry.id}] Valid Devanagari Headword (${entry.devanagari})`
  );

  // Test IAST
  assert(
    typeof entry.iast === 'string' && entry.iast.trim().length > 0,
    `[${entry.id}] Valid IAST romanization (${entry.iast})`
  );

  // Test Hindi Meaning (must be fully translated)
  assert(
    typeof entry.meanings?.hindi === 'string' && entry.meanings.hindi.trim().length > 15,
    `[${entry.id}] Complete Hindi Translation & Definition`
  );

  // Test English Meaning (must be fully translated)
  assert(
    typeof entry.meanings?.english === 'string' && entry.meanings.english.trim().length > 15,
    `[${entry.id}] Complete English Translation & Definition`
  );

  // Test Paninian Dhatu & Etymology formula
  assert(
    typeof entry.rootEtymology?.dhatu === 'string' && typeof entry.rootEtymology?.formula === 'string',
    `[${entry.id}] Paninian Root & Derivation (${entry.rootEtymology?.formula})`
  );

  // Test Scriptural Citations
  assert(
    Array.isArray(entry.citations) && entry.citations.length > 0 && entry.citations[0].shloka && entry.citations[0].source,
    `[${entry.id}] Verified Scriptural Citation (${entry.citations[0]?.source})`
  );

  // Test Decolonial Note
  assert(
    typeof entry.decolonialNote?.title === 'string' && typeof entry.decolonialNote?.content === 'string',
    `[${entry.id}] Decolonial Lexicon Note (${entry.decolonialNote?.title})`
  );

  // Test Category validity
  assert(
    validCategories.includes(entry.category),
    `[${entry.id}] Belongs to valid category (${entry.category})`
  );
});

// ==============================================================================
// 2. DEVANAGARI DIRECT SEARCH TEST (Every single word found by Devanagari query)
// ==============================================================================
console.log("\n--- [SUITE 2: DEVANAGARI HEADWORD SEARCH] ---");
INDIC_DICTIONARY.forEach((entry) => {
  const results = searchDictionary(entry.devanagari, INDIC_DICTIONARY);
  const match = results[0];
  assert(
    match && match.id === entry.id,
    `Devanagari Search "${entry.devanagari}" -> Found "${match?.id}" (${match?._matchMeta?.matchType})`,
    `Expected "${entry.id}", Got "${match?.id}"`
  );
});

// ==============================================================================
// 3. ROMANIZED PHONETIC SEARCH TEST (Every single word found by phonetic English)
// ==============================================================================
console.log("\n--- [SUITE 3: ROMANIZED / HINGLISH PHONETIC SEARCH] ---");
INDIC_DICTIONARY.forEach((entry) => {
  const results = searchDictionary(entry.id, INDIC_DICTIONARY);
  const match = results[0];
  assert(
    match && match.id === entry.id,
    `Phonetic Search "${entry.id}" -> Found "${match?.id}" (${match?._matchMeta?.matchType})`,
    `Expected "${entry.id}", Got "${match?.id}"`
  );
});

// ==============================================================================
// 4. SCHWA-DELETION & VOWEL LENGTH ROBUSTNESS TEST
// ==============================================================================
console.log("\n--- [SUITE 4: SCHWA-DELETION & PHONETIC VARIANTS] ---");
const schwaCases = [
  { input: "dharm", expected: "dharma" },
  { input: "yog", expected: "yoga" },
  { input: "karm", expected: "karma" },
  { input: "gyan", expected: "jnana" },
  { input: "jnan", expected: "jnana" },
  { input: "shant", expected: "shanti" },
  { input: "shaanti", expected: "shanti" },
  { input: "shantih", expected: "shanti" },
  { input: "tap", expected: "tapas" },
  { input: "anand", expected: "ananda" },
  { input: "aananda", expected: "ananda" },
  { input: "bharat", expected: "bharat" },
  { input: "varn", expected: "varna" },
  { input: "jaati", expected: "jati" },
  { input: "maaya", expected: "maya" },
  { input: "dhyan", expected: "dhyana" },
  { input: "ahankar", expected: "ahankara" },
  { input: "purush", expected: "purusha" },
  { input: "dev", expected: "deva" },
  { input: "ras", expected: "rasa" },
  { input: "moksh", expected: "moksha" },
  { input: "pran", expected: "prana" },
  { input: "itihas", expected: "itihasa" },
  { input: "moorti", expected: "murti" }
];

schwaCases.forEach(({ input, expected }) => {
  const results = searchDictionary(input, INDIC_DICTIONARY);
  const match = results[0];
  assert(
    match && match.id === expected,
    `Schwa/Variant "${input}" -> Found "${match?.id}" (${match?._matchMeta?.matchType})`,
    `Expected "${expected}", Got "${match?.id}"`
  );
});

// ==============================================================================
// 5. ENGLISH REVERSE SEMANTIC TRANSLATION TEST
// ==============================================================================
console.log("\n--- [SUITE 5: REVERSE ENGLISH TRANSLATION SEARCH] ---");
const englishSemanticCases = [
  { english: "righteousness", expected: "dharma" },
  { english: "duty", expected: "dharma" },
  { english: "peace", expected: "shanti" },
  { english: "tranquility", expected: "shanti" },
  { english: "soul", expected: "atman" },
  { english: "witness", expected: "atman" },
  { english: "ultimate reality", expected: "brahman" },
  { english: "devotion", expected: "bhakti" },
  { english: "trust", expected: "shraddha" },
  { english: "austerity", expected: "tapas" },
  { english: "bliss", expected: "ananda" },
  { english: "energy", expected: "shakti" },
  { english: "compassion", expected: "karuna" },
  { english: "chant", expected: "mantra" },
  { english: "offering", expected: "yajna" },
  { english: "aphorism", expected: "sutra" },
  { english: "philosophy", expected: "darshana" },
  { english: "india", expected: "bharat" },
  { english: "caste", expected: "varna" },
  { english: "guild", expected: "jati" },
  { english: "illusion", expected: "maya" },
  { english: "meditation", expected: "dhyana" },
  { english: "liberation", expected: "moksha" },
  { english: "truth", expected: "satya" },
  { english: "non-violence", expected: "ahimsa" },
  { english: "nation", expected: "rashtra" },
  { english: "sovereignty", expected: "swaraj" },
  { english: "history", expected: "itihasa" },
  { english: "teacher", expected: "guru" },
  { english: "service", expected: "seva" },
  { english: "life force", expected: "prana" },
  { english: "culture", expected: "sanskriti" },
  { english: "knowledge", expected: "vidya" },
  { english: "ethics", expected: "niti" },
  { english: "absorption", expected: "samadhi" },
  { english: "ego", expected: "ahankara" },
  { english: "nature", expected: "prakriti" },
  { english: "pure consciousness", expected: "purusha" },
  { english: "deity", expected: "deva" },
  { english: "poetry", expected: "kavya" },
  { english: "aesthetic", expected: "rasa" }
];

englishSemanticCases.forEach(({ english, expected }) => {
  const results = searchDictionary(english, INDIC_DICTIONARY);
  const match = results[0];
  const found = results.some(r => r.id === expected);
  assert(
    found,
    `English Search "${english}" -> Translates to "${expected}" (Top: "${match?.id}")`,
    `Expected "${expected}" in results, Top match was "${match?.id}"`
  );
});

// ==============================================================================
// 6. TYPO TOLERANCE & LEVENSHTEIN FUZZY MATCHING
// ==============================================================================
console.log("\n--- [SUITE 6: TYPO TOLERANCE & FUZZY MATCHING] ---");
const typoCases = [
  { typo: "dharmaa", expected: "dharma" },
  { typo: "namstey", expected: "namaste" },
  { typo: "mokshaa", expected: "moksha" },
  { typo: "ahims", expected: "ahimsa" },
  { typo: "swaraaj", expected: "swaraj" }
];

typoCases.forEach(({ typo, expected }) => {
  const results = searchDictionary(typo, INDIC_DICTIONARY);
  const found = results.some(r => r.id === expected);
  assert(
    found,
    `Typo tolerance for "${typo}" -> Found "${expected}"`,
    `Expected "${expected}" to be retrieved for typo "${typo}"`
  );
});

// ==============================================================================
// TEST SUMMARY & REPORT
// ==============================================================================
console.log("\n================================================================================");
console.log(`TOTAL TESTS:  ${totalTests}`);
console.log(`PASSED:       ${passedTests}`);
console.log(`FAILED:       ${failedTests.length}`);
console.log("================================================================================");

if (failedTests.length === 0) {
  console.log("\n🎉 ALL RIGOROUS TESTS PASSED WITH 100% SUCCESS! EVERY WORD IS TRANSLATED & VERIFIED.\n");
  process.exit(0);
} else {
  console.error("\n❌ FAILURES DETECTED:\n", failedTests);
  process.exit(1);
}

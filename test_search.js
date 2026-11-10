import { searchDictionary, romanToDevanagari, normalizePhonetic } from './src/utils/transliterationEngine.js';
import { INDIC_DICTIONARY } from './src/data/dictionaryData.js';

console.log("=== Testing Garuda Indic Search & Transliteration Engine ===\n");

const testCases = [
  { query: "धर्म", expected: "dharma" },
  { query: "dharma", expected: "dharma" },
  { query: "dharm", expected: "dharma" },
  { query: "gyan", expected: "jnana" },
  { query: "jnan", expected: "jnana" },
  { query: "yoga", expected: "yoga" },
  { query: "yog", expected: "yoga" },
  { query: "namaste", expected: "namaste" },
  { query: "swaraj", expected: "swaraj" },
  { query: "righteousness", expected: "dharma" },
  { query: "liberation", expected: "moksha" },
  { query: "truth", expected: "satya" }
];

let passed = 0;

testCases.forEach(({ query, expected }) => {
  const results = searchDictionary(query, INDIC_DICTIONARY);
  const topMatch = results[0]?.id;
  const matchType = results[0]?._matchMeta?.matchType;
  const ok = topMatch === expected;
  if (ok) passed++;
  console.log(`${ok ? '✓ PASS' : '✗ FAIL'}: Query: "${query}" -> Found: "${topMatch}" (${matchType || 'none'})`);
});

console.log(`\nResult: ${passed}/${testCases.length} tests passed.`);
if (passed === testCases.length) {
  console.log("All search and transliteration test cases verified successfully!");
} else {
  process.exit(1);
}

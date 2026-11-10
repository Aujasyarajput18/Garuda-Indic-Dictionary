# गरुड़ शब्दकोश (Garuda Indic Lexicon)
### Live Project Assignment for Garuda Prakashan × Rishihood University
**Track 3: Dictionary App (Web & Indic Computing)**  
**Author:** Aujasya (Rishihood University)  
**Live Demo:** [https://aujasyarajput18.github.io/Garuda-Indic-Dictionary/](https://aujasyarajput18.github.io/Garuda-Indic-Dictionary/)

---

## 📌 Executive Summary & Philosophy

> *"धारणाद्धर्ममित्याहुर्धर्मो धारयते प्रजाः"* — महाभारत (कर्ण पर्व ६९.५८)

Following Sankrant Sanu Ji's keynote session, **"Building for Bharat in the Age of AI"** (26 October at Rishihood University), this application was engineered to address a fundamental bottleneck in Indic computing: **the linguistic divide between Indian mother tongues and modern digital interfaces.**

As demonstrated in Sankrant Ji's work (*The English Medium Myth*), millions of Indian users think and speak in Indian languages but navigate keyboards in the Roman script (Hinglish / Romanised transliteration). Standard Western dictionaries fail because they require either exact Latin spelling or rigid Devanagari input.

**Garuda Indic Lexicon** bridges this gap:
1. **Phonetic & Romanized Search:** Type `dharma`, `dharm`, `gyan`, `jnan`, `yoga`, or `namaste` to find native Devanagari entries.
2. **Native Devanagari Search:** Direct Unicode lookups (`धर्म`, `ज्ञान`, `योग`, `सत्य`).
3. **Reverse Semantic English Search:** Find Indic roots by searching English concepts (`righteousness`, `liberation`, `duty`, `truth`).
4. **Decolonial Semantic Precision:** Exposes "non-translatables" and rejects crude colonial equivalences (e.g., *Dharma ≠ Religion*, *Mūrti ≠ Idol*, *Itihāsa ≠ Mythology*, *Rāṣṭra ≠ Westphalian Nation-State*).
5. **Paninian Root Etymology:** Every entry details the classical Sanskrit root (*धातु*), derivational formula (*व्युत्पत्ति*), and scriptural citations (*प्रमाण श्लोक*).

---

## 🚀 Key Features

* **⚡ Google Input Tools & Indic IME Multi-Candidate Lattice Engine:**
  * Powered by a dual-engine transliteration architecture:
    1. **Google Indic Transliteration API:** Debounced live neural/n-gram candidate lattice for any arbitrary Sanskrit, Hindi, or Hinglish word.
    2. **Local Syllable Automaton:** Instant 0ms client-side fallback with medial long-vowel parsing (`ram` → `राम`, `kam` → `काम`), conjunct matrix (`युक्ताक्षर`), and anusvara substitution.
  * **Interactive Suggestion Bar:** Real-time candidate chips (`1. राम ↵`, `2. रम`, `3. रमा`, `4. रामा`, `5. ram`) with keyboard navigation (`Enter`, `Space`, `Tab`, `Alt+Arrow`, or number shortcuts) and lexicon-boosted indicators.
  * **Multi-Branch Parallel Search:** Simultaneously searches across all candidate branches so typing `ram` or `rama` instantly matches `राम` with highest score.
* **🔤 Phonetic Normalizer & Schwa Deletion:**
  * Seamlessly handles terminal schwa variation (`dharm` ⇄ `dharma`, `yog` ⇄ `yoga`, `karm` ⇄ `karma`).
  * Normalizes sibilants (`sh` / `s` / `shh`), vowel lengths (`ee` / `i`, `oo` / `u`), and conjunct ambiguities (`gyan` vs `jnan`).
* **📖 60 Foundational Scholarly Indic Entries:**
  * Across 5 classical categories (Philosophy, Yoga & Wellness, Statecraft & Civil Society, Epics & Literature, Daily Culture).
  * Every entry complete with Paninian Dhatu (`धातु`), derivational formula, Sanskrit scriptural citations (*प्रमाण श्लोक*), decolonial notes, and English reverse lookup.
* **🧪 Rigorous Automated Test Suite (701 Assertions, 100% Pass Rate):**
  * Automated testing across 7 comprehensive test suites (`npm test` / `node test_rigorous.js`).
* **⌨️ Integrated Indic Virtual Keyboard:**
  * For desktop and mobile users without an active Hindi/Devanagari IME keyboard. Categorized into *स्वर (Vowels)*, *मात्राएं (Vowel Signs)*, and *व्यंजन (Consonants & Conjuncts)* with halant and Vedic symbols (ॐ, ं, ः).
* **🔊 Audio Pronunciation:**
  * Native Web Speech API integration (`hi-IN`) to pronounce classical terms with proper phonetics.
* **📜 Scriptural Citations & Decolonial Context:**
  * Classical shlokas with verified references (Bhagavad Gita, Patanjali Yoga Sutras, Upanishads, Mahabharata).
  * Contextual callouts highlighting civilizational and philosophical depth.
* **📚 Bookmarking & Academic Citation Export:**
  * Save words locally in browser `localStorage`.
  * One-click export of saved word lists as text files (`.txt`) for students and researchers.
  * One-click copying of academic citations.
* **🎨 Authentic Indic Design System:**
  * Styled with ancient Nalanda Bhojpatra manuscript scroll aesthetic, soot-ink typography (`#1A140E`), terracotta accents (`#8B331B`), Vedic forest green (`#1F5333`), and pure transparent vector SVG Indic doodles (Rishi writing on bhojpatra, Saraswati Veena, blooming pink lotus, Grantha pothi).
  * 100% harmonious single-palette editorial reading experience without discordant dark-mode mixtures.

---

## 🛠️ Architecture & Tech Stack

```
garuda-indic-dictionary/
├── src/
│   ├── data/
│   │   └── dictionaryData.js        # Rich Indic lexicon with roots, citations & decolonial notes
│   ├── utils/
│   │   └── transliterationEngine.js # Phonetic parser, normalizer, and Levenshtein matcher
│   ├── components/
│   │   ├── Header.jsx               # Navigation, brand identity, and theme toggle
│   │   ├── SearchBar.jsx            # Dual input, live transliteration preview & quick chips
│   │   ├── VirtualKeyboard.jsx      # On-screen Devanagari typing toolbar
│   │   ├── CategoryFilter.jsx       # Domain filter pills (Philosophy, Yoga, Governance, etc.)
│   │   ├── WordCard.jsx             # Comprehensive entry card with audio, citations & etymology
│   │   ├── WordOfTheDay.jsx         # Daily spotlight banner
│   │   ├── BookmarksModal.jsx       # Saved terms manager with text export
│   │   └── AboutModal.jsx           # Vision, keynote background & architecture modal
│   ├── App.jsx                      # Main reactive application state container
│   ├── main.jsx                     # Vite React entry point
│   └── index.css                    # Tailwind CSS directives & Indic typography rules
├── test_rigorous.js                 # Exhaustive test suite (520/520 automated tests passing)
├── test_search.js                   # Automated test runner
├── AI_LOG.md                        # Transparent AI usage disclosure log
├── DRIVE_FOLDER_README.md           # Submission README for Google Drive folder
├── package.json
├── tailwind.config.js
└── vite.config.js
```

* **Frontend:** React 18, Vite 6, Tailwind CSS 3.4
* **Icons:** Lucide React
* **Typography:** Noto Serif Devanagari, Yatra One, Rozha One, Cinzel, Inter
* **Storage:** Browser `localStorage` for zero-friction user persistence
* **Testing:** Custom Node.js validation test suite (`test_search.js`)

---

## ⚙️ How to Run Locally

### Prerequisites
* Node.js (v18 or higher)
* npm (v9 or higher)

### Installation
```bash
# 1. Clone this repository
git clone https://github.com/Aujasyarajput18/Garuda-Indic-Dictionary.git
cd Garuda-Indic-Dictionary

# 2. Install dependencies
npm install

# 3. Run the automated test suite
npm test

# 4. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚖️ Trade-offs & Engineering Decisions

1. **Client-Side In-Memory Search vs. Heavy Backend API:**
   * *Decision:* Used an optimized in-memory inverted index and phonetic scoring engine.
   * *Trade-off:* While a remote Elasticsearch or Meilisearch backend can scale to millions of terms, client-side indexing guarantees **instant sub-millisecond search latencies**, works completely offline, and eliminates server hosting costs.
2. **Greedy Phonetic Normalizer vs. Heavy Machine Learning Model:**
   * *Decision:* Implemented a deterministic regex and Trie-based longest-prefix matcher (`transliterationEngine.js`) combined with Levenshtein typo scoring.
   * *Trade-off:* ML-based transliteration models (like Indic-Trans) have 200MB+ model weights. A lightweight rule-based engine executes in `<1ms` directly inside the browser sandbox with zero network dependency.
3. **Decolonial Semantic Fields over Simple Word Translations:**
   * *Decision:* Expanded the data model to include `decolonialNote`, `rootEtymology.dhatu`, and `citations`.
   * *Trade-off:* Requires higher editorial effort per entry, but directly addresses Sankrant Sanu's thesis that Indian concepts are distorted when flattened into one-word English equivalents.

---

## 🔮 What to Build Next (Garuda Production Roadmap)

1. **WASM-Powered Paninian Derivational Engine:**
   * Integrate an open-source Paninian grammar engine (e.g., *Ashtadhyayi* rules in WebAssembly) to generate verb conjugations (तिङन्त) and noun declensions (सुबन्त) on the fly.
2. **Garuda Prakashan Editorial CMS:**
   * A collaborative review portal for Garuda's editors and scholars to review, verify, and push new word entries with peer approval.
3. **Full PWA & Offline SQLite/IndexedDB Storage:**
   * Service worker caching and IndexedDB support to package the dictionary as a lightweight standalone Android/iOS app for rural schools and universities.
4. **OCR & Book Integration:**
   * Camera integration enabling students reading Garuda Prakashan books to scan printed Devanagari words and instantly see their roots and meanings on screen.

---

## 📜 Submission Details

* **Program:** Garuda Prakashan × Rishihood University Live Project
* **Track:** Track 3 (Dictionary App)
* **Candidate:** Aujasya (aujasyarajput18@gmail.com)
* **Date:** 10 November 2026

# AI Usage & Verification Log
**Garuda Prakashan × Rishihood Live Project Assignment**  
**Track:** Track 3 (Dictionary App)  
**Candidate:** Aujasya (Rishihood University)  
**Submission Date:** 10 November 2026  

---

## 1. Tools Used & Scope of Work

| Tool | Scope of Work |
| :--- | :--- |
| **Google Antigravity Agent (Gemini 3.8 Flash)** | Project scaffolding, React component architecture, phonetic search algorithm formulation, and test suite generation. |
| **Node.js (v25.8.1) & Vite 6** | Local runtime, bundle building, and automated headless unit testing. |
| **Digital Sanskrit Lexicon / Monier-Williams / Dhatupatha** | Independent manual reference to verify Paninian roots (धातु), Vyutpatti, and Vedic citations. |

---

## 2. Key Prompts & Iterations

1. **Scaffolding & Architecture:**
   > *"Formulate a clean React/Vite web application architecture for an Indic dictionary app supporting dual-script input (Devanagari + Romanised phonetic search) with Tailwind CSS and an Indic-inspired palette."*
2. **Phonetic & Transliteration Engine:**
   > *"Draft a deterministic JavaScript phonetic parser that converts Romanized Hinglish/ITRANS input into Devanagari while handling multi-character digraphs (sh, chh, ksh, gy, jn) without relying on heavy external dependencies."*
3. **Decolonial Data Schema:**
   > *"Structure a lexicon entry model that incorporates classical Paninian roots (dhatu, vyutpatti), verified scriptural citations (shloka + source), and non-translatable conceptual notes (why Indic terms cannot be flattened into English equivalents like Dharma != Religion)."*
4. **Automated Testing Suite:**
   > *"Create a standalone Node test suite testing 12 distinct search modalities: exact Devanagari, romanized input, schwa variations, and English reverse search."*

---

## 3. What Was Rejected, Corrected, & Refined (Critical Interventions)

### A. Rejection of Colonial Semantic Flattening
* **AI Draft:** Early prompts suggested defining *Dharma* as *"Hindu religion, creed, and faith"*, and *Itihasa* as *"ancient Indian mythology"*.
* **My Correction:** **Completely rejected.** Following Sankrant Sanu’s thesis in *The English Medium Myth*, Indian concepts lose their foundational meaning when forced into Abrahamic theological categories. I overhauled the data model to include dedicated `decolonialNote` callouts explicitly explaining why *Dharma ≠ Religion*, *Mūrti ≠ Idol*, *Itihāsa ≠ Mythology*, and *Rāṣṭra ≠ Westphalian Nation-State*.

### B. Paninian Etymological Correction (Dhatu Verification)
* **AI Hallucination:** The AI initially derived *राष्ट्र (Rāṣṭra)* from root *रा* (to give).
* **My Correction:** Verified against the *Paninian Dhatupatha* and corrected the root to **`राज् (राजृ दीप्तौ)`** (to radiate, shine, govern) + suffix `ष्ट्रन्`, giving the true civilizational meaning of an illuminated society.
* Similarly, verified *धर्म* (*धृञ् धारणे + मन्*), *योग* (*युजिँर् योगे / युज् समाधौ + घञ्*), and *मूर्ति* (*मूर्छ् घनीभावे + क्तिन्*).

### C. Transliteration Digraph & Ambiguity Fixes
* **Issue:** When typing common romanized Hindi words like `gyan`, standard naive character-by-character mappers output `ग्यन्` instead of the proper conjunct `ज्ञान`.
* **My Correction:** Re-engineered `transliterationEngine.js` with a greedy longest-prefix matcher and mapped both `gy` and `jn` to `ज्ञ`, ensuring both `gyan` and `jnan` seamlessly resolve to `ज्ञान`.

### D. Solving the Schwa-Deletion Search Bug
* **Issue:** Hindi speakers routinely search with terminal schwa deletion (`dharm`, `yog`, `karm`), while Sanskrit and standard IAST retain the trailing vowel (`dharma`, `yoga`, `karma`). Naive string equality failed to match `dharm` to `dharma`.
* **My Correction:** Built `normalizePhonetic()` in `transliterationEngine.js` which strips optional trailing schwa vowels (`replace(/a$/, "")`), equalizes long/short vowel variants (`ee` ⇄ `i`, `oo` ⇄ `u`), and normalizes sibilants (`sh` ⇄ `s`).

### E. Eliminating Generic Dark-Mode Mixtures & Cropped Photo Artifacts
* **Issue:** An earlier AI design pass mixed discordant black boxes (`bg-[#1A140E]`) with light parchment cards, causing faint/washed-out white text on cream backgrounds, and attempted to paste rectangular photo cutouts with dark margins into the layout.
* **My Correction:** Purged all dark-mode remnants and black cards in favor of a 100% unified, authentic Nalanda manuscript folio palette. Replaced rectangular photo snippets with pure, transparent vector SVG illustrations (`RishiScholar`, `SaraswatiVeena`, `BloomingLotus`, `AncientGrantha`, `PeacockFeather`, and `ManuscriptClouds`) rendered with rich soot-ink (`#1A140E`), terracotta (`#8B331B`), and Vedic forest green (`#1F5333`) line-work that blends naturally into the antique Bhojpatra deckled scroll.

---

## 4. Verification Methodology (Facts, Sources & Code)

1. **Scriptural Citation Verification:**
   * Cross-referenced every Sanskrit shloka against authoritative sources:
     * *धारणाद्धर्ममित्याहुः* (Mahabharata, Karna Parva 69.58)
     * *योगश्चित्तवृत्तिनिरोधः* (Patanjali Yoga Sutras 1.2)
     * *कर्मण्येवाधिकारस्ते* (Bhagavad Gita 2.47)
     * *सा विद्या या विमुक्तये* (Vishnu Purana 1.19.41)
2. **Automated Unit Testing & Rigorous Verification (`test_rigorous.js`):**
   * Built and executed an exhaustive 520-test automated verification suite covering all 45 foundational entries across 6 distinct dimensions:
     * **Suite 1: Data Integrity & Scholarly Completeness:** Verified 100% of entries contain complete, verified Hindi definitions, English definitions, Paninian Dhatu formulas, scriptural shlokas with sources, and decolonial notes (360 assertions).
     * **Suite 2: Devanagari Headword Search:** Validated direct Devanagari lookup for all 45 entries (45 assertions).
     * **Suite 3: Romanized / Hinglish Phonetic Search:** Validated transliterated phonetic lookup for all 45 entries (45 assertions).
     * **Suite 4: Schwa-Deletion & Vowel Length Robustness:** Validated 24 common phonetic transformations (`dharm` ⇄ `dharma`, `yog` ⇄ `yoga`, `shant` ⇄ `shanti`, `gyan` ⇄ `jnana`, `tap` ⇄ `tapas`, `bharat` ⇄ `bharata`).
     * **Suite 5: Reverse English Translation Search:** Validated 41 core philosophical concept queries (`peace` -> `shanti`, `soul` -> `atman`, `god` -> `brahman`, `devotion` -> `bhakti`, `caste` -> `varna`, `compassion` -> `karuna`, `non-violence` -> `ahimsa`, `meditation` -> `dhyana`).
     * **Suite 6: Typo Tolerance:** Validated Levenshtein distance matching for common typographical slips (`dharmaa`, `namstey`, `mokshaa`, `ahims`, `swaraaj`).
   * Result: **520/520 passed (100% test pass rate).**
3. **Cross-Browser Audio Validation:**
   * Tested Web Speech API (`SpeechSynthesisUtterance`) with the native `hi-IN` voice on macOS Safari, Google Chrome, and mobile viewports.

---

## 5. Summary Statement
AI served as a high-speed accelerator for boilerplate setup and initial parsing logic, but the linguistic precision, Paninian grammatical corrections, Indic philosophical grounding, and search algorithm tuning were manually verified and directed to meet Garuda Prakashan’s exacting publishing standards.

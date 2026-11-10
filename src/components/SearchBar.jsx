import React, { useRef, useState, useEffect } from 'react';
import { Search, X, Keyboard, CheckCircle, Sparkles } from 'lucide-react';
import { 
  isDevanagari, 
  generateLocalCandidates, 
  fetchIndicCandidates 
} from '../utils/transliterationEngine';
import { PeacockFeather } from './Doodles';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  showKeyboard,
  setShowKeyboard,
  totalResults,
  dictionary = [],
  activeCandidates = [],
  setActiveCandidates
}) {
  const inputRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const queryIsDev = isDevanagari(searchQuery);
  const isTypingRoman = !queryIsDev && searchQuery.trim().length > 0;

  // Real-time Candidate Generation: 0ms local + debounced Google Input Tools API
  useEffect(() => {
    if (!isTypingRoman) {
      if (setActiveCandidates) setActiveCandidates([]);
      return;
    }

    // 1. Instant local candidates (0ms latency)
    const localCands = generateLocalCandidates(searchQuery, dictionary);
    if (setActiveCandidates) setActiveCandidates(localCands);
    setSelectedIndex(0);
    setShowSuggestions(true);

    // 2. Debounced Google Indic Tools API fetch (async enrichment)
    const timer = setTimeout(async () => {
      try {
        const enriched = await fetchIndicCandidates(searchQuery, dictionary, 5);
        if (enriched && enriched.length > 0 && setActiveCandidates) {
          setActiveCandidates(enriched);
        }
      } catch (err) {
        // Keeps local candidates
      }
    }, 90);

    return () => clearTimeout(timer);
  }, [searchQuery, dictionary]);

  const quickPills = [
    { label: "ऋषि (rishi)", query: "rishi" },
    { label: "गरुड़ (garuda)", query: "garuda" },
    { label: "राम (ram)", query: "ram" },
    { label: "धर्म (dharma)", query: "dharma" },
    { label: "ज्ञान (gyan)", query: "gyan" },
    { label: "योग (yoga)", query: "yoga" },
    { label: "राष्ट्र (rashtra)", query: "rashtra" },
    { label: "मन्दिर (mandir)", query: "mandir" },
  ];

  const handleSelectCandidate = (candidate) => {
    if (!candidate) return;
    setSearchQuery(candidate);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (!isTypingRoman || !showSuggestions || activeCandidates.length === 0) {
      return;
    }

    // Enter: adopt selected candidate
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectCandidate(activeCandidates[selectedIndex] || activeCandidates[0]);
    } 
    // Space: adopt top candidate and append a space (classic Google Input Tools behavior)
    else if (e.key === ' ') {
      e.preventDefault();
      const chosen = activeCandidates[selectedIndex] || activeCandidates[0];
      setSearchQuery(chosen + ' ');
      setShowSuggestions(false);
    } 
    // Tab or ArrowRight: cycle to next candidate
    else if (e.key === 'Tab' || (e.key === 'ArrowRight' && e.altKey)) {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % activeCandidates.length);
    } 
    // ArrowLeft: cycle backwards
    else if (e.key === 'ArrowLeft' && e.altKey) {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + activeCandidates.length) % activeCandidates.length);
    } 
    // Escape: close suggestions
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Helper to check if candidate exists in dictionary
  const isDictWord = (cand) => {
    if (!dictionary || !dictionary.length) return false;
    return dictionary.some(e => e.devanagari === cand || (e.synonyms && e.synonyms.includes(cand)));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-[#1F5333]" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          placeholder="खोजें: देवनागरी (राम, धर्म) अथवा Hinglish (ram, dharma, gyan, mandir)..."
          className="w-full pl-11 pr-24 py-3.5 sm:py-4 text-base sm:text-lg bg-[#FAF6ED] border-2 border-[#CEBC95] rounded-lg shadow-2xs focus:outline-none focus:border-[#1F5333] text-[#1A140E] placeholder-[#7D6B56] transition-all font-medium font-devanagari"
          autoComplete="off"
          spellCheck="false"
        />

        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                if (setActiveCandidates) setActiveCandidates([]);
                if (inputRef.current) inputRef.current.focus();
              }}
              className="p-1.5 text-[#7D6B56] hover:text-[#1A140E] rounded hover:bg-[#EBDDC7] transition-all"
              title="खोज साफ़ करें"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Virtual Keyboard Toggle */}
          <button
            onClick={() => setShowKeyboard(!showKeyboard)}
            className={`p-2 rounded transition-all border ${
              showKeyboard
                ? 'bg-[#1F5333] text-white border-[#0E2E1A] shadow-xs'
                : 'bg-[#EBDDC7]/60 text-[#342A1F] border-[#CEBC95] hover:bg-[#EBDDC7]'
            }`}
            title="देवनागरी वर्णमाला कीबोर्ड"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Google Input Tools Style Suggestion Bar (Candidate Chips) */}
      {isTypingRoman && showSuggestions && activeCandidates.length > 0 && (
        <div className="mt-2.5 p-3 rounded-lg bg-[#F5ECE0] border border-[#CEBC95] shadow-xs animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E3D3BA] text-[11px] text-[#524332]">
            <div className="flex items-center gap-1.5 font-semibold">
              <PeacockFeather className="w-4 h-4 shrink-0 text-[#1F5333]" />
              <span className="text-[#1F5333] font-bold font-devanagari">
                लिप्यंतरण सुझाव (Google Indic IME Engine):
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] bg-[#EBDDC7] text-[#8B331B] border border-[#CEBC95]">
                Space या ↵ से चुनें
              </span>
            </div>

            <div className="text-[10px] text-[#7D6B56] font-mono hidden md:block">
              Alt+←/→ नेविगेट
            </div>
          </div>

          {/* Candidates Strip */}
          <div className="flex items-center gap-2 flex-wrap">
            {activeCandidates.map((cand, idx) => {
              const isSelected = idx === selectedIndex;
              const hasDictEntry = isDictWord(cand);

              return (
                <button
                  key={`${cand}-${idx}`}
                  type="button"
                  onClick={() => handleSelectCandidate(cand)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-devanagari font-semibold transition-all border ${
                    isSelected
                      ? 'bg-[#FAF6ED] text-[#1F5333] border-[#1F5333] ring-2 ring-[#1F5333]/20 shadow-xs'
                      : 'bg-[#FAF6ED]/70 text-[#221B13] border-[#CEBC95] hover:bg-[#FAF6ED] hover:border-[#8B331B]'
                  }`}
                  title={`चुनने के लिए क्लिक करें या Space दबाएं (${cand})`}
                >
                  <span className="text-[11px] font-mono text-[#8B331B] font-bold opacity-80">
                    {idx + 1}.
                  </span>
                  
                  <span className="text-base tracking-wide font-devanagari">
                    {cand}
                  </span>

                  {isSelected && (
                    <span className="text-[10px] font-mono text-[#1F5333] font-bold ml-0.5">
                      ↵
                    </span>
                  )}

                  {hasDictEntry && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] text-[#1F5333] bg-[#E2EDE5] px-1 py-0.2 rounded border border-[#B3D4BE]">
                      <CheckCircle className="w-2.5 h-2.5" />
                      कोश
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Search Chips */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-semibold text-[#524332] mr-1">
          त्वरित खोज:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.query}
            onClick={() => setSearchQuery(pill.query)}
            className="px-2.5 py-0.8 text-xs font-medium rounded bg-[#FAF6ED] text-[#221B13] border border-[#CEBC95] hover:border-[#1F5333] hover:bg-[#EBDDC7] transition-all font-devanagari shadow-2xs"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}

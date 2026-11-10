import React, { useRef } from 'react';
import { Search, X, Keyboard, ArrowRight } from 'lucide-react';
import { isDevanagari, romanToDevanagari } from '../utils/transliterationEngine';
import { PeacockFeather, InkpotQuill } from './Doodles';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  showKeyboard,
  setShowKeyboard,
  totalResults
}) {
  const inputRef = useRef(null);

  const queryIsDev = isDevanagari(searchQuery);
  const liveTransliteration = (!queryIsDev && searchQuery.trim().length > 0)
    ? romanToDevanagari(searchQuery)
    : null;

  const quickPills = [
    { label: "धर्म (dharma)", query: "dharma" },
    { label: "ज्ञान (gyan)", query: "gyan" },
    { label: "योग (yoga)", query: "yoga" },
    { label: "राष्ट्र (rashtra)", query: "rashtra" },
    { label: "स्वराज्य (swaraj)", query: "swaraj" },
    { label: "नमस्ते (namaste)", query: "namaste" },
  ];

  const handleApplyTransliteration = () => {
    if (liveTransliteration) {
      setSearchQuery(liveTransliteration);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-[#1F5333] dark:text-[#99C7A2]" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="खोजें: देवनागरी (धर्म, योग) अथवा Romanised (dharma, gyan, yoga)..."
          className="w-full pl-11 pr-24 py-3.5 sm:py-4 text-base sm:text-lg bg-[#FAF6ED] dark:bg-[#1D1712] border-2 border-[#CEBC95] dark:border-[#4A3B2B] rounded-lg shadow-2xs focus:outline-none focus:border-[#1F5333] dark:focus:border-[#99C7A2] text-[#221B13] dark:text-[#FAF6ED] placeholder-[#7D6B56] dark:placeholder-[#8C7A65] transition-all font-medium font-devanagari"
        />

        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="p-1.5 text-[#7D6B56] hover:text-[#221B13] dark:hover:text-[#FAF6ED] rounded hover:bg-[#EBDDC7] dark:hover:bg-[#2A2118] transition-all"
              title="Clear search"
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
                : 'bg-[#EBDDC7]/60 dark:bg-[#251E17] text-[#342A1F] dark:text-[#EBDDC7] border-[#CEBC95] dark:border-[#4A3B2B] hover:bg-[#EBDDC7]'
            }`}
            title="Toggle Indic Virtual Keyboard (देवनागरी वर्णमाला)"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Transliteration Preview Pill */}
      {liveTransliteration && (
        <div className="mt-2.5 flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#EBDDC7]/50 dark:bg-[#221B13] border border-[#CEBC95] dark:border-[#4A3B2B] text-xs">
          <div className="flex items-center gap-2 text-[#342A1F] dark:text-[#EBDDC7]">
            <PeacockFeather className="w-4 h-4 shrink-0" />
            <span className="font-semibold text-[#524332] dark:text-[#A8987E]">Phonetic:</span>
            <span className="font-mono bg-[#FAF6ED] dark:bg-[#16120E] px-1.5 py-0.5 rounded border border-[#CEBC95] text-[#221B13] dark:text-[#FAF6ED]">
              {searchQuery}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#1F5333] dark:text-[#99C7A2]" />
            <span className="font-devanagari font-bold text-sm text-[#1F5333] dark:text-[#99C7A2] bg-[#FAF6ED] dark:bg-[#16120E] px-2 py-0.5 rounded border border-[#CEBC95]">
              {liveTransliteration}
            </span>
          </div>

          <button
            onClick={handleApplyTransliteration}
            className="text-[#8B331B] dark:text-[#EBBCAD] font-bold hover:underline text-[11px] shrink-0 font-devanagari"
          >
            देवनागरी अपनाएं
          </button>
        </div>
      )}

      {/* Quick Search Chips */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-semibold text-[#524332] dark:text-[#A8987E] mr-1">
          त्वरित खोज:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.query}
            onClick={() => setSearchQuery(pill.query)}
            className="px-2.5 py-0.8 text-xs font-medium rounded bg-[#FAF6ED] dark:bg-[#1F1913] text-[#342A1F] dark:text-[#EBDDC7] border border-[#CEBC95] dark:border-[#3E3123] hover:border-[#1F5333] hover:bg-[#EBDDC7]/60 transition-all font-devanagari shadow-2xs"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}

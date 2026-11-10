import React, { useRef } from 'react';
import { Search, X, Keyboard, ArrowRight } from 'lucide-react';
import { isDevanagari, romanToDevanagari } from '../utils/transliterationEngine';

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
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-emerald-800 dark:text-emerald-400" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="खोजें: देवनागरी (धर्म, योग) अथवा Romanised (dharma, gyan, yoga)..."
          className="w-full pl-11 pr-24 py-3.5 sm:py-4 text-base sm:text-lg bg-white dark:bg-[#121c15] border-2 border-stone-300 dark:border-stone-700 rounded-xl shadow-xs focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-500 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 transition-all font-medium font-devanagari"
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Virtual Keyboard Toggle */}
          <button
            onClick={() => setShowKeyboard(!showKeyboard)}
            className={`p-2 rounded-lg transition-all border ${
              showKeyboard
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:bg-emerald-50 hover:text-emerald-900 dark:hover:bg-stone-700'
            }`}
            title="Toggle Indic Virtual Keyboard (देवनागरी कीबोर्ड)"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Transliteration Preview Pill */}
      {liveTransliteration && (
        <div className="mt-2.5 flex items-center justify-between px-3.5 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-xs">
          <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
            <span className="font-semibold text-stone-700 dark:text-stone-300">Phonetic Match:</span>
            <span className="font-mono bg-white dark:bg-stone-900 px-1.5 py-0.5 rounded border border-emerald-200/80 text-stone-800 dark:text-stone-200">
              {searchQuery}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-devanagari font-bold text-sm text-emerald-900 dark:text-emerald-300 bg-white dark:bg-stone-900 px-2 py-0.5 rounded border border-emerald-300">
              {liveTransliteration}
            </span>
          </div>

          <button
            onClick={handleApplyTransliteration}
            className="text-emerald-800 dark:text-emerald-300 font-bold hover:underline text-[11px] shrink-0"
          >
            Apply देवनागरी
          </button>
        </div>
      )}

      {/* Quick Search Chips */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 mr-1">
          त्वरित खोज:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.query}
            onClick={() => setSearchQuery(pill.query)}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-stone-50 dark:bg-stone-850 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-emerald-900 hover:bg-emerald-50/50 transition-all font-devanagari"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import { Search, X, Keyboard, Sparkles, ArrowRight } from 'lucide-react';
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
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-orange-500 dark:text-orange-400 group-focus-within:text-orange-600 transition-colors" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="खोजें: देवनागरी (धर्म, योग) अथवा Romanised (dharma, gyan, yoga)..."
          className="w-full pl-11 pr-24 py-3.5 sm:py-4 text-base sm:text-lg bg-white dark:bg-slate-900 border-2 border-amber-300/80 dark:border-slate-700/80 rounded-2xl shadow-lg shadow-orange-500/5 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all font-medium font-devanagari"
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                if (inputRef.current) inputRef.current.focus();
              }}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Virtual Keyboard Toggle */}
          <button
            onClick={() => setShowKeyboard(!showKeyboard)}
            className={`p-2 rounded-xl transition-all border ${
              showKeyboard
                ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                : 'bg-amber-50 dark:bg-slate-800 text-slate-700 dark:text-amber-200 border-amber-200 dark:border-slate-700 hover:bg-amber-100 dark:hover:bg-slate-700'
            }`}
            title="Toggle Indic Virtual Keyboard (देवनागरी कीबोर्ड)"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Live Transliteration Preview Pill */}
      {liveTransliteration && (
        <div className="mt-2 flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-slate-900 dark:to-slate-850 border border-orange-200 dark:border-slate-700/80 text-xs animate-fadeIn">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0" />
            <span>Phonetic Transliteration:</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">"{searchQuery}"</span>
            <ArrowRight className="w-3 h-3 text-orange-500" />
            <span className="font-devanagari font-bold text-sm text-orange-700 dark:text-orange-400 bg-orange-100/70 dark:bg-orange-950/60 px-2 py-0.5 rounded-md">
              {liveTransliteration}
            </span>
          </div>

          <button
            onClick={handleApplyTransliteration}
            className="text-orange-700 dark:text-orange-300 font-semibold hover:underline hover:text-orange-800 text-[11px] ml-2 shrink-0"
          >
            Switch to देवनागरी
          </button>
        </div>
      )}

      {/* Quick Search Chips */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
          त्वरित खोज:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.query}
            onClick={() => setSearchQuery(pill.query)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-amber-200/70 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-slate-700/80 active:scale-95 transition-all shadow-2xs font-devanagari"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}

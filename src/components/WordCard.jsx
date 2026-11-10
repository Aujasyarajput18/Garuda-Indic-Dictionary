import React, { useState } from 'react';
import { Volume2, Bookmark, Copy, Check, Feather, BookOpen } from 'lucide-react';

export default function WordCard({ 
  entry, 
  isBookmarked, 
  onToggleBookmark, 
  onTagClick 
}) {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Audio pronunciation using Web Speech API
  const handlePronounce = () => {
    if (!('speechSynthesis' in window)) {
      alert("Audio synthesis is not supported on this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(entry.devanagari);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  // Copy academic citation
  const handleCopyCitation = () => {
    const citation = `"${entry.devanagari}" (${entry.iast}). Garuda Indic Lexicon. Root: ${entry.rootEtymology.dhatu}. Definition: ${entry.meanings.english}`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article className="bg-white dark:bg-[#121c15] rounded-xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-2xs hover:border-emerald-700/60 dark:hover:border-emerald-600 transition-all duration-200 group">
      
      {/* Top Bar: Category & Grammatical Details */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-800/80">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 font-devanagari">
            {entry.category}
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            {entry.partOfSpeech.hindi} • {entry.partOfSpeech.english}
          </span>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopyCitation}
            className="p-1.5 rounded text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
            title="Copy Citation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onToggleBookmark(entry.id)}
            className={`p-1.5 rounded transition-all ${
              isBookmarked
                ? 'text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                : 'text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
            title={isBookmarked ? "Remove from bookmarks" : "Save word"}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Word Header */}
      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-stone-900 dark:text-stone-100 tracking-normal">
              {entry.devanagari}
            </h2>
            <span className="text-lg sm:text-xl font-display font-semibold italic text-emerald-800 dark:text-emerald-400">
              {entry.iast}
            </span>
            {entry.pronunciationKey && (
              <span className="text-xs text-stone-400 dark:text-stone-500 font-mono">
                /{entry.pronunciationKey}/
              </span>
            )}
          </div>
        </div>

        {/* Audio Pronunciation Button */}
        <button
          onClick={handlePronounce}
          disabled={isPlayingAudio}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isPlayingAudio
              ? 'bg-emerald-800 text-white border-emerald-800 animate-pulse'
              : 'bg-stone-50 dark:bg-stone-850 text-emerald-900 dark:text-emerald-300 border-stone-200 dark:border-stone-700 hover:bg-emerald-50 hover:border-emerald-600'
          }`}
          title="उच्चारण सुनें (Listen Pronunciation)"
        >
          <Volume2 className="w-3.5 h-3.5 text-emerald-800 dark:text-emerald-400" />
          <span className="hidden sm:inline">उच्चारण</span>
        </button>
      </div>

      {/* Etymology / Dhatu Formula */}
      <div className="mt-3.5 p-3 rounded-lg bg-[#F7FAF7] dark:bg-[#16231a] border-l-3 border-l-emerald-800 border-y border-r border-emerald-900/10 dark:border-stone-800 text-xs">
        <div className="flex items-center gap-2 font-semibold text-emerald-950 dark:text-emerald-200">
          <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-[10px] uppercase font-bold tracking-wider">
            व्युत्पत्ति व धातु
          </span>
          <span className="font-devanagari text-sm font-bold text-stone-900 dark:text-stone-100">
            {entry.rootEtymology.formula}
          </span>
        </div>
        <p className="mt-1 text-stone-700 dark:text-stone-300 font-devanagari leading-relaxed">
          {entry.rootEtymology.explanationHindi}
        </p>
        <p className="mt-0.5 text-stone-500 dark:text-stone-400 italic">
          {entry.rootEtymology.explanationEnglish}
        </p>
      </div>

      {/* Meanings */}
      <div className="mt-4 space-y-2.5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-0.5">
            हिन्दी अर्थ
          </span>
          <p className="text-stone-900 dark:text-stone-100 font-devanagari text-sm sm:text-base leading-relaxed">
            {entry.meanings.hindi}
          </p>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-0.5">
            English Definition
          </span>
          <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
            {entry.meanings.english}
          </p>
        </div>
      </div>

      {/* Decolonial Note / Non-translatable Context */}
      {entry.decolonialNote && (
        <div className="mt-4 p-3.5 rounded-lg bg-[#F3F7F3] dark:bg-[#152419] border border-emerald-800/20 dark:border-emerald-800/40">
          <div className="flex items-center gap-1.5 text-emerald-950 dark:text-emerald-200 font-bold text-xs">
            <Feather className="w-3.5 h-3.5 text-emerald-800 dark:text-emerald-400 shrink-0" />
            <span>{entry.decolonialNote.title}</span>
          </div>
          <p className="mt-1.5 text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
            {entry.decolonialNote.content}
          </p>
        </div>
      )}

      {/* Scriptural Citations / Shlokas */}
      {entry.citations && entry.citations.length > 0 && (
        <div className="mt-4 p-3.5 rounded-lg bg-stone-50 dark:bg-[#141e17] border border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 dark:text-stone-400 mb-1.5">
            <span className="flex items-center gap-1 font-devanagari">
              <BookOpen className="w-3.5 h-3.5 text-emerald-800 dark:text-emerald-400" /> प्रमाण श्लोक व संदर्भ:
            </span>
            <span className="text-emerald-800 dark:text-emerald-400 font-medium">
              {entry.citations[0].source}
            </span>
          </div>
          <blockquote className="font-devanagari text-sm sm:text-base text-stone-900 dark:text-stone-100 whitespace-pre-line font-medium border-l-2 border-emerald-800 pl-2.5 my-1.5 leading-relaxed">
            {entry.citations[0].shloka}
          </blockquote>
          <p className="text-xs text-stone-600 dark:text-stone-400 italic mt-1">
            "{entry.citations[0].translation}"
          </p>
        </div>
      )}

      {/* Synonyms & Tags Footer */}
      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-stone-400 dark:text-stone-500 font-medium mr-1 font-devanagari">पर्यायवाची:</span>
          {entry.synonyms.map((syn) => (
            <button
              key={syn}
              onClick={() => onTagClick(syn)}
              className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-devanagari hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-300 border border-transparent transition-all"
            >
              {syn}
            </button>
          ))}
        </div>

        {entry._matchMeta && (
          <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
            ✓ {entry._matchMeta.matchType}
          </span>
        )}
      </div>

    </article>
  );
}

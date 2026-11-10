import React, { useState } from 'react';
import { Volume2, Bookmark, Share2, Copy, Check, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

export default function WordCard({ 
  entry, 
  isBookmarked, 
  onToggleBookmark, 
  onSelectWord,
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
    <article className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-amber-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-orange-300 dark:hover:border-slate-700 transition-all duration-300 group relative">
      
      {/* Top Bar: Category & Match Badge */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-amber-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-devanagari">
            {entry.category}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {entry.partOfSpeech.hindi} • {entry.partOfSpeech.english}
          </span>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopyCitation}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 transition-all"
            title="Copy Citation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onToggleBookmark(entry.id)}
            className={`p-1.5 rounded-lg transition-all ${
              isBookmarked
                ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40'
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800'
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
            <h2 className="text-3xl sm:text-4xl font-extrabold font-devanagari text-slate-900 dark:text-amber-50 tracking-wide">
              {entry.devanagari}
            </h2>
            <span className="text-lg sm:text-xl font-display font-semibold italic text-orange-700 dark:text-orange-400">
              {entry.iast}
            </span>
            {entry.pronunciationKey && (
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                /{entry.pronunciationKey}/
              </span>
            )}
          </div>
        </div>

        {/* Audio Pronunciation Button */}
        <button
          onClick={handlePronounce}
          disabled={isPlayingAudio}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            isPlayingAudio
              ? 'bg-orange-600 text-white border-orange-600 animate-pulse'
              : 'bg-amber-50 dark:bg-slate-800 text-orange-800 dark:text-orange-300 border-amber-200 dark:border-slate-700 hover:bg-orange-100 dark:hover:bg-slate-700'
          }`}
          title="उच्चारण सुनें (Listen Pronunciation)"
        >
          <Volume2 className="w-4 h-4" />
          <span className="hidden sm:inline">उच्चारण</span>
        </button>
      </div>

      {/* Etymology / Dhatu Formula */}
      <div className="mt-3.5 p-3 rounded-xl bg-[#FAF6EE] dark:bg-slate-850 border border-amber-200/60 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2 font-semibold text-orange-900 dark:text-orange-300">
          <span className="px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 text-[10px] uppercase font-bold tracking-wider">
            व्युत्पत्ति व धातु
          </span>
          <span className="font-devanagari text-sm font-bold text-slate-800 dark:text-slate-100">
            {entry.rootEtymology.formula}
          </span>
        </div>
        <p className="mt-1 text-slate-600 dark:text-slate-300 font-devanagari leading-relaxed">
          {entry.rootEtymology.explanationHindi}
        </p>
        <p className="mt-0.5 text-slate-500 dark:text-slate-400 italic">
          {entry.rootEtymology.explanationEnglish}
        </p>
      </div>

      {/* Meanings */}
      <div className="mt-4 space-y-2.5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">
            हिन्दी अर्थ
          </span>
          <p className="text-slate-800 dark:text-slate-200 font-devanagari text-sm sm:text-base leading-relaxed">
            {entry.meanings.hindi}
          </p>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">
            English Definition
          </span>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {entry.meanings.english}
          </p>
        </div>
      </div>

      {/* Decolonial Note / Non-translatable Context */}
      {entry.decolonialNote && (
        <div className="mt-4 p-3.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-900/50">
          <div className="flex items-center gap-1.5 text-orange-900 dark:text-orange-200 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0" />
            <span>{entry.decolonialNote.title}</span>
          </div>
          <p className="mt-1.5 text-xs text-orange-950 dark:text-orange-100/90 leading-relaxed font-normal">
            {entry.decolonialNote.content}
          </p>
        </div>
      )}

      {/* Scriptural Citations / Shlokas */}
      {entry.citations && entry.citations.length > 0 && (
        <div className="mt-4 p-3.5 rounded-xl bg-stone-50 dark:bg-slate-850/90 border border-stone-200/70 dark:border-slate-800">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            <span className="flex items-center gap-1 font-devanagari">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" /> प्रमाण श्लोक व संदर्भ:
            </span>
            <span className="text-orange-700 dark:text-orange-400 font-medium">
              {entry.citations[0].source}
            </span>
          </div>
          <blockquote className="font-devanagari text-sm sm:text-base text-slate-800 dark:text-slate-200 whitespace-pre-line font-medium border-l-2 border-orange-500 pl-2.5 my-1.5 leading-relaxed">
            {entry.citations[0].shloka}
          </blockquote>
          <p className="text-xs text-slate-600 dark:text-slate-400 italic mt-1">
            "{entry.citations[0].translation}"
          </p>
        </div>
      )}

      {/* Synonyms & Tags Footer */}
      <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-slate-400 dark:text-slate-500 font-medium mr-1 font-devanagari">पर्यायवाची:</span>
          {entry.synonyms.map((syn) => (
            <button
              key={syn}
              onClick={() => onTagClick(syn)}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-devanagari hover:bg-orange-100 hover:text-orange-800 dark:hover:bg-slate-700 transition-colors"
            >
              {syn}
            </button>
          ))}
        </div>

        {entry._matchMeta && (
          <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
            ✓ {entry._matchMeta.matchType}
          </span>
        )}
      </div>

    </article>
  );
}

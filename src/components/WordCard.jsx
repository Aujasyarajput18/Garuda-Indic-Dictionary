import React, { useState } from 'react';
import { Volume2, Bookmark, Copy, Check, BookOpen } from 'lucide-react';
import { PeacockFeather, LotusFlower, ManuscriptCorner } from './Doodles';

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
    <article className="folio-card rounded-lg p-5 sm:p-6 relative group transition-all duration-150">
      
      {/* Decorative Traditional Corner Filigrees */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
        <ManuscriptCorner className="w-5 h-5" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
        <ManuscriptCorner className="w-5 h-5" flip="rotate-90" />
      </div>

      {/* Top Bar: Category & Grammatical Details */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#D8C7A3] dark:border-[#3E3123]">
        <div className="flex items-center gap-2 flex-wrap pl-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBDDC7] dark:bg-[#2A2118] text-[#1F5333] dark:text-[#99C7A2] border border-[#CEBC95] dark:border-[#4A3B2B] font-devanagari">
            {entry.category}
          </span>
          <span className="text-xs text-[#524332] dark:text-[#A8987E] font-medium font-devanagari">
            {entry.partOfSpeech.hindi} • {entry.partOfSpeech.english}
          </span>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-1 pr-3">
          <button
            onClick={handleCopyCitation}
            className="p-1.5 rounded text-[#7D6B56] hover:text-[#221B13] dark:hover:text-[#FAF6ED] hover:bg-[#EBDDC7] transition-all"
            title="Copy Citation"
          >
            {copied ? <Check className="w-4 h-4 text-[#1F5333]" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onToggleBookmark(entry.id)}
            className={`p-1.5 rounded transition-all ${
              isBookmarked
                ? 'text-[#1F5333] dark:text-[#99C7A2] bg-[#EBDDC7] dark:bg-[#2A2118]'
                : 'text-[#7D6B56] hover:text-[#221B13] dark:hover:text-[#FAF6ED] hover:bg-[#EBDDC7]'
            }`}
            title={isBookmarked ? "Remove from bookmarks" : "Save word"}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Word Header */}
      <div className="pt-3.5 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold font-devanagari text-[#221B13] dark:text-[#FAF6ED] tracking-normal">
              {entry.devanagari}
            </h2>
            <span className="text-lg sm:text-xl font-display font-semibold italic text-[#8B331B] dark:text-[#EBBCAD]">
              {entry.iast}
            </span>
            {entry.pronunciationKey && (
              <span className="text-xs text-[#7D6B56] dark:text-[#8C7A65] font-mono">
                /{entry.pronunciationKey}/
              </span>
            )}
          </div>
        </div>

        {/* Audio Pronunciation Button */}
        <button
          onClick={handlePronounce}
          disabled={isPlayingAudio}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold border transition-all ${
            isPlayingAudio
              ? 'bg-[#1F5333] text-white border-[#0E2E1A] animate-pulse'
              : 'bg-[#FAF6ED] dark:bg-[#251E17] text-[#1F5333] dark:text-[#99C7A2] border-[#CEBC95] dark:border-[#4A3B2B] hover:bg-[#EBDDC7]'
          }`}
          title="उच्चारण सुनें (Listen Pronunciation)"
        >
          <Volume2 className="w-3.5 h-3.5 text-[#1F5333] dark:text-[#99C7A2]" />
          <span className="hidden sm:inline font-devanagari">उच्चारण</span>
        </button>
      </div>

      {/* Etymology / Dhatu Formula */}
      <div className="mt-3 p-3 rounded bg-[#F4ECE0] dark:bg-[#1A140F] border-l-3 border-l-[#1F5333] border-y border-r border-[#D8C7A3] dark:border-[#3E3123] text-xs">
        <div className="flex items-center gap-2 font-semibold text-[#221B13] dark:text-[#FAF6ED]">
          <span className="px-1.5 py-0.5 rounded bg-[#EBDDC7] dark:bg-[#2A2118] text-[#8B331B] dark:text-[#EBBCAD] text-[10px] uppercase font-bold tracking-wider font-devanagari">
            व्युत्पत्ति व धातु
          </span>
          <span className="font-devanagari text-sm font-bold text-[#1F5333] dark:text-[#99C7A2]">
            {entry.rootEtymology.formula}
          </span>
        </div>
        <p className="mt-1 text-[#342A1F] dark:text-[#EBDDC7] font-devanagari leading-relaxed">
          {entry.rootEtymology.explanationHindi}
        </p>
        <p className="mt-0.5 text-[#524332] dark:text-[#A8987E] italic">
          {entry.rootEtymology.explanationEnglish}
        </p>
      </div>

      {/* Meanings */}
      <div className="mt-3.5 space-y-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D6B56] dark:text-[#8C7A65] block mb-0.5 font-devanagari">
            हिन्दी अर्थ
          </span>
          <p className="text-[#221B13] dark:text-[#FAF6ED] font-devanagari text-sm sm:text-base leading-relaxed">
            {entry.meanings.hindi}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D6B56] dark:text-[#8C7A65] block mb-0.5 font-devanagari">
            English Definition
          </span>
          <p className="text-[#342A1F] dark:text-[#EBDDC7] text-sm leading-relaxed">
            {entry.meanings.english}
          </p>
        </div>
      </div>

      {/* Decolonial Note / Non-translatable Context */}
      {entry.decolonialNote && (
        <div className="mt-3.5 p-3 rounded bg-[#EFE7D8] dark:bg-[#18130E] border border-[#CEBC95] dark:border-[#4A3B2B]">
          <div className="flex items-center gap-1.5 text-[#8B331B] dark:text-[#EBBCAD] font-bold text-xs">
            <PeacockFeather className="w-3.5 h-3.5 shrink-0" />
            <span className="font-devanagari">{entry.decolonialNote.title}</span>
          </div>
          <p className="mt-1 text-xs text-[#342A1F] dark:text-[#EBDDC7] leading-relaxed font-normal">
            {entry.decolonialNote.content}
          </p>
        </div>
      )}

      {/* Scriptural Citations / Shlokas */}
      {entry.citations && entry.citations.length > 0 && (
        <div className="mt-3.5 p-3 rounded bg-[#FAF6ED] dark:bg-[#1A140F] border border-[#D8C7A3] dark:border-[#3E3123]">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#524332] dark:text-[#A8987E] mb-1">
            <span className="flex items-center gap-1 font-devanagari">
              <BookOpen className="w-3.5 h-3.5 text-[#1F5333] dark:text-[#99C7A2]" /> प्रमाण श्लोक व संदर्भ:
            </span>
            <span className="text-[#8B331B] dark:text-[#EBBCAD] font-medium font-devanagari">
              {entry.citations[0].source}
            </span>
          </div>
          <blockquote className="font-devanagari text-sm sm:text-base text-[#221B13] dark:text-[#FAF6ED] whitespace-pre-line font-medium border-l-2 border-l-[#1F5333] pl-2.5 my-1 leading-relaxed">
            {entry.citations[0].shloka}
          </blockquote>
          <p className="text-xs text-[#524332] dark:text-[#A8987E] italic mt-0.5">
            "{entry.citations[0].translation}"
          </p>
        </div>
      )}

      {/* Synonyms & Tags Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-[#D8C7A3] dark:border-[#3E3123] flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[#7D6B56] dark:text-[#8C7A65] font-medium mr-1 font-devanagari">पर्यायवाची:</span>
          {entry.synonyms.map((syn) => (
            <button
              key={syn}
              onClick={() => onTagClick(syn)}
              className="px-2 py-0.5 rounded bg-[#FAF6ED] dark:bg-[#251E17] text-[#342A1F] dark:text-[#EBDDC7] font-devanagari hover:bg-[#EBDDC7] border border-[#CEBC95] dark:border-[#4A3B2B] transition-all"
            >
              {syn}
            </button>
          ))}
        </div>

        {entry._matchMeta && (
          <span className="text-[10px] text-[#1F5333] dark:text-[#99C7A2] font-mono bg-[#EBDDC7] dark:bg-[#2A2118] px-2 py-0.5 rounded border border-[#CEBC95]">
            ✓ {entry._matchMeta.matchType}
          </span>
        )}
      </div>

    </article>
  );
}

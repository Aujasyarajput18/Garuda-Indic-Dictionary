import React from 'react';
import { X, Sparkles, Feather, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-amber-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-orange-50/50 to-amber-50/50 dark:from-slate-900 dark:to-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-sanskrit text-lg font-bold">
              ग
            </div>
            <div>
              <h3 className="font-sanskrit text-lg font-bold text-slate-900 dark:text-amber-100">
                दर्शन, पृष्ठभूमि व उद्देश्य
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Garuda Prakashan × Rishihood • Building for Bharat
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {/* Keynote Context */}
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-800/60 border border-amber-200/80 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-amber-200 flex items-center gap-2 text-sm mb-1.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              "Building for Bharat in the Age of AI" — संक्रान्त सानु जी
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              This dictionary application was engineered for the live project track offered by Garuda Prakashan following Sankrant Sanu Ji's landmark session at Rishihood University. It is built to bridge the linguistic divide in Indic computing through native Devanagari and phonetic Romanized lookup.
            </p>
          </div>

          {/* Decolonial Lexicon Vision */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-amber-100 flex items-center gap-2 mb-2">
              <Feather className="w-4 h-4 text-orange-600" />
              1. The Decolonial Lexicon: Beyond False Equivalences
            </h4>
            <p className="text-xs sm:text-sm">
              As articulated in <em>The English Medium Myth</em>, colonial education forced Indian civilization to describe itself through alien categories that distort reality:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <li><strong>धर्म (Dharma) ≠ Religion:</strong> Dharma is cosmic order, duty, and righteous nature; not a bounded belief system.</li>
              <li><strong>इतिहास (Itihāsa) ≠ Mythology:</strong> Itihāsa is living historical instruction; not fictional fable.</li>
              <li><strong>मूर्ति (Mūrti) ≠ Idol:</strong> Consecrated manifestation of consciousness; not a pagan idol.</li>
              <li><strong>राष्ट्र (Rāṣṭra) ≠ Nation-State:</strong> Organic civilizational continuum; not a bordered Westphalian political construct.</li>
            </ul>
          </div>

          {/* Technical Architecture */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-amber-100 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-orange-600" />
              2. Technical Architecture & Engineering Choices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">
                  ⚡ Dual Transliteration Engine
                </span>
                Live ITRANS/phonetic parser mapping Roman input (<code className="font-mono bg-amber-50 dark:bg-slate-800 px-1 rounded">gyan</code>, <code className="font-mono bg-amber-50 dark:bg-slate-800 px-1 rounded">dharma</code>) into Devanagari in real-time.
              </div>
              <div className="p-3 rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">
                  🔍 Schwa & Phonetic Normalizer
                </span>
                Handles terminal schwa deletion (<code className="font-mono bg-amber-50 dark:bg-slate-800 px-1 rounded">yog</code> vs <code className="font-mono bg-amber-50 dark:bg-slate-800 px-1 rounded">yoga</code>) and sibilant/vowel length variations automatically.
              </div>
              <div className="p-3 rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">
                  📜 धातु व व्युत्पत्ति Engine
                </span>
                Every entry is grounded in Paninian root grammar (धातु, सूत्र, प्रत्यय) and attested classical citations.
              </div>
              <div className="p-3 rounded-xl border border-amber-200 dark:border-slate-800 bg-white dark:bg-slate-850">
                <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">
                  🔊 Web Speech Synthesis
                </span>
                Integrated text-to-speech engine using native Indic voice synthesis for authentic Sanskrit/Hindi pronunciation.
              </div>
            </div>
          </div>

          {/* Submission Info */}
          <div className="pt-3 border-t border-amber-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Author: Aujasya (Rishihood University)</span>
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Track: 3. Dictionary App</span>
          </div>

        </div>

      </div>
    </div>
  );
}

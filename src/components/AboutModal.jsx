import React from 'react';
import { X, Feather, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-[#121c15] border border-stone-200 dark:border-stone-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-[#0f1712]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-emerald-900 text-stone-100 flex items-center justify-center font-sanskrit text-lg font-bold">
              ग
            </div>
            <div>
              <h3 className="font-sanskrit text-lg font-bold text-stone-900 dark:text-stone-100">
                दर्शन, पृष्ठभूमि व उद्देश्य
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Garuda Prakashan × Rishihood • Building for Bharat
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          
          {/* Keynote Context */}
          <div className="p-4 rounded-xl bg-[#F6FAF6] dark:bg-[#16231a] border border-emerald-900/15 dark:border-stone-800">
            <h4 className="font-bold text-stone-900 dark:text-emerald-300 flex items-center gap-2 text-sm mb-1.5">
              <Feather className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
              "Building for Bharat in the Age of AI" — संक्रान्त सानु जी
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              This dictionary application was engineered for the live project track offered by Garuda Prakashan following Sankrant Sanu Ji's landmark session at Rishihood University. It is built to bridge the linguistic divide in Indic computing through native Devanagari and phonetic Romanized lookup.
            </p>
          </div>

          {/* Decolonial Lexicon Vision */}
          <div>
            <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 mb-2">
              <Feather className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
              1. The Decolonial Lexicon: Beyond False Equivalences
            </h4>
            <p className="text-xs sm:text-sm">
              As articulated in <em>The English Medium Myth</em>, colonial education forced Indian civilization to describe itself through alien categories that distort reality:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-stone-700 dark:text-stone-300 list-disc list-inside bg-stone-50 dark:bg-[#16231a] p-3 rounded-lg border border-stone-200 dark:border-stone-800">
              <li><strong>धर्म (Dharma) ≠ Religion:</strong> Dharma is cosmic order, duty, and righteous nature; not a bounded belief system.</li>
              <li><strong>इतिहास (Itihāsa) ≠ Mythology:</strong> Itihāsa is living historical instruction; not fictional fable.</li>
              <li><strong>मूर्ति (Mūrti) ≠ Idol:</strong> Consecrated manifestation of consciousness; not a pagan idol.</li>
              <li><strong>राष्ट्र (Rāṣṭra) ≠ Nation-State:</strong> Organic civilizational continuum; not a bordered Westphalian political construct.</li>
            </ul>
          </div>

          {/* Technical Architecture */}
          <div>
            <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
              2. Technical Architecture & Engineering Choices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#16231a]">
                <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                  ⚡ Dual Transliteration Engine
                </span>
                Live ITRANS/phonetic parser mapping Roman input (<code className="font-mono bg-stone-100 dark:bg-stone-800 px-1 rounded">gyan</code>, <code className="font-mono bg-stone-100 dark:bg-stone-800 px-1 rounded">dharma</code>) into Devanagari in real-time.
              </div>
              <div className="p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#16231a]">
                <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                  🔍 Schwa & Phonetic Normalizer
                </span>
                Handles terminal schwa deletion (<code className="font-mono bg-stone-100 dark:bg-stone-800 px-1 rounded">yog</code> vs <code className="font-mono bg-stone-100 dark:bg-stone-800 px-1 rounded">yoga</code>) and sibilant/vowel length variations automatically.
              </div>
              <div className="p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#16231a]">
                <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                  📜 धातु व व्युत्पत्ति Engine
                </span>
                Every entry is grounded in Paninian root grammar (धातु, सूत्र, प्रत्यय) and attested classical citations.
              </div>
              <div className="p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#16231a]">
                <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">
                  🔊 Web Speech Synthesis
                </span>
                Integrated text-to-speech engine using native Indic voice synthesis for authentic Sanskrit/Hindi pronunciation.
              </div>
            </div>
          </div>

          {/* Submission Info */}
          <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
            <span>Author: Aujasya (Rishihood University)</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-semibold">Track: 3. Dictionary App</span>
          </div>

        </div>

      </div>
    </div>
  );
}

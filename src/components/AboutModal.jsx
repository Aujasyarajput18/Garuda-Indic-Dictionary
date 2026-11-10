import React from 'react';
import { X, Layers } from 'lucide-react';
import { AncientGrantha, PeacockFeather, LotusFlower } from './Doodles';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14100B]/60 backdrop-blur-2xs animate-fadeIn">
      <div className="bg-[#FCF8F0] dark:bg-[#16120E] border border-[#CEBC95] dark:border-[#3E3123] rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#D8C7A3] dark:border-[#3E3123] flex items-center justify-between bg-[#FAF4E8] dark:bg-[#1A140F]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1F5333] text-[#FAF6ED] flex items-center justify-center font-sanskrit text-lg font-bold">
              ग
            </div>
            <div>
              <h3 className="font-sanskrit text-lg font-bold text-[#221B13] dark:text-[#FAF6ED]">
                दर्शन, पृष्ठभूमि व उद्देश्य
              </h3>
              <p className="text-[11px] text-[#524332] dark:text-[#A8987E] font-devanagari">
                Garuda Prakashan × Rishihood • Building for Bharat
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#7D6B56] hover:text-[#221B13] dark:hover:text-[#FAF6ED] hover:bg-[#EBDDC7] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm text-[#342A1F] dark:text-[#EBDDC7] leading-relaxed">
          
          {/* Keynote Context */}
          <div className="p-3.5 rounded bg-[#FAF6ED] dark:bg-[#1D1712] border border-[#CEBC95] dark:border-[#3E3123]">
            <h4 className="font-bold text-[#221B13] dark:text-[#FAF6ED] flex items-center gap-2 text-sm mb-1 font-devanagari">
              <PeacockFeather className="w-4 h-4 shrink-0" />
              "Building for Bharat in the Age of AI" — संक्रान्त सानु जी
            </h4>
            <p className="text-xs text-[#524332] dark:text-[#A8987E] leading-relaxed">
              This dictionary application was engineered for the live project track offered by Garuda Prakashan following Sankrant Sanu Ji's session at Rishihood University. It is built to bridge the linguistic divide in Indic computing through native Devanagari and phonetic Romanized lookup.
            </p>
          </div>

          {/* Decolonial Lexicon Vision */}
          <div>
            <h4 className="font-bold text-[#221B13] dark:text-[#FAF6ED] flex items-center gap-2 mb-1.5 font-devanagari">
              <AncientGrantha className="w-4 h-4 shrink-0" />
              1. The Decolonial Lexicon: Beyond False Equivalences
            </h4>
            <p className="text-xs sm:text-sm">
              As articulated in <em>The English Medium Myth</em>, colonial education forced Indian civilization to describe itself through alien categories that distort reality:
            </p>
            <ul className="mt-2 space-y-1 text-xs text-[#342A1F] dark:text-[#EBDDC7] list-disc list-inside bg-[#FAF6ED] dark:bg-[#1D1712] p-3 rounded border border-[#CEBC95] dark:border-[#3E3123]">
              <li><strong>धर्म (Dharma) ≠ Religion:</strong> Dharma is cosmic order, duty, and righteous nature; not a bounded belief system.</li>
              <li><strong>इतिहास (Itihāsa) ≠ Mythology:</strong> Itihāsa is living historical instruction; not fictional fable.</li>
              <li><strong>मूर्ति (Mūrti) ≠ Idol:</strong> Consecrated manifestation of consciousness; not a pagan idol.</li>
              <li><strong>राष्ट्र (Rāṣṭra) ≠ Nation-State:</strong> Organic civilizational continuum; not a bordered Westphalian political construct.</li>
            </ul>
          </div>

          {/* Technical Architecture */}
          <div>
            <h4 className="font-bold text-[#221B13] dark:text-[#FAF6ED] flex items-center gap-2 mb-1.5 font-devanagari">
              <Layers className="w-4 h-4 text-[#1F5333] shrink-0" />
              2. Technical Architecture & Engineering Choices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded border border-[#CEBC95] dark:border-[#3E3123] bg-[#FAF6ED] dark:bg-[#1D1712]">
                <span className="font-bold text-[#1F5333] dark:text-[#99C7A2] block mb-0.5">
                  ⚡ Dual Transliteration Engine
                </span>
                Live ITRANS/phonetic parser mapping Roman input (<code className="font-mono bg-[#EBDDC7] dark:bg-[#2A2118] px-1 rounded">gyan</code>, <code className="font-mono bg-[#EBDDC7] dark:bg-[#2A2118] px-1 rounded">dharma</code>) into Devanagari in real-time.
              </div>
              <div className="p-3 rounded border border-[#CEBC95] dark:border-[#3E3123] bg-[#FAF6ED] dark:bg-[#1D1712]">
                <span className="font-bold text-[#1F5333] dark:text-[#99C7A2] block mb-0.5">
                  🔍 Schwa & Phonetic Normalizer
                </span>
                Handles terminal schwa deletion (<code className="font-mono bg-[#EBDDC7] dark:bg-[#2A2118] px-1 rounded">yog</code> vs <code className="font-mono bg-[#EBDDC7] dark:bg-[#2A2118] px-1 rounded">yoga</code>) and sibilant/vowel length variations automatically.
              </div>
              <div className="p-3 rounded border border-[#CEBC95] dark:border-[#3E3123] bg-[#FAF6ED] dark:bg-[#1D1712]">
                <span className="font-bold text-[#1F5333] dark:text-[#99C7A2] block mb-0.5">
                  📜 धातु व व्युत्पत्ति Engine
                </span>
                Every entry is grounded in Paninian root grammar (धातु, सूत्र, प्रत्यय) and attested classical citations.
              </div>
              <div className="p-3 rounded border border-[#CEBC95] dark:border-[#3E3123] bg-[#FAF6ED] dark:bg-[#1D1712]">
                <span className="font-bold text-[#1F5333] dark:text-[#99C7A2] block mb-0.5">
                  🔊 Web Speech Synthesis
                </span>
                Integrated text-to-speech engine using native Indic voice synthesis for authentic Sanskrit/Hindi pronunciation.
              </div>
            </div>
          </div>

          {/* Submission Info */}
          <div className="pt-2.5 border-t border-[#D8C7A3] dark:border-[#3E3123] flex items-center justify-between text-xs text-[#7D6B56]">
            <span>Author: Aujasya (Rishihood University)</span>
            <span className="text-[#1F5333] dark:text-[#99C7A2] font-semibold">Track: 3. Dictionary App</span>
          </div>

        </div>

      </div>
    </div>
  );
}

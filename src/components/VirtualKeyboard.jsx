import React, { useState } from 'react';
import { Delete, Space, X } from 'lucide-react';

const SWARS = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः"];
const MATRAS = ["ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "ं", "ः", "्", "ँ"];
const VYANJANS = [
  "क", "ख", "ग", "घ", "ङ",
  "च", "छ", "ज", "झ", "ञ",
  "ट", "ठ", "ड", "ढ", "ण",
  "त", "थ", "द", "ध", "न",
  "प", "फ", "ब", "भ", "म",
  "य", "र", "ल", "व",
  "श", "ष", "स", "ह",
  "क्ष", "त्र", "ज्ञ", "श्र", "ॐ"
];

export default function VirtualKeyboard({ onInsertChar, onBackspace, onClose }) {
  const [activeTab, setActiveTab] = useState('vyanjan');

  return (
    <div className="mt-3 p-4 bg-stone-50 dark:bg-[#121c15] rounded-xl border border-stone-300 dark:border-stone-800 shadow-sm transition-all">
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-stone-200 dark:border-stone-800 text-xs">
        <div className="flex gap-1.5 font-medium">
          <button
            onClick={() => setActiveTab('vyanjan')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'vyanjan'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/70 dark:hover:bg-stone-800'
            }`}
          >
            व्यंजन (Consonants)
          </button>
          <button
            onClick={() => setActiveTab('matra')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'matra'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/70 dark:hover:bg-stone-800'
            }`}
          >
            मात्राएं (Vowel Signs)
          </button>
          <button
            onClick={() => setActiveTab('swar')}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === 'swar'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200/70 dark:hover:bg-stone-800'
            }`}
          >
            स्वर (Vowels)
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800"
          title="Close keyboard"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Keys Grid */}
      <div className="flex flex-wrap gap-1.5 justify-center max-h-48 overflow-y-auto p-1">
        {activeTab === 'vyanjan' && VYANJANS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-700 shadow-2xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-600 active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}

        {activeTab === 'matra' && MATRAS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-lg sm:text-xl font-devanagari font-bold rounded bg-white dark:bg-stone-900 text-emerald-800 dark:text-emerald-300 border border-stone-200 dark:border-stone-700 shadow-2xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-600 active:scale-95 transition-all flex items-center justify-center"
          >
            क{char}
          </button>
        ))}

        {activeTab === 'swar' && SWARS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-700 shadow-2xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-600 active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-center gap-2 mt-3 pt-2.5 border-t border-stone-200 dark:border-stone-800">
        <button
          onClick={() => onInsertChar(" ")}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:bg-stone-100"
        >
          <Space className="w-3.5 h-3.5" /> Space (स्थान)
        </button>
        <button
          onClick={onBackspace}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-all"
        >
          <Delete className="w-3.5 h-3.5" /> Backspace (मिटाएं)
        </button>
      </div>
    </div>
  );
}

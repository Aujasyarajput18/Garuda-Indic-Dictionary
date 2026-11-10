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
    <div className="mt-3 p-3.5 bg-amber-50/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-amber-200 dark:border-slate-800 shadow-xl transition-all animate-fadeIn">
      <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-amber-200/60 dark:border-slate-800 text-xs">
        <div className="flex gap-1.5 font-medium">
          <button
            onClick={() => setActiveTab('vyanjan')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'vyanjan'
                ? 'bg-orange-600 text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-slate-800'
            }`}
          >
            व्यंजन (Consonants)
          </button>
          <button
            onClick={() => setActiveTab('matra')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'matra'
                ? 'bg-orange-600 text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-slate-800'
            }`}
          >
            मात्राएं (Vowel Signs)
          </button>
          <button
            onClick={() => setActiveTab('swar')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'swar'
                ? 'bg-orange-600 text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-slate-800'
            }`}
          >
            स्वर (Vowels)
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-amber-200/50 dark:hover:bg-slate-800"
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
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-amber-100 border border-amber-200/80 dark:border-slate-700 shadow-sm hover:bg-orange-50 dark:hover:bg-orange-950/40 hover:border-orange-400 active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}

        {activeTab === 'matra' && MATRAS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-lg sm:text-xl font-devanagari font-bold rounded-lg bg-white dark:bg-slate-800 text-orange-700 dark:text-orange-300 border border-amber-200/80 dark:border-slate-700 shadow-sm hover:bg-orange-50 dark:hover:bg-orange-950/40 hover:border-orange-400 active:scale-95 transition-all flex items-center justify-center"
          >
            क{char}
          </button>
        ))}

        {activeTab === 'swar' && SWARS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-amber-100 border border-amber-200/80 dark:border-slate-700 shadow-sm hover:bg-orange-50 dark:hover:bg-orange-950/40 hover:border-orange-400 active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-center gap-2 mt-2.5 pt-2 border-t border-amber-200/60 dark:border-slate-800">
        <button
          onClick={() => onInsertChar(" ")}
          className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-amber-200 dark:border-slate-700 shadow-sm hover:bg-amber-50"
        >
          <Space className="w-3.5 h-3.5" /> Space (स्थान)
        </button>
        <button
          onClick={onBackspace}
          className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 border border-amber-200 dark:border-slate-700 shadow-sm hover:bg-red-50 dark:hover:bg-red-950/30"
        >
          <Delete className="w-3.5 h-3.5" /> Backspace (मिटाएं)
        </button>
      </div>
    </div>
  );
}

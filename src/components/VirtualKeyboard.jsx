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
    <div className="mt-3 p-3.5 bg-[#FAF6ED] rounded-lg border border-[#CEBC95] shadow-xs transition-all">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8C7A3] text-xs">
        <div className="flex gap-1.5 font-medium">
          <button
            onClick={() => setActiveTab('vyanjan')}
            className={`px-3 py-1 rounded transition-all font-devanagari ${
              activeTab === 'vyanjan'
                ? 'bg-[#1F5333] text-white font-semibold'
                : 'text-[#524332] hover:bg-[#EBDDC7]/60'
            }`}
          >
            व्यंजन (Consonants)
          </button>
          <button
            onClick={() => setActiveTab('matra')}
            className={`px-3 py-1 rounded transition-all font-devanagari ${
              activeTab === 'matra'
                ? 'bg-[#1F5333] text-white font-semibold'
                : 'text-[#524332] hover:bg-[#EBDDC7]/60'
            }`}
          >
            मात्राएं (Vowel Signs)
          </button>
          <button
            onClick={() => setActiveTab('swar')}
            className={`px-3 py-1 rounded transition-all font-devanagari ${
              activeTab === 'swar'
                ? 'bg-[#1F5333] text-white font-semibold'
                : 'text-[#524332] hover:bg-[#EBDDC7]/60'
            }`}
          >
            स्वर (Vowels)
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded text-[#7D6B56] hover:text-[#1A140E] hover:bg-[#EBDDC7]"
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
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded bg-[#FCF8F0] text-[#1A140E] border border-[#CEBC95] shadow-2xs hover:bg-[#EBDDC7] hover:border-[#1F5333] active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}

        {activeTab === 'matra' && MATRAS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-lg sm:text-xl font-devanagari font-bold rounded bg-[#FCF8F0] text-[#8B331B] border border-[#CEBC95] shadow-2xs hover:bg-[#EBDDC7] hover:border-[#8B331B] active:scale-95 transition-all flex items-center justify-center"
          >
            क{char}
          </button>
        ))}

        {activeTab === 'swar' && SWARS.map((char) => (
          <button
            key={char}
            onClick={() => onInsertChar(char)}
            className="w-8 h-9 sm:w-9 sm:h-10 text-base sm:text-lg font-devanagari font-bold rounded bg-[#FCF8F0] text-[#1A140E] border border-[#CEBC95] shadow-2xs hover:bg-[#EBDDC7] hover:border-[#1F5333] active:scale-95 transition-all flex items-center justify-center"
          >
            {char}
          </button>
        ))}
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-center gap-2 mt-2.5 pt-2 border-t border-[#D8C7A3]">
        <button
          onClick={() => onInsertChar(" ")}
          className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded bg-[#FCF8F0] text-[#342A1F] border border-[#CEBC95] hover:bg-[#EBDDC7]"
        >
          <Space className="w-3.5 h-3.5" /> Space (स्थान)
        </button>
        <button
          onClick={onBackspace}
          className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded bg-[#FCF8F0] text-[#8B331B] border border-[#CEBC95] hover:bg-[#F5DDD5] transition-all"
        >
          <Delete className="w-3.5 h-3.5" /> Backspace (मिटाएं)
        </button>
      </div>
    </div>
  );
}

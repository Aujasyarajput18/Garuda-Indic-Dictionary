import React from 'react';
import { CATEGORIES } from '../data/dictionaryData';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3 py-1.5 rounded text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
              isSelected
                ? 'bg-[#1F5333] text-[#FAF6ED] border-[#0E2E1A] shadow-xs font-semibold'
                : 'bg-[#FAF6ED] text-[#342A1F] border-[#CEBC95] hover:bg-[#EBDDC7] hover:border-[#1F5333]'
            }`}
          >
            <span className="font-devanagari mr-1">{cat.labelHindi}</span>
            <span className="text-[11px] opacity-75 hidden sm:inline">({cat.labelEnglish})</span>
          </button>
        );
      })}
    </div>
  );
}

import React from 'react';
import { CATEGORIES } from '../data/dictionaryData';

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
              isSelected
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-md shadow-orange-600/20 font-semibold'
                : 'bg-white/80 dark:bg-slate-850/80 text-slate-700 dark:text-slate-300 border-amber-200/80 dark:border-slate-800 hover:bg-orange-50 dark:hover:bg-slate-800 hover:border-orange-300'
            }`}
          >
            <span className="font-devanagari mr-1.5">{cat.labelHindi}</span>
            <span className="text-[11px] opacity-80 hidden sm:inline">({cat.labelEnglish})</span>
          </button>
        );
      })}
    </div>
  );
}

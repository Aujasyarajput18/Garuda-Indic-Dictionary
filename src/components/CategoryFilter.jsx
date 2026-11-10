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
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
              isSelected
                ? 'bg-emerald-900 dark:bg-emerald-800 text-white border-emerald-950 dark:border-emerald-700 shadow-xs font-semibold'
                : 'bg-white dark:bg-[#121c15] text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:bg-emerald-50/70 hover:border-emerald-600 hover:text-emerald-950 dark:hover:bg-stone-800'
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

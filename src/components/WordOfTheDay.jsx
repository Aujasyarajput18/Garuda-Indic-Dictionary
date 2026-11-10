import React from 'react';
import { Calendar, ArrowRight, Feather } from 'lucide-react';

export default function WordOfTheDay({ entry, onSelectWord }) {
  if (!entry) return null;

  const today = new Date().toLocaleDateString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#F6FAF6] dark:bg-[#121c15] border border-emerald-900/20 dark:border-emerald-800/50 p-6 sm:p-7 shadow-2xs transition-all mb-8">
      
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-emerald-900/10 dark:border-stone-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-400">
          <Feather className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
          <span>आज का शब्द • Word of the Day</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl sm:text-4xl font-bold font-devanagari text-stone-900 dark:text-stone-100">
              {entry.devanagari}
            </h3>
            <span className="text-xl font-display font-semibold italic text-emerald-800 dark:text-emerald-400">
              {entry.iast}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-300 font-devanagari font-medium border border-emerald-200">
              {entry.category}
            </span>
          </div>

          <p className="mt-2 text-sm sm:text-base font-devanagari text-stone-800 dark:text-stone-200 line-clamp-2 max-w-2xl leading-relaxed">
            {entry.meanings.hindi}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-400 italic line-clamp-1 max-w-2xl">
            "{entry.meanings.english}"
          </p>
        </div>

        <button
          onClick={() => onSelectWord(entry)}
          className="self-start sm:self-center shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 font-semibold text-xs sm:text-sm shadow-xs transition-all"
        >
          <span>विस्तृत विवरण</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { Sparkles, Calendar, ArrowRight, Volume2 } from 'lucide-react';

export default function WordOfTheDay({ entry, onSelectWord }) {
  if (!entry) return null;

  const today = new Date().toLocaleDateString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-600/5 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900 border-2 border-amber-300/80 dark:border-amber-900/60 p-6 sm:p-7 shadow-lg transition-all mb-8">
      
      {/* Decorative Indic motif */}
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-orange-400/10 dark:bg-orange-500/5 blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-amber-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-400">
          <Sparkles className="w-4 h-4 text-orange-600" />
          <span>आज का शब्द • Word of the Day</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-devanagari text-slate-900 dark:text-amber-100">
              {entry.devanagari}
            </h3>
            <span className="text-xl font-display font-semibold italic text-orange-700 dark:text-orange-400">
              {entry.iast}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 font-devanagari">
              {entry.category}
            </span>
          </div>

          <p className="mt-2 text-sm sm:text-base font-devanagari text-slate-700 dark:text-slate-300 line-clamp-2 max-w-2xl leading-relaxed">
            {entry.meanings.hindi}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic line-clamp-1 max-w-2xl">
            "{entry.meanings.english}"
          </p>
        </div>

        <button
          onClick={() => onSelectWord(entry)}
          className="self-start sm:self-center shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-orange-600/20 hover:from-orange-700 hover:to-amber-700 active:scale-95 transition-all"
        >
          <span>विस्तृत विवरण</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

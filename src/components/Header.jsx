import React from 'react';
import { Bookmark, Moon, Sun, BookOpen, Feather } from 'lucide-react';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  bookmarksCount, 
  onOpenBookmarks, 
  onOpenAbout 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0d140f]/95 backdrop-blur-sm border-b border-stone-200/90 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Editorial Publisher Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-900 dark:bg-emerald-800 flex items-center justify-center text-stone-100 shadow-sm border border-emerald-950/20">
            <span className="font-sanskrit text-xl font-bold leading-none">ग</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-sanskrit text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                गरुड़ शब्दकोश
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80">
                Indic Lexicon
              </span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
              Garuda Prakashan × Rishihood • <span className="font-devanagari italic text-emerald-800 dark:text-emerald-400">धारणाद्धर्ममित्याहुः</span>
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          
          {/* Vision / Editorial Context Button */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-850 border border-stone-300/80 dark:border-stone-700 transition-all"
            title="About the Indic Lexicon Project"
          >
            <Feather className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span className="hidden sm:inline">दर्शन व उद्देश्य</span>
            <span className="sm:hidden">Vision</span>
          </button>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-100 transition-all"
            title="Saved Words"
          >
            <Bookmark className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 fill-emerald-700/20" />
            <span>संग्रह</span>
            {bookmarksCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold rounded bg-emerald-800 text-stone-50">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Clean Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-850 border border-stone-300/80 dark:border-stone-700 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

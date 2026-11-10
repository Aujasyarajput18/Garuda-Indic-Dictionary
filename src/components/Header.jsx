import React from 'react';
import { Bookmark, Moon, Sun, BookOpen, Sparkles, Feather } from 'lucide-react';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  bookmarksCount, 
  onOpenBookmarks, 
  onOpenAbout 
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#FFFDF9]/90 dark:bg-[#0c0f17]/90 border-b border-amber-200/50 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand & Crest */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <span className="font-sanskrit text-2xl font-bold">ग</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-sanskrit text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-amber-100">
                गरुड़ शब्दकोश
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                Indic Lexicon
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Garuda Prakashan × Rishihood • <span className="font-devanagari italic text-orange-700 dark:text-orange-400">धारणाद्धर्ममित्याहुः</span>
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* About / Vision Button */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all"
            title="About the Indic Lexicon Project"
          >
            <Feather className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span className="hidden md:inline">दर्शन व उद्देश्य</span>
            <span className="md:hidden">Vision</span>
          </button>

          {/* Bookmarks Pill */}
          <button
            onClick={onOpenBookmarks}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-all"
            title="Saved Words"
          >
            <Bookmark className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 fill-orange-500/20" />
            <span>संग्रह</span>
            {bookmarksCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-orange-600 text-white">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

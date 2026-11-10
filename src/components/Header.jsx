import React from 'react';
import { Bookmark, Moon, Sun } from 'lucide-react';
import { PeacockFeather, LotusFlower, AncientGrantha } from './Doodles';

export default function Header({ 
  darkMode, 
  setDarkMode, 
  bookmarksCount, 
  onOpenBookmarks, 
  onOpenAbout 
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EB]/95 dark:bg-[#16120E]/95 backdrop-blur-sm border-b border-[#D8C7A3] dark:border-[#3E3123] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Classical Nalanda Manuscript Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-9 h-9 rounded-md bg-[#1F5333] dark:bg-[#174228] flex items-center justify-center text-[#FAF6ED] shadow-xs border border-[#0E2E1A]">
              <span className="font-sanskrit text-xl font-bold leading-none">ग</span>
            </div>
            {/* Subtle small lotus accent */}
            <div className="absolute -top-2 -right-2 hidden sm:block">
              <LotusFlower className="w-4 h-4 opacity-75" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-sanskrit text-lg sm:text-xl font-bold tracking-tight text-[#2A2118] dark:text-[#EBDDC7]">
                गरुड़ शब्दकोश
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#EBDDC7] dark:bg-[#2A2118] text-[#1F5333] dark:text-[#99C7A2] border border-[#CEBC95] dark:border-[#524332]">
                नालन्दा वाङ्मय
              </span>
            </div>
            <p className="text-[11px] text-[#524332] dark:text-[#A8987E] font-medium font-devanagari">
              Garuda Prakashan × Rishihood • <span className="italic text-[#1F5333] dark:text-[#99C7A2]">धारणाद्धर्ममित्याहुः</span>
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          
          {/* Vision / Editorial Context Button */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#342A1F] dark:text-[#EBDDC7] hover:bg-[#EBDDC7]/60 dark:hover:bg-[#251E17] border border-[#CEBC95] dark:border-[#524332] transition-all"
            title="About the Indic Lexicon Project"
          >
            <AncientGrantha className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline">दर्शन व ग्रन्थ</span>
            <span className="sm:hidden">Vision</span>
          </button>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#EBDDC7]/50 dark:bg-[#251E17] text-[#1F5333] dark:text-[#99C7A2] border border-[#CEBC95] dark:border-[#524332] hover:bg-[#EBDDC7] transition-all"
            title="Saved Words"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#1F5333] dark:text-[#99C7A2] fill-[#1F5333]/20" />
            <span className="font-devanagari">संग्रह</span>
            {bookmarksCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold rounded bg-[#1F5333] text-[#FAF6ED]">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-md text-[#342A1F] dark:text-[#EBDDC7] hover:bg-[#EBDDC7]/60 dark:hover:bg-[#251E17] border border-[#CEBC95] dark:border-[#524332] transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-[#B8860B]" />
            ) : (
              <Moon className="w-4 h-4 text-[#342A1F]" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

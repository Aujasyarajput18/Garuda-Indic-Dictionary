import React from 'react';
import { Bookmark } from 'lucide-react';
import { LotusFlower, AncientGrantha } from './Doodles';

export default function Header({ 
  bookmarksCount, 
  onOpenBookmarks, 
  onOpenAbout 
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EB]/95 backdrop-blur-sm border-b border-[#D8C7A3] shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        
        {/* Classical Nalanda Manuscript Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-9 h-9 rounded-md bg-[#1F5333] flex items-center justify-center text-[#FAF6ED] shadow-xs border border-[#0E2E1A]">
              <span className="font-sanskrit text-xl font-bold leading-none">ग</span>
            </div>
            {/* Lotus accent */}
            <div className="absolute -top-1.5 -right-2 hidden sm:block">
              <LotusFlower className="w-4 h-4 opacity-85" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-sanskrit text-lg sm:text-xl font-bold tracking-tight text-[#2A2118]">
                गरुड़ शब्दकोश
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#EBDDC7] text-[#1F5333] border border-[#CEBC95]">
                भारत की ज्ञान-परंपरा
              </span>
            </div>
            <p className="text-[11px] text-[#524332] font-medium font-devanagari">
              Garuda Prakashan × Rishihood • <span className="italic text-[#1F5333]">धारणाद्धर्ममित्याहुः</span>
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          
          {/* Vision / Editorial Context Button */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#342A1F] hover:bg-[#EBDDC7] border border-[#CEBC95] transition-all font-devanagari"
            title="About the Indic Lexicon Project"
          >
            <AncientGrantha className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline">दर्शन व वाङ्मय</span>
            <span className="sm:hidden">Vision</span>
          </button>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#EBDDC7]/60 text-[#1F5333] border border-[#CEBC95] hover:bg-[#EBDDC7] transition-all font-devanagari"
            title="Saved Words"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#1F5333] fill-[#1F5333]/20" />
            <span>संग्रह</span>
            {bookmarksCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold rounded bg-[#1F5333] text-[#FAF6ED]">
                {bookmarksCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
